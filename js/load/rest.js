function layer_UpgEff(){
	player.roomUpgEff1 = n(0)
	player.roomUpgEff2 = n(0)
	player.roomUpgEff6 = n(0)
	player.roomUpgEff7 = n(0)
	player.roomUpgEff8 = n(0)
	player.roomSubUpgEff1 = n(0)
	player.roomSubUpgEff2Red = n(0)
	player.roomSubUpgEff2Green = n(0)
	player.roomSubUpgEff2Blue = n(0)
	player.roomSubUpgEff2Yellow = n(0)
	player.roomSubUpgEff2Cyan = n(0)
	player.roomSubUpgEff2Magenta = n(0)
	player.roomSubUpgEff2White = n(0)
	player.roomSubUpgEff4 = n(0)
	player.roomSubUpgEff6 = n(0)
	player.roomSubUpgEff7 = n(0)
	player.roomSubUpgEff8 = n(0)
}

function layer_0(){
	player.time_challenge1_points = player.time_challenge1_points.mul(time_challenge1_buy_rest())
	player.time_challenge1_buy_1_distorted = player.time_challenge1_buy_1_distorted.mul(time_challenge1_buy_rest())
	player.time_challenge1_buy_2_distorted = player.time_challenge1_buy_2_distorted.mul(time_challenge1_buy_rest())
	player.time_challenge1_buy_3_distorted = player.time_challenge1_buy_3_distorted.mul(time_challenge1_buy_rest())
	player.time_challenge1_buy_4_distorted = player.time_challenge1_buy_4_distorted.mul(time_challenge1_buy_rest())
	player.time_challenge1_buy_6_distorted = player.time_challenge1_buy_6_distorted.mul(time_challenge1_buy_rest())
	player.time_challenge1_buy_7_distorted = player.time_challenge1_buy_7_distorted.mul(time_challenge1_buy_rest())
	player.time_challenge1_buy_8_distorted = player.time_challenge1_buy_8_distorted.mul(time_challenge1_buy_rest())
}

function layer_1(){
	player.points = n(10)
	if(player.hasRoomUpg4=="true"){player.dim_1 = n(2)}else{player.dim_1 = n(0)}
	player.dim_1_additiona = n(0)
	player.dim_2 = n(0)
	player.dim_2_additiona = n(0)
	
	layer_UpgEff()
	layer_0()
}

function layer_2(){
	for(row=1;row<=12;row++){
		if(player.hasRoomSubUpg5=="false"){
			player['hasRoomUpg'+row]="false"
		}
	}
	player.room = n(0)
	player.room_sub = n(0)
	player.room_storage = n(0)
	player.room_distorted = n(0)
	
	layer_1()
}
function layer_3(){
	for(row=1;row<=8;row++){
		player['hasRoomSubUpg'+row]="false"
	}
	player.quark = n(0)
	player.showQuark = 'false'
	player.quark_red = n(0)
	player.quark_green = n(0)
	player.quark_blue = n(0)
	player.red = n(0)
	player.green = n(0)
	player.blue = n(0)
	player.yellow = n(0)
	player.cyan = n(0)
	player.magenta = n(0)
	player.white = n(0)
	player.time_challenge1_points = n(0)
	player.time_challenge1_buy_1 = n(0)
	player.time_challenge1_buy_2 = n(0)
	player.time_challenge1_buy_3 = n(0)
	player.time_challenge1_buy_4 = n(0)
	player.time_challenge1_buy_5 = n(0)
	player.time_challenge1_buy_6 = n(0)
	player.time_challenge1_buy_7 = n(0)
	player.time_challenge1_buy_8 = n(0)
	player.time_challenge2_chest_doing = 'nothing'
	player.time_challenge2_chest_diff = n(0)
	player.time_challenge2_chest_finish = n(0)
	layer_2()
}