var t=new Date()
var timestart=new Date()
var diff=0

function getDoc(id,id2){
	if(id2 !== null){
		document.getElementById(id+"ID").innerHTML = format(id2);
	}
}

function getBuyDoc(id,id2){
	document.getElementById(id+"ID").innerHTML = id2;
}

function getCss(id,id2){
	document.getElementById(id).class = id2
}

function getID(){
	getDoc("dim_1",player.dim_1)
	getDoc("dim_1_additiona",player.dim_1_additiona)
	getDoc("dim_1_mul",MulDim_1())
	getDoc("dim_2",player.dim_2)
	getDoc("dim_2_additiona",player.dim_2_additiona)
	getDoc("dim_2_mul",1)

	getDoc("GainDim_1",GainDim_1())
	getDoc("GainDim_2",GainDim_2())
	getDoc("CostDim_1",CostDim(1))
	getDoc("CostDim_2",CostDim(2))
	
	getDoc("points",player.points)
	getDoc("GainPoints",GainPoints())
	
	getDoc("room",player.room)
	getBuyDoc("GainRoom",'(+'+format(GainRoom())+'/sec)')
	getDoc("room_sub",player.room_sub)
	getBuyDoc("GainRoom_sub",'(+'+format(GainRoom_sub())+'/sec)')
	getBuyDoc("GainRoom_progress",'(+'+format(GainRoom_progress())+'/sec)')
	getDoc("room_sub_Boostroom",room_sub_Boostroom())
	getDoc("room_distorted",player.room_distorted)
	getDoc("resetRoomGain",restRoomGain())
	
	getDoc("roomUpgEff1",player.roomUpgEff1)
	getDoc("roomUpgEff2",player.roomUpgEff2)
	getDoc("roomUpgEff6",player.roomUpgEff6)
	getDoc("roomUpgEff7",player.roomUpgEff7)
	getDoc("roomUpgEff8",player.roomUpgEff8)
	
	for(row=1;row<=12;row++){
		getBuyDoc("buyRoomUpg"+row,player['hasRoomUpg'+row]=="true" ? "(已购买)" : "")
	}
	
	getDoc("roomSubUpgEff1",player.roomSubUpgEff1)
	getDoc("roomSubUpgEff4",player.roomSubUpgEff4)
	getDoc("roomSubUpgEff6",player.roomSubUpgEff6)
	getDoc("roomSubUpgEff7",player.roomSubUpgEff7)
	getDoc("roomSubUpgEff8",player.roomSubUpgEff8)
	
	for(row2=1;row2<=8;row2++){
		getBuyDoc("buyRoomSubUpg"+row2,player['hasRoomSubUpg'+row2]=="true" ? "(已购买)" : "")
	}
	
	getDoc("quark",player.quark)
	getDoc("resetQuarkGain",resetQuarkGain())
	getBuyDoc('restQuarkTaxt',player.white.gt(0) ? '下一个夸克在:'+format(resetQuarkNext())+'子空间时获取' : '在获得白元素前你一次最多可以获得1夸克')
	
	getDoc("quark_red",player.quark_red)
	getDoc("quark_green",player.quark_green)
	getDoc("quark_blue",player.quark_blue)
	
	getBuyDoc("GainQuarkRest",'(+'+format(GainQuarkRest())+'/sec)<br>')
	
	getBuyDoc("GainQuark_red",'(+'+format(GainQuark())+'/sec)')
	getBuyDoc("GainQuark_green",'(+'+format(GainQuark())+'/sec)')
	getBuyDoc("GainQuark_blue",'(+'+format(GainQuark())+'/sec)')
	
	getDoc("red",player.red)
	getDoc("green",player.green)
	getDoc("blue",player.blue)
	getDoc("yellow",player.yellow)
	getDoc("cyan",player.cyan)
	getDoc("magenta",player.magenta)
	getDoc("white",player.white)
	
	getDoc("gain_quark_red",gain_quark_red())
	getDoc("gain_quark_green",gain_quark_green())
	getDoc("gain_quark_blue",gain_quark_blue())
	
	getBuyDoc("GainRed",'(+'+format(GainRed())+'/sec)')
	getBuyDoc("GainGreen",'(+'+format(GainGreen())+'/sec)')
	getBuyDoc("GainBlue",'(+'+format(GainBlue())+'/sec)')
	
	getDoc("RedEffect",RedEffect())
	getDoc("GreenEffect",GreenEffect())
	getDoc("BlueEffect",BlueEffect())
	getDoc("YellowEffect",YellowEffect())
	getDoc("CyanEffect",CyanEffect())
	getDoc("MagentaEffect",MagentaEffect())
	getDoc("WhiteEffect",WhiteEffect())
	
	getDoc("roomSubUpgEff2Red",player.roomSubUpgEff2Red)
	getDoc("roomSubUpgEff2Green",player.roomSubUpgEff2Green)
	getDoc("roomSubUpgEff2Blue",player.roomSubUpgEff2Blue)
	getDoc("roomSubUpgEff2Yellow",player.roomSubUpgEff2Yellow)
	getDoc("roomSubUpgEff2Cyan",player.roomSubUpgEff2Cyan)
	getDoc("roomSubUpgEff2Magenta",player.roomSubUpgEff2Magenta)
	getDoc("roomSubUpgEff2White",player.roomSubUpgEff2White)
	
	getDoc("time_speed",time_speed())
	getDoc("room_distorted_speed",room_distorted_speed())
	
	if(player.time_challenge=="time_challenge_0"){
		getBuyDoc("time_challenge","鼠标移动并点击一个色块查看详情")
	}else if(player.time_challenge=="time_challenge_1"){
		getBuyDoc("time_challenge","<h3>时速挑战</h3>效果:时间倍率只有0.00001倍<br>扩张:在时间中解锁时速页面以及购买项<br>目标:解锁时间<br>奖励:永久解锁时速页面<br><small><small><small>进入挑战将进行一次时间重置<br>重置时间时会使先前大部分内容持续显示")
	}else if(player.time_challenge=="time_challenge_2"){
		getBuyDoc("time_challenge","<h3>储存挑战</h3>效果:非点数资源获得硬上限<br>扩张:在空间中解锁储存页面,储存可以根据存储数量完成挑战获得加成并推迟硬上限<br>目标:解锁时间<br>奖励:永久解锁储存页面<br><small><small><small>进入挑战将进行一次时间重置<br>重置时间时会使先前大部分内容持续显示")
	}else if(player.time_challenge=="time_challenge_3"){
		getBuyDoc("time_challenge","<h3>虚无挑战</h3>效果:除了'空间时间'外的升级将无法购买<br>扩张:在时空中解锁虚无页面,生产虚无获得加成<br>目标:解锁时间<br>奖励:永久解锁虚无页面<br><small><small><small>进入挑战将进行一次时间重置<br>重置时间时会使先前大部分内容持续显示")
	}else if(player.time_challenge=="time_challenge_4"){
		getBuyDoc("time_challenge","<h3>压缩挑战</h3>效果:超过1的时间速率效果将大幅度减弱<br>扩张:在空间中解锁压缩页面,压缩时空间获得加成<br>目标:解锁时间<br>奖励:永久解锁压缩页面<br><small><small><small>进入挑战将进行一次时间重置<br>重置时间时会使先前大部分内容持续显示")
	}
	
	if(player.time_challenge=="time_challenge_1" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:时速挑战<br>")
	}else if(player.time_challenge=="time_challenge_2" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:储存挑战<br>")
	}else if(player.time_challenge=="time_challenge_3" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:虚无挑战<br>")
	}else if(player.time_challenge=="time_challenge_4" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:压缩挑战<br>")
	}else{
		getBuyDoc("time_challenge_doing","<br>")
	}
	
	getDoc('time_space',player.time_space)
	getDoc('GainTime_space',GainTime_space())
	
	
	getBuyDoc("autoSave",player.autoSave=="true" ? "开" : "关")
}

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

