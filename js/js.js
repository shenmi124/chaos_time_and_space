var cao = true

function getDoc(id,id2){
	document.getElementById(id+"ID").innerHTML = format(id2);
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
	getDoc("GainRoom",GainRoom())
	getDoc("GainRoom_progress",GainRoom_progress())
	getDoc("room_storage",player.room_storage)
	getDoc("room_storage_dim1",player.room_storage_dim1)
	getDoc("room_storage_dim1_progress",player.room_storage_dim1_progress)
	getDoc("room_distorted",player.room_distorted)
	getDoc("resetRoomGain",restRoomGain())
	getDoc("roomUpgEff1",player.roomUpgEff1)
	getDoc("roomUpgEff2",player.roomUpgEff2)
	
	for(row=1;row<=8;row++){
		getBuyDoc("buyRoomUpg"+row,player['hasRoomUpg'+row]=="true" ? "(已购买)" : "")
	}
	
	getDoc("time_speed",time_speed())
	getDoc("room_distorted_speed",room_distorted_speed())
	getDoc("points_speed",points_speed())
}

function layer_1(){
	player.points = n(10)
	if(player.hasRoomUpg4=="true"){player.dim_1 = n(2)}else{player.dim_1 = n(0)}
	player.dim_2 = n(0)
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
	
	if(player.hasRoomUpg8=="true"){
		Open('unlocked_tab_time')
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
	if(!player.room_storage_dim1_progress.gt(0)){
		a = n(player.room_storage_dim1)
	}
	player.dim_1_additiona = n(0).add(a).add(player.roomUpgEff1)
}, 50)