/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* 
	Machine Apparatus
*/
var status = 0;

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
			cm.sendSimple("Think you can rock?\r\n\r\nWould you like to follow the path of a #bGuitarist#k?\r\n#b#L1#Yes.#k#l\r\n\#r#L2#Im not ready yet.#k#l");
		} else if (status == 1) {
			if (selection == 1) {
				cm.warp(23, 0);
                                cm.removeAll(4001059);
                                cm.sendOk("Welcome to the #bGuitarist's test#k, find you'r way to the end of this challenge");
				cm.dispose();
			} else if (selection == 2) {
				cm.sendOk("Come back when you are ready.");
				cm.dispose();
			}
		}
	}
}