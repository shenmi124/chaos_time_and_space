function autoSave(){
	if(player.autoSave=="false"){
		player.autoSave = "true"
		player.saveTick = 'false'
	}else{
		player.autoSave = "false"
		player.saveTick = 'false'
	}
}