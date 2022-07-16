function restRoomGain(){
	let log = n(50)
	let pow = n(0.7)
	if(player.hasRoomUpg3=="true"){
		log = n(5)
	}
	if(player.hasRoomUpg5=="true"){
		pow = n(1.15)
	}
	if(player.points.gte(50)){
		return player.points.log(log).pow(pow)
	}else{
		return n(0)
	}
}

function restRoom(){
	if(player.room_storage_dim1_progress.gte(player.room_storage_dim1)){
		player.room_storage_dim1 = n(player.room_storage_dim1_progress)
	}
	player.room = player.room.add(restRoomGain())
	player.room_storage_dim1_progress = n(0)
	layer_1()
}

function restRoom_storage(){
	player.room_storage = player.room_storage.add(player.room).min(10)
	player.room = n(0)
}

function restRoom_distorted(){
	player.room_distorted = player.room_distorted.add(player.room)
	player.room = n(0)
}

function room_dim_progress(){
	let a = n(player.dim_1).min(player.room_storage)
	player.room_storage_dim1_progress = n(a)
	layer_1()
}

function room_none_progress(){
	player.room_storage_dim1_progress = n(0)
	layer_1()
}

function GainRoom(){
	let base = n(0)
	if(player.hasRoomUpg6=="true"){base = restRoomGain()}
	return base.mul(time_speed())
}

function GainRoom_progress(){
	let base = n(0)
	if(player.hasRoomUpg7=="true"){base = player.room.mul(0.1)}
	return base.mul(time_speed())
}

function buyRoomUpg(id,id2){
	if(player.room.gte(id2) && player['hasRoomUpg'+id]=="false"){
		player['hasRoomUpg'+id]="true"
		player.room = player.room.sub(id2)
	}
}

function getRoomUpgEff(){
	if(player['hasRoomUpg1']=="true"){player.roomUpgEff1 = n(player.dim_1.mul(0.1))}else{player.roomUpgEff1 = n(0)}
	if(player['hasRoomUpg2']=="true"){player.roomUpgEff2 = n(player.dim_1_additiona.add(1).log(2).max(1))}else{player.roomUpgEff2 = n(1)}
}