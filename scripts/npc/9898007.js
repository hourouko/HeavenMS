importPackage(Packages.tools);
var map = 299900900;
var mid = 9895101;
var x = 2811;
var y = 202;

function start() {
    cm.getPlayer().getMap().broadcastMessage(MaplePacketCreator.showEffect("quest/party/clear2"));
    cm.sendOk("Think this is the end? THINK AGAIN!"); 
    cm.spawnMob(map, mid, x, y);
    cm.dispose();
}