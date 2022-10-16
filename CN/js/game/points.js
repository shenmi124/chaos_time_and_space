function GainPoints(){
	let base = player.dim_1.add(Dim_1_Additiona()).mul(MulDim_1())
	base = base.mul(BlueEffect()).mul(time_speed())
	base = base.div(chestDiffEff2())
	if(player.time_challenge2_chest_doing=='doing' || (player.time_challenge_doing=='doing' && player.time_challenge=='time_challenge_2')){base = softpowcap(base,n(1),n(0.25))}
	base = base.mul(chestFinEff1())
	base = base.mul(player.points.add(1).pow(chestFinEff4()).log(8).max(1))
	return base
}