setInterval(function(){
	t = new Date()
	var realDiff = n((Number(t.getTime())-timestart)/1000)
	diff = n(Math.min((Number(t.getTime())-timestart)/1000,1e100))
	//if(realDiff.gte(diff) &&!player.cheated){player.offlineSpeedup = player.offlineSpeedup.add(realDiff.sub(diff).add(1).pow(0.925).sub(1))}
	var offlineBoost = n(1).mul(player.devSpeed)
	diff=diff.mul(offlineBoost)
	timestart=t.getTime()
	
	getRoomUpgEff()
	getRoomSubUpgEff()
	if(player.autoSave=="true"){
		save()
	}else if(player.saveTick!='false_save'){
		player.saveTick = 'true'
	}
	if(player.saveTick=='true'){
		save()
		player.saveTick = 'false_save'
	}
	getID()
	buttonID()
	firstTab()
	document.title = '混乱时空 - '+format(player.points)+'时空悖论'
	
	player.points = player.points.add(GainPoints().mul(diff))
	
	player.dim_1 = player.dim_1.add(GainDim_1().mul(diff))
	
	player.room = player.room.add(GainRoom().mul(diff))
	player.room_distorted = player.room_distorted.add(GainRoom_progress().mul(diff))
	player.room_sub = player.room_sub.add(GainRoom_sub().mul(diff))
	
	player.red = player.red.add(GainRed().mul(diff))
	player.green = player.green.add(GainGreen().mul(diff))
	player.blue = player.blue.add(GainBlue().mul(diff))
	
	player.dim_1_additiona = n(0).add(player.roomUpgEff1).add(YellowEffect())
	
	player.yellow = n(player.red).min(player.green)
	player.cyan = n(player.red).min(player.blue)
	player.magenta = n(player.green).min(player.blue)
	player.white = n(player.red).min(player.green).min(player.blue)
	
	if(player.room_sub.gte(30)){
		player.quark = player.quark.add(n(GainQuarkRest()).mul(diff))
	}
	
	player.quark_red = player.quark_red.add(n(GainQuark()).mul(diff))
	player.quark_green = player.quark_green.add(n(GainQuark()).mul(diff))
	player.quark_blue = player.quark_blue.add(n(GainQuark()).mul(diff))
	
	player.time_space = player.time_space.add(n(GainTime_space()).mul(diff))
}, 50)