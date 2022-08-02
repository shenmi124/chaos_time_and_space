function GainPoints(){
	let base = player.dim_1.add(player.dim_1_additiona).mul(MulDim_1())
	return base.mul(BlueEffect()).mul(time_speed())
}