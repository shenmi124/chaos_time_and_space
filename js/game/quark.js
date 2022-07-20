function resetQuarkGain(){
	return n(1)
}

function restQuark(){
	player.quark = player.quark.add(resetQuarkGain())
	player.showQuark = "true"
	layer_2()
}

function gain_quark_red(){
	return n(player.quark_red).mul(time_speed())
}

function gain_quark_green(){
	return n(player.quark_green).mul(time_speed())
}

function gain_quark_blue(){
	return n(player.quark_blue).mul(time_speed())
}

function restQuark_to_red(){
	player.quark_red = n(player.quark)
	player.quark = n(0)
}

function restQuark_to_green(){
	player.quark_green = n(player.quark)
	player.quark = n(0)
}

function restQuark_to_blue(){
	player.quark_blue = n(player.quark)
	player.quark = n(0)
}