function GainDim_1(){
	let base = n(player.dim_2).pow(2)
	let base2 = n(0)
	if(player.hasRoomUpg4=="true" && player.points.gte(CostDim(1))){base2 = n(0.5)}
	return base.add(base2).mul(time_speed())
}

function GainDim_2(){
	let base = n(0)
	return base
}

function MulDim_1(){
	return n(1).mul(player.roomUpgEff2).mul(Decimal.add(1.25).pow(player.dim_2))
}

function CostDim(id){
	let base = player['dim_'+id].add(1).mul(Decimal.add(10).pow(id-1))
	let pow = n(2).pow(id)
	return base.pow(pow)
}

function buyDim(id){
	if(player.points.gte(CostDim(id)) && id==1){
		player.points = player.points.sub(CostDim(id))
		player['dim_'+id] = player['dim_'+id].add(1)
	}else if(player['dim_'+(id-1)].gte(CostDim(id))){
		player['dim_'+(id-1)] = player['dim_'+(id-1)].sub(CostDim(id))
		player['dim_'+id] = player['dim_'+id].add(1)
	}
}