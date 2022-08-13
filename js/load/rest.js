function layer_1(){
	player.points = n(10)
	if(player.hasRoomUpg4=="true"){player.dim_1 = n(2)}else{player.dim_1 = n(0)}
	player.dim_1_additiona = n(0)
	player.dim_2 = n(0)
	player.dim_2_additiona = n(0)
	
	layer_UpgEff()
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
	layer_2()
}