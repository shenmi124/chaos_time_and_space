var cao = true

function getDoc(id,id2){
	if(id2 !== null){
		document.getElementById(id+"ID").innerHTML = format(id2);
	}
}

function getBuyDoc(id,id2){
	document.getElementById(id+"ID").innerHTML = id2;
}

function getID(){
	getDoc("dim_1",player.dim_1)
	getDoc("dim_1_additiona",player.dim_1_additiona)
	getDoc("dim_1_mul",player.roomUpgEff2)
	getDoc("dim_2",player.dim_2)
	
	getDoc("GainDim_1",GainDim_1())
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
	getDoc("room_storage",player.room_storage)
	getDoc("room_storage_dim1",player.room_storage_dim1)
	getDoc("room_storage_dim1_progress",player.room_storage_dim1_progress)
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
	
	getDoc("quark",player.quark)
	getDoc("resetQuarkGain",resetQuarkGain())
	
	getDoc("quark_red",player.quark_red)
	getDoc("quark_green",player.quark_green)
	getDoc("quark_blue",player.quark_blue)
	
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
	
	getDoc("time_speed",time_speed())
	getDoc("room_distorted_speed",room_distorted_speed())
	getDoc("points_speed",points_speed())
}

function layer_1(){
	player.points = n(10)
	if(player.hasRoomUpg4=="true"){player.dim_1 = n(2).add(YellowEffect())}else{player.dim_1 = n(0).add(YellowEffect())}
	player.dim_1_additiona = n(0)
	player.dim_2 = n(0)
}

function layer_2(){
	for(row=1;row<=12;row++){
		player['hasRoomUpg'+row]="false"
	}
	player.roomUpgEff1 = n(0)
	player.roomUpgEff2 = n(0)
	player.roomUpgEff6 = n(0)
	player.roomUpgEff7 = n(0)
	player.roomUpgEff8 = n(0)
	player.room = n(0)
	player.room_sub = n(0)
	player.room_storage = n(0)
	player.room_storage_dim1 = n(0)
	player.room_storage_dim1_progress = n(0)
	player.room_distorted = n(0)
	layer_1()
}

function Close(id){
    document.getElementById(id).style.display = "none" 
}
function Open(id){
    document.getElementById(id).style.display = "" 
}

function buttonID(){
	if(player.room_storage_dim1_progress.gt(0)){
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
	
	
	if(player.hasRoomUpg4=="true" || player.showQuark=="true"){
		Open('tab_room_upg1')
	}else{
		Close('tab_room_upg1')
	}
	
	if(player.hasRoomUpg8=="true" || player.showQuark=="true"){
		Open('tab_room_upg2')
	}else{
		Close('tab_room_upg2')
	}
	
	if(player.hasRoomUpg8=="true" || player.showQuark=="true"){
		Open('tab_room_sub')
	}else{
		Close('tab_room_sub')
	}
	
	if(player.room_sub.gte(30)){
		Open('button_quark_rest')
	}else{
		Close('button_quark_rest')
	}
	
	if(player.hasRoomUpg8=="true"){
		Close('unlocked_tab_time')
	}else{
		Close('unlocked_tab_time')
	}
}

function firstTab(){
	if(cao==true){
		Close('tab_room')
		Close('tab_room_storage')
		Close('tab_room_distorted')
		Close('tab_time')
		Close('tab_room_sub_quark')
		Close('tab_room_sub_upg')
		cao = false
	}
}

function showTab(id){
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
	let a = n(0)
	save()
	getID()
	buttonID()
	firstTab()
	getRoomUpgEff()
	
	player.points = player.points.add(GainPoints().div(20))
	
	player.dim_1 = player.dim_1.add(GainDim_1().div(20))
	
	player.room = player.room.add(GainRoom().div(20))
	player.room_distorted = player.room_distorted.add(GainRoom_progress().div(20))
	player.room_sub = player.room_sub.add(GainRoom_sub().div(20))
	
	player.red = player.red.add(GainRed().div(20))
	player.green = player.green.add(GainGreen().div(20))
	player.blue = player.blue.add(GainBlue().div(20))
	
	if(!player.room_storage_dim1_progress.gt(0)){
		a = n(player.room_storage_dim1)
	}
	player.dim_1_additiona = n(0).add(a).add(player.roomUpgEff1)
	
	player.yellow = n(player.red).min(player.green)
	player.cyan = n(player.red).min(player.blue)
	player.magenta = n(player.green).min(player.blue)
	player.white = n(player.red).min(player.green).min(player.blue)
}, 50)