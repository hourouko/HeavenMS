/*
*
*    @Author: Eric
*    @Function: Shitballing
*
*/

var item1 = 4007090;
var item2 = 4007091;
var item3 = 4007092;
var item4 = 4007093;
var item5 = 4007094;
var amount = 1;
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("...");
			cm.dispose();
			return;
		}
		  status++;
		if (status == 0) {
			cm.sendNext("Good to see you again. As you can see, above us is \r\n#d#eRed Moon#n#k, this is where #rThe god of Khaos#k is.\r\n\r\nYou need to find all #b5 pieces#k of #rKhaos Mirror#k to go there.\r\n#b#v4007090##k+#b#v4007091##k+#b#v4007092##k+#b#v4007093##k+#b#v4007094##k= #b#v4007095##k");
		} else if (status == 1) {
			if (cm.haveItem(item1, amount) && cm.haveItem(item2, amount) && cm.haveItem(item3, amount) && cm.haveItem(item4, amount) && cm.haveItem(item5, amount)) {
				  cm.warp(299900800);
                                  cm.removeAll(4007090);
                                  cm.removeAll(4007091);
                                  cm.removeAll(4007092);
                                  cm.removeAll(4007093);
                                  cm.removeAll(4007094);
                                  cm.sendOk("Im glad we made it this far, we are now inside #d#eRed Moon#n#k, it look like it wasn't a moon but actualy a black hole.\r\n\r\nAnyway, I will be waiting infront of the final room. See you there.");
				  cm.dispose();
			} else {
                                cm.sendOk("From what I've seen, #r5 guardians#k are hidden in #r#eKhaos#n#k and each one have a #bpiece of mirror#k.");
                                cm.dispose();
		       }
			  cm.dispose();
		}
	}
}
