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
		return player.points.log(log).pow(pow).mul(room_sub_Boostroom())
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

//存储扭曲时空
function room_dim_progress(){
	let a = n(player.dim_1).min(player.room_storage)
	player.room_storage_dim1_progress = n(a)
	layer_1()
}

function room_none_progress(){
	player.room_storage_dim1_progress = n(0)
	layer_1()
}

//秒获得空间
function GainRoom(){
	let base = n(0)
	if(player.hasRoomUpg6=="true"){base = base.add(player.roomUpgEff6)}
	return base.add(GreenEffect()).mul(time_speed())
}

//秒获得子空间
function GainRoom_sub(){
	let base = n(0)
	if(player.hasRoomUpg8=="true"){base = base.add(player.roomUpgEff8)}
	return base.mul(time_speed())
}

function room_sub_Boostroom(){
	let base = player.room_sub.pow(n(0.1).mul(WhiteEffect())).max(1)
	return base
}

//扭曲空间
function GainRoom_progress(){
	let base = n(0)
	if(player.hasRoomUpg7=="true"){base = base.add(player.roomUpgEff7)}
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
	if(player['hasRoomUpg6']=="true"){player.roomUpgEff6 = n(restRoomGain()).mul(MagentaEffect())}else{player.roomUpgEff6 = n(0)}
	if(player['hasRoomUpg7']=="true"){player.roomUpgEff7 = player.room.mul(0.1).mul(MagentaEffect())}else{player.roomUpgEff7 = n(0)}
	if(player['hasRoomUpg8']=="true"){player.roomUpgEff8 = n(GainRoom_progress()).mul(0.01).mul(MagentaEffect())}else{player.roomUpgEff8 = n(0)}
}

function buyRoomSubUpg(id,id2){
	if(player.room_sub.gte(id2) && player['hasRoomSubUpg'+id]=="false"){
		player['hasRoomSubUpg'+id]="true"
		player.room_sub = player.room_sub.sub(id2)
	}
}

function getRoomSubUpgEff(){
	if(player['hasRoomSubUpg1']=="true"){
		let cao = n(0)
		for(col=1;col<=12;col++){
			if(player['hasRoomUpg'+col]=="true"){
				cao = cao.add(1)
			}
		}
		for(col2=1;col2<=4;col2++){
			if(player['hasRoomSubUpg'+col2]=="true"){
				cao = cao.add(1)
			}
		}
		
		player.roomSubUpgEff1 = n(cao).mul(0.15)
	}else{
		player.roomSubUpgEff1 = n(0)
	}
}