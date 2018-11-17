/****
 * Created by :
 * Admin Shawn
 ****/

var status;
var choice;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("#e#k Please gather the right amount of items for my research.");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext ("#e#k Hello #h #, and welcome. I am the Omega. I have a vast knowledge of the items in HiddenMS, but I still crave more knowledge. Perhaps you could help me on my quest for learning?\r\n\r\nYou can?!?! Great!!!\r\n\r\n Bring me 50 of these any of these items so that I may examine and study them. If you bring me enough, I will reward you for your hard work. Good luck!");
    } else if (status == 1) {
        var text = "#e#k What region have you trained in?#b";
        var options = new Array("Aqua Road Region = 1 #v4001010#", "Ariant Region = 1 #v4001011#", "El Nath Region = 1 #v4001013#", "Ludas Lake Region = 1 #v4001012#", "Minar Forest Region = 1 #v4001009#", "Victoria Island Region = 5 #v4001126#", "World Tour = 5 #v4001129#", "Ores/Crystals = 1 #v4001014#");
        for (var i = 0; i < options.length; i++)
            text += "\r\n#L"+i+"#"+options[i]+"#l";
        cm.sendSimple(text);
    } else if (status == 2) {
		choice = selection;
            var text = "#e#k You will need 50 of each item. Have you trained hard enough?.#b";
            var options;
            if (choice == 0)
                options = new Array("#v4000088#", "#v4000179#", "#v4000180#", "#v4000181#", "#v4000182#", "#v4000183#", "#v4000184#", "#v4000185#", "#v4000153#", "#v4000154#", "#v4000155#", "#v4000156#", "#v4000157#", "#v4000158#", "#v4000159#", "#v4000160#", "#v4000161#", "#v4000162#", "#v4000163#", "#v4000164#", "#v4000165#", "#v4000166#", "#v4000167#");
            else if (choice == 1)
                options = new Array("#v4000324#", "#v4000325#", "#v4000326#", "#v4000327#", "#v4000328#", "#v4000329#", "#v4000330#", "#v4000331#", "#v4000332#", "#v4000333#", "#v4000334#", "#v4000335#", "#v4000352#");
            else if (choice == 2)
                options = new Array("#v4000053#", "#v4000054#", "#v4000059#", "#v4000060#", "#v4000061#", "#v4000069#", "#v4000070#", "#v4000071#", "#v4000072#", "#v4000073#", "#v4000074#", "#v4000083#", "#v4000084#", "#v4000085#", "#v4000086#", "#v4000079#", "#v4000080#");
            else if (choice == 3)
                options = new Array("#v4000095#", "#v4000097#", "#v4000101#", "#v4000103#", "#v4000104#", "#v4000105#", "#v4000107#", "#v4000108#", "#v4000109#", "#v4000110#", "#v4000111#", "#v4000114#", "#v4000115#", "#v4000117#", "#v4000118#", "#v4000120#", "#v4000122#", "#v4000127#", "#v4000128#", "#v4000130#", "#v4000132#", "#v4000134#", "#v4000135#", "#v4000143#", "#v4000144#", "#v4000145#", "#v4000148#", "#v4000150#", "#v4000151#", "#v4000152#");
            else if (choice == 4)
                options = new Array("#v4000232#", "#v4000233#", "#v4000234#", "#v4000235#", "#v4000236#", "#v4000237#", "#v4000238#", "#v4000239#", "#v4000240#", "#v4000241#", "#v4000242#", "#v4000243#", "#v4000244#", "#v4000245#", "#v4000262#", "#v4000263#", "#v4000264#", "#v4000265#", "#v4000266#", "#v4000267#", "#v4000268#", "#v4000269#", "#v4000270#", "#v4000271#", "#v4000272#", "#v4000273#");
			else if (choice == 5)
                options = new Array("#v4000000#", "#v4000001#", "#v4000003#", "#v4000004#", "#v4000005#", "#v4000006#", "#v4000007#", "#v4000008#", "#v4000009#", "#v4000012#", "#v4000013#", "#v4000014#", "#v4000015#", "#v4000016#", "#v4000018#", "#v4000019#", "#v4000020#", "#v4000021#", "#v4000022#", "#v4000024#", "#v4000028#", "#v4000029#", "#v4000032#", "#v4000033#", "#v4000034#", "#v4000036#", "#v4000037#", "#v4000039#", "#v4000042#", "#v4000046#");
			else if (choice == 6)
                options = new Array("#v4000064#", "#v4000065#", "#v4000066#", "#v4000077#", "#v4000089#", "#v4000090#", "#v4000091#", "#v4000092#", "#v4000093#", "#v4000136#", "#v4000043#", "#v4000044#", "#v4000045#", "#v4000137#", "#v4000366#", "#v4000367#", "#v4000368#", "#v4000369#", "#v4000370#", "#v4000371#", "#v4000372#", "#v4000373#", "#v4000374#", "#v4000375#", "#v4000376#", "#v4000379#", "#v4000380#", "#v4000382#", "#v4000383#");
			else if (choice == 7)
                options = new Array("#v4010000#", "#v4010001#", "#v4010002#", "#v4010003#", "#v4010004#", "#v4010005#", "#v4010006#", "#v4010007#", "#v4020000#", "#v4020001#", "#v4020002#", "#v4020003#", "#v4020004#", "#v4020005#", "#v4020006#", "#v4020007#", "#v4020008#", "#v4004000#", "#v4004001#", "#v4004002#", "#v4004003#", "#v4004004#", "#v4005000#", "#v4005001#", "#v4005002#", "#v4005003#", "#v4005004#");
            for (var i = 0; i < options.length; i++)
                text += "\r\n#L"+i+"#"+options[i]+"#l";
            cm.sendSimple(text);
     } else if (status == 3) {
        if (choice == 0) {
            switch (selection) {
                case 0:
                    if (cm.haveItem(4000088, 50)) { 
                        cm.gainItem(4000088, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.haveItem(4000179, 50)) { 
                        cm.gainItem(4000179, -50);
                        cm.gainItem(4001010, 1);	
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.haveItem(4000180, 50)) { 
                        cm.gainItem(4000180, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 3:
                    if (cm.haveItem(4000181, 50)) { 
                        cm.gainItem(4000181, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 4:
                    if (cm.haveItem(4000182, 50)) { 
                        cm.gainItem(4000182, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 5:
                    if (cm.haveItem(4000183, 50)) { 
                        cm.gainItem(4000183, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 6:
                    if (cm.haveItem(4000184, 50)) { 
                        cm.gainItem(4000184, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 7:
                    if (cm.haveItem(4000185, 50)) { 
                        cm.gainItem(4000185, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 8:
                    if (cm.haveItem(4000153, 50)) { 
                        cm.gainItem(4000153, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 9:
                    if (cm.haveItem(4000154, 50)) { 
                        cm.gainItem(4000154, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 10:
                    if (cm.haveItem(4000155, 50)) { 
                        cm.gainItem(4000155, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 11:
                    if (cm.haveItem(4000156, 50)) { 
                        cm.gainItem(4000156, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 12:
                    if (cm.haveItem(4000157, 50)) { 
                        cm.gainItem(4000157, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 13:
                    if (cm.haveItem(4000158, 50)) { 
                        cm.gainItem(4000158, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 14:
                    if (cm.haveItem(4000159, 50)) { 
                        cm.gainItem(4000159, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 15:
                    if (cm.haveItem(4000160, 50)) { 
                        cm.gainItem(4000160, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 16:
                    if (cm.haveItem(4000161, 50)) { 
                        cm.gainItem(4000161, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 17:
                    if (cm.haveItem(4000162, 50)) { 
                        cm.gainItem(4000162, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 18:
                    if (cm.haveItem(4000163, 50)) { 
                        cm.gainItem(4000163, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 19:
                    if (cm.haveItem(4000164, 50)) { 
                        cm.gainItem(4000164, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 20:
                    if (cm.haveItem(4000165, 50)) { 
                        cm.gainItem(4000165, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 21:
                    if (cm.haveItem(4000166, 50)) { 
                        cm.gainItem(4000166, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 22:
                    if (cm.haveItem(4000167, 50)) { 
                        cm.gainItem(4000167, -50);
                        cm.gainItem(4001010, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
            }
        } else if (choice == 1) {                                            // DONE
            switch (selection) {
                case 0:
                    if (cm.haveItem(4000324, 50)) { 
                        cm.gainItem(4000324, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.haveItem(4000325, 50)) { 
                        cm.gainItem(4000325, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.haveItem(4000326, 50)) { 
                        cm.gainItem(4000326, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 3:
                    if (cm.haveItem(4000327, 50)) { 
                        cm.gainItem(4000327, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 4:
                    if (cm.haveItem(4000328, 50)) { 
                        cm.gainItem(4000328, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 5:
                    if (cm.haveItem(4000329, 50)) { 
                        cm.gainItem(4000329, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 6:
                    if (cm.haveItem(4000330, 50)) { 
                        cm.gainItem(4000330, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 7:
                    if (cm.haveItem(4000331, 50)) { 
                        cm.gainItem(4000331, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 8:
                    if (cm.haveItem(4000333, 50)) { 
                        cm.gainItem(4000333, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 9:
                    if (cm.haveItem(4000333, 50)) { 
                        cm.gainItem(4000333, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 10:
                    if (cm.haveItem(4000334, 50)) { 
                        cm.gainItem(4000334, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 11:
                    if (cm.haveItem(4000335, 50)) { 
                        cm.gainItem(4000335, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 12:
                    if (cm.haveItem(4000352, 50)) { 
                        cm.gainItem(4000352, -50);
                        cm.gainItem(4001011, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
            }
        } else if (choice == 2) {                                          // DONE
            switch (selection) {
                case 0:
                    if (cm.haveItem(4000053, 50)) { 
                        cm.gainItem(4000053, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.haveItem(4000054, 50)) { 
                        cm.gainItem(4000054, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.haveItem(4000059, 50)) { 
                        cm.gainItem(4000059, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 3:
                    if (cm.haveItem(4000060, 50)) { 
                        cm.gainItem(4000060, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 4:
                    if (cm.haveItem(4000061, 50)) { 
                        cm.gainItem(4000061, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 5:
                    if (cm.haveItem(4000069, 50)) { 
                        cm.gainItem(4000069, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 6:
                    if (cm.haveItem(4000070, 50)) { 
                        cm.gainItem(4000070, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 7:
                    if (cm.haveItem(4000071, 50)) { 
                        cm.gainItem(4000071, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 8:
                    if (cm.haveItem(4000072, 50)) { 
                        cm.gainItem(4000072, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 9:
                    if (cm.haveItem(4000073, 50)) { 
                        cm.gainItem(4000073, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 10:
                    if (cm.haveItem(4000074, 50)) { 
                        cm.gainItem(4000074, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 11:
                    if (cm.haveItem(4000083, 50)) { 
                        cm.gainItem(4000083, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 12:
                    if (cm.haveItem(4000084, 50)) { 
                        cm.gainItem(4000084, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 13:
                    if (cm.haveItem(4000085, 50)) { 
                        cm.gainItem(4000085, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 14:
                    if (cm.haveItem(4000086, 50)) { 
                        cm.gainItem(4000086, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 15:
                    if (cm.haveItem(4000079, 50)) { 
                        cm.gainItem(4000079, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 16:
                    if (cm.haveItem(4000080, 50)) { 
                        cm.gainItem(4000080, -50);
                        cm.gainItem(4001013, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
            }
        } else if (choice == 3) {                                        // DONE
            switch (selection) {
                case 0:
                    if (cm.haveItem(4000095, 50)) { 
                        cm.gainItem(4000095, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.haveItem(4000097, 50)) { 
                        cm.gainItem(4000097, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.haveItem(4000101, 50)) { 
                        cm.gainItem(4000101, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 3:
                    if (cm.haveItem(4000103, 50)) { 
                        cm.gainItem(4000103, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 4:
                    if (cm.haveItem(4000104, 50)) { 
                        cm.gainItem(4000104, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 5:
                    if (cm.haveItem(4000105, 50)) { 
                        cm.gainItem(4000105, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 6:
                    if (cm.haveItem(4000107, 50)) { 
                        cm.gainItem(4000107, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 7:
                    if (cm.haveItem(4000108, 50)) { 
                        cm.gainItem(4000108, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 8:
                    if (cm.haveItem(4000109, 50)) { 
                        cm.gainItem(4000109, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 9:
                    if (cm.haveItem(4000110, 50)) { 
                        cm.gainItem(4000110, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 10:
                    if (cm.haveItem(4000111, 50)) { 
                        cm.gainItem(4000111, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 11:
                    if (cm.haveItem(4000114, 50)) { 
                        cm.gainItem(4000114, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 12:
                    if (cm.haveItem(4000115, 50)) { 
                        cm.gainItem(4000115, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 13:
                    if (cm.haveItem(4000117, 50)) { 
                        cm.gainItem(4000117, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 14:
                    if (cm.haveItem(4000118, 50)) { 
                        cm.gainItem(4000118, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 15:
                    if (cm.haveItem(4000120, 50)) { 
                        cm.gainItem(4000120, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 16:
                    if (cm.haveItem(4000122, 50)) { 
                        cm.gainItem(4000122, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 17:
                    if (cm.haveItem(4000127, 50)) { 
                        cm.gainItem(4000127, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 18:
                    if (cm.haveItem(4000128, 50)) { 
                        cm.gainItem(4000128, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 19:
                    if (cm.haveItem(4000130, 50)) { 
                        cm.gainItem(4000130, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 20:
                    if (cm.haveItem(4000132, 50)) { 
                        cm.gainItem(4000132, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 21:
                    if (cm.haveItem(4000134, 50)) { 
                        cm.gainItem(4000134, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 22:
                    if (cm.haveItem(4000135, 50)) { 
                        cm.gainItem(4000135, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 23:
                    if (cm.haveItem(4000143, 50)) { 
                        cm.gainItem(4000143, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 24:
                    if (cm.haveItem(4000144, 50)) { 
                        cm.gainItem(4000144, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 25:
                    if (cm.haveItem(4000145, 50)) { 
                        cm.gainItem(4000145, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 26:
                    if (cm.haveItem(4000148, 50)) { 
                        cm.gainItem(4000148, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 27:
                    if (cm.haveItem(4000150, 50)) { 
                        cm.gainItem(4000150, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 28:
                    if (cm.haveItem(4000151, 50)) { 
                        cm.gainItem(4000151, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 29:
                    if (cm.haveItem(4000152, 50)) { 
                        cm.gainItem(4000152, -50);
                        cm.gainItem(4001012, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
            }
			} else if (choice == 4) {
            switch (selection) {
                case 0:
                    if (cm.haveItem(4000232, 50)) { 
                        cm.gainItem(4000232, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.haveItem(4000233, 50)) { 
                        cm.gainItem(4000233, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.haveItem(4000234, 50)) { 
                        cm.gainItem(4000234, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 3:
                    if (cm.haveItem(4000235, 50)) { 
                        cm.gainItem(4000235, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 4:
                    if (cm.haveItem(4000236, 50)) { 
                        cm.gainItem(4000236, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 5:
                    if (cm.haveItem(4000237, 50)) { 
                        cm.gainItem(4000237, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 8:
                    if (cm.haveItem(4000238, 50)) { 
                        cm.gainItem(4000238, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 9:
                    if (cm.haveItem(4000239, 50)) { 
                        cm.gainItem(4000239, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 10:
                    if (cm.haveItem(4000240, 50)) { 
                        cm.gainItem(4000240, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 11:
                    if (cm.haveItem(4000241, 50)) { 
                        cm.gainItem(4000241, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 12:
                    if (cm.haveItem(4000242, 50)) { 
                        cm.gainItem(4000242, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 13:
                    if (cm.haveItem(4000243, 50)) { 
                        cm.gainItem(4000243, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 14:
                    if (cm.haveItem(4000244, 50)) { 
                        cm.gainItem(4000244, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 15:
                    if (cm.haveItem(4000245, 50)) { 
                        cm.gainItem(4000245, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 16:
                    if (cm.haveItem(4000262, 50)) { 
                        cm.gainItem(4000262, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 17:
                    if (cm.haveItem(4000263, 50)) { 
                        cm.gainItem(4000263, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 18:
                    if (cm.haveItem(4000264, 50)) { 
                        cm.gainItem(4000264, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 19:
                    if (cm.haveItem(4000265, 50)) { 
                        cm.gainItem(4000265, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 20:
                    if (cm.haveItem(4000266, 50)) { 
                        cm.gainItem(4000266, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 21:
                    if (cm.haveItem(4000267, 50)) { 
                        cm.gainItem(4000267, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 22:
                    if (cm.haveItem(4000268, 50)) { 
                        cm.gainItem(4000268, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 23:
                    if (cm.haveItem(4000269, 50)) { 
                        cm.gainItem(4000269, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 24:
                    if (cm.haveItem(4000270, 50)) { 
                        cm.gainItem(4000270, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 25:
                    if (cm.haveItem(4000271, 50)) { 
                        cm.gainItem(4000271, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 26:
                    if (cm.haveItem(4000272, 50)) { 
                        cm.gainItem(4000272, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 27:
                    if (cm.haveItem(4000273, 50)) { 
                        cm.gainItem(4000273, -50);
                        cm.gainItem(4001009, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
            }
			} else if (choice == 5) {
            switch (selection) {
                case 0:
                    if (cm.haveItem(4000000, 50)) { 
                        cm.gainItem(4000000, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.haveItem(4000001, 50)) { 
                        cm.gainItem(4000001, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.haveItem(4000003, 50)) { 
                        cm.gainItem(4000003, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 3:
                    if (cm.haveItem(4000004, 50)) { 
                        cm.gainItem(4000004, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 4:
                    if (cm.haveItem(4000005, 50)) { 
                        cm.gainItem(4000005, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 5:
                    if (cm.haveItem(4000006, 50)) { 
                        cm.gainItem(4000006, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 6:
                    if (cm.haveItem(4000007, 50)) { 
                        cm.gainItem(4000007, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 7:
                    if (cm.haveItem(4000008, 50)) { 
                        cm.gainItem(4000008, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 8:
                    if (cm.haveItem(4000009, 50)) { 
                        cm.gainItem(4000009, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 9:
                    if (cm.haveItem(4000012, 50)) { 
                        cm.gainItem(4000012, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 10:
                    if (cm.haveItem(4000013, 50)) { 
                        cm.gainItem(4000013, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 11:
                    if (cm.haveItem(4000014, 50)) { 
                        cm.gainItem(4000014, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 12:
                    if (cm.haveItem(4000015, 50)) { 
                        cm.gainItem(4000015, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 13:
                    if (cm.haveItem(4000016, 50)) { 
                        cm.gainItem(4000016, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 14:
                    if (cm.haveItem(4000018, 50)) { 
                        cm.gainItem(4000018, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 15:
                    if (cm.haveItem(4000019, 50)) { 
                        cm.gainItem(4000019, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 16:
                    if (cm.haveItem(4000020, 50)) { 
                        cm.gainItem(4000020, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 17:
                    if (cm.haveItem(4000021, 50)) { 
                        cm.gainItem(4000021, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 18:
                    if (cm.haveItem(4000022, 50)) { 
                        cm.gainItem(4000022, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 19:
                    if (cm.haveItem(4000024, 50)) { 
                        cm.gainItem(4000024, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 20:
                    if (cm.haveItem(4000028, 50)) { 
                        cm.gainItem(4000028, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 21:
                    if (cm.haveItem(4000029, 50)) { 
                        cm.gainItem(4000029, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 22:
                    if (cm.haveItem(40000032, 50)) { 
                        cm.gainItem(40000032, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 23:
                    if (cm.haveItem(4000033, 50)) { 
                        cm.gainItem(4000033, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 24:
                    if (cm.haveItem(4000034, 50)) { 
                        cm.gainItem(4000034, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 25:
                    if (cm.haveItem(4000036, 50)) { 
                        cm.gainItem(4000036, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 26:
                    if (cm.haveItem(4000037, 50)) { 
                        cm.gainItem(4000037, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 27:
                    if (cm.haveItem(4000039, 50)) { 
                        cm.gainItem(4000039, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 28:
                    if (cm.haveItem(4000042, 50)) { 
                        cm.gainItem(4000042, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 29:
                    if (cm.haveItem(4000046, 50)) { 
                        cm.gainItem(4000046, -50);
                        cm.gainItem(4001126, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
            }
			} else if (choice == 6) {
            switch (selection) {
                case 0:
                    if (cm.haveItem(4000064, 50)) { 
                        cm.gainItem(4000064, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.haveItem(4000065, 50)) { 
                        cm.gainItem(4000065, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.haveItem(4000066, 50)) { 
                        cm.gainItem(4000066, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 3:
                    if (cm.haveItem(4000077, 50)) { 
                        cm.gainItem(4000077, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 4:
                    if (cm.haveItem(4000089, 50)) { 
                        cm.gainItem(4000089, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 5:
                    if (cm.haveItem(4000090, 50)) { 
                        cm.gainItem(4000090, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 6:
                    if (cm.haveItem(4000091, 50)) { 
                        cm.gainItem(4000091, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 7:
                    if (cm.haveItem(4000092, 50)) { 
                        cm.gainItem(4000092, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 8:
                    if (cm.haveItem(4000093, 50)) { 
                        cm.gainItem(4000093, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 9:
                    if (cm.haveItem(4000136, 50)) { 
                        cm.gainItem(4000136, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 10:
                    if (cm.haveItem(4000043, 50)) { 
                        cm.gainItem(4000043, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 11:
                    if (cm.haveItem(4000044, 50)) { 
                        cm.gainItem(4000044, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 12:
                    if (cm.haveItem(4000045, 50)) { 
                        cm.gainItem(4000045, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 13:
                    if (cm.haveItem(4000137, 50)) { 
                        cm.gainItem(4000137, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 14:
                    if (cm.haveItem(4000366, 50)) { 
                        cm.gainItem(4000366, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 15:
                    if (cm.haveItem(4000367, 50)) { 
                        cm.gainItem(4000367, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 16:
                    if (cm.haveItem(4000368, 50)) { 
                        cm.gainItem(4000368, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 17:
                    if (cm.haveItem(4000369, 50)) { 
                        cm.gainItem(4000369, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 18:
                    if (cm.haveItem(4000370, 50)) { 
                        cm.gainItem(4000370, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 19:
                    if (cm.haveItem(4000371, 50)) { 
                        cm.gainItem(4000371, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 20:
                    if (cm.haveItem(4000372, 50)) { 
                        cm.gainItem(4000372, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 21:
                    if (cm.haveItem(4000373, 50)) { 
                        cm.gainItem(4000373, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 22:
                    if (cm.haveItem(4000374, 50)) { 
                        cm.gainItem(4000374, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 23:
                    if (cm.haveItem(4000375, 50)) { 
                        cm.gainItem(4000375, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 24:
                    if (cm.haveItem(4000376, 50)) { 
                        cm.gainItem(4000376, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 25:
                    if (cm.haveItem(4000379, 50)) { 
                        cm.gainItem(4000379, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 26:
                    if (cm.haveItem(4000380, 50)) { 
                        cm.gainItem(4000380, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 27:
                    if (cm.haveItem(4000382, 50)) { 
                        cm.gainItem(4000382, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 28:
                    if (cm.haveItem(4000383, 50)) { 
                        cm.gainItem(4000383, -50);
                        cm.gainItem(4001129, 5);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
            }
        } else if (choice == 7) {
            switch (selection) {
                case 0: 
                    if (cm.haveItem(4010000, 50)) { 
                        cm.gainItem(4010000, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.haveItem(4010001, 50)) { 
                        cm.gainItem(4010001, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.haveItem(4010002, 50)) { 
                        cm.gainItem(4010002, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 3:
                    if (cm.haveItem(4010003, 50)) { 
                        cm.gainItem(4010003, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 4:
                    if (cm.haveItem(4010004, 50)) { 
                        cm.gainItem(4010004, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 5:
                    if (cm.haveItem(4010005, 50)) { 
                        cm.gainItem(4010005, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 6:
                    if (cm.haveItem(4010006, 50)) { 
                        cm.gainItem(4010006, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 7:
                    if (cm.haveItem(4010007, 50)) { 
                        cm.gainItem(4010007, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 8:
                    if (cm.haveItem(4020000, 50)) { 
                        cm.gainItem(4020000, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 9:
                    if (cm.haveItem(4020001, 50)) { 
                        cm.gainItem(4020001, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 10:
                    if (cm.haveItem(4020002, 50)) { 
                        cm.gainItem(4020002, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 11:
                    if (cm.haveItem(4020003, 50)) { 
                        cm.gainItem(4020003, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 12:
                    if (cm.haveItem(4020004, 50)) { 
                        cm.gainItem(4020004, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 13:
                    if (cm.haveItem(4020005, 50)) { 
                        cm.gainItem(4020005, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
			cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 14:
                    if (cm.haveItem(4020006, 50)) { 
                        cm.gainItem(4020006, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 15:
                    if (cm.haveItem(4020007, 50)) { 
                        cm.gainItem(4020007, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 16:
                    if (cm.haveItem(4020008, 50)) { 
                        cm.gainItem(4020008, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 17:
                    if (cm.haveItem(4004000, 50)) { 
                        cm.gainItem(4004000, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 18:
                    if (cm.haveItem(4004001, 50)) { 
                        cm.gainItem(4004001, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 19:
                    if (cm.haveItem(4004002, 50)) { 
                        cm.gainItem(4004002, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 20:
                    if (cm.haveItem(4004003, 50)) { 
                        cm.gainItem(4004003, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
                case 21:
                    if (cm.haveItem(4004004, 50)) { 
                        cm.gainItem(4004004, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 22:
                    if (cm.haveItem(4005000, 50)) { 
                        cm.gainItem(4005000, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 23:
                    if (cm.haveItem(4005001, 50)) { 
                        cm.gainItem(4005001, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 24:
                    if (cm.haveItem(4005002, 50)) { 
                        cm.gainItem(4005002, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 25:
                    if (cm.haveItem(4005003, 50)) { 
                        cm.gainItem(4005003, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				case 26:
                    if (cm.haveItem(4005004, 50)) { 
                        cm.gainItem(4005004, -50);
                        cm.gainItem(4001014, 1);
			cm.sendOk("#e#k#e#kCome back anytime.")
                    } else {
                        cm.sendOk("#e#kLooks like you haven't trained as hard as you thought. Go train a little harder before speaking to me.")
                        cm.dispose();
                    }
                    break;
				}
			}
			cm.dispose();
		}
	}