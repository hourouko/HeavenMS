/* 
        NPC Name:               Gachapon (animechair) 
        Author:                 AngelSpirit 
        Description:            Multi-purpose Gachapon NPC, built to be easily editable and adaptable. 
*/ 
importPackage(java.util); 
importPackage(Packages.client.inventory); 
importPackage(Packages.server); 

//Constants -- change these to suit your needs 

//Set to false to disable this NPC. 
var enabled = true; 

//Whether or not to allow players to view the list of rewards.  Note that GM's may always see the reward list, regardless of this setting. 
var showRewards = true; 

//Whether or not to show the individual chances of obtaining items.  Only useful if "showRewards" is set to true. 
var showRewardChances = true; 

//Rewards, listed as (ItemID, Quantity, Weight).  Weights are relative, and do not have to add up to 100. 
var rewards = Array( 
3019201,1,30,
3019202,1,30,
3019203,1,30,
3019204,1,30,
3019205,1,30,
3019206,1,30,
3019207,1,30,
3019208,1,30,
3019209,1,30,
3019210,1,30,
3019211,1,30,
3019212,1,30,
3019213,1,30,
3019214,1,30,
3019215,1,30,
3019216,1,30,
3019217,1,30,
3019218,1,30,
3019219,1,30,
3019220,1,30,
3019221,1,30,
3019222,1,30,
3019223,1,30,
3019224,1,30,
3019225,1,30,
3019226,1,30,
3019227,1,30,
3019228,1,30,
3019229,1,30,
3019230,1,30,
3019231,1,30,
3019232,1,30,
3019233,1,30,
3019234,1,30,
3019235,1,30,
3019236,1,30,
3019237,1,30,
3019238,1,30,
3019239,1,30,
3019240,1,30,
3019241,1,30,
3019242,1,30,
3019243,1,30,
3019244,1,30,
3019245,1,30,
3019246,1,30,
3019247,1,30,
3019248,1,30,
3019249,1,30,
3019250,1,30,
3019251,1,30,
3019252,1,30,
3019253,1,30,
3019254,1,30,
3019255,1,30,
3019256,1,30,
3019257,1,30,
3019258,1,30,
3019259,1,30,
3019260,1,30,
3019261,1,30,
3019262,1,30,
3019263,1,30,
3019264,1,30,
3019265,1,30,
3019266,1,30,
3019267,1,30,
3019268,1,30,
3019269,1,30,
3019270,1,30,
3019271,1,30,
3019272,1,30,
3019273,1,30,
3019274,1,30,
3019275,1,30,
3019276,1,30,
3019277,1,30,
3019278,1,30,
3019279,1,30,
3019280,1,30,
3019281,1,30,
3019282,1,30,
3019283,1,30,
3019284,1,30,
3019285,1,30,
3019286,1,30,
3019287,1,30,
3016400,1,30,
3016401,1,30,
3016402,1,30,
3016403,1,30,
3016404,1,30,
3016405,1,30,
3016406,1,30,
3016407,1,30,
3016408,1,30,
3016409,1,30,
3016410,1,30,
3016411,1,30,
3016412,1,30,
3016413,1,30,
3016414,1,30,
3016415,1,30,
3016416,1,30,
3016417,1,30,
3016418,1,30,
3016419,1,30,
3016420,1,30,
3016421,1,30,
3016422,1,30,
3014055,1,30,
3014056,1,30,
3014057,1,30,
3014058,1,30,
3014059,1,30,
3014060,1,30,
3014061,1,30,
3014062,1,30,
3014025,1,30,
3014026,1,30,
3014027,1,30,
3014028,1,30,
3014029,1,30,
3014030,1,30,
3014031,1,30,
3014032,1,30,
3014033,1,30,
3014034,1,30,
3014035,1,30,
3014036,1,30,
3014037,1,30,
3014038,1,30,
3014039,1,30,
3014040,1,30,
3014041,1,30,
3014042,1,30,
3014043,1,30,
3014044,1,30,
3014045,1,30,
3014046,1,30,
3014047,1,30,
3014048,1,30,
3014049,1,30,
3014050,1,30); 


 Constants = { 
  //ItemID to use as the "ticket" 
    Ticket : 5680021, 
    //Number of free inventory slots the player must have in each tab -- do not set this lower than 1. 
    FreeInventory : 2 
}; 

// INTERNAL VARS 
var status = -1; 
var rewardItems = Array(); 
var rewardWeights = Array(); 
var rewardQuantity = Array(); 
var totalWeights = Array(); 
var rng = new Random(); 

