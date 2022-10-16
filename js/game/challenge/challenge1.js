function GainTimeChallenge1Points(){
    return n(player.time_challenge1_buy_1.add(player.time_challenge1_buy_1_distorted)).mul(timeChallenge1BuyEff(1)).mul(timeBuyEff(2))
}

function GainTimeChallenge1Dim1(){
    return n(player.time_challenge1_buy_2.add(player.time_challenge1_buy_2_distorted)).mul(timeChallenge1BuyEff(2))
}

function GainTimeChallenge1Dim2(){
    return n(player.time_challenge1_buy_3.add(player.time_challenge1_buy_3_distorted)).mul(timeChallenge1BuyEff(3))
}

function GainTimeChallenge1Dim3(){
    return n(player.time_challenge1_buy_4.add(player.time_challenge1_buy_4_distorted)).mul(timeChallenge1BuyEff(4))
}

function GainTimeChallenge1Dim4(){
    let base = n(player.time_challenge1_buy_4.add(player.time_challenge1_buy_4_distorted)).mul(timeChallenge1BuyEff(4))
    if(base.gt(0)){base = base.log(10)}
    return base
}

function GainTimeChallenge1Dim6(){
    let base = n(0)
    if(player.time_challenge1_buy_8.add(player.time_challenge1_buy_8_distorted).gte(1)){
        base = n(player.time_challenge1_buy_8.add(player.time_challenge1_buy_8_distorted)).log(2).max(1).mul(timeChallenge1BuyEff(8))
    }
    return base
}

function GainTimeChallenge1Dim7(){
    let base = n(0)
    if(player.time_challenge1_buy_6.add(player.time_challenge1_buy_6_distorted).gte(1)){
        base = n(player.time_challenge1_buy_6.add(player.time_challenge1_buy_6_distorted)).log(2).max(1).mul(timeChallenge1BuyEff(6))
    }
    return base
}

function GainTimeChallenge1Dim8(){
    let base = n(0)
    if(player.time_challenge1_buy_7.add(player.time_challenge1_buy_7_distorted).gte(1)){
        base = n(player.time_challenge1_buy_7.add(player.time_challenge1_buy_7_distorted)).log(2).max(1).mul(timeChallenge1BuyEff(7))
    }
    return base
}

function timeChallenge1PotEff(id){
    if(id==6){
        let eff = n(2).pow(player.time_challenge1_buy_6.add(player.time_challenge1_buy_6_distorted)).max(1).log(100).max(1).mul(timeChallenge1BuyEff(6)).pow(0.2).max(1)
		return eff
    }else if(id==7){
        let eff = n(2).pow(player.time_challenge1_buy_7.add(player.time_challenge1_buy_7_distorted)).max(1).log(100).max(1).mul(timeChallenge1BuyEff(7)).log(35).max(1)
		return eff
    }else if(id==8){
        let eff = n(1).div(n(2).pow(player.time_challenge1_buy_8.add(player.time_challenge1_buy_8_distorted)).max(1).log(100).max(1).mul(timeChallenge1BuyEff(8)).log(35).pow(0.2).max(1))
		return eff
    }
}

function timeChallenge1Eff(){
    let num = player.time_challenge1_points.max(1).log(1.85).max(1).pow(n(0.2).mul(timeChallenge1PotEff(6))).max(1)
    num = softpowcap(num,n(0),n(0.8))
    return num
}

function timeChallenge1BuyCost(id){
	if(id==1){
		let cost = player.time_challenge1_buy_1.pow(1.2).pow(player.time_challenge1_buy_1.add(1).div(5)).pow(timeChallenge1PotEff(8))
		return cost
	}else if(id==2){
        let cost = player.time_challenge1_buy_2.add(1).pow(1.4).pow(player.time_challenge1_buy_2.add(1).div(3)).mul(1e13).pow(timeChallenge1PotEff(8))
		return cost
    }else if(id==3){
        let cost = player.time_challenge1_buy_3.add(1).pow(1.75).pow(player.time_challenge1_buy_3.add(1).div(1.5)).mul(1e36).pow(timeChallenge1PotEff(8))
		return cost
    }else if(id==4){
        let cost = n(1e32).pow(player.time_challenge1_buy_4.add(1)).pow(2.5).pow(timeChallenge1PotEff(8))
		return cost
    }else if(id==5){
        let a = n(1)
        if(player.time_challenge1_buy_5.gte(14)){a = n(1).add(player.time_challenge1_buy_5.mul(0.2))}
        return n(1e25).pow(player.time_challenge1_buy_5.add(1)).pow(6).pow(a).pow(timeChallenge1PotEff(8))
    }else if(id==6){
        let cost = n(1e20).pow(player.time_challenge1_buy_6.add(1)).pow(n(9).mul(player.time_challenge1_buy_6.mul(0.1).add(1))).pow(timeChallenge1PotEff(8))
		return cost
    }else if(id==7){
        let cost = n(1e35).pow(player.time_challenge1_buy_7.add(1)).pow(n(9).mul(player.time_challenge1_buy_7.mul(0.4).add(1))).pow(timeChallenge1PotEff(8))
		return cost
    }else if(id==8){
        let cost = n(1e50).pow(player.time_challenge1_buy_8.add(1)).pow(n(9).mul(player.time_challenge1_buy_8.mul(0.9).add(1))).pow(timeChallenge1PotEff(8))
		return cost
    }
}

