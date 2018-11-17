//script by Alcandon

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendOk ("#dNewbies Guide ~~~ #k\r\n#rRemember that you need the Custom Files to play\r\nD.ChaosMS EX, Because if you dont, you might face alot of random D/C #k\r\n\r\n#b-@dchaos for All in one NPCs\r\n-Rates 2000x/1000x/5x\r\n-@commands / @help / to view all commands\r\n-Trade button warps you to the FM#k\r\n\r\nHehehehe Have fun noobs <3");
cm.dispose();
			}
			}
			}
			