function start(){ 
    if(enabled || cm.getPlayer().isGM()){ 
        //Split the reward items 
        for(var i = 0; i < rewards.length; i++){ 
            if(i % 3 == 0){ 
                rewardItems.push(rewards[i]); 
            } else if (i % 3 == 1) { 
                rewardQuantity.push(rewards[i]); 
            } else { 
                rewardWeights.push(rewards[i]); 
                //For each weight, generate the sum of all previous weights 
                var total = 0; 
                for(var k = 0; k < rewardWeights.length; k++){ 
                    total += rewardWeights[k]; 
                } 
                totalWeights.push(total); 
            } 
        } 
        action(1,0,0); 
    } else { 
        cm.sendOk("Something clicks inside the Gachapon, then it stops altogether.  It doesn't respond.\r\n#r(The Gachapon is currently disabled.)#k"); 
        cm.dispose(); 
        return; 
    } 
} 

function action(mode, type, selection){ 
    if(mode == 1 && selection != 99){ 
        status++; 
    } else { 
        cm.dispose(); 
        return; 
    } 
     
    if(status == 0){ 
        cm.sendSimple(getMainMenu()); 
    } else { 
        if(selection == 2){ //show rewards 
            if(!showRewards && !cm.getPlayer().isGM()){ 
                cm.sendOk("#rReward showing has been disabled.#k\r\n#b#L99#Okay.#l#k"); 
                cm.dispose(); 
            } else { 
                cm.sendOk("List of rewards for this gachapon: \r\n" + getRewardsDisplay() + "\r\n#b#L99#Okay.#l#k"); 
                cm.dispose(); 
            } 
        } else { //use ticket 
            if(checkInventorySpace()){ 
                if(cm.haveItem(Constants.Ticket, 1)){ 
                    cm.gainItemSilent(Constants.Ticket, -1); 
                    var reward = getRewardIndex(); 
                    cm.gainItem(rewardItems[reward], rewardQuantity[reward]); 
                    cm.sendSimple(getRewardMessage(reward)); 
                } else { 
                    cm.sendOk("You do not have a #d#v" + Constants.Ticket + "##z" + Constants.Ticket + "##k.\r\n#b#L99#Okay.#l#k"); 
                    cm.dispose(); 
                } 
            } else { 
                cm.sendOk("The Gachapon beeps once, then stops.  It doesn't respond.  #r(You must have " + Constants.FreeInventory + " free inventory slots in each tab.)#k\r\n#b#L99#Okay.#l#k"); 
                cm.dispose(); 
                return; 
            } 
        } 
    } 
} 

function getMainMenu(){ 
    var retText = "The Gachapon emits a muffled (clunk) noise.\r\n#b"; 
    retText += "#L1#Use a #k#d#v" + Constants.Ticket + "##z" + Constants.Ticket + "##k#b#l\r\n"; 
    if(showRewards || cm.getPlayer().isGM()){ 
        retText += "#L2#Display the list of rewards.#l\r\n"; 
    } 
    retText += "#L99#(Never mind...)#l\r\n"; 
    retText += "#k"; 
    return retText; 
} 

function getRewardMessage(reward){ 
    var retText = "Let's see what you get!\r\n"; 
    retText += "#rYou have gained the following:#k\r\n#d"; 
    retText += rewardQuantity[reward] + "x #v" + rewardItems[reward] + "##z" + rewardItems[reward] + "##k\r\n"; 
    retText += "You currently have #r" + getRemainingTickets() + "#k #z" + Constants.Ticket + "# remaining.\r\n"; 
    retText += "#b#L1#Use another ticket.#l\r\n"; 
    retText += "#L99#Stop using the Gachapon.#l#k\r\n"; 
    return retText; 
} 

function getRewardIndex(){ 
    //random # between 1 and the sum of all weights 
    var weight = rng.nextInt(totalWeights[totalWeights.length - 1] + 1); 
    var retIndex = 0; 
    while(retIndex < totalWeights.length - 1){ 
        if(weight < totalWeights[retIndex + 1] && weight >= totalWeights[retIndex]){ 
            break; 
        } 
        retIndex++; 
    } 
    return retIndex; 
} 

//Check for slots in each tab 
function checkInventorySpace(){ 
    for(var i = 1; i <= 5; i++){ 
        if(cm.getPlayer().getInventory(MapleInventoryType.getByType(i)).getNumFreeSlot() < Constants.FreeInventory){ 
            return false; 
        } 
    } 
    return true; 
} 

function getInventoryType(itemID){ 
    return Math.floor(itemID / 1000000); 
} 

function getRemainingTickets(){ 
    return cm.getPlayer().getInventory(MapleInventoryType.getByType(getInventoryType(Constants.Ticket))).countById(Constants.Ticket); 
} 

function getRewardsDisplay(){ 
    var ret = "#r"; 
    for(var i = 0; i < rewardItems.length; i++){ 
        if(rewardQuantity[i] > 1){ //don't show the quantity if there's only one
            ret += rewardQuantity[i] + "x "; 
        } 
        ret += "#v" + rewardItems[i] + "##z" + rewardItems[i] + "# "; 
        if(showRewardChances){ 
            ret += "#k#b(" + (rewardWeights[i] / totalWeights[totalWeights.length - 1] * 100).toFixed(3) + "%)#k#r"; 
        } 
        ret += "\r\n"; 
    } 
    ret += "#k"; 
    return ret; 
}  
