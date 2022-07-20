function GainPoints(){
	let base = player.dim_1.add(player.dim_1_additiona).mul(player.roomUpgEff2)
	return base.mul(BlueEffect()).mul(time_speed())
}