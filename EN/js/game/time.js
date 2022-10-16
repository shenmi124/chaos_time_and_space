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
	if(player.time_challenge_finish_1=='finish'){base = base.mul(100)}
	return base
}

function timeBuyCost(id){
	if(id==1){
		let cost = player.time_buy_1.add(1).mul(3).pow(player.time_buy_1.div(20).add(1))
		return cost
	}else if(id==2){
		let cost = player.time_buy_2.add(1).mul(300).pow(player.time_buy_2.div(15).add(1))
		return cost
	}
}

function timeBuyEff(id){
	if(id==1){
		let eff = player.time_buy_1.mul(1.5).add(1).pow(player.time_buy_1.div(10).add(1)).sub(1).max(1)
		return eff
	}else if(id==2){
		let eff = player.time_buy_2.mul(1.75).add(1).pow(player.time_buy_2.div(8).add(1)).sub(1).max(1)
		return eff
	}
}

function timeBuyNextEff(id){
	if(id==1){
		let eff = player.time_buy_1.add(1).mul(1.5).add(1).pow(player.time_buy_1.add(1).div(10).add(1)).sub(1).max(1)
		return eff
	}else if(id==2){
		let eff = player.time_buy_2.add(1).mul(1.75).add(1).pow(player.time_buy_2.add(1).div(8).add(1)).sub(1).max(1)
		return eff
	}
}

function timeBuyOtherEff(id){
	if(id==2){
		let eff = player.time_buy_2.mul(1.75).pow(player.time_buy_2.div(8).add(1)).add(5).log(5).sub(1).max(0)
		return eff
	}
}

function timeBuyOtherNextEff(id){
	if(id==2){
		let eff = player.time_buy_2.add(1).mul(1.75).pow(player.time_buy_2.add(1).div(8).add(1)).add(5).log(5).sub(1).max(0)
		return eff
	}
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