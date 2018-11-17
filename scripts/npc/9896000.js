var status = 0;
var price = 1000000000;
var fame = 1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0) {
        cm.sendYesNo("Find the disk #b#v4001059##k inside one of those boxes so you can complete this test.");
        status++;
    } else {
        if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
            cm.dispose();
        } else {
            if (status == 1) {
                if (cm.haveItem(4001059, 1)) {
                    cm.gainItem(1702298, 1);
                    cm.removeAll(4001059);
                    cm.warp(21);
	            cm.sendOk("You passed the #rSinger's test#k \r\nHeres your #rMicro#k #b#v1702298##k");
                    cm.dispose();
                } else {
                    cm.sendOk("Continue looking...");
                    cm.dispose();
                }
            }
        }
    }
}