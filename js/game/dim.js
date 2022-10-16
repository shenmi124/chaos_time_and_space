function GainDim_1(){
	let base = n(player.dim_2).pow(2)
	let base2 = n(0)
	if(player.hasRoomUpg4=="true" && player.points.gte(CostDim(1))){base2 = n(0.5)}
	return base.add(base2).mul(time_speed())
}

function Dim_1_Additiona(){
	return n(0).add(player.roomUpgEff1).add(YellowEffect()).add(chestFinEff2())
}

function GainDim_2(){
	let base = n(0)
	return base
}

function Dim_2_Additiona(){
	return n(0)
}

function MulDim_1(){
	return n(1).mul(player.roomUpgEff2).mul(Decimal.add(1.5).pow(player.dim_2))
}

function CostDim(id){
	let base = player['dim_'+id].add(1).mul(Decimal.add(10).pow(id-1)).pow(n(id).div(20).add(1))
	let pow = n(2).pow(id)
	return base.pow(pow)
}

function buyDim(id){
	if(id==1){
		if(player.points.gte(CostDim(id))){
			player.points = player.points.sub(CostDim(id))
			player['dim_'+id] = player['dim_'+id].add(1)
			layer_0()
		}
	}else{
		if(player['dim_'+(id-1)].gte(CostDim(id))){
			player['dim_'+(id-1)] = player['dim_'+(id-1)].sub(CostDim(id))
			player['dim_'+id] = player['dim_'+id].add(1)
			layer_0()
		}
	}
}

function dimCss(id){
	if(id==1){
		if(player.points.gte(CostDim(id)) && n(GainDim_1()).lte(0)){
			getCss('dim1ButtonCss','can_buyDim')
			lossCss('dim1ButtonCss','dim1_border')
		}else if(n(GainDim_1()).gt(0)){
			lossCss('dim1ButtonCss','can_buyDim')
			lossCss('dim1ButtonCss','dim1_border')
		}else{
			lossCss('dim1ButtonCss','can_buyDim')
			getCss('dim1ButtonCss','dim1_border')
		}
	}else if(id==2){
		if(player['dim_'+(id-1)].gte(CostDim(id))){
			getCss('dim2ButtonCss','can_buyDim')
			lossCss('dim2ButtonCss','dim2_border')
		}else{
			lossCss('dim2ButtonCss','can_buyDim')
			getCss('dim2ButtonCss','dim2_border')
		}
	}
}