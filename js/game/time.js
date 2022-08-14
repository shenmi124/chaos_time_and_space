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

function timeBuyCost(id){
	if(id==1){
		let cost = player.time_buy_1.add(1).mul(3).pow(player.time_buy_1.div(20).add(1))
		return cost
	}
}

function timeBuyEff(id){
	if(id==1){
		let eff = player.time_buy_1.mul(1.5).add(1).pow(player.time_buy_1.div(50).add(1)).sub(1).max(0)
		return eff
	}
}

function timeBuyNextEff(id){
	if(id==1){
		let eff = player.time_buy_1.add(1).mul(1.5).add(1).pow(player.time_buy_1.div(50).add(1)).sub(1).max(0)
		return eff
	}
}

function timeBuyAllEff(){
	let sp = n(1)
	sp = sp.mul(n(timeBuyEff(1)).add(1))
	return sp
}

function buyTime(id){
	let cost = n(timeBuyCost(id))
	if(player.time_space.gte(cost)){
		player['time_buy_'+id] = player['time_buy_'+id].add(1)
		player.time_space = player.time_space.sub(cost)
	}
}

function timeCss(id){
	let cost = n(timeBuyCost(id))
	if(player.time_space.gte(cost)){
		getCss('timeBuy'+id,'time_buy_can')
	}else{
		lossCss('timeBuy'+id,'time_buy_can')
	}
}