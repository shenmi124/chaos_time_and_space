function startChestChallenge(){
    if(player.time_challenge2_chest_doing=='nothing'){
        player.time_challenge2_chest_doing = 'doing'
        player.time_challenge2_chest_diff = n(player.points)
        layer_1()
    }
}

function quitChestChallenge(){
    if(player.points.gte(chestDiffCost()) && player.time_challenge2_chest_diff.gte(player.time_challenge2_chest_finish)){
        player.time_challenge2_chest_finish = n(player.time_challenge2_chest_diff)
        player.time_challenge2_chest_doing = 'nothing'
        player.time_challenge2_chest_diff = n(0)
        layer_1()
    }else if(player.time_challenge2_chest_doing=='doing'){
        player.time_challenge2_chest_doing = 'nothing'
        player.time_challenge2_chest_diff = n(0)
        layer_1()
    }
}

function easyChestChallenge(){
    player.time_challenge2_chest_diff = player.time_challenge2_chest_diff.div(2).max(10)
}

function chestDiffCost(){
    return player.time_challenge2_chest_diff.mul(4).pow(0.95)
}

function chestDiffEff2(){
    let eff = n(1)
    if(player.time_challenge2_chest_diff.gt(10)){eff = player.time_challenge2_chest_diff.pow(2).log(2).add(1)}
    return eff.pow(chestDiffEff4())
}

function chestDiffEff3(){
    let eff = n(1)
    if(player.time_challenge2_chest_diff.gt(1000)){eff = player.time_challenge2_chest_diff.sub(1000).pow(5).log(2.5).add(1)}
    return eff.pow(chestDiffEff5())
}

function chestDiffEff4(){
    let eff = n(1)
    if(player.time_challenge2_chest_diff.gt(1500)){eff = player.time_challenge2_chest_diff.sub(1499).log(200)}
    return eff
}

function chestDiffEff5(){
    let eff = n(1)
    if(player.time_challenge2_chest_diff.gt(2500)){eff = player.time_challenge2_chest_diff.sub(2499).log(400)}
    return eff
}

function chestFinEff1(){
    return player.time_challenge2_chest_finish.pow(0.66).add(1)
}

function chestFinEff2(){
    let eff = n(0)
    if(player.time_challenge2_chest_finish.gt(50)){eff = player.time_challenge2_chest_finish.pow(2).add(1)}
    return eff
}

function chestFinEff3(){
    let eff = n(0)
    if(player.time_challenge2_chest_finish.gt(500)){eff = player.time_challenge2_chest_finish.log(15)}
    return eff
}

function chestFinEff4(){
    let eff = n(0)
    if(player.time_challenge2_chest_finish.gt(1000)){eff = n(2).pow(player.time_challenge2_chest_finish).max(1).log(100).max(1).pow(0.2).max(1).sub(1)}
    return eff
}

function chestFinEff5(){
    let eff = n(1)
    if(player.time_challenge2_chest_finish.gt(3000)){eff = player.time_challenge2_chest_finish.pow(1.05).add(1)}
    return eff
}