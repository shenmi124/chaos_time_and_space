function GainDim_1(){
	let base = n(player.dim_2)
	let base2 = n(0)
	if(player.hasRoomUpg4=="true" && player.points.gte(CostDim(1))){base2 = n(0.5)}
	return base.add(base2).mul(time_speed())
}

function CostDim(id){
	let base = player['dim_'+id].add(player['room_storage_dim'+id+'_progress']).add(1).mul(Decimal.add(10).pow(id-1))
	let pow = n(2).add(id-1)
	return base.pow(pow)
}

function buyDim(id){
	if(player.points.gte(CostDim(id))){
		player.points = player.points.sub(CostDim(id))
		player['dim_'+id] = player['dim_'+id].add(1)
	}
}