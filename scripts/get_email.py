# Taken from: http://stackoverflow.com/questions/7596789/downloading-mms-emails-sent-to-gmail-using-python

import email
import getpass
import imaplib
import os
import sys
import argparse

parser = argparse.ArgumentParser()
detach_dir = '.' # directory where to save attachments (default: current)

# To Do - make this secure :)
parser.add_argument( "-u", "--user", help="gmail username" )
parser.add_argument( "-p", "--password", help="gmail password" )
args = parser.parse_args()
user = args.user
pwd = args.password

# connecting to the gmail imap server
m = imaplib.IMAP4_SSL("imap.gmail.com")
m.login(user,pwd)
m.select("[Gmail]/All Mail") # here you a can choose a mail box like INBOX instead
#use m.list() to get all the mailboxes

resp, items = m.search(None, 'UNSEEN') # you could filter using the IMAP rules here (check http://www.example-code.com/csharp/imap-search-critera.asp)
items = items[0].split() # getting the mails id

if len(items) == 0:
    print "No result messages found."
    sys.exit(1)
else: 
    print "Result message found!"

for emailid in items:
    resp, data = m.fetch(emailid, "(RFC822)") # fetching the mail, "`(RFC822)`" means "get the whole stuff", but you can ask for headers only, etc
    email_body = data[0][1] # getting the mail content
    mail = email.message_from_string(email_body) # parsing the mail content to get a mail object

    #Check if any attachments at all
    if mail.get_content_maintype() != 'multipart':
        continue

    # we use walk to create a generator so we can iterate on the parts and forget about the recursive headach
    for part in mail.walk():
        # multipart are just containers, so we skip them
        if part.get_content_maintype() == 'multipart':
            continue

        # Hack: Save corrections from email
        if isinstance(part.get_payload(), str) and "Result Corrections" in str(part.get_payload()):
            corrections_path = os.path.join(detach_dir, "corrections.csv")
            corrections = str(part.get_payload())
            if not os.path.isfile(corrections_path) :
                fp = open(corrections_path, 'wb')
                fp.write(part.get_payload(decode=True))
                fp.close()

        # is this part an attachment ?
        if part.get('Content-Disposition') is None:
            continue

        filename = part.get_filename()
        counter = 1

        # if there is no filename, we create one with a counter to avoid duplicates
        if not filename:
            filename = 'part-%03d%s' % (counter, 'bin')
            counter += 1

        att_path = os.path.join(detach_dir, filename)

        #Check if its already there
        if not os.path.isfile(att_path) :
            # finally write the stuff
            fp = open(att_path, 'wb')
            fp.write(part.get_payload(decode=True))
            fp.close()