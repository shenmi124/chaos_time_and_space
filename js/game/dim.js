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
	let base = player['dim_'+id].add(1).mul(Decimal.add(10).pow(id-1)).pow(n(id).div(10).add(1))
	let pow = n(2).pow(id)
	return base.pow(pow)
}

function buyDim(id){
	if(id==1){
		if(player.points.gte(CostDim(id))){
			player.points = player.points.sub(CostDim(id))
			player['dim_'+id] = player['dim_'+id].add(1)
		}
	}else{
		if(player['dim_'+(id-1)].gte(CostDim(id))){
			player['dim_'+(id-1)] = player['dim_'+(id-1)].sub(CostDim(id))
			player['dim_'+id] = player['dim_'+id].add(1)
		}
	}
}

function dimCss(id){
	if(id==1){
		if(player.points.gte(CostDim(id)) && player['dim_'+(id+1)].lte(0) && player.hasRoomUpg4=='false'){
			getCss('unlocked_dim1_button','can_buyDim')
			lossCss('unlocked_dim1_button','dim1_border')
		}else{
			lossCss('unlocked_dim1_button','can_buyDim')
			getCss('unlocked_dim1_button','dim1_border')
		}
	}else if(id==2){
		if(player['dim_'+(id-1)].gte(CostDim(id))){
			getCss('unlocked_dim2_button','can_buyDim')
			lossCss('unlocked_dim2_button','dim2_border')
		}else{
			lossCss('unlocked_dim2_button','can_buyDim')
			getCss('unlocked_dim2_button','dim2_border')
		}
	}
}