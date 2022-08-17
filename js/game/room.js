function restRoomGain(){
	let log = n(50)
	let pow = n(0.7)
	if(player.hasRoomUpg3=="true"){
		log = n(5)
	}
	if(player.hasRoomUpg5=="true"){
		pow = n(1.15)
	}
	if(player.points.gte(50)){
		return player.points.log(log).pow(pow).mul(room_sub_Boostroom())
	}else{
		return n(0)
	}
}

function restRoom(){
	player.room = player.room.add(restRoomGain())
	layer_1()
}

function restRoom_distorted(){
	player.room_distorted = player.room_distorted.add(player.room)
	player.room = n(0)
	layer_0()
}

//秒获得空间
function GainRoom(){
	let base = n(0)
	if(player.hasRoomUpg6=="true"){base = base.add(player.roomUpgEff6)}
	if(player.hasRoomSubUpg7=="true"){base = base.mul(player.roomSubUpgEff7)}
	return base.add(GreenEffect()).mul(time_speed())
}

//秒获得子空间
function GainRoom_sub(){
	let base = n(0)
	if(player.hasRoomUpg8=="true"){base = base.add(player.roomUpgEff8)}
	return base.mul(time_speed())
}

function room_sub_Boostroom(){
	let base = player.room_sub.pow(n(0.1).mul(WhiteEffect())).max(1)
	return base
}

//扭曲空间
function GainRoom_progress(){
	let base = n(0)
	if(player.hasRoomUpg7=="true"){base = base.add(player.roomUpgEff7)}
	return base.mul(time_speed())
}

function buyRoomUpg(id,id2){
	if(player.room.gte(id2) && player['hasRoomUpg'+id]=="false"){
		player['hasRoomUpg'+id]="true"
		player.room = player.room.sub(id2)
		if(id==12 && player.time_challenge_doing=='doing'){
			if(player.time_challenge=='time_challenge_1'){
				player.time_challenge_finish_1 = 'finish'
				player.time_challenge_doing = 'nothing'
				player.time_challenge = 'time_challenge_0'
			}else if(player.time_challenge=='time_challenge_2'){
				player.time_challenge_finish_2 = 'finish'
				player.time_challenge_doing = 'nothing'
				player.time_challenge = 'time_challenge_0'
			}else if(player.time_challenge=='time_challenge_3'){
				player.time_challenge_finish_3 = 'finish'
				player.time_challenge_doing = 'nothing'
				player.time_challenge = 'time_challenge_0'
			}else if(player.time_challenge=='time_challenge_4'){
				player.time_challenge_finish_4 = 'finish'
				player.time_challenge_doing = 'nothing'
				player.time_challenge = 'time_challenge_0'
			}
		}
		layer_0()
	}
}

function getRoomUpgEff(){
	if(player['hasRoomUpg1']=="true"){player.roomUpgEff1 = n(player.dim_1.mul(0.1))}else{player.roomUpgEff1 = n(0)}
	if(player['hasRoomUpg2']=="true"){player.roomUpgEff2 = n(player.dim_1_additiona.add(2).log(2).max(1))}else{player.roomUpgEff2 = n(1)}
	if(player['hasRoomUpg6']=="true"){player.roomUpgEff6 = n(restRoomGain()).mul(MagentaEffect())}else{player.roomUpgEff6 = n(0)}
	if(player['hasRoomUpg7']=="true"){player.roomUpgEff7 = player.room.mul(0.1).mul(MagentaEffect())}else{player.roomUpgEff7 = n(0)}
	if(player['hasRoomUpg8']=="true"){player.roomUpgEff8 = n(GainRoom_progress()).mul(0.0000001).mul(MagentaEffect())}else{player.roomUpgEff8 = n(0)}
}

function buyRoomSubUpg(id,id2){
	if(player.room_sub.gte(id2) && player['hasRoomSubUpg'+id]=="false"){
		player['hasRoomSubUpg'+id]="true"
		player.room_sub = player.room_sub.sub(id2)
		layer_0()
	}
}

