function resetQuarkGain(){
	return player.white.gt(0) ? player.room_sub.max(1).log(5).pow(0.85).max(1).floor() : n(1)
}

function resetQuarkNext(){
	return Decimal.pow(5,n(resetQuarkGain()).add(1).root(0.85)).max(1)
}

function restQuark(){
	player.quark = player.quark.add(resetQuarkGain())
	player.showQuark = "true"
	layer_2()
}

function gain_quark_red(){
	return n(player.quark_red)
}

function gain_quark_green(){
	return n(player.quark_green)
}

function gain_quark_blue(){
	return n(player.quark_blue)
}

function restQuark_to_red(){
	player.quark_red = player.quark_red.add(player.quark)
	player.quark = n(0)
}

function restQuark_to_green(){
	player.quark_green = player.quark_green.add(player.quark)
	player.quark = n(0)
}

function restQuark_to_blue(){
	player.quark_blue = player.quark_blue.add(player.quark)
	player.quark = n(0)
}

function GainRed(){
	return n(gain_quark_red()).mul(time_speed())
}

function GainGreen(){
	return n(gain_quark_green()).mul(time_speed())
}

function GainBlue(){
	return n(gain_quark_blue()).mul(time_speed())
}

function RedEffect(){
	return player.red.pow(0.2).max(1)
}

function GreenEffect(){
	return player.green.pow(0.4).div(5)
}

function BlueEffect(){
	return player.blue.pow(0.2).max(1).factorial()
}

function YellowEffect(){
	return player.yellow.div(15).pow(0.5)
}

function CyanEffect(){
	return player.cyan.pow(1.1).max(1).log(8).max(1)
}

function MagentaEffect(){
	return player.magenta.pow(0.5).max(1)
}

function WhiteEffect(){
	return player.white.max(1).log(15).max(1).pow(0.1)
}