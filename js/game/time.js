function time_challenge(){
	if(player.time_challenge_doing=="nothing"){
		player.time_challenge_doing = "doing"
		player.showTime = "true"
		layer_3()
	}else{
		player.time_challenge_doing = "nothing"
		player.showTime = "true"
		layer_3()
	}
}

function GainTime_space(){
	let base = n(0)
	if(player.hasRoomUpg12=='true' || player.showTime=="true"){base = n(1)}
	return n(1)
}