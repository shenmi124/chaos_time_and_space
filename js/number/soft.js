function softcap(id,id1,id2){
    let num = n(id)
    if(num.gte(id1)){
        return num.pow(id2).add(id1)
    }
    return num
}

function softpowcap(id,id1,id2){
    let num = n(id)
    if(num.gte(id1)){
      num = num.div(num.max(1).pow(id2).max(1))
    }
    return num
}