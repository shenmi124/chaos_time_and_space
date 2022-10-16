var t=new Date()
var timestart=new Date()
var diff=0

var color = 0
var colorAdd = false

function getDoc(id,id2){
	document.getElementById(id+"ID").innerHTML = format(id2);
}

function getDocInt(id,id2){
	document.getElementById(id+"ID").innerHTML = format(id2,0);
}

function getDocFiv(id,id2){
	document.getElementById(id+"ID").innerHTML = format(id2,5);
}

function getBuyDoc(id,id2){
	document.getElementById(id+"ID").innerHTML = id2;
}

function getCss(id,id2){
	document.getElementById(id).classList.add(id2)
}

function lossCss(id,id2){
	document.getElementById(id).classList.remove(id2)
}

function getID(){
	getDoc("dim_1",player.dim_1)
	getDoc("dim_1_additiona",Dim_1_Additiona())
	getDoc("dim_1_mul",MulDim_1())
	getDoc("dim_2",player.dim_2)
	getDoc("dim_2_additiona",Dim_2_Additiona())
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
	getDoc('room_distorted',player.room_distorted)
	getBuyDoc("GainRoom_progress",'(+'+format(GainRoom_progress())+'/sec)')
	getDoc("room_sub_Boostroom",room_sub_Boostroom())
	getDoc("resetRoomGain",restRoomGain())
	
	getDoc("roomUpgEff1",player.roomUpgEff1)
	getDoc("roomUpgEff2",player.roomUpgEff2)
	getDoc("roomUpgEff6",player.roomUpgEff6)
	getDoc("roomUpgEff7",player.roomUpgEff7)
	getDoc("roomUpgEff8",player.roomUpgEff8)
	
	for(row=1;row<=12;row++){
		getBuyDoc("buyRoomUpg"+row,player['hasRoomUpg'+row]=="true" ? "(Bought)" : "")
	}
	
	getDoc("roomSubUpgEff1",player.roomSubUpgEff1)
	getDoc("roomSubUpgEff4",player.roomSubUpgEff4)
	getDoc("roomSubUpgEff6",player.roomSubUpgEff6)
	getDoc("roomSubUpgEff7",player.roomSubUpgEff7)
	getDoc("roomSubUpgEff8",player.roomSubUpgEff8)
	
	for(row2=1;row2<=8;row2++){
		getBuyDoc("buyRoomSubUpg"+row2,player['hasRoomSubUpg'+row2]=="true" ? "(Bought)" : "")
	}
	
	getDoc("quark",player.quark)
	getDoc("resetQuarkGain",resetQuarkGain())
	getBuyDoc('restQuarkTaxt',player.white.gt(0) ? 'Next Quark at:'+format(resetQuarkNext())+'SubSpace' : 'Before you have the White Element , you can only gain 1 quark at a time')
	
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
		getBuyDoc("time_challenge","Move your mouse to see what's inside the box")
	}else if(player.time_challenge=="time_challenge_1"){
		getBuyDoc("time_challenge","<h3>Challenge : Time Speed<a id='time_challenge_finish_1ID'></a></h3><small>Effect:Time Speed is only 0.0001x<br>Things new:Unlock the Speed page in the Time<br>Goal:Unlock Time<br>Reward:Unlock the Speed page penman permanently,Magic Square's gain is ×100,Unlock a new Magic Square Buyable<br><small><small><small>Enter or Quit the Challenge will cause a Time Reset<br>Reset Time will keep showing the content")
		getBuyDoc("time_challenge_finish_1",player.time_challenge_finish_1=='finish' ? "(Completed)" : '')
	}else if(player.time_challenge=="time_challenge_2"){
		getBuyDoc("time_challenge","<h3>Challenge : Storage<a id='time_challenge_finish_2ID'></a></h3><small>Effect:Any number which is more than 1 will become (n÷n<sup>0.25</sup>).The reward form the Storage page will ignore it.<br>Things new:Unlock the Storage page in the Time<br>Goal:Unlock Time<br>Reward:Unlock the Storage page penman permanently,Magic Square's gain is ×100,Unlock a new Magic Square Buyable<br><small><small><small>Enter or Quit the Challenge will cause a Time Reset<br>Reset Time will keep showing the content")
		getBuyDoc("time_challenge_finish_2",player.time_challenge_finish_2=='finish' ? "(Completed)" : '')
	}else if(player.time_challenge=="time_challenge_3"){
		getBuyDoc("time_challenge","<h3>Challenge : Empty<a id='time_challenge_finish_3ID'></a></h3><small>Effect:You can't buy any upgrade except 'Space Time'<br>Things new:Unlock the Empty page in the Time<br>Goal:Unlock Time<br>Reward:Unlock the Empty page penman permanently,Magic Square's gain is ×100,Unlock a new Magic Square Buyable<br><small><small><small>Enter or Quit the Challenge will cause a Time Reset<br>Reset Time will keep showing the content")
		getBuyDoc("time_challenge_finish_3",player.time_challenge_finish_3=='finish' ? "(Completed)" : '')
	}else if(player.time_challenge=="time_challenge_4"){
		getBuyDoc("time_challenge","<h3>Challenge : Compression<a id='time_challenge_finish_4ID'></a></h3><small>Effect:Time Speed which is more than 1 will be weaken sharply<br>Things new:Unlock the Compression page in the Time<br>Goal:Unlock Time<br>Reward:Unlock the Compression page penman permanently,Magic Square's gain is ×100,Unlock a new Magic Square Buyable<br><small><small><small>Enter or Quit the Challenge will cause a Time Reset<br>Reset Time will keep showing the content")
		getBuyDoc("time_challenge_finish_4",player.time_challenge_finish_4=='finish' ? "(Completed)" : '')
	}
	
	if(player.time_challenge=="time_challenge_1" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:时速挑战</small><br>")
	}else if(player.time_challenge=="time_challenge_2" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:储存挑战</small><br>")
	}else if(player.time_challenge=="time_challenge_3" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:虚无挑战</small><br>")
	}else if(player.time_challenge=="time_challenge_4" && player.time_challenge_doing=="doing"){
		getBuyDoc("time_challenge_doing","<small>正在进行:压缩挑战</small><br>")
	}else{
		getBuyDoc("time_challenge_doing","<br>")
	}

	getDoc('time_space',player.time_space)
	getDoc('GainTime_space',GainTime_space())

	getDocInt('time_buy_1',player.time_buy_1)
	getDoc('timeBuyCost1',timeBuyCost(1))
	getDoc('timeBuyEff1',timeBuyEff(1))
	getDoc('timeBuyNextEff1',timeBuyNextEff(1))
	getDocInt('time_buy_2',player.time_buy_2)
	getDoc('timeBuyCost2',timeBuyCost(2))
	getDoc('timeBuyEff2',timeBuyEff(2))
	getDoc('timeBuyNextEff2',timeBuyNextEff(2))
	getDoc('timeBuyOtherEff2',timeBuyOtherEff(2))
	getDoc('timeBuyOtherNextEff2',timeBuyOtherNextEff(2))
	getDoc('timeBuyAllEff',timeBuyAllEff())

	getBuyDoc('main_br',((player.time_challenge_doing=='doing' && player.time_challenge=='time_challenge_1') || player.time_challenge_finish_1=='finish') || ((player.time_challenge_doing=='doing' && player.time_challenge=='time_challenge_3') || player.time_challenge_finish_3=='finish') ? '<br><br>' : '')

	getBuyDoc("time_challenge_finish",player.time_challenge_doing=='doing' ? "And complete the Challenge" : "")
	
	getDoc('time_challenge_points_1',player.time_challenge1_points)
	getDoc('GainTimeChallenge1Points',GainTimeChallenge1Points())
	getDoc('timeChallenge1Eff',timeChallenge1Eff())

	for(i=1;i<=4;i++){	
		getDocInt('time_challenge1_buy_'+i,player['time_challenge1_buy_'+i])
		getDoc('time_challenge1_buy_'+i+'_distorted',player['time_challenge1_buy_'+i+'_distorted'])
		getDoc('timeChallenge1BuyEff'+i,timeChallenge1BuyEff(i))
		getDoc('timeChallenge1BuyNextEff'+i,timeChallenge1BuyNextEff(i))
		getDoc('timeChallenge1BuyCost'+i,timeChallenge1BuyCost(i))
	}

	getDoc('GainTimeChallenge1ToPoints',GainTimeChallenge1Points())
	getDoc('GainTimeChallenge1To1',GainTimeChallenge1Dim1())
	getDoc('GainTimeChallenge1To2',GainTimeChallenge1Dim2())
	getDoc('GainTimeChallenge1To3',GainTimeChallenge1Dim3())
	getDoc('GainTimeChallenge1To4',GainTimeChallenge1Dim4())

	getDocInt('time_challenge1_buy_5',player.time_challenge1_buy_5)
	getDoc('timeChallenge1BuyCost5',timeChallenge1BuyCost(5))
	getBuyDoc("timeChallenge1BuyAuto1",player.time_challenge1_buy_5.gte(1) ? "1.Auto buy Δv and it will cost nothing<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto2",player.time_challenge1_buy_5.gte(2) ? "2.Auto buy ΔΔv and it will cost nothing<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto3",player.time_challenge1_buy_5.gte(3) ? "3.Auto buy ΔΔΔv and it will cost nothing<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto4",player.time_challenge1_buy_5.gte(4) ? "4.Auto buy Light<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto5",player.time_challenge1_buy_5.gte(5) ? "5.Auto buy Δv is 100 times faster<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto6",player.time_challenge1_buy_5.gte(6) ? "6.Auto buy ΔΔv is 100 times faster<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto7",player.time_challenge1_buy_5.gte(7) ? "7.Auto buy ΔΔΔv is 100 times faster<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto8",player.time_challenge1_buy_5.gte(8) ? "8.Buy Light and will cost nothing and reset nothing<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto9",player.time_challenge1_buy_5.gte(9) ? "9.Auto buy Gravitational Energy and it will cost nothing<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto10",player.time_challenge1_buy_5.gte(10) ? "10.Auto buy Magnetic Energy and it will cost nothing<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto11",player.time_challenge1_buy_5.gte(11) ? "11.Auto buy Chemical Energy and it will cost nothing<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto12",player.time_challenge1_buy_5.gte(12) ? "12.Mult all the buyable by log<sub>10</sub>(Mechanical Energy),Auto buy Mechanical Energy<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto13",player.time_challenge1_buy_5.gte(13) ? "13.Mult all the buyable speed by 1000,but you can only gain 10s' resource<br>" : "")
	getBuyDoc("timeChallenge1BuyAuto14",player.time_challenge1_buy_5.gte(14) ? "14.Each Mechanical Energy will let Mechanical Energy's cost exponent add by 0.2,Keep 10% Extra Time Speed buyable when resets<br>" : "")

	for(i=6;i<=8;i++){	
		getDocInt('time_challenge1_buy_'+i,player['time_challenge1_buy_'+i])
		getDoc('time_challenge1_buy_'+i+'_distorted',player['time_challenge1_buy_'+i+'_distorted'])
		getDoc('timeChallenge1BuyEff'+i,timeChallenge1BuyEff(i))
		getDocFiv('timeChallenge1PotEff'+i,timeChallenge1PotEff(i))
		getDoc('timeChallenge1BuyNextEff'+i,timeChallenge1BuyNextEff(i))
		getDoc('timeChallenge1BuyCost'+i,timeChallenge1BuyCost(i))
	}
	
	getDoc('GainTimeChallenge1To7',GainTimeChallenge1Dim6())
	getDoc('GainTimeChallenge1To8',GainTimeChallenge1Dim7())
	getDoc('GainTimeChallenge1To6',GainTimeChallenge1Dim8())

	getDoc('time_challenge2_chest_diff',player.time_challenge2_chest_diff)
	getDoc('time_challenge2_chest_finish',player.time_challenge2_chest_finish)
	getDoc('chestDiffCost',chestDiffCost())
	getDoc('chestFinEff1',chestFinEff1())
	getDoc('chestDiffEff2',chestDiffEff2())
	getDoc('chestFinEff2',chestFinEff2())
	getDoc('chestDiffEff3',chestDiffEff3())
	getDoc('chestFinEff3',chestFinEff3())
	getDoc('chestDiffEff4',chestDiffEff4())
	getDoc('chestFinEff4',chestFinEff4())
	getDoc('chestFinEff4End',player.points.add(1).pow(chestFinEff4()).log(8).max(1))
	getDoc('chestDiffEff5',chestDiffEff5())
	getDoc('chestFinEff5',chestFinEff5())

	getBuyDoc("devSpeed",player.devSpeed.eq(1) ? "" : " [Developer Mode] Total Time Speed:<a class='timespeed'>"+format(player.devSpeed)+"</a>×")
	getBuyDoc("autoSave",player.autoSave=="true" ? "On" : "Off")
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
	
	dimCss(1)
	dimCss(2)
	roomCss()
	timeCss(1)
	timeCss(2)
	timeChallenge1Css(1)
	timeChallenge1Css(2)
	timeChallenge1Css(3)
	timeChallenge1Css(4)
	timeChallenge1Css(5)
	timeChallenge1Css(6)
	timeChallenge1Css(7)
	timeChallenge1Css(8)
	
	player.points = player.points.add(GainPoints().mul(diff))
	
	player.dim_1 = player.dim_1.add(GainDim_1().mul(diff))
	
	player.room = player.room.add(GainRoom().mul(diff))
	player.room_distorted = player.room_distorted.add(GainRoom_progress().mul(diff))
	player.room_sub = player.room_sub.add(GainRoom_sub().mul(diff))
	
	player.red = player.red.add(GainRed().mul(diff))
	player.green = player.green.add(GainGreen().mul(diff))
	player.blue = player.blue.add(GainBlue().mul(diff))
	
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

	if(player.time_challenge1_buy_5.lte(12)){
		player.time_challenge1_points = player.time_challenge1_points.add(n(GainTimeChallenge1Points()).mul(diff))
		player.time_challenge1_buy_1_distorted = player.time_challenge1_buy_1_distorted.add(n(GainTimeChallenge1Dim1()).mul(diff))
		player.time_challenge1_buy_2_distorted = player.time_challenge1_buy_2_distorted.add(n(GainTimeChallenge1Dim2()).mul(diff))
		player.time_challenge1_buy_3_distorted = player.time_challenge1_buy_3_distorted.add(n(GainTimeChallenge1Dim3()).mul(diff))
		player.time_challenge1_buy_4_distorted = player.time_challenge1_buy_4_distorted.add(n(GainTimeChallenge1Dim4()).mul(diff))
		player.time_challenge1_buy_6_distorted = player.time_challenge1_buy_6_distorted.add(n(GainTimeChallenge1Dim6()).mul(diff))
		player.time_challenge1_buy_7_distorted = player.time_challenge1_buy_7_distorted.add(n(GainTimeChallenge1Dim7()).mul(diff))
		player.time_challenge1_buy_8_distorted = player.time_challenge1_buy_8_distorted.add(n(GainTimeChallenge1Dim8()).mul(diff))
	}else{
		player.time_challenge1_points = player.time_challenge1_points.add(n(GainTimeChallenge1Points()).mul(1000).mul(diff)).min(n(GainTimeChallenge1Points()).mul(10000))
		player.time_challenge1_buy_1_distorted = player.time_challenge1_buy_1_distorted.add(n(GainTimeChallenge1Dim1()).mul(1000).mul(diff)).min(n(GainTimeChallenge1Dim1()).mul(10000))
		player.time_challenge1_buy_2_distorted = player.time_challenge1_buy_2_distorted.add(n(GainTimeChallenge1Dim2()).mul(1000).mul(diff)).min(n(GainTimeChallenge1Dim2()).mul(10000))
		player.time_challenge1_buy_3_distorted = player.time_challenge1_buy_3_distorted.add(n(GainTimeChallenge1Dim3()).mul(1000).mul(diff)).min(n(GainTimeChallenge1Dim3()).mul(10000))
		player.time_challenge1_buy_4_distorted = player.time_challenge1_buy_4_distorted.add(n(GainTimeChallenge1Dim4()).mul(1000).mul(diff)).min(n(GainTimeChallenge1Dim4()).mul(10000))
		player.time_challenge1_buy_6_distorted = player.time_challenge1_buy_6_distorted.add(n(GainTimeChallenge1Dim6()).mul(1000).mul(diff)).min(n(GainTimeChallenge1Dim6()).mul(10000))
		player.time_challenge1_buy_7_distorted = player.time_challenge1_buy_7_distorted.add(n(GainTimeChallenge1Dim7()).mul(1000).mul(diff)).min(n(GainTimeChallenge1Dim7()).mul(10000))
		player.time_challenge1_buy_8_distorted = player.time_challenge1_buy_8_distorted.add(n(GainTimeChallenge1Dim8()).mul(1000).mul(diff)).min(n(GainTimeChallenge1Dim8()).mul(10000))
	}
	
	let auto5 = false
	let auto6 = false
	let auto7 = false
	if(player.time_challenge1_buy_5.gte(5)){auto5 = true}
	if(player.time_challenge1_buy_5.gte(6)){auto6 = true}
	if(player.time_challenge1_buy_5.gte(7)){auto7 = true}

	if(player.time_challenge1_buy_5.gte(1)){
		if(auto5==true){
			for(col=1;col<=100;col++){
				buyTimeChallenge1(1)
			}
		}else{
			buyTimeChallenge1(1)
		}
	}
	if(player.time_challenge1_buy_5.gte(2)){
		if(auto6==true){
			for(col=1;col<=100;col++){
				buyTimeChallenge1(2)
			}
		}else{
			buyTimeChallenge1(2)
		}
	}
	if(player.time_challenge1_buy_5.gte(3)){
		if(auto7==true){
			for(col=1;col<=100;col++){
				buyTimeChallenge1(3)
			}
		}else{
			buyTimeChallenge1(3)
		}
	}
	if(player.time_challenge1_buy_5.gte(4)){buyTimeChallenge1(4)}
	if(player.time_challenge1_buy_5.gte(9)){buyTimeChallenge1(6)}
	if(player.time_challenge1_buy_5.gte(10)){buyTimeChallenge1(7)}
	if(player.time_challenge1_buy_5.gte(11)){buyTimeChallenge1(8)}
	if(player.time_challenge1_buy_5.gte(12)){buyTimeChallenge1(5)}

	if(colorAdd==false){
		color += 2.3
	}else{
		color -= 2.3
	}
	if(color>=130){
		colorAdd = true
	}else if(color<=0){
		colorAdd = false
	}
	document.body.style.setProperty('--RedColor', 'rgba(255,200,200,'+color/100+')');
	document.body.style.setProperty('--GreenColor', 'rgba(200,255,200,'+color/100+')');
	document.body.style.setProperty('--BlueColor', 'rgba(200,200,255,'+color/100+')');
}, 50)