var cao = true

function getDoc(id,id2){
	if(id2 !== null){
		document.getElementById(id+"ID").innerHTML = format(id2);
	}
}

function getBuyDoc(id,id2){
	document.getElementById(id+"ID").innerHTML = id2;
}

function getCss(id,id2){
	document.getElementById(id).class = id2
}

function getID(){
	getDoc("dim_1",player.dim_1)
	getDoc("dim_1_additiona",player.dim_1_additiona)
	getDoc("dim_1_mul",MulDim_1())
	getDoc("dim_2",player.dim_2)
	getDoc("dim_2_additiona",player.dim_2_additiona)
	getDoc("dim_2_mul",1)

	getDoc("GainDim_1",GainDim_1())
	getDoc("GainDim_2",GainDim_2())
	getDoc("CostDim_1",CostDim(1))
	getDoc("CostDim_2",CostDim(2))
	
	getDoc("points",player.points)
	getDoc("GainPoints",GainPoints())
	
	getDoc("room",player.room)
	getBuyDoc("GainRoom",'(+'+format(GainRoom())+'/sec)')
	getDoc("room_sub",player.room_sub)
	getBuyDoc("GainRoom_sub",'(+'+format(GainRoom_sub())+'/sec)')
	getBuyDoc("GainRoom_progress",'(+'+format(GainRoom_progress())+'/sec)')
	getDoc("room_sub_Boostroom",room_sub_Boostroom())
	getDoc("room_distorted",player.room_distorted)
	getDoc("resetRoomGain",restRoomGain())
	
	getDoc("roomUpgEff1",player.roomUpgEff1)
	getDoc("roomUpgEff2",player.roomUpgEff2)
	getDoc("roomUpgEff6",player.roomUpgEff6)
	getDoc("roomUpgEff7",player.roomUpgEff7)
	getDoc("roomUpgEff8",player.roomUpgEff8)
	
	for(row=1;row<=12;row++){
		getBuyDoc("buyRoomUpg"+row,player['hasRoomUpg'+row]=="true" ? "(已购买)" : "")
	}
	
	getDoc("roomSubUpgEff1",player.roomSubUpgEff1)
	getDoc("roomSubUpgEff4",player.roomSubUpgEff4)
	getDoc("roomSubUpgEff6",player.roomSubUpgEff6)
	getDoc("roomSubUpgEff7",player.roomSubUpgEff7)
	getDoc("roomSubUpgEff8",player.roomSubUpgEff8)
	
	for(row2=1;row2<=8;row2++){
		getBuyDoc("buyRoomSubUpg"+row2,player['hasRoomSubUpg'+row2]=="true" ? "(已购买)" : "")
	}
	
	getDoc("quark",player.quark)
	getDoc("resetQuarkGain",resetQuarkGain())
	getBuyDoc('restQuarkTaxt',player.white.gt(0) ? '下一个夸克在:'+format(resetQuarkNext())+'子空间时获取' : '在获得白元素前你一次最多可以获得1夸克')
	
	getDoc("quark_red",player.quark_red)
	getDoc("quark_green",player.quark_green)
	getDoc("quark_blue",player.quark_blue)
	
	getBuyDoc("GainQuarkRest",'(+'+format(GainQuarkRest())+'/sec)<br>')
	
	getBuyDoc("GainQuark_red",'(+'+format(GainQuark())+'/sec)')
	getBuyDoc("GainQuark_green",'(+'+format(GainQuark())+'/sec)')
	getBuyDoc("GainQuark_blue",'(+'+format(GainQuark())+'/sec)')
	
	getDoc("red",player.red)
	getDoc("green",player.green)
	getDoc("blue",player.blue)
	getDoc("yellow",player.yellow)
	getDoc("cyan",player.cyan)
	getDoc("magenta",player.magenta)
	getDoc("white",player.white)
	
	getDoc("gain_quark_red",gain_quark_red())
	getDoc("gain_quark_green",gain_quark_green())
	getDoc("gain_quark_blue",gain_quark_blue())
	
	getBuyDoc("GainRed",'(+'+format(GainRed())+'/sec)')
	getBuyDoc("GainGreen",'(+'+format(GainGreen())+'/sec)')
	getBuyDoc("GainBlue",'(+'+format(GainBlue())+'/sec)')
	
	getDoc("RedEffect",RedEffect())
	getDoc("GreenEffect",GreenEffect())
	getDoc("BlueEffect",BlueEffect())
	getDoc("YellowEffect",YellowEffect())
	getDoc("CyanEffect",CyanEffect())
	getDoc("MagentaEffect",MagentaEffect())
	getDoc("WhiteEffect",WhiteEffect())
	
	getDoc("roomSubUpgEff2Red",player.roomSubUpgEff2Red)
	getDoc("roomSubUpgEff2Green",player.roomSubUpgEff2Green)
	getDoc("roomSubUpgEff2Blue",player.roomSubUpgEff2Blue)
	getDoc("roomSubUpgEff2Yellow",player.roomSubUpgEff2Yellow)
	getDoc("roomSubUpgEff2Cyan",player.roomSubUpgEff2Cyan)
	getDoc("roomSubUpgEff2Magenta",player.roomSubUpgEff2Magenta)
	getDoc("roomSubUpgEff2White",player.roomSubUpgEff2White)
	
	getDoc("time_speed",time_speed())
	getDoc("room_distorted_speed",room_distorted_speed())
	
	if(player.time_challenge=="time_challenge_0"){
		getBuyDoc("time_challenge","鼠标移动并点击一个色块查看详情")
	}else if(player.time_challenge=="time_challenge_1"){
		getBuyDoc("time_challenge","<h3>时速挑战</h3>效果:时间倍率只有0.00001倍<br>扩张:在时间中解锁时速页面以及购买项<br>目标:解锁时间<br>奖励:永久解锁时速页面<br><small><small><small>进入挑战将进行一次时间重置<br>重置时间时会使先前大部分内容持续显示")
	}else if(player.time_challenge=="time_challenge_2"){
		getBuyDoc("time_challenge","<h3>储存挑战</h3>效果:非点数资源获得硬上限<br>扩张:在空间中解锁储存页面,储存可以根据存储数量完成挑战获得加成并推迟硬上限<br>目标:解锁时间<br>奖励:永久解锁储存页面<br><small><small><small>进入挑战将进行一次时间重置<br>重置时间时会使先前大部分内容持续显示")
	}else if(player.time_challenge=="time_challenge_3"){
		getBuyDoc("time_challenge","<h3>虚无挑战</h3>效果:除了'空间时间'外的升级将无法购买<br>扩张:在时空中解锁虚无页面,生产虚无获得加成<br>目标:解锁时间<br>奖励:永久解锁虚无页面<br><small><small><small>进入挑战将进行一次时间重置<br>重置时间时会使先前大部分内容持续显示")
	}else if(player.time_challenge=="time_challenge_4"){
		getBuyDoc("time_challenge","<h3>压缩挑战</h3>效果:超过1的时间速率效果将大幅度减弱<br>扩张:在空间中解锁压缩页面,压缩时空间获得加成<br>目标:解锁时间<br>奖励:永久解锁压缩页面<br><small><small><small>进入挑战将进行一次时间重置<br>重置时间时会使先前大部分内容持续显示")
	}
	
	if(player.time_challenge=="time_challenge_1" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:时速挑战<br>")
	}else if(player.time_challenge=="time_challenge_2" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:储存挑战<br>")
	}else if(player.time_challenge=="time_challenge_3" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:虚无挑战<br>")
	}else if(player.time_challenge=="time_challenge_4" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:压缩挑战<br>")
	}else{
		getBuyDoc("time_challenge_doing","<br>")
	}
	
	getDoc('time_space',player.time_space)
	getDoc('GainTime_space',GainTime_space())
}