function timeChallenge1BuyEff(id){
    let effBoost = n(1)
    if(player.time_challenge1_buy_5.gte(12)){effBoost = n(player.time_challenge1_buy_5).log(10)}
	if(id==1){
		let eff = n(2).pow(player.time_challenge1_buy_1).mul(timeChallenge1BuyEff(4)).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
	}else if(id==2){
        let eff = n(2).pow(player.time_challenge1_buy_2).mul(timeChallenge1BuyEff(4)).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
    }else if(id==3){
        let eff = n(2).pow(player.time_challenge1_buy_3).mul(timeChallenge1BuyEff(4)).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
    }else if(id==4){
        let eff = n(100).pow(player.time_challenge1_buy_4).mul(timeChallenge1PotEff(7)).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
    }else if(id==6){
        let eff = n(2).pow(player.time_challenge1_buy_6).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
    }else if(id==7){
        let eff = n(2).pow(player.time_challenge1_buy_7).mul(effBoost)
		return eff
    }else if(id==8){
        let eff = n(2).pow(player.time_challenge1_buy_8).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
    }
}

function timeChallenge1BuyNextEff(id){
    let effBoost = n(1)
    if(player.time_challenge1_buy_5.gte(12)){effBoost = n(player.time_challenge1_buy_5).log(2)}
	if(id==1){
		let eff = n(2).pow(player.time_challenge1_buy_1.add(1)).mul(timeChallenge1BuyEff(4)).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
	}else if(id==2){
        let eff = n(2).pow(player.time_challenge1_buy_2.add(1)).mul(timeChallenge1BuyEff(4)).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
    }else if(id==3){
        let eff = n(2).pow(player.time_challenge1_buy_3.add(1)).mul(timeChallenge1BuyEff(4)).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
    }else if(id==4){
        let eff = n(100).pow(player.time_challenge1_buy_4.add(1)).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
    }else if(id==6){
        let eff = n(2).pow(player.time_challenge1_buy_6.add(1)).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
    }else if(id==7){
        let eff = n(2).pow(player.time_challenge1_buy_7.add(1)).mul(effBoost)
		return eff
    }else if(id==8){
        let eff = n(2).pow(player.time_challenge1_buy_8.add(1)).mul(timeChallenge1PotEff(7)).mul(effBoost)
		return eff
    }
}

function time_challenge1_buy_rest(){
    let base = n(0)
    if(player.time_challenge1_buy_8.gt(13)){base = base.add(0.1)}
    base = base.add(timeBuyOtherEff(2))
    return base.min(1)
}

function buyTimeChallenge1(id){
	let cost = n(timeChallenge1BuyCost(id))
	if(player.time_challenge1_points.gte(cost)){
        let auto1 = false
        let auto2 = false
        let auto3 = false
        let auto4 = false
        let auto8 = false
        let auto9 = false
        let auto10 = false
        let auto11 = false
        if(player.time_challenge1_buy_5.gte(1)){auto1 = true}
        if(player.time_challenge1_buy_5.gte(2)){auto2 = true}
        if(player.time_challenge1_buy_5.gte(3)){auto3 = true}
        if(player.time_challenge1_buy_5.gte(4)){auto4 = true}
        if(player.time_challenge1_buy_5.gte(8)){auto8 = true}
        if(player.time_challenge1_buy_5.gte(9)){auto9 = true}
        if(player.time_challenge1_buy_5.gte(10)){auto10 = true}
        if(player.time_challenge1_buy_5.gte(11)){auto11 = true}

        player['time_challenge1_buy_'+id] = player['time_challenge1_buy_'+id].add(1)

        if(id==1 && auto1==false){player.time_challenge1_points = player.time_challenge1_points.sub(cost)}
        if(id==2 && auto2==false){player.time_challenge1_points = player.time_challenge1_points.sub(cost)}
        if(id==3 && auto3==false){player.time_challenge1_points = player.time_challenge1_points.sub(cost)}
        if(id==4 && auto4==false){player.time_challenge1_points = player.time_challenge1_points.sub(cost)}
        if(id==6 && auto9==false){player.time_challenge1_points = player.time_challenge1_points.sub(cost)}
        if(id==7 && auto10==false){player.time_challenge1_points = player.time_challenge1_points.sub(cost)}
        if(id==8 && auto11==false){player.time_challenge1_points = player.time_challenge1_points.sub(cost)}

        if(id==4 && auto8==false){
            player.time_challenge1_buy_1 = n(0)
            player.time_challenge1_buy_2 = n(0)
            player.time_challenge1_buy_3 = n(0)
            player.time_challenge1_points = n(0)
            player.time_challenge1_buy_1_distorted = n(0)
            player.time_challenge1_buy_2_distorted = n(0)
            player.time_challenge1_buy_3_distorted = n(0)
        }
        if(id==5 && player.time_challenge1_buy_5.eq(12)){
            layer_0
        }
	}
}

function timeChallenge1Css(id){
	let cost = n(timeChallenge1BuyCost(id))
	if(player.time_challenge1_points.gte(cost)){
		getCss('time_challenge1_buy_'+id,'time_challenge1_buy_can')
	}else{
		lossCss('time_challenge1_buy_'+id,'time_challenge1_buy_can')
	}
}