function getRoomSubUpgEff(){
	if(player['hasRoomSubUpg1']=="true"){
		let cao = n(0)
		for(col=1;col<=12;col++){
			if(player['hasRoomUpg'+col]=="true"){
				cao = cao.add(1)
			}
		}
		for(col2=1;col2<=8;col2++){
			if(player['hasRoomSubUpg'+col2]=="true"){
				cao = cao.add(1)
			}
		}
		
		player.roomSubUpgEff1 = n(cao).mul(0.15)
	}else{
		player.roomSubUpgEff1 = n(0)
	}
	if(player['hasRoomSubUpg2']=="true"){
		player.roomSubUpgEff2Red = n(1).add(n(RedEffect()).max(1).log(10))
		player.roomSubUpgEff2Green = n(1).add(n(GreenEffect()).max(1).log(10))
		player.roomSubUpgEff2Blue = n(1).add(n(BlueEffect()).max(1).log(10))
		player.roomSubUpgEff2Yellow = n(1).add(n(YellowEffect()).max(1).log(10))
		player.roomSubUpgEff2Cyan = n(1).add(n(CyanEffect()).max(1).log(10))
		player.roomSubUpgEff2Magenta = n(1).add(n(MagentaEffect()).max(1).log(10))
		player.roomSubUpgEff2White = n(1).add(n(WhiteEffect()).max(1).log(10))
	}else{
		player.roomSubUpgEff2Red = n(1)
		player.roomSubUpgEff2Green = n(1)
		player.roomSubUpgEff2Blue = n(1)
		player.roomSubUpgEff2Yellow = n(1)
		player.roomSubUpgEff2Cyan = n(1)
		player.roomSubUpgEff2Magenta = n(1)
		player.roomSubUpgEff2White = n(1)
	}
	if(player['hasRoomSubUpg4']=="true"){player.roomSubUpgEff4 = n(player.quark_red).mul(player.quark_green).mul(player.quark_blue).max(1).log(10).max(1)}else{player.roomSubUpgEff4 = n(1)}
	if(player['hasRoomSubUpg6']=="true"){
		if(player.hasRoomSubUpg8=='true'){
			player.roomSubUpgEff6 = n(player.quark)
		}else{
			player.roomSubUpgEff6 = n(player.quark).mul(0.01)
		}
	}else{
		player.roomSubUpgEff6 = n(0)
	}
	if(player['hasRoomSubUpg7']=="true"){player.roomSubUpgEff7 = Decimal.add(10).pow(n(player.points).max(1).log(10000).max(1))}else{player.roomSubUpgEff7 = n(1)}
	if(player['hasRoomSubUpg8']=="true"){player.roomSubUpgEff8 = n(resetQuarkGain())}else{player.roomSubUpgEff8 = n(0)}
}

function roomCss(){
	for(col=1;col<=12;col++){
		if(player['hasRoomUpg'+col]=="true"){
			getCss('roomUpg'+col,'rooms_upg_have')
			lossCss('roomUpg'+col,'rooms_upg_canBuy')
			lossCss('roomUpg'+col,'rooms_upg_cantBuy')
		}else{
			lossCss('roomUpg'+col,'rooms_upg_have')
			if(col==1){
				if(player.room.gte(1)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==2){
				if(player.room.gte(2)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==3){
				if(player.room.gte(4)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==4){
				if(player.room.gte(8)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==5){
				if(player.room.gte(18)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==6){
				if(player.room.gte(45)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==7){
				if(player.room.gte(1000)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==8){
				if(player.room.gte(30000)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==9){
				if(player.room.gte(200000)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==10){
				if(player.room.gte(100000000)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==11){
				if(player.room.gte(1e30)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
			if(col==12){
				if(player.room.gte(1e40)){
					getCss('roomUpg'+col,'rooms_upg_canBuy')
					lossCss('roomUpg'+col,'rooms_upg_cantBuy')
				}else{
					getCss('roomUpg'+col,'rooms_upg_cantBuy')
					lossCss('roomUpg'+col,'rooms_upg_canBuy')
				}
			}
		}
	}
	for(col2=1;col2<=8;col2++){
		if(player['hasRoomSubUpg'+col2]=="true"){
			getCss('roomSubUpg'+col2,'rooms_upg_have')
			lossCss('roomSubUpg'+col2,'rooms_upg_canBuy')
			lossCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
		}else{
			lossCss('roomSubUpg'+col2,'rooms_upg_have')
			if(col2==1){
				if(player.room_sub.gte(1e9)){
					getCss('roomSubUpg'+col2,'rooms_upg_canBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
				}else{
					getCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_canBuy')
				}
			}
			if(col2==2){
				if(player.room_sub.gte(3e11)){
					getCss('roomSubUpg'+col2,'rooms_upg_canBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
				}else{
					getCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_canBuy')
				}
			}
			if(col2==3){
				if(player.room_sub.gte(2e17)){
					getCss('roomSubUpg'+col2,'rooms_upg_canBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
				}else{
					getCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_canBuy')
				}
			}
			if(col2==4){
				if(player.room_sub.gte(5e20)){
					getCss('roomSubUpg'+col2,'rooms_upg_canBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
				}else{
					getCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_canBuy')
				}
			}
			
			if(col2==5){
				if(player.room_sub.gte(1e26)){
					getCss('roomSubUpg'+col2,'rooms_upg_canBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
				}else{
					getCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_canBuy')
				}
			}
			if(col2==6){
				if(player.room_sub.gte(4e29)){
					getCss('roomSubUpg'+col2,'rooms_upg_canBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
				}else{
					getCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_canBuy')
				}
			}
			if(col2==7){
				if(player.room_sub.gte(2e36)){
					getCss('roomSubUpg'+col2,'rooms_upg_canBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
				}else{
					getCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_canBuy')
				}
			}
			if(col2==8){
				if(player.room_sub.gte(1e52)){
					getCss('roomSubUpg'+col2,'rooms_upg_canBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
				}else{
					getCss('roomSubUpg'+col2,'rooms_upg_cantBuy')
					lossCss('roomSubUpg'+col2,'rooms_upg_canBuy')
				}
			}
		}
	}
}