importPackage(net.sf.odinms.client); 

var status = 0; 
var fee; 
var winner; 
var card1 = Math.floor(Math.random()*4+1); 
var card2 = Math.floor(Math.random()*4+1); 
var card3 = Math.floor(Math.random()*4+1); 
var card4 = Math.floor(Math.random()*4+1); 
var card5 = Math.floor(Math.random()*4+1); 
var card6 = Math.floor(Math.random()*4+1); 
var card7 = Math.floor(Math.random()*4+1); 
var card8 = Math.floor(Math.random()*4+1); 
var card9 = Math.floor(Math.random()*4+1); 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (mode == 0) { 
            cm.sendOk("Your loss. You could have won big money."); 
        cm.dispose(); 
        return; 
        } 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
            cm.sendNext("Hey, I'm a low level gambler, If you want to play more advanced and tougher gambling, talk to DukeGambler. Would you like to play #bSlots?#k If you win, you can triple your mesos!"); 
        } else if (status == 1) { 
            cm.sendGetText("How many mesos would you like to bet?"); 
        } else if (status == 2) { 
            fee = cm.getText(); 
            cm.sendYesNo("Are you sure you want to bet #r" + fee + "#k mesos?... "); 
        } else if (status == 3) { 
            if (cm.getMeso() < fee) { 
                cm.sendOk("You don't even have that much money... Are you tryin' to take me for a foo'?!"); 
                cm.dispose(); 
            } else if (cm.getText() < 1) {
                cm.sendOk("You have to bet at least 1 meso. nigga, u mad!!!"); 
                cm.dispose(); 
            } else if (cm.getMeso() + fee * 2 > 2000000000) { 
                cm.sendOk("You can't bet that much money, nigga, u mad!!!"); 
                cm.dispose(); 
            } else {
                if (card1 == card2 == card3) { 
                    winner = 1;
                } else if (card1 == card5 == card9) { 
                    winner = 1; 
                } else if (card4 == card5 == card6) { 
                    winner = 1; 
                } else if (card7 == card8 == card9) { 
                    winner = 1; 
                } else if (card7 == card5 == card3) { 
                    winner = 1; 
                } else { 
                    winner = 2; 
                } 
                if (winner == 1) { 
                    cm.sendOk("Slots: " + 
                    card1 + " " + card2 + " " + card3 + " " + 
                    card4 + " " + card5 + " " + card6 + " " +
                    card7 + " " + card8 + " " + card9 +  
                    " You won! nigga, u mad!!!!!!!");
                    cm.gainMeso(fee * 3); 
                    cm.dispose(); 

                } else if (winner == 2) {
                    cm.sendOk("Slots: " + 
                    card1 + " " + card2 + " " + card3 + " " + 
                    card4 + " " + card5 + " " + card6 + " " +
                    card7 + " " + card8 + " " + card9 +  
                    " You lost, come again!"); 
                    cm.gainMeso(-fee); 
                    cm.dispose(); 
        } else {
            cm.dispose();

                } 
            } 
        } 
    } 
}  