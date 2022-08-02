function room_distorted_speed(){
	let pow = n(1.25)
	if(player.hasRoomUpg7=="true"){
		pow = n(2.75)
	}
	let sp = player.room_distorted.add(1).pow(pow).log(2).max(1)
	return sp
}

function time_speed(){
	let sp = n(1)
	sp = sp.mul(room_distorted_speed())
	sp = sp.mul(CyanEffect())
	sp = sp.mul(player.roomSubUpgEff4)
	return sp
}