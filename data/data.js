var aDataSet = [
['1','1','Metcalfe','Max','ALL','00:22:59.5','4/2/2014'],
['2','4','Hulin','Cedric','ALL','00:23:36.4','4/2/2014'],
['3','27','Martin','Kristin','ALL','00:33:10.6','4/2/2014'],
['4','8','Rose','Dale','ALL','00:34:02.7','4/2/2014'],
['5','11','Garcia','Kaitlyn','ALL','00:35:04.2','4/2/2014'],
['6','22','Benner','PJ','ALL','00:35:05.2','4/2/2014'],
['7','6','Hirtzel','Summer','ALL','00:37:03.5','4/2/2014'],
['1','11','Metcalfe','Julia','ALL','00:28:06.4','3/26/2014'],
['2','1','Metcalfe','Max','ALL','00:28:07.2','3/26/2014'],
['3','13','Rose','Dale','ALL','00:33:18.7','3/26/2014'],
['4','22','Martin','Kristin','ALL','00:33:19.5','3/26/2014'],
['5','27','Garcia','Kaitlyn','ALL','00:35:56.3','3/26/2014'],
['6','6','Maranon','Rafael','ALL','00:36:19.4','3/26/2014'],
['7','4','Maranon','Ada','ALL','00:36:20.4','3/26/2014'],
['1','22','Matlis','Sean','ALL','00:27:15.4','3/12/2014'],
['2','1','Metcalfe','Max','ALL','00:27:16.4','3/12/2014'],
['3','11','Metcalfe','Julia','ALL','00:35:29.5','3/12/2014'],
['4','4','Porter','Joe','ALL','00:35:31.5','3/12/2014'],
['5','24','Benner','PJ','ALL','00:35:37.6','3/12/2014'],
['6','27','Martin','Kristin','ALL','00:37:27.4','3/12/2014'],
['7','6','Doyle','Jonathan','ALL','00:39:21.8','3/12/2014'],
['8','3','Vizza','Hannah','ALL','00:44:30.3','3/12/2014'],
['9','9','Garcia','Kaitlyn','ALL','00:44:30.4','3/12/2014'],
['1','1','Metcalfe','Max','ALL','00:24:45.5','3/19/2014'],
['2','11','Metcalfe','Julia','ALL','00:24:46.9','3/19/2014'],
['3','8','Scholler','Matthieu','ALL','00:24:55.9','3/19/2014'],
['4','27','Rogers','Seth','ALL','00:25:35.5','3/19/2014'],
['5','24','Kletzing','Andrew','Denmark','00:27:00.5','3/19/2014'],
['6','13','Christopherson','James','ALL','00:31:35.6','3/19/2014'],
['7','4','Williams','Ryan','ALL','00:32:23.4','3/19/2014'],
['8','9','Garcia','Kaitlyn','ALL','00:38:22.3','3/19/2014'],
['9','22','Stearns','John','ALL','00:38:39.4','3/19/2014'],
['10','44','Stearns','Kate ','ALL','00:38:41.2','3/19/2014'],
['1','1','Metcalfe','Max','ALL','00:23:57.3','3/5/2014'],
['2','4','Scholler','Matthieu','ALL','00:23:58.3','3/5/2014'],
['3','11','Metcalfe','Julia','ALL','00:25:07.6','3/5/2014'],
['4','13','Kletzing','Andrew','Denmark','00:27:30.9','3/5/2014'],
['5','26','Maranon','Rafael','ALL','00:34:36.6','3/5/2014'],
['6','22','Rose','Dale','ALL','00:34:37.5','3/5/2014'],
['1','1','Metcalfe','Max','ALL','00:27:20.1','2/26/2014'],
['2','11','Metcalfe','Julia','ALL','00:27:22.0','2/26/2014'],
['3','6','Garcia','Kaitlyn','ALL','00:36:51.3','2/26/2014'],
['4','13','Drew','Alec','ALL','00:36:53.6','2/26/2014'],
['1','1','Metcalfe','Max','ALL','00:23:32.8','2/19/2014'],
['2','4','Scholler','Matthieu','ALL','00:23:33.9','2/19/2014'],
['3','11','Metcalfe','Julia','ALL','00:25:37.0','2/19/2014'],
['4','13','Kletzing','Andrew','Denmark','00:28:10.8','2/19/2014'],
['5','3','Drew','Alec','ALL','00:29:46.1','2/19/2014'],
['6','22','Christopherson','James','ALL','00:31:59.5','2/19/2014'],
['7','6','Garcia','Kaitlyn','ALL','00:38:28.0','2/19/2014'],
['1','4','Scholler','Matthieu','ALL','00:23:38.2','2/12/2014'],
['2','6','Kipping-Ruane','Colin','ALL','00:24:02.0','2/12/2014'],
['3','1','Metcalfe','Max','ALL','00:24:03.4','2/12/2014'],
['4','11','Metcalfe','Julia','ALL','00:25:48.4','2/12/2014'],
['5','9','Maranon','Rafael','ALL','00:33:51.3','2/12/2014'],
['6','37','Rose','Dale','ALL','00:35:22.9','2/12/2014'],
['1','1','Metcalfe','Max','ALL','00:22:57.8','2/5/2014'],
['2','4','Scholler','Matthieu','ALL','00:23:39.4','2/5/2014'],
['3','15','Hulin','Cedric','ALL','00:28:37.5','2/5/2014'],
['4','22','Kletzing','Andrew','Denmark','00:29:57.5','2/5/2014'],
['5','27','Schiefer','Paul','ALL','00:30:24.3','2/5/2014'],
['6','12','Saidi','Romtin','ALL','00:33:52.7','2/5/2014'],
['7','13','Drew','Alec','ALL','00:33:54.2','2/5/2014'],
['8','6','Christopherson','James','ALL','00:33:55.4','2/5/2014'],
['9','37','Rose','Dale','ALL','00:37:26.1','2/5/2014'],
['10','9','Garcia','Kaitlyn','ALL','00:38:56.4','2/5/2014'],
['11','8','Martin','Kristin','ALL','00:39:00.9','2/5/2014'],
['12','3','Metcalfe','Bob','ALL','00:59:20.6','2/5/2014'],
['13','11','Metcalfe','Julia','ALL','00:59:21.8','2/5/2014'],
['1','1','Metcalfe','Max','ALL','00:25:11.8','1/29/2014'],
['2','22','Morris','Josh','ALL','00:25:14.4','1/29/2014'],
['3','11','Metcalfe','Julia','ALL','00:25:15.4','1/29/2014'],
['4','12','Proutt','Henri','ALL','00:28:33.2','1/29/2014'],
['5','13','Kletzing','Andrew','Denmark','00:28:52.1','1/29/2014'],
['1','1','Metcalfe','Max','ALL','00:24:37.0','1/23/2014'],
['2','22','Mathew','Troy','ALL','00:24:40.0','1/23/2014'],
['3','11','Metcalfe','Julia','ALL','00:25:01.3','1/23/2014'],
['4','24','Morris','Josh','ALL','00:26:09.9','1/23/2014'],
['5','100','Jordan','Jeff','ALL','00:26:16.4','1/23/2014'],
['6','3','Kletzing','Andrew','ALL','00:31:01.5','1/23/2014'],
['7','25','Connelly','Joseph','ALL','00:38:01.5','1/23/2014'],
['1','99','Jordan','Mick','ALL','00:30:43.0','1/15/2014'],
['2','100','Jordan','Jeff','ALL','00:30:44.8','1/15/2014'],
['3','12','Rose','Dale','ALL','00:39:12.0','1/15/2014'],
['4','1','Metcalfe','Max','Loop-Beer','00:51:07.6','1/15/2014'],
['5','4','Scholler','Matthieu','Loop-Beer','00:51:31.4','1/15/2014'],
['6','11','Metcalfe','Julia','Loop-Beer','00:57:45.3','1/15/2014'],
['7','22','Morris','Josh','Loop-Beer','01:01:04.6','1/15/2014'],
['8','37','Corio','Larry','Loop-Beer','01:06:35.1','1/15/2014'],
['1','1','Metcalfe','Max','ALL','00:28:25.9','12/18/2013'],
['2','11','Metcalfe','Julia','ALL','00:28:28.6','12/18/2013'],
['3','4','Rose','Dale','ALL','00:34:50.1','12/18/2013'],
['1','1','Metcalfe','Max','ALL','00:23:59.4','1/8/2014'],
['2','4','Scholler','Matthieu','ALL','00:24:00.9','1/8/2014'],
['3','11','Metcalfe','Julia','ALL','00:25:35.8','1/8/2014'],
['4','12','Mathew','Troy','ALL','00:25:37.4','1/8/2014'],
['5','21','Geno','Derek','ALL','00:26:14.2','1/8/2014'],
['6','6','Jordan','Jeff','ALL','00:26:45.6','1/8/2014'],
['7','24','Morris','Josh','ALL','00:30:32.8','1/8/2014'],
['8','13','Wenzel','Drew','ALL','00:42:50.6','1/8/2014'],
['9','44','Macasaquit','Jayo','ALL','00:42:52.8','1/8/2014'],
['10','22','Walters','Anna','ALL','00:42:59.8','1/8/2014'],
['11','25','Burke','Ken','ALL','00:43:02.3','1/8/2014'],
['1','11','Metcalfe','Julia','ALL','00:30:19.7','12/25/2013'],
['2','12','Kletzing','Andrew','ALL','00:35:27.8','12/25/2013'],
['3','1','Metcalfe','Max','ALL','00:38:24.1','12/25/2013'],
['4','2','Hallifax','Jenzie','ALL','00:38:26.8','12/25/2013'],
['1','3','Morris','Josh','ALL','00:26:27.3','12/11/2013'],
['2','1','Metcalfe','Max','ALL','00:26:28.1','12/11/2013'],
['3','11','Metcalfe','Julia','ALL','00:27:59.9','12/11/2013'],
['4','13','Davenport','Mark','ALL','00:28:01.4','12/11/2013'],
['5','26','Proutt','Henri','ALL','00:29:58.1','12/11/2013'],
['6','99','Jordan','Mick','ALL','00:32:12.8','12/11/2013'],
['7','100','Hammett','Boden','ALL','00:34:03.3','12/11/2013'],
['8','2','Jordan','Jeff','ALL','00:34:08.1','12/11/2013'],
['9','9','Pratt','Austin','ALL','00:46:47.3','12/11/2013'],
['10','44','Pratt','Dillon ','ALL','00:46:49.2','12/11/2013'],
['1','1','Metcalfe','Max','ALL','00:26:37.8','12/4/2013'],
['2','22','Mathew','Troy','ALL','00:26:41.4','12/4/2013'],
['3','3','Rose','Dale','ALL','00:33:14.2','12/4/2013'],
['4','45','Proutt','Henri','ALL','00:35:31.6','12/4/2013'],
['5','26','Green','Heather','ALL','00:36:21.7','12/4/2013'],
['1','1','Schwiderski','Alan David','ALL','00:26:19.0','11/27/2013'],
['2','2','Morris','Josh','ALL','00:26:20.0','11/27/2013'],
['3','3','Rose','Dale','ALL','00:33:08.0','11/27/2013'],
['1','1','Metcalfe','Max','ALL','00:24:18.6','11/13/2013'],
['2','4','Scholler','Matthieu','ALL','00:24:21.6','11/13/2013'],
['3','21','Morris','Josh','ALL','00:27:31.6','11/13/2013'],
['4','25','Mathew','Troy','ALL','00:27:33.6','11/13/2013'],
['5','11','Metcalfe','Julia','ALL','00:27:51.4','11/13/2013'],
['6','3','Soderlund','Hayley','ALL','00:27:52.5','11/13/2013'],
['7','27','Bower','Adam','ALL','00:35:22.8','11/13/2013'],
['8','26','Rose','Dale','ALL','00:37:03.8','11/13/2013'],
['9','99','Ngo','Austin','ALL','00:37:06.1','11/13/2013'],
['1','26','Sweere','Teun','Dutch','00:23:09.5','11/06/2013'],
['2','1','Metcalfe','Max','ALL','00:24:38.6','11/06/2013'],
['3','21','Morris','Josh','ALL','00:26:29.6','11/06/2013'],
['4','11','Metcalfe','Julia','ALL','00:26:30.5','11/06/2013'],
['5','4','Scholler','Matthieu','ALL','00:26:31.0','11/06/2013'],
['6','45','Proutt','Henri','ALL','00:28:28.6','11/06/2013'],
['7','6','Meier','Renee','ALL','00:28:35.0','11/06/2013'],
['8','27','Soderlund','Hayley','ALL','00:28:37.3','11/06/2013'],
['9','3','Bower','Adam','ALL','00:29:07.1','11/06/2013'],
['10','9','Drew','Alec','ALL','00:35:08.2','11/06/2013'],
['11','97','Hammett','Boden','ALL','00:36:34.1','11/06/2013'],
['12','99','Jordan','Mick','ALL','00:36:35.1','11/06/2013'],
['13','13','Jordan','Jeff','ALL','00:36:36.3','11/06/2013'],
['14','50','Hammett','Chris','ALL','00:36:38.1','11/06/2013'],
['15','22','Green','Heather','ALL','00:40:19.6','11/06/2013'],
['16','25','Rosette','Everett','ALL','00:40:19.7','11/06/2013'],
['17','12','Garcia','Kaitlyn','ALL','00:41:57.2','11/06/2013'],
['1','1','Metcalfe','Max','ALL','00:27:29.4','10/23/2013'],
['2','12','Proutt','Henri','ALL','00:27:31.0','10/23/2013'],
['3','2','Jordan','Jeff','ALL','00:27:38.4','10/23/2013'],
['4','11','Metcalfe','Julia','ALL','00:28:03.5','10/23/2013'],
['5','4','Rojanala','Naveen','""','00:31:39.4','10/23/2013'],
['6','6','Benner','PJ','ALL','00:34:20.3','10/23/2013'],
['7','9','Fuller','Marc','ALL','00:36:50.2','10/23/2013'],
['1','1','Metcalfe','Max','ALL','00:24:27.4','10/2/2013'],
['2','21','Geno','Derek','ALL','00:24:50.1','10/2/2013'],
['3','2','Jordan','Jeff','ALL','00:25:43.4','10/2/2013'],
['4','6','Morris','Josh','ALL','00:27:33.1','10/2/2013'],
['5','11','Metcalfe','Julia','ALL','00:27:44.0','10/2/2013'],
['6','12','Proutt','Henri','ALL','00:28:41.1','10/2/2013'],
['7','24','Kostelac','Mario','ALL','00:28:57.9','10/2/2013'],
['8','26','Bojic','Marijana','ALL','00:29:00.0','10/2/2013'],
['9','22','Alvarez','Alicia','ALL','00:29:24.1','10/2/2013'],
['10','27','Rose','Dale','ALL','00:33:18.7','10/2/2013'],
['11','4','Rafuls Rosa','Maylen','ALL','00:34:27.1','10/2/2013'],
['12','9','V','Karthik','ALL','00:34:31.8','10/2/2013'],
['13','100','Green','Heather','ALL','00:35:54.9','10/2/2013'],
['14','99','Hughes','Sandy','ALL','00:55:08.9','10/2/2013'],
['15','25','Hughes','Bart','ALL','00:55:23.9','10/2/2013'],
['1','1','Metcalfe','Max','ALL','00:27:18.6','10/9/2013'],
['2','6','Morris','Josh','ALL','00:27:22.1','10/9/2013'],
['3','27','Rose','Dale','ALL','00:33:21.1','10/9/2013'],
['4','12','V','Karthik','ALL','00:35:06.6','10/9/2013'],
['5','24','Gonzales','Nic','ALL','00:35:27.5','10/9/2013'],
['6','44','Wince','Brandy','ALL','00:42:21.9','10/9/2013'],
['7','37','McLaughlin','Criona','ALL','00:42:32.6','10/9/2013'],
['8','99','Metcalfe','Bob','ALL','01:03:48.1','10/9/2013'],
['9','11','Metcalfe','Julia','ALL','01:03:51.9','10/9/2013'],
['1','1','Metcalfe','Max','ALL','00:22:51.3','10/16/2013'],
['2','24','Blick','Winston','ALL','00:22:59.9','10/16/2013'],
['3','11','Metcalfe','Julia','ALL','00:26:25.3','10/16/2013'],
['4','21','Bertolli','Evan','ALL','00:26:28.8','10/16/2013'],
['5','12','Turcotte','Jesse','ALL','00:27:29.3','10/16/2013'],
['6','2','Morris','Josh','ALL','00:27:30.8','10/16/2013'],
['7','25','Proutt','Henri','ALL','00:28:12.6','10/16/2013'],
['8','6','Peterson','Brittany','ALL','00:28:21.2','10/16/2013'],
['9','46','Alvarez','Alicia','ALL','00:28:26.9','10/16/2013'],
['10','45','Thompson','Cameron','ALL','00:28:52.9','10/16/2013'],
['11','27','Beale','Daniel','ALL','00:30:06.9','10/16/2013'],
['12','4','Rojanala','Naveen','ALL','00:34:55.3','10/16/2013'],
['13','9','Merolla','Ashley','ALL','00:35:16.2','10/16/2013'],
['14','26','Connors','Georgeanna','ALL','00:35:17.6','10/16/2013'],
['15','37','Oconnor','Erin','ALL','00:35:22.1','10/16/2013'],
['16','99','Connors','Mike','ALL','00:35:24.0','10/16/2013'],
['17','44','Machi','Courtney','ALL','00:36:08.2','10/16/2013'],
['1','1','Metcalfe','Max','ALL','00:25:34.0','1/16/2013'],
['2','3','Jordan','Jeff','ALL','00:25:47.7','1/16/2013'],
['3','8','Geno','Derek','ALL','00:27:39.7','1/16/2013'],
['4','9','Morris','Josh','ALL','00:30:58.7','1/16/2013'],
['5','7','Voss','Matt','ALL','00:31:00.1','1/16/2013'],
['6','4','Dally','Katie','ALL','00:36:23.5','1/16/2013'],
['6','2','Metcalfe','Julia','ALL','00:36:23.5','1/16/2013'],
['T8','5','Reed','Kate','ALL','00:40:55.0','1/16/2013'],
['T8','6','Christopherson','James','ALL','00:40:55.0','1/16/2013'],
['T8','10','Legrand','Mike','ALL','00:40:55.0','1/16/2013'],
['1','1','Metcalfe','Max','ALL','00:24:27.8','1/23/2013'],
['2','3','Schrock','Nick','ALL','00:29:24.5','1/23/2013'],
['3','10','Voss','Matt','ALL','00:29:32.1','1/23/2013'],
['4','9','Jordan','Jeff','ALL','00:29:36.4','1/23/2013'],
['5','2','Metcalfe','Julia','ALL','00:30:18.5','1/23/2013'],
['1','1','Metcalfe','Max','ALL','00:25:28.0','1/30/2013'],
['2','4','Jordan','Jeff','ALL','00:25:32.4','1/30/2013'],
['3','3','Schrock','Nick','ALL','00:26:33.6','1/30/2013'],
['4','2','Metcalfe','Julia','ALL','00:28:26.3','1/30/2013'],
['5','9','Voss','Matt','ALL','00:28:41.7','1/30/2013'],
['6','7','Reed','Kate','ALL','00:34:41.0','1/30/2013'],
['7','6','Christopherson','James','ALL','00:34:42.1','1/30/2013'],
['8','8','Dally','Katie','ALL','00:35:03.1','1/30/2013'],
['1','3','Zamore','Turner','ALL','00:22:14.8','2/6/2013'],
['2','1','Metcalfe','Max','ALL','00:22:15.8','2/6/2013'],
['3','2','Geno','Derek','ALL','00:25:46.4','2/6/2013'],
['4','6','Schrock','Nick','ALL','00:27:00.6','2/6/2013'],
['5','11','Metcalfe','Julia','ALL','00:28:21.7','2/6/2013'],
['6','4','Newman','Brian','ALL','00:28:35.8','2/6/2013'],
['7','13','Phelps','Damian','ALL','00:29:16.2','2/6/2013'],
['8','12','Christopherson','James','ALL','00:32:12.8','2/6/2013'],
['9','5','Reed','Kate','ALL','00:32:13.8','2/6/2013'],
['1','1','Metcalfe','Max','ALL','00:24:49.3','2/13/2013'],
['2','5','Jordan','Jeff','ALL','00:24:58.0','2/13/2013'],
['3','3','Schrock','Nick','ALL','00:26:56.1','2/13/2013'],
['4','4','Voss','Matt','ALL','00:28:24.1','2/13/2013'],
['5','11','Metcalfe','Julia','ALL','00:32:11.0','2/13/2013'],
['1','1','Metcalfe','Max','ALL','00:25:43.8','2/20/2013'],
['2','4','Jordan','Jeff','ALL','00:25:46.9','2/20/2013'],
['3','7','Schrock','Nick','ALL','00:27:47.9','2/20/2013'],
['4','19','Benner','PJ','ALL','00:34:54.5','2/20/2013'],
['5','11','Metcalfe','Julia','ALL','00:36:27.4','2/20/2013'],
['6','3','Ellison','Caitlin','ALL','00:36:57.2','2/20/2013'],
['7','2','Inglis','Kelly','ALL','00:37:03.2','2/20/2013'],
['8','6','Garcia','Kaitlyn','ALL','00:38:18.8','2/20/2013'],
['9','5','Martin','Kristin','ALL','00:38:20.0','2/20/2013'],
['1','2','Metcalfe','Max','ALL','00:26:26.8','2/27/2013'],
['2','4','Schrock','Nick','ALL','00:26:30.6','2/27/2013'],
['3','3','Gagliardi','Brian','ALL','00:27:33.1','2/27/2013'],
['4','11','Metcalfe','Julia','ALL','00:28:26.0','2/27/2013'],
['5','8','Benner','PJ','ALL','00:28:41.2','2/27/2013'],
['6','1','Voss','Matt','ALL','00:29:41.4','2/27/2013'],
['7','5','Christopherson','James','ALL','00:34:35.3','2/27/2013'],
['8','7','Martin','Kristin','ALL','00:36:16.3','2/27/2013'],
['9','6','Garcia','Kaitlyn','ALL','00:36:18.0','2/27/2013'],
['1','1','Metcalfe','Max','ALL','00:24:37.5','3/6/2013'],
['2','6','Jordan','Jeff','ALL','00:24:39.9','3/6/2013'],
['3','7','Geno','Derek','ALL','00:25:14.9','3/6/2013'],
['4','3','Schrock','Nick','ALL','00:26:07.0','3/6/2013'],
['5','10','Gagliardi','Brian','ALL','00:26:37.6','3/6/2013'],
['6','11','Metcalfe','Julia','ALL','00:27:39.8','3/6/2013'],
['7','2','Reed','Kate','ALL','00:30:36.3','3/6/2013'],
['8','5','Christopherson','James','ALL','00:30:54.7','3/6/2013'],
['9','4','Rodriguez','Alicia','ALL','00:31:57.7','3/6/2013'],
['10','8','Garcia','Kaitlyn','ALL','00:37:51.3','3/6/2013'],
['1','9','Metcalfe','Max','ALL','00:24:50.0','3/13/2013'],
['2','2','Jordan','Jeff','ALL','00:24:54.8','3/13/2013'],
['3','4','Schrock','Nick','ALL','00:25:56.4','3/13/2013'],
['4','11','Metcalfe','Julia','ALL','00:27:35.5','3/13/2013'],
['5','1','Ensor','Andy','ALL','00:27:47.6','3/13/2013'],
['6','7','Tinker','Martha ','ALL','00:31:06.4','3/13/2013'],
['7','8','Rodriguez','Alicia','ALL','00:31:21.4','3/13/2013'],
['8','6','Garcia','Kaitlyn','ALL','00:37:42.9','3/13/2013'],
['1','1','Metcalfe','Max','ALL','00:24:44.2','3/20/2013'],
['2','2','Geno','Derek','ALL','00:24:49.4','3/20/2013'],
['3','3','Schrock','Nick','ALL','00:25:58.6','3/20/2013'],
['4','11','Metcalfe','Julia','ALL','00:29:00.6','3/20/2013'],
['5','5','','Dakota','Canine','00:29:36.6','3/20/2013'],
['6','10','Benner','PJ','ALL','00:35:37.9','3/20/2013'],
['7','7','Martin','Kristin','ALL','00:39:44.0','3/20/2013'],
['8','6','Garcia','Kaitlyn','ALL','00:39:45.0','3/20/2013'],
['100','8','Jordan','Mick','ALL','00:00:00.0','3/20/2013'],
['4','9','Jordan','Jeff','ALL','00:00:00.0','3/20/2013'],
['1','1','Metcalfe','Max','ALL','00:26:01.3','3/27/2013'],
['2','4','Schrock','Nick','ALL','00:26:27.1','3/27/2013'],
['3','2','Gagliardi','Brian','ALL','00:26:45.9','3/27/2013'],
['4','11','Metcalfe','Julia','ALL','00:28:49.5','3/27/2013'],
['5','7','Tinker','Martha ','ALL','00:28:57.2','3/27/2013'],
['1','2','Louie','Sam','ALL','00:37:34.4','4/03/2013'],
['2','1','Metcalfe','Max','ALL','00:37:39.3','4/03/2013'],
['3','3','Schrock','Nick','ALL','00:37:42.6','4/03/2013'],
['4','7','Maranon','Rafael','ALL','00:40:09.1','4/03/2013'],
['5','4','Rodriguez','Alicia','ALL','00:41:22.9','4/03/2013'],
['6','100','Jordan','Mick','ALL','00:44:08.5','4/03/2013'],
['7','21','Jordan','Jeff','ALL','00:44:14.5','4/03/2013'],
['8','5','Herbert','John','ALL','00:46:11.5','4/03/2013'],
['1','1','Metcalfe','Max','ALL','00:23:36.0','4/10/2013'],
['2','4','Schrock','Nick','ALL','00:26:43.7','4/10/2013'],
['3','11','Metcalfe','Julia','ALL','00:27:07.3','4/10/2013'],
['4','6','Maranon','Rafael','ALL','00:34:45.0','4/10/2013'],
['5','7','Garcia','Kaitlyn','ALL','00:39:46.7','4/10/2013'],
['6','3','Rose','Dale','ALL','00:47:00.9','4/10/2013'],
['7','2','Barnes','Tom','ALL','00:47:08.0','4/10/2013'],
['1','1','Metcalfe','Max','ALL','00:22:54.8','4/17/2013'],
['2','4','Sohal','Maninder','ALL','00:22:56.6','4/17/2013'],
['3','2','Schrock','Nick','ALL','00:27:41.2','4/17/2013'],
['4','3','Rodriguez','Alicia','ALL','00:33:25.8','4/17/2013'],
['5','7','Maranon','Rafael','ALL','00:38:43.4','4/17/2013'],
['6','8','Escamilla','Jason','ALL','00:38:44.7','4/17/2013'],
['7','100','Jordan','Mick','ALL','00:41:10.4','4/17/2013'],
['8','6','Jordan','Jeff','ALL','00:41:13.3','4/17/2013'],
['1','1','Metcalfe','Max','ALL','00:23:19.8','4/24/2013'],
['2','3','Geno','Derek','ALL','00:23:36.5','4/24/2013'],
['3','4','Schrock','Nick','ALL','00:26:39.4','4/24/2013'],
['4','11','Metcalfe','Julia','ALL','00:29:45.9','4/24/2013'],
['5','2','Rose','Dale','ALL','00:35:01.2','4/24/2013'],
['6','6','Maranon','Rafael','ALL','00:35:19.1','4/24/2013'],
['7','8','Escamilla','Jason','ALL','00:35:20.3','4/24/2013'],
['1','1','Metcalfe','Max','ALL','00:25:02.2','5/01/2013'],
['2','7','Jordan','Jeff','ALL','00:25:04.3','5/01/2013'],
['3','2','Schrock','Nick','ALL','00:28:08.3','5/01/2013'],
['4','3','Maranon','Rafael','ALL','00:34:56.0','5/01/2013'],
['1','1','Metcalfe','Max','ALL','00:28:22.5','5/08/2013'],
['2','2','Gagliardi','Brian','ALL','00:28:25.2','5/08/2013'],
['3','8','','Locki','Canine','00:28:31.1','5/08/2013'],
['4','3','Barisone','Amelia','ALL','00:28:47.0','5/08/2013'],
['5','6','Schrock','Nick','ALL','00:29:59.8','5/08/2013'],
['6','11','Metcalfe','Julia','ALL','00:30:25.0','5/08/2013'],
['7','4','Maranon','Rafael','ALL','00:36:13.6','5/08/2013'],
['1','1','Metcalfe','Max','ALL','00:23:46.1','5/15/2013'],
['2','4','Fuentes','Chris','ALL','00:24:27.7','5/15/2013'],
['3','2','Gagliardi','Brian','ALL','00:26:43.1','5/15/2013'],
['4','11','Metcalfe','Julia','ALL','00:27:18.9','5/15/2013'],
['5','8','Schrock','Nick','ALL','00:28:27.9','5/15/2013'],
['6','7','Maranon','Rafael','ALL','00:32:22.1','5/15/2013'],
['7','6','Powell','Kim','ALL','00:35:33.4','5/15/2013'],
['8','100','Jordan','Mick','ALL','00:36:38.1','5/15/2013'],
['9','9','Jordan','Jeff','ALL','00:36:40.2','5/15/2013'],
['10','10','','Dakota','Canine','00:36:42.5','5/15/2013'],
['1','1','Metcalfe','Max','ALL','00:27:04.3','5/22/2013'],
['2','9','Gagliardi','Brian','ALL','00:27:06.0','5/22/2013'],
['3','13','','Locki','Canine','00:28:28.4','5/22/2013'],
['4','12','Barisone','Amelia','ALL','00:28:28.5','5/22/2013'],
['5','6','Proutt','Henri','ALL','00:30:21.5','5/22/2013'],
['6','4','Maranon','Rafael','ALL','00:30:31.7','5/22/2013'],
['7','8','Schrock','Nick','ALL','00:31:41.6','5/22/2013'],
['8','11','Metcalfe','Julia','ALL','00:31:43.8','5/22/2013'],
['9','3','Rose','Dale','ALL','00:37:39.9','5/22/2013'],
['10','2','Green','Heather','ALL','00:37:44.2','5/22/2013'],
['1','1','Metcalfe','Max','ALL','00:25:22.6','5/29/2013'],
['2','9','Sloane','Ollie','ALL','00:25:24.6','5/29/2013'],
['3','4','Jordan','Jeff','ALL','00:25:31.0','5/29/2013'],
['4','1000','Handeland','Kevin','ALL','00:25:59.9','5/29/2013'],
['5','2','Gagliardi','Brian','ALL','00:26:27.4','5/29/2013'],
['6','3','Schrock','Nick','ALL','00:28:39.7','5/29/2013'],
['7','11','Metcalfe','Julia','ALL','00:29:00.7','5/29/2013'],
['8','12','Rose','Dale','ALL','00:36:53.2','5/29/2013'],
['9','6','Lastovka','Maria','ALL','00:39:07.3','5/29/2013'],
['10','99','Jordan','Mick','ALL','00:41:12.1','5/29/2013'],
['11','21','Jordan','Kathy','ALL','00:41:15.1','5/29/2013'],
['12','7','Steinbrecher','Johann','ALL','00:53:35.2','5/29/2013'],
['1','22','Jordan','Jeff','ALL','00:25:05.2','6/5/2013'],
['2','1','Metcalfe','Max','ALL','00:25:06.2','6/5/2013'],
['3','8','Maranon','Rafael','ALL','00:28:03.0','6/5/2013'],
['4','11','Metcalfe','Julia','ALL','00:28:20.2','6/5/2013'],
['5','2','Proutt','Henri','ALL','00:28:35.1','6/5/2013'],
['6','12','Reed','Kate','ALL','00:30:08.7','6/5/2013'],
['7','21','Christopherson','James','ALL','00:30:48.3','6/5/2013'],
['8','99','Rose','Dale','ALL','00:35:38.9','6/5/2013'],
['9','6','Fan','Tin ','ALL','00:39:46.9','6/5/2013'],
['10','27','Green','Heather','ALL','00:39:47.7','6/5/2013'],
['11','9','Bomotti','James','ALL','00:43:29.7','6/5/2013'],
['12','4','Goodswan ','Paris','ALL','00:43:35.8','6/5/2013'],
['13','7','','Toby','Canine','00:43:35.9','6/5/2013'],
['3','3','Dobrov','Joni','ALL','00:00:00.0','6/5/2013'],
['1','1','Metcalfe','Max','ALL','00:26:16.1','6/12/2013'],
['2','2','Gagliardi','Brian','ALL','00:26:17.5','6/12/2013'],
['3','11','Metcalfe','Julia','ALL','00:28:42.4','6/12/2013'],
['4','13','Proutt','Henri','ALL','00:28:58.0','6/12/2013'],
['5','12','Maranon','Rafael','ALL','00:31:34.6','6/12/2013'],
['6','8','Escamilla','Jason','ALL','00:34:23.6','6/12/2013'],
['7','4','Schrock','Nick','ALL','00:36:06.3','6/12/2013'],
['8','6','Fratrik','Craig','ALL','00:36:08.5','6/12/2013'],
['1','1','Metcalfe','Max','ALL','00:29:05.7','6/26/2013'],
['2','6','Maranon','Rafael','ALL','00:30:52.5','6/26/2013'],
['3','2','Thomann','Dan','ALL','00:35:42.2','6/26/2013'],
['4','3','Rose','Dale','ALL','00:35:51.4','6/26/2013'],
['5','8','Escamilla','Jason','ALL','00:38:21.0','6/26/2013'],
['1','1','Metcalfe','Max','ALL','00:21:23.0','7/10/2013'],
['2','24','Fuentes','Chris','ALL','00:21:41.9','7/10/2013'],
['3','3','Jordan','Jeff','ALL','00:25:45.1','7/10/2013'],
['4','22','Sloane','Ollie','ALL','00:26:05.4','7/10/2013'],
['5','21','Schneider','Jeremy','ALL','00:26:43.9','7/10/2013'],
['6','99','Honour','Cameron','ALL','00:26:45.6','7/10/2013'],
['7','11','Metcalfe','Julia','ALL','00:26:58.1','7/10/2013'],
['8','4','Proutt','Henri','ALL','00:27:13.5','7/10/2013'],
['9','7','Voss','Matt','ALL','00:28:06.2','7/10/2013'],
['10','6','Morris','Josh','ALL','00:28:35.5','7/10/2013'],
['11','8','Schrock','Nick','ALL','00:30:17.1','7/10/2013'],
['12','27','Rose','Dale','ALL','00:36:35.2','7/10/2013'],
['1','1','Metcalfe','Max','ALL','00:22:14.8','7/17/2013'],
['2','9','Sloane','Ollie','ALL','00:24:35.1','7/17/2013'],
['3','3','Handeland','Kevin','ALL','00:25:09.8','7/17/2013'],
['4','4','Palmer','Matt','ALL','00:25:37.7','7/17/2013'],
['5','13','','Dozer','Canine','00:25:39.6','7/17/2013'],
['6','24','Fuentes','Chris','ALL','00:25:42.2','7/17/2013'],
['7','2','Gagliardi','Brian','ALL','00:25:50.0','7/17/2013'],
['8','7','Stevens','Lauren','ALL','00:26:07.9','7/17/2013'],
['9','11','Metcalfe','Julia','ALL','00:27:08.8','7/17/2013'],
['10','6','Schrock','Nick','ALL','00:29:46.7','7/17/2013'],
['11','12','Liu','John','ALL','00:30:06.9','7/17/2013'],
['12','8','Rose','Dale','ALL','00:35:58.6','7/17/2013'],
['1','1','Metcalfe','Max','ALL','00:23:49.0','7/24/2013'],
['2','4','Sloane','Ollie','ALL','00:24:10.2','7/24/2013'],
['3','100','Jordan','Jeff','ALL','00:25:45.4','7/24/2013'],
['4','2','Palmer','Matt','ALL','00:26:06.2','7/24/2013'],
['5','8','Gagliardi','Brian','ALL','00:26:17.2','7/24/2013'],
['6','22','Metcalfe','Julia','ALL','00:26:35.5','7/24/2013'],
['7','9','Mintz','Jr','ALL','00:27:28.4','7/24/2013'],
['8','11','Fukunaga','Elaine','ALL','00:29:18.3','7/24/2013'],
['9','24','Liu','John','ALL','00:29:32.8','7/24/2013'],
['10','21','Reed','Kate','ALL','00:30:45.3','7/24/2013'],
['11','27','Maranon','Rafael','ALL','00:31:35.6','7/24/2013'],
['12','99','Escamilla','Jason','ALL','00:35:04.8','7/24/2013'],
['13','6','Whiting','Chris','ALL','00:35:08.8','7/24/2013'],
['14','23','Champion','Erin','ALL','00:35:25.4','7/24/2013'],
['15','12','Sette','Veronica','ALL','00:35:26.7','7/24/2013'],
['16','3','Dally','Katie','ALL','00:35:40.2','7/24/2013'],
['17','7','Garcia','Kaitlyn','ALL','00:37:33.6','7/24/2013'],
['1','1','Metcalfe','Max','ALL','00:23:33.3','7/31/2013'],
['2','99','Palmer','Matt','ALL','00:23:50.5','7/31/2013'],
['3','2','Gagliardi','Brian','ALL','00:24:47.3','7/31/2013'],
['4','27','Butler','Cameron','ALL','00:25:18.1','7/31/2013'],
['5','4','Morris','Josh','ALL','00:26:42.1','7/31/2013'],
['6','11','Metcalfe','Julia','ALL','00:27:11.6','7/31/2013'],
['7','22','Hedelund','Henrik','Denmark','00:28:55.4','7/31/2013'],
['8','3','Arvanaghi','Sara','Denmark','00:28:58.7','7/31/2013'],
['9','9','Liu','John','ALL','00:29:17.5','7/31/2013'],
['10','7','Reed','Kate','ALL','00:30:47.1','7/31/2013'],
['11','24','Butler','Michael ','ALL','00:32:06.9','7/31/2013'],
['12','21','Christopherson','James','ALL','00:32:22.6','7/31/2013'],
['13','100','Toothman','Henry','ALL','00:32:31.7','7/31/2013'],
['14','25','Garcia','Kaitlyn','ALL','00:38:19.5','7/31/2013'],
['15','8','Hedelund','Susanne','Denmark','00:39:33.6','7/31/2013'],
['16','44','Green','Heather','ALL','00:39:40.4','7/31/2013'],
['17','6','Fan','Tin ','ALL','00:39:42.2','7/31/2013'],
['1','1','Metcalfe','Max','ALL','00:26:30.9','8/07/2013'],
['2','21','Liu','John','ALL','00:29:10.8','8/07/2013'],
['3','7','LaCroix','Nicole','ALL','00:29:44.8','8/07/2013'],
['4','99','Gross','Dan','ALL','00:29:50.8','8/07/2013'],
['5','11','Metcalfe','Julia','ALL','00:30:34.8','8/07/2013'],
['6','6','Schrock','Nick','ALL','00:30:52.1','8/07/2013'],
['7','24','Rose','Dale','ALL','00:33:44.8','8/07/2013'],
['8','9','Garcia','Kaitlyn','ALL','00:39:38.3','8/07/2013'],
['9','22','Martin','Kristin','ALL','00:39:40.7','8/07/2013'],
['1','1','Metcalfe','Max','ALL','00:25:52.9','8/14/2013'],
['2','24','Jordan','Jeff','ALL','00:26:37.6','8/14/2013'],
['3','11','Metcalfe','Julia','ALL','00:28:02.5','8/14/2013'],
['4','27','Proutt','Henri','ALL','00:29:30.3','8/14/2013'],
['5','2','Schrock','Nick','ALL','00:30:15.0','8/14/2013'],
['6','7','Benner','PJ','ALL','00:32:46.1','8/14/2013'],
['7','4','Rose','Dale','ALL','00:33:31.0','8/14/2013'],
['8','6','Fuller','Marc','ALL','00:35:06.8','8/14/2013'],
['9','99','Garcia','Kaitlyn','ALL','00:37:20.5','8/14/2013'],
['10','9','Martin','Kristin','ALL','00:37:22.0','8/14/2013'],
['11','21','Green','Heather','ALL','00:37:29.0','8/14/2013'],
['1','2','Fuentes','Chris','ALL','00:23:34.9','8/21/2013'],
['2','1','Metcalfe','Max','ALL','00:25:28.9','8/21/2013'],
['3','7','Jordan','Jeff','ALL','00:25:32.2','8/21/2013'],
['4','4','Pakkanen','Marco','ALL','00:26:56.1','8/21/2013'],
['5','11','Metcalfe','Julia','ALL','00:27:00.0','8/21/2013'],
['6','6','Schrock','Nick','ALL','00:29:52.0','8/21/2013'],
['7','3','Laks','Jordan','ALL','00:30:45.2','8/21/2013'],
['8','99','Rose','Dale','ALL','00:33:29.0','8/21/2013'],
['1','1','Fuentes','Chris','ALL','00:26:30.0','8/28/2013'],
['2','2','Metcalfe','Max','ALL','00:28:28.6','8/28/2013'],
['3','24','Morris','Josh','ALL','00:29:58.6','8/28/2013'],
['4','27','Beale','Daniel','ALL','00:30:37.5','8/28/2013'],
['5','9','Laks','Jordan','ALL','00:30:40.9','8/28/2013'],
['6','21','Rose','Dale','ALL','00:34:07.4','8/28/2013'],
['7','6','Cullen','Caycee','ALL','00:37:12.2','8/28/2013'],
['8','99','Jordan','Mick','ALL','00:37:13.3','8/28/2013'],
['9','100','Jordan','Jeff','ALL','00:37:15.4','8/28/2013'],
['1','1','Metcalfe','Max','ALL','00:29:21.6','9/04/2013'],
['2','11','Metcalfe','Julia','ALL','00:29:23.4','9/04/2013'],
['3','9','Cook','Jonathan','ALL','00:29:31.1','9/04/2013'],
['4','6','Schrock','Nick','ALL','00:30:57.8','9/04/2013'],
['5','24','Kehn','Jennifer','ALL','00:31:14.2','9/04/2013'],
['1','1','Metcalfe','Max','ALL','00:28:21.9','9/11/2013'],
['2','11','Metcalfe','Julia','ALL','00:28:42.8','9/11/2013'],
['3','24','Proutt','Henri','ALL','00:29:28.4','9/11/2013'],
['4','6','Benner','PJ','ALL','00:29:43.8','9/11/2013'],
['5','4','Schrock','Nick','ALL','00:31:16.6','9/11/2013'],
['1','1','Metcalfe','Max','ALL','00:24:45.9','9/18/2013'],
['2','11','Metcalfe','Julia','ALL','00:28:41.7','9/18/2013'],
['3','45','Proutt','Henri','ALL','00:30:12.7','9/18/2013'],
['4','22','Schrock','Nick','ALL','00:30:23.8','9/18/2013'],
['5','26','Rowe','Chelsea','ALL','00:31:56.2','9/18/2013'],
['6','27','Rose','Dale','ALL','00:33:26.6','9/18/2013'],
['7','6','Green','Heather','ALL','00:37:55.2','9/18/2013'],
['8','4','Badilla','Otto','ALL','00:38:23.3','9/18/2013'],
['9','2','Espeleta','Roxana','ALL','00:38:24.2','9/18/2013'],
['10','21','Cody','Cary','ALL','01:21:45.0','9/18/2013'],
['11','24','Marcus','Rachel','ALL','01:21:46.5','9/18/2013'],
['1','1','Metcalfe','Max','ALL','00:25:27.9','9/25/2013'],
['2','6','Geno','Derek','ALL','00:25:28.9','9/25/2013'],
['3','11','Metcalfe','Julia','ALL','00:27:09.8','9/25/2013'],
['4','45','Robinson','Liz','ALL','00:27:11.3','9/25/2013'],
['5','2','Bishop','Carly','ALL','00:30:41.8','9/25/2013'],
['6','22','Morris','Josh','ALL','00:30:43.2','9/25/2013'],
['7','99','Jordan','Mick','ALL','00:41:17.4','9/25/2013'],
['8','100','Jordan','Jeff','ALL','00:41:19.2','9/25/2013'],
['1','4','Scholler','Matthieu','ALL','00:24:05.7','11/20/2013'],
['2','1','Metcalfe','Max','ALL','00:24:14.6','11/20/2013'],
['3','2','Morris','Josh','ALL','00:26:27.5','11/20/2013'],
['4','11','Metcalfe','Julia','ALL','00:28:29.8','11/20/2013'],
['5','45','Rose','Dale','ALL','00:33:35.0','11/20/2013'],
['6','22','Hammett','Boden','ALL','00:33:36.6','11/20/2013'],
['7','99','Jordan','Mick','ALL','00:33:36.7','11/20/2013'],
['8','6','Jordan','Jeff','ALL','00:33:39.5','11/20/2013'],
['1','13','Fuentes','Chris','ALL','00:21:40.6','4/9/2014'],
['2','1','Metcalfe','Max','ALL','00:22:28.3','4/9/2014'],
['3','4','Scholler','Matthieu','ALL','00:23:49.6','4/9/2014'],
['4','44','Collins','Jack','ALL','00:23:52.8','4/9/2014'],
['5','11','Metcalfe','Julia','ALL','00:25:39.7','4/9/2014'],
['6','21','Drew','Alec','ALL','00:28:36.9','4/9/2014'],
['7','9','Burgess','Drew','ALL','00:29:07.0','4/9/2014'],
['8','15','Zubkousky','John','ALL','00:29:50.1','4/9/2014'],
['9','37','Martin','Kristin','ALL','00:32:40.6','4/9/2014'],
['10','3','Rose','Dale','ALL','00:32:56.3','4/9/2014'],
['11','27','Westbrook','Tom','ALL','00:33:00.1','4/9/2014'],
['12','26','Garcia','Kaitlyn','ALL','00:35:40.6','4/9/2014'],
['13','6','Mizerany','Blake','ALL','00:40:51.6','4/9/2014'],
['14','8','Mizerany','Alena','ALL','00:41:03.5','4/9/2014'],
['15','12','Willey','Coleen','ALL','00:47:51.0','4/9/2014'],
['16','16','Power','Shamrock','ALL','00:47:52.4','4/9/2014'],
['17','24','Russell','Darcy','ALL','00:50:53.4','4/9/2014'],
['1','3','Collins','Jack','ALL','00:24:37.1','4/16/2014'],
['2','1','Metcalfe','Max','ALL','00:25:18.9','4/16/2014'],
['3','100','Jordan','Jeff','ALL','00:26:52.0','4/16/2014'],
['4','101','""','Dakota','Canine','00:26:53.5','4/16/2014'],
['5','27','Roberts','Dan','ALL','00:27:40.0','4/16/2014'],
['6','13','Kletzing','Andrew','Denmark','00:27:43.4','4/16/2014'],
['7','15','Zubkousky','John','ALL','00:29:22.3','4/16/2014'],
['8','22','Wolfe','Laura','ALL','00:29:35.2','4/16/2014'],
['9','44','Christopherson','James','ALL','00:31:33.9','4/16/2014'],
['10','11','Metcalfe','Julia','ALL','00:32:32.9','4/16/2014'],
['11','21','Porter','Joe','ALL','00:32:40.1','4/16/2014'],
['12','8','Rose','Dale','ALL','00:33:04.8','4/16/2014'],
['13','6','Garcia','Kaitlyn','ALL','00:37:42.2','4/16/2014'],
['14','24','Vizza','Hannah','ALL','00:37:43.1','4/16/2014'],
['1','3','Collins','Jack','ALL','00:23:47.6','4/23/2014'],
['2','1','Metcalfe','Max','ALL','00:26:46.1','4/23/2014'],
['3','44','Rogers','Seth','ALL','00:26:55.3','4/23/2014'],
['4','13','Kotack','Madisson','ALL','00:27:39.0','4/23/2014'],
['5','37','Hanson','Joe','ALL','00:27:40.1','4/23/2014'],
['6','15','Zubkousky','John','ALL','00:28:23.6','4/23/2014'],
['7','8','Williams','Ryan','ALL','00:30:12.5','4/23/2014'],
['8','22','Christopherson','James','ALL','00:30:20.5','4/23/2014'],
['9','11','Metcalfe','Julia','ALL','00:31:22.8','4/23/2014'],
['10','21','Porter','Joe','ALL','00:31:28.3','4/23/2014'],
['11','27','Rose','Dale','ALL','00:32:35.4','4/23/2014'],
['12','26','Martin','Kristin','ALL','00:32:36.4','4/23/2014'],
['13','4','Benner','PJ','ALL','00:34:22.3','4/23/2014'],
['14','6','Garcia','Kaitlyn','ALL','00:36:21.4','4/23/2014'],
['15','12','Vizza','Hannah','ALL','00:36:22.7','4/23/2014'],
['1','44','Collins','Jack','ALL','00:22:09.2','4/30/2014'],
['2','27','Scholler','Matthieu','ALL','00:24:30.7','4/30/2014'],
['3','13','Kletzing','Andrew','Denmark','00:27:40.5','4/30/2014'],
['4','11','Metcalfe','Julia','ALL','00:28:32.5','4/30/2014'],
['5','1','Metcalfe','Max','ALL','00:28:42.5','4/30/2014'],
['6','15','Zubkousky','John','ALL','00:28:48.2','4/30/2014'],
['7','3','Drew','Alec','ALL','00:30:16.5','4/30/2014'],
['8','37','Magill','Dustin','ALL','00:30:18.4','4/30/2014'],
['9','26','Rose','Dale','ALL','00:33:45.8','4/30/2014'],
['10','22','Maranon','Rafael','ALL','00:35:17.6','4/30/2014'],
['11','12','Ashcraft','Billyray','ALL','00:35:45.0','4/30/2014'],
['12','8','Holman','Ben','ALL','00:37:27.5','4/30/2014'],
['13','21','Garcia','Kaitlyn','ALL','00:39:44.3','4/30/2014'],
['14','4','Vizza','Hannah','ALL','00:39:47.3','4/30/2014'],
['1','1','Metcalfe','Max','ALL','00:22:03.5','5/7/2014'],
['2','12','Collins','Jack','ALL','00:22:05.2','5/7/2014'],
['3','4','Scholler','Matthieu','ALL','00:23:09.9','5/7/2014'],
['4','37','Schiefer','Paul','ALL','00:28:39.9','5/7/2014'],
['5','22','Christopherson','James','ALL','00:29:57.8','5/7/2014'],
['6','15','Zubkousky','John','ALL','00:30:48.7','5/7/2014'],
['7','9','Benner','PJ','ALL','00:31:38.2','5/7/2014'],
['8','33','Martin','Kristin','ALL','00:35:27.3','5/7/2014'],
['9','26','Maranon','Rafael','ALL','00:36:29.7','5/7/2014'],
['10','44','Kletzing','Andrew','Detour','00:39:16.4','5/7/2014'],
['11','333','Metcalfe','Julia','Detour','00:39:21.6','5/7/2014'],
['12','100','Jordan','Jeff','ALL','00:40:33.2','5/7/2014'],
['13','101','Jordan','Mick','ALL','00:40:35.0','5/7/2014'],
['14','102','""','Dakota','Canine','00:40:35.4','5/7/2014'],
['15','3','Garcia','Kaitlyn','ALL','00:42:06.6','5/7/2014'],
['16','8','Vizza','Hannah','ALL','00:42:10.3','5/7/2014'],
['17','27','Stephan','Alex','ALL','00:42:12.7','5/7/2014'],
['18','24','Mchargue','Kyle','ALL','00:45:10.7','5/7/2014'],
['19','21','Johnson','Rachel','ALL','00:45:12.6','5/7/2014'],
['20','6','Mishleau','Lance','ALL','00:45:17.3','5/7/2014'],
['5','8','Collins','Jack','ALL','00:23:00.0','5/14/2014'],
['3','1','Metcalfe','Max','ALL','00:25:50.0','5/14/2014'],
['1','26','Hamilton','Derek','ALL','00:26:01.1','5/14/2014'],
['2','4','Kletzing','Andrew','Denmark','00:26:18.9','5/14/2014'],
['4','11','Metcalfe','Julia','ALL','00:26:39.7','5/14/2014'],
['6','15','Zubkousky','John','ALL','00:28:45.9','5/14/2014'],
['7','22','Wolfe','Laura','ALL','00:29:47.5','5/14/2014'],
['8','27','Magill','Dustin','ALL','00:29:55.4','5/14/2014'],
['9','3','Drew','Alec','ALL','00:29:56.7','5/14/2014'],
['10','12','Christopherson','James','ALL','00:30:27.7','5/14/2014'],
['11','9','O'Donnell','Robert','ALL','00:31:27.3','5/14/2014'],
['12','37','Benner','PJ','ALL','00:34:53.8','5/14/2014'],
['13','6','Garcia','Kaitlyn','ALL','00:37:13.0','5/14/2014'],
];