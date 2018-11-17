//Script by Alcandon

function start() {
    cm.sendSimple("Hello,#r#h#k. I am the AP Reset NPC! For 50MIL I can reset your AP points! Would you like to Reset your AP?\r\n\#L0#Yes#l\r\n\#L1#No#l");
}

function action(mode, type, selection) {
        if (selection == 0) {
        if(cm.getMeso() >= 50000000 && cm.getPlayer().getReborns() > 0){
        cm.resetStats();
        cm.sendOk("Your AP has been reset!");
        cm.dispose();
        }
        else {
        cm.sendOk("You don't have enough mesos!");
        cm.dispose();
        }
        } else if (selection == 1) {
cm.sendOk("Alright, see 'ya! Come back if you want to have your AP reset! :)");
cm.dispose();
}
}