/*
    This file is part of the HiddenMS MapleStory Server
    Copyleft (L) 2018 - 2019 none

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* fame gamble
	Map Name (Map ID)
	9930000
 */

var random = Math.floor(Math.random()*2+1); 
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
   cm.sendNext("Hello #h #, I am a #rStatue#k and I randomly give fame!\r\nHowever, there is also a chance that I take fame!\r\nSo, be careful whether you click Next or not!"); 
  } 
  if (status == 1) { 
   if (random == 1) { 
    cm.sendOk("Aww, too bad, I'm taking 1 #bfame#k from you"); 
    cm.gainFame(-1); 
    cm.dispose(); 
   } else { 
    cm.sendOk("Good! I will give you 1 #bfame#k!"); 
    cm.gainFame(1); 
    cm.dispose(); 
   } 
  } 
 } 
}  