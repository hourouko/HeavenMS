importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var pcard1 = Math.floor(Math.random()*13+1);
var pcard2 = Math.floor(Math.random()*13+1);
var pcard3 = Math.floor(Math.random()*13+1);
var pcard4 = Math.floor(Math.random()*13+1);
var pcard5 = Math.floor(Math.random()*13+1);
var dcard1 = Math.floor(Math.random()*13+1);
var dcard2 = Math.floor(Math.random()*13+1);
var dcard3 = Math.floor(Math.random()*13+1);
var dcard4 = Math.floor(Math.random()*13+1);
var dcard5 = Math.floor(Math.random()*13+1);
var dtotal;
var ptotal;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("Your loss. You could have won big money! >:O");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("Are you up for some #bBlackjack?#k If you win, you can double your mesos! Dealer stays at 17.");
        } else if (status == 1) {
            cm.sendGetText("How many mesos would you like to bet?");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("Are you sure you want to bet #r" + fee + "#k mesos?");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("You don't even have that much money! You tryin' to take me for a foo'?!");
                cm.dispose();
            } else if (cm.getText() < 0) {
                cm.sendOk("Oh, so if you win, I win money? I guess I'll just bust. Go away, idiot.");
                cm.dispose();
            } else {
                if (dcard1 > 10) {
                    dcard1 = 10;
                } 
                if (dcard2 > 10) {
                    dcard2 = 10;
                }
                if (dcard1 < 11 && dcard2 == 1) {
                    dcard2 = 11;
                }
                if (dcard2 < 11 && dcard1 == 1) {
                    dcard1 = 11;
                }
                dtotal = dcard1 + dcard2;
                if (dtotal < 17) {
                    if (dcard3 > 10) {
                        dcard3 = 10;
                    }
                    if (dtotal < 11 && dcard3 == 1) {
                    dcard3 = 11;
                    }
                    dtotal = dtotal + dcard3;
                    if (dtotal < 17) {
                        if (dcard4 > 10) {
                            dcard4 = 10;
                        }
                        if (dtotal < 11 && dcard4 == 1) {
                            dcard4 = 11;
                        }
                        dtotal = dtotal + dcard4;
                        if (dtotal < 17) {
                            if (dcard5 > 10) {
                                dcard5 = 10;
                            }
                            if (dtotal < 11 && dcard5 == 1) {
                                dcard5 = 11;
                            }
                            dtotal = dtotal + dcard5;
                        }
                    }
                }
                cm.sendOk("Dealer is showing a " + dcard1 + ". Your turn");

                if (pcard1 > 10) {
                    pcard1 = 10;
                }
                if (pcard2 > 10) {
                    pcard2 = 10;
                }
                if (pcard1 < 11 && pcard2 == 1) {
                    pcard2 = 11;
                }
                if (pcard2 < 11 && pcard1 == 1) {
                    pcard1 = 11;
                }
                ptotal = pcard1 + pcard2;
                cm.sendSimple("You have " + ptotal + ". Do you want to hit?" + 
                "#k\r\n#L80##rYes." + 
                   "#k\r\n#L81##rNo.");
            if (selection == 80) {
                if (ptotal < 11 && pcard3 == 1) {
                    pcard3 = 11;
                }
                ptotal = ptotal + pcard3;
                if (ptotal > 21) {
                    cm.sendOk("You have busted!");
                    cm.gainMeso(-fee);
                    cm.dispose();
                } else {
                    cm.sendSimple("You have " + ptotal + ". Do you want to hit?" + 
                    "#k\r\n#L82##rYes." + 
                    "#k\r\n#L83##rNo.");
                }
                    
                
            } else if (selection == 81) {
                if (dtotal > 21) {
                    cm.sendNext("You've won! Dealer busted. Nasty man he was.");
                    cm.gainMeso(fee);
                    cm.dispose();
                } else if (ptotal > dtotal && dtotal < 22) {
                    cm.sendNext("You had higher than the dealer! Congrats!");
                    cm.gainMeso(fee);
                    cm.dispose();
                }
            } else if (selection == 82) {
                if (ptotal < 11 && pcard4 == 1) {
                    pcard4 = 11;
                }
                ptotal = ptotal + pcard3;
                if (ptotal > 21) {
                    cm.sendOk("You have busted!");
                    cm.gainMeso(-fee);
                    cm.dispose();
                } else {
                    cm.sendSimple("You have " + ptotal + ". Do you want to hit?" + 
                    "#k\r\n#L84##rYes." + 
                    "#k\r\n#L85##rNo.");
                
                }    
                
            } else if (selection == 83) {
                if (dtotal > 21) {
                    cm.sendNext("You've won! Dealer busted. Nasty man he was.");
                    cm.gainMeso(fee);
                    cm.dispose();
                } else if (ptotal > dtotal && dtotal < 22) {
                    cm.sendNext("You had higher than the dealer! Congrats!");
                    cm.gainMeso(fee);
                    cm.dispose();
                }
            } else if (selection == 84) {
                if (ptotal < 11 && pcard5 == 1) {
                    pcard5 = 11;
                }
                ptotal = ptotal + pcard3;
                if (ptotal > 21) {
                    cm.sendOk("You have busted!");
                    cm.gainMeso(-fee);
                    cm.dispose();
                } else {
                    if (dtotal > 21) {
                        cm.sendNext("You've won! Dealer busted. Nasty man he was.");
                        cm.gainMeso(fee);
                        cm.dispose();
                    } else if (ptotal > dtotal && dtotal < 22) {
                        cm.sendNext("You had higher than the dealer! Congrats!");
                        cm.gainMeso(fee);
                        cm.dispose();
                    }
                }

                    
                
            } else if (selection == 85) {        
                if (dtotal > 21) {
                    cm.sendNext("You've won! Dealer busted. Nasty man he was.");
                    cm.gainMeso(fee);
                    cm.dispose();
                } else if (ptotal > dtotal && dtotal < 22) {
                    cm.sendNext("You had higher than the dealer! nigga, u mad!!!!!!");
                    cm.gainMeso(fee);
                    cm.dispose();
                }
            }
        }
    }
}
}  