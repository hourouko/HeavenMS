** 
 * How to Edit: 
 * Put the item ID you want to use in place of '4001126' for the item players need to trade in. 
 * Put the item IDs of the prizes in the first section of the item array. Where you see '4031912, 4031825, etc'. 
 * Put the amount of the requiredItem the player needs for the CORRESPONDING item in the second part of the item array. Where you see '250, 200, etc'. 
 * Corresponding means: Match up the item ID to the amount of requiredItem needed. In this script, the player needs 250 requiredItem for the '4031912' item. 
 */ 
var status = 0; 
requiredItem = 4001126; 
item = [[4031912, 4031825, 4031911, 4031829, 4031908, 4031824, 4031827, 4031907, 2070006], [250, 200, 325, 175, 200, 325, 175, 225, 150]]; 
var sel; 

function start(){ 
    cm.sendNext("Hello! Do you have any #r#t"+ requiredItem +"##k? If you do, I can trade you some items for them!"); 
} 

function action(m,t,s){ 
    status++; 
    if(m != 1){ 
        cm.dispose(); 
        return; 
    } 
    if(status == 1){ 
        if(!cm.haveItem(item[0])){ 
            cm.sendOk("You don't have any #r#t"+ requiredItem +"##k!"); 
            cm.dispose(); 
        } else { 
            var talk = "Which Item would you like to buy?#b"; 
            for(var i = 0; i < item[0].length; talk += "\r\n\t#L"+ i +"##t"+ item[0][i] +"##l", i++); 
            cm.sendSimple(talk); 
        } 
    } else if (status == 2){ 
        sel = s; 
        cm.sendYesNo("Would you like to buy 1 #b#t"+ item[0][s] +"##kdItem for #r"+ item[1][s] +" #t"+ requiredItem +"#?"); 
    } else if (status == 3){ 
        if(cm.haveItem(requiredItem, item[1][sel])){ 
            cm.sendOk("Enjoy your #b#t" + item[0][sel] + "##k! Remember to vote more often to get more of these exclusive deals!"); 
            cm.gainItem(item[0][sel]); 
            cm.gainItem(requiredItem, -item[1][sel]); 
        } else { 
            var percent = Math.ceil(cm.itemQuantity(requiredItem) / item[1][sel] + 100); 
            cm.sendOk("You only have #b#c"+ requiredItem +"# #t"+ requiredItem +"##k. You need #r"+ item[1][sel] +" #t"+ requiredItem +"##k to buy a #b#t"+ item[0][sel] +"##k! \r\n\r\n#ePercent of #b#t"+ requiredItem +"#'s#k collected: \r\n#B"+ percent +"#"); 
        } 
    } 
}  