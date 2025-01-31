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

/* KIN
	Male Hair for GM.
*/
var status = 0;
var beauty = 0;
var haircolor = Array();
var skin = Array(0, 1, 2, 3, 4, 5, 9, 10, 14);
var hair = Array(32160, 32170, 32180, 32220, 33450, 36110, 36120, 36130, 36140, 36150, 36160, 36170, 36180, 36200);
var hairnew = Array();
var face = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20035, 20038, 20043, 20044, 20045, 20046, 20047, 20050, 20051, 20052, 20053, 20054, 20099);
var facenew = Array();
var colors = Array();

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
			//if(cm.getChar().isGM() == false) {
			//	cm.sendOk("You aren't a GM!");
			//	cm.dispose();
			//} else {
				if(cm.getChar().getGender() == 0) {
					cm.sendSimple("Hey there! I could change the way you look! What would you like to change?\r\n#L0#Skin#l\r\n#L1#Hair#l\r\n#L2#Hair Color#l\r\n#L3#Eye#l\r\n#L4#Eye Color#l");
				}else {
					cm.sendOk("Currently I am only serving males, but you should try Julie!");
					cm.dispose();
				}
			//}
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 1;
				cm.sendStyle("Pick one?", skin);
			} else if (selection == 1) {
				beauty = 2;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair() % 10));
				}
				cm.sendStyle("Pick one?", hairnew);
			} else if (selection == 2) {
				beauty = 3;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("Pick one?", haircolor);
			} else if (selection == 3) {
				beauty = 4;
				facenew = Array();
				for(var i = 0; i < face.length; i++) {
					facenew.push(face[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
				}
				cm.sendStyle("Pick one?", facenew);
			} else if (selection == 4) {
				beauty = 5;
				var current = cm.getChar().getFace() % 100 + 20000;
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("Pick one?", colors);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				cm.setSkin(skin[selection]);
			}
			if (beauty == 2){
				cm.setHair(hairnew[selection]);
			}
			if (beauty == 3){
				cm.setHair(haircolor[selection]);
			}
			if (beauty == 4){
				cm.setFace(facenew[selection]);
			}
			if (beauty == 5){
				cm.setFace(colors[selection]);
			}
		}
	}
}
