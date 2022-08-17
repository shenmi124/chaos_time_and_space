function room_distorted_speed(){
	let pow = n(1.25)
	if(player.hasRoomUpg7=="true"){
		pow = n(2.75)
	}
	let sp = player.room_distorted.add(1).pow(pow).log(2).max(1)
	return sp
}

function timeBuyAllEff(){
	let sp = n(1)
	sp = sp.mul(n(timeBuyEff(1)).add(1))
	if(player.time_challenge_doing == "doing"){return sp = n(1)}
	return sp
}

function time_speed(){
	let sp = n(1)
	sp = sp.mul(room_distorted_speed())
	sp = sp.mul(CyanEffect())
	sp = sp.mul(n(timeBuyAllEff()))
	if(player.time_challenge_doing == 'doing' && player.time_challenge == 'time_challenge_1'){sp = sp.mul(0.0001)}
	sp = sp.mul(timeChallenge1Eff())
	return sp
}