function layer_UpgEff(){
	player.roomUpgEff1 = n(0)
	player.roomUpgEff2 = n(0)
	player.roomUpgEff6 = n(0)
	player.roomUpgEff7 = n(0)
	player.roomUpgEff8 = n(0)
	player.roomSubUpgEff1 = n(0)
	player.roomSubUpgEff2Red = n(0)
	player.roomSubUpgEff2Green = n(0)
	player.roomSubUpgEff2Blue = n(0)
	player.roomSubUpgEff2Yellow = n(0)
	player.roomSubUpgEff2Cyan = n(0)
	player.roomSubUpgEff2Magenta = n(0)
	player.roomSubUpgEff2White = n(0)
	player.roomSubUpgEff4 = n(0)
	player.roomSubUpgEff6 = n(0)
	player.roomSubUpgEff7 = n(0)
	player.roomSubUpgEff8 = n(0)
}

function layer_1(){
	player.points = n(10)
	if(player.hasRoomUpg4=="true"){player.dim_1 = n(2)}else{player.dim_1 = n(0)}
	player.dim_1_additiona = n(0)
	player.dim_2 = n(0)
	player.dim_2_additiona = n(0)
	
	layer_UpgEff()
}

function layer_2(){
	for(row=1;row<=12;row++){
		if(player.hasRoomSubUpg5=="false"){
			player['hasRoomUpg'+row]="false"
		}
	}
	player.room = n(0)
	player.room_sub = n(0)
	player.room_storage = n(0)
	player.room_distorted = n(0)
	
	layer_1()
}
function layer_3(){
	for(row=1;row<=8;row++){
		player['hasRoomSubUpg'+row]="false"
	}
	player.quark = n(0)
	player.showQuark = 'false'
	player.quark_red = n(0)
	player.quark_green = n(0)
	player.quark_blue = n(0)
	player.red = n(0)
	player.green = n(0)
	player.blue = n(0)
	player.yellow = n(0)
	player.cyan = n(0)
	player.magenta = n(0)
	player.white = n(0)
	layer_2()
}

function Close(id){
    document.getElementById(id).style.display = "none" 
}
function Open(id){
    document.getElementById(id).style.display = "" 
}

