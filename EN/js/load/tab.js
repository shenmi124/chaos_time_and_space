var tab = true

function Close(id){
    document.getElementById(id).style.display = "none" 
}
function Open(id){
    document.getElementById(id).style.display = "" 
}

function buttonID(){
	if(player.points.gte(chestDiffCost()) && player.time_challenge2_chest_diff.gte(player.time_challenge2_chest_finish) && player.time_challenge2_chest_doing=='doing'){
        Open('button_room_challengeFi')
		Close('button_room_challengeRe')
		Close('button_room_challengeEa')
		Close('button_room_challenge')
    }else if(player.time_challenge2_chest_doing=='doing'){
        Close('button_room_challengeFi')
		Open('button_room_challengeRe')
		Open('button_room_challengeEa')
		Close('button_room_challenge')
    }else{
		Close('button_room_challengeFi')
		Close('button_room_challengeRe')
		Close('button_room_challengeEa')
		Open('button_room_challenge')
	}
	
	if(player.points.gte(50)){
		Open('button_room_rest')
	}else{
		Close('button_room_rest')
	}
	
	if(player.hasRoomUpg4=="true" || player.showQuark=="true" || player.showTime=="true"){
		Open('tab_room_upg1')
	}else{
		Close('tab_room_upg1')
	}
	
	if(player.hasRoomUpg8=="true" || player.showQuark=="true" || player.showTime=="true"){
		Open('tab_room_upg2')
	}else{
		Close('tab_room_upg2')
	}
	
	if(player.hasRoomUpg8=="true" || player.showQuark=="true" || player.showTime=="true"){
		Open('tab_room_sub')
	}else{
		Close('tab_room_sub')
	}
	
	if(player.room_sub.gte(30)){
		Open('button_quark_rest')
	}else{
		Close('button_quark_rest')
	}
	
	
	if(player.hasRoomUpg9=="true" || player.showQuark=="true" || player.showTime=="true"){
		Open('unlocked_tab_room_quark')
	}else{
		Close('unlocked_tab_room_quark')
	}
	
	if(player.hasRoomUpg10=="true" || player.showTime=="true"){
		Open('unlocked_tab_room_upg')
	}else{
		Close('unlocked_tab_room_upg')
	}
	
	if(player.hasRoomUpg11=="true" || player.showTime=="true"){
		Open('unlocked_dim2')
		Open('unlocked_dim2_button')
	}else{
		Close('unlocked_dim2')
		Close('unlocked_dim2_button')
	}
	
	if(player.hasRoomUpg12=="true" || player.showTime=="true"){
		Open('unlocked_tab_time')
	}else{
		Close('unlocked_tab_time')
	}
	
	if(player.time_challenge_doing=="nothing"){
		Open('time_challenge_1')
		Open('time_challenge_2')
		Open('time_challenge_3')
		Open('time_challenge_4')
		Close('button_time_challenge_out')
		Open('button_time_challenge_goin')
	}else{
		Close('time_challenge_1')
		Close('time_challenge_2')
		Close('time_challenge_3')
		Close('time_challenge_4')
		Open('button_time_challenge_out')
		Close('button_time_challenge_goin')
	}

	if(player.time_challenge_finish_1=='finish' && player.time_challenge=='time_challenge_1'){
		Close('button_time_challenge_goin')
	}

	if(((player.time_challenge_doing=='doing' && player.time_challenge=='time_challenge_1') || (player.time_challenge_finish_1=='finish' && player.time_challenge_doing=='nothing'))){
		Open('unlocked_tab_main_main')
		Open('unlocked_tab_main_time')
	}else{
		Close('unlocked_tab_main_main')
		Close('unlocked_tab_main_time')
	}

	//|| ((player.time_challenge_doing=='doing' && player.time_challenge=='time_challenge_3') || player.time_challenge_finish_3=='finish')
	
	if(((player.time_challenge_doing=='doing' && player.time_challenge=='time_challenge_2') || (player.time_challenge_finish_2=='finish' && player.time_challenge_doing=='nothing'))){
		Open('unlocked_tab_room_chest')
	}else{
		Close('unlocked_tab_room_chest')
	}

	if(player.time_challenge_finish_1=='finish'){
		Open('timeBuy2')
	}else{
		Close('timeBuy2')
	}
}

function firstTab(){
	if(tab==true){
		Close('tab_setting')
		Close('tab_room')
		Close('tab_room_chest')
		Close('tab_room_distorted')
		Close('tab_room_sub_quark')
		Close('tab_room_sub_upg')
		Close('tab_time')
		Close('tab_time_challenge')
		Close('tab_main_time')
		tab = false
	}
}

function showTab(id){
	if(id=="setting"){
		Open('tab_setting')
	}else{
		Close('tab_setting')
	}
	
	if(id=="main"){
		Open('tab_main')
	}else{
		Close('tab_main')
	}
	
	if(id=="room"){
		Open('tab_room')
	}else{
		Close('tab_room')
	}
	
	if(id=="time"){
		Open('tab_time')
	}else{
		Close('tab_time')
	}
}

function showTabMain(id){
	if(id=="main_main"){
		Open("tab_main_main")
	}else{
		
	}

	if(id=="main_time"){
		Open("tab_main_time")
		Close("tab_main_main")
	}else{
		Close("tab_main_time")
		Open("tab_main_main")
	}

	if(id=="room_upg"){
		Open("tab_room_upg")
	}else{
		Close("tab_room_upg")
	}
	
	if(id=="room_chest"){
		Open("tab_room_chest")
	}else{
		Close("tab_room_chest")
	}

	if(id=="room_distorted"){
		Open("tab_room_distorted")
	}else{
		Close("tab_room_distorted")
	}
	
	if(id=="time_challenge"){
		Open("tab_time_challenge")
	}else{
		Close("tab_time_challenge")
	}
	
	if(id=="time_space"){
		Open("tab_time_space")
	}else{
		Close("tab_time_space")
	}
}

function showTabMainSub(id){
	if(id=="room_sub_quark"){
		Open("tab_room_sub_quark")
	}else{
		Close("tab_room_sub_quark")
	}
	
	if(id=="room_sub_upg"){
		Open("tab_room_sub_upg")
	}else{
		Close("tab_room_sub_upg")
	}
}