function buttonID(){
	if(player.room_storage.gt(0)){
		Close('button_dim1_progress')
		Open('button_none_progress')
	}else{
		Open('button_dim1_progress')
		Close('button_none_progress')
	}
	
	if(player.points.gte(50)){
		Open('button_room_rest')
	}else{
		Close('button_room_rest')
	}
	
	if(player.hasRoomUpg4=="true" || player.showQuark=="true" || player.showTime=="true"){
		Open('tab_room_upg1')
	}else{
		Close('tab_room_upg1')
	}
	
	if(player.hasRoomUpg8=="true" || player.showQuark=="true" || player.showTime=="true"){
		Open('tab_room_upg2')
	}else{
		Close('tab_room_upg2')
	}
	
	if(player.hasRoomUpg8=="true" || player.showQuark=="true" || player.showTime=="true"){
		Open('tab_room_sub')
	}else{
		Close('tab_room_sub')
	}
	
	if(player.room_sub.gte(30)){
		Open('button_quark_rest')
	}else{
		Close('button_quark_rest')
	}
	
	
	if(player.hasRoomUpg9=="true" || player.showQuark=="true" || player.showTime=="true"){
		Open('unlocked_tab_room_quark')
	}else{
		Close('unlocked_tab_room_quark')
	}
	
	if(player.hasRoomUpg10=="true" || player.showTime=="true"){
		Open('unlocked_tab_room_upg')
	}else{
		Close('unlocked_tab_room_upg')
	}
	
	if(player.hasRoomUpg11=="true" || player.showTime=="true"){
		Open('unlocked_dim2')
		Open('unlocked_dim2_button')
	}else{
		Close('unlocked_dim2')
		Close('unlocked_dim2_button')
	}
	
	if(player.hasRoomUpg12=="true" || player.showTime=="true"){
		Open('unlocked_tab_time')
	}else{
		Close('unlocked_tab_time')
	}
	
	if(player.time_challenge!="time_challenge_0"){
		Open('button_time_challenge')
	}else{
		Close('button_time_challenge')
	}
	
	Close('unlocked_tab_room_storage')
}

function firstTab(){
	if(cao==true){
		Close('tab_setting')
		Close('tab_room')
		Close('tab_room_storage')
		Close('tab_room_distorted')
		Close('tab_room_sub_quark')
		Close('tab_room_sub_upg')
		Close('tab_time')
		Close('tab_time_challenge')
		cao = false
	}
}

function showTab(id){
	if(id=="setting"){
		Open('tab_setting')
	}else{
		Close('tab_setting')
	}
	
	if(id=="main"){
		Open('tab_main')
	}else{
		Close('tab_main')
	}
	
	if(id=="room"){
		Open('tab_room')
	}else{
		Close('tab_room')
	}
	
	if(id=="time"){
		Open('tab_time')
	}else{
		Close('tab_time')
	}
}

function showTabMain(id){
	if(id=="room_upg"){
		Open("tab_room_upg")
	}else{
		Close("tab_room_upg")
	}
	
	if(id=="room_storage"){
		Open("tab_room_storage")
	}else{
		Close("tab_room_storage")
	}

	if(id=="room_distorted"){
		Open("tab_room_distorted")
	}else{
		Close("tab_room_distorted")
	}
	
	if(id=="time_challenge"){
		Open("tab_time_challenge")
	}else{
		Close("tab_time_challenge")
	}
}

function showTabMainSub(id){
	if(id=="room_sub_quark"){
		Open("tab_room_sub_quark")
	}else{
		Close("tab_room_sub_quark")
	}
	
	if(id=="room_sub_upg"){
		Open("tab_room_sub_upg")
	}else{
		Close("tab_room_sub_upg")
	}
}

setInterval(function(){
	getRoomUpgEff()
	getRoomSubUpgEff()
	save()
	getID()
	buttonID()
	firstTab()
	
	player.points = player.points.add(GainPoints().div(20))
	
	player.dim_1 = player.dim_1.add(GainDim_1().div(20))
	
	player.room = player.room.add(GainRoom().div(20))
	player.room_distorted = player.room_distorted.add(GainRoom_progress().div(20))
	player.room_sub = player.room_sub.add(GainRoom_sub().div(20))
	
	player.red = player.red.add(GainRed().div(20))
	player.green = player.green.add(GainGreen().div(20))
	player.blue = player.blue.add(GainBlue().div(20))
	
	player.dim_1_additiona = n(0).add(player.roomUpgEff1).add(YellowEffect())
	
	player.yellow = n(player.red).min(player.green)
	player.cyan = n(player.red).min(player.blue)
	player.magenta = n(player.green).min(player.blue)
	player.white = n(player.red).min(player.green).min(player.blue)
	
	if(player.room_sub.gte(30)){
		player.quark = player.quark.add(n(GainQuarkRest()).div(20))
	}
	
	player.quark_red = player.quark_red.add(n(GainQuark()).div(20))
	player.quark_green = player.quark_green.add(n(GainQuark()).div(20))
	player.quark_blue = player.quark_blue.add(n(GainQuark()).div(20))
	
	player.time_space = player.time_space.add(n(GainTime_space()).div(20))
}, 50)