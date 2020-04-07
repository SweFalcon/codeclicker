var codeamount = 0;
var codeaddperclick = 100;
var cps = 0;

var upgrade1cost = 50;
var upgrade1amount = 0;
var upgrade2cost = 400;
var upgrade2amount = 0;
var upgrade3cost = 4000;
var upgrade3amount = 0;
var upgrade4cost = 12000;
var upgrade4amount = 0;

var amountworker1 = 0;
var worker1cost = 100;
var worker1add = 0;

var amountworker2 = 0;
var worker2cost = 600;
var worker2add = 0;

var amountworker3 = 0;
var worker3cost = 4000;
var worker3add = 0;

var amountworker4 = 0;
var worker4cost = 8000;
var worker4add = 0;

function update(){
	document.getElementById("showcode").value = codeamount;
	document.getElementById("showcpc").value = codeaddperclick;
	document.getElementById("showcps").value = cps;

	document.getElementById("upgrade1amount").value = upgrade1amount;
	document.getElementById("upgrade2amount").value = upgrade2amount;
	document.getElementById("upgrade3amount").value = upgrade3amount;
	document.getElementById("upgrade4amount").value = upgrade4amount;


	document.getElementById("upgrade1cost").value = upgrade1cost;
	document.getElementById("upgrade2cost").value = upgrade2cost;
	document.getElementById("upgrade3cost").value = upgrade3cost;
	document.getElementById("upgrade4cost").value = upgrade4cost;

	document.getElementById("worker1cost").value = worker1cost;
	document.getElementById("worker2cost").value = worker2cost;
	document.getElementById("worker3cost").value = worker3cost;
	document.getElementById("worker4cost").value = worker4cost;

	document.getElementById("amountworker1").value = amountworker1;
	document.getElementById("amountworker2").value = amountworker2;
	document.getElementById("amountworker3").value = amountworker3;
	document.getElementById("amountworker4").value = amountworker4;

	if(upgrade1amount >= 1){
		var imgmonitor1 = document.getElementById("imgmonitor1");
		imgmonitor1.src = "monitor1.jpg"
	}

	if(upgrade2amount >= 1){
		var imgmouse1 = document.getElementById("imgmouse1");
		imgmouse1.src = "mouse1.jpg"
	}

	if(upgrade3amount >= 1){
		var imgkeyboard1 = document.getElementById("imgkeyboard1");
		imgkeyboard1.src = "keyboard.jpg"
	}
}





window.setInterval(function () {
	codeamount = codeamount + amountworker1 * 1;
	codeamount = codeamount + amountworker2 * 3;
	codeamount = codeamount + amountworker3 * 10;
	codeamount = codeamount + amountworker4 * 25;
	update()
}, 1000);





function addcode(){
	codeamount += codeaddperclick;
	update()
}

function save(){
	window.localStorage.setItem("savedcode", codeamount);

	window.localStorage.setItem("amountworker1", amountworker1);
	window.localStorage.setItem("amountworker2", amountworker2);
	window.localStorage.setItem("amountworker3", amountworker3);
	window.localStorage.setItem("amountworker4", amountworker4);

	window.localStorage.setItem("upgrade1amount", upgrade1amount);
	window.localStorage.setItem("upgrade2amount", upgrade2amount);
	window.localStorage.setItem("upgrade3amount", upgrade3amount);
	window.localStorage.setItem("upgrade4amount", upgrade4amount);


	window.localStorage.setItem("worker1cost", worker1cost);
	window.localStorage.setItem("worker2cost", worker2cost);
	window.localStorage.setItem("worker3cost", worker3cost);
	window.localStorage.setItem("worker4cost", worker4cost);

	window.localStorage.setItem("codeaddperclick", codeaddperclick);

	window.localStorage.setItem("upgrade1cost", upgrade1cost);
	window.localStorage.setItem("upgrade2cost", upgrade2cost);
	window.localStorage.setItem("upgrade3cost", upgrade3cost);
	window.localStorage.setItem("upgrade4cost", upgrade4cost);
	window.localStorage.setItem("cps", cps);

}

function load(){
	codeamount = window.localStorage.getItem("savedcode");

	amountworker1 = window.localStorage.getItem("amountworker1");
	amountworker2 = window.localStorage.getItem("amountworker2");
	amountworker3 = window.localStorage.getItem("amountworker3");
	amountworker4 = window.localStorage.getItem("amountworker4");

	upgrade1amount = window.localStorage.getItem("upgrade1amount");
	upgrade2amount = window.localStorage.getItem("upgrade2amount");
	upgrade3amount = window.localStorage.getItem("upgrade3amount");
	upgrade4amount = window.localStorage.getItem("upgrade4amount");

	worker1cost = window.localStorage.getItem("worker1cost");
	worker2cost = window.localStorage.getItem("worker2cost");
	worker3cost = window.localStorage.getItem("worker3cost");
	worker4cost = window.localStorage.getItem("worker4cost");

	codeaddperclick = window.localStorage.getItem("codeaddperclick");

	upgrade1cost = window.localStorage.getItem("upgrade1cost");
	upgrade2cost = window.localStorage.getItem("upgrade2cost");
	upgrade3cost = window.localStorage.getItem("upgrade3cost");
	upgrade4cost = window.localStorage.getItem("upgrade4cost");
	cps = window.localStorage.getItem("cps", cps);



	codeamount = parseInt(codeamount);

	amountworker1 = parseInt(amountworker1);
	amountworker2 = parseInt(amountworker2);
	amountworker3 = parseInt(amountworker3);
	amountworker4 = parseInt(amountworker4);

	upgrade1amount = parseInt(upgrade1amount);
	upgrade2amount = parseInt(upgrade2amount);
	upgrade3amount = parseInt(upgrade3amount);
	upgrade4amount = parseInt(upgrade4amount);

	worker1cost = parseInt(worker1cost);
	worker2cost = parseInt(worker2cost);
	worker3cost = parseInt(worker3cost);
	worker4cost = parseInt(worker4cost);

	codeaddperclick = parseInt(codeaddperclick);

	upgrade1cost = parseInt(upgrade1cost);
	upgrade2cost = parseInt(upgrade2cost);
	upgrade3cost = parseInt(upgrade3cost);
	upgrade4cost = parseInt(upgrade4cost);
	cps = parseInt(cps);
	update()

}

function upgrade1(){
	if(codeamount >= upgrade1cost){
		codeaddperclick += 1;
		codeamount -= upgrade1cost;
		upgrade1cost *= 2;
		upgrade1amount += 1;
		update()
	}
}

function upgrade2(){
	if(codeamount >= upgrade2cost){
		codeaddperclick += 5;
		codeamount -= upgrade2cost;
		upgrade2cost *= 2;
		upgrade2amount += 1;
		update()
	}
}

function upgrade3(){
	if(codeamount >= upgrade3cost){
		codeaddperclick += 15;
		codeamount -= upgrade3cost;
		upgrade3cost *= 2;
		upgrade3amount += 1;
		update()
	}
}

function upgrade4(){
	if(codeamount >= upgrade4cost){
		codeaddperclick += 50;
		codeamount -= upgrade4cost;
		upgrade4cost *= 2;
		upgrade4amount += 1;
		update()
	}
}

function workers1(){
	if(codeamount >= worker1cost){
		amountworker1 += 1;
		codeamount -= worker1cost;
		worker1cost *= 2;
		cps += 1;
		update()
	}
}

function workers2(){
	if(codeamount >= worker2cost){
		amountworker2 += 1;
		codeamount -= worker2cost;
		worker2cost *= 2;
		cps += 3;
		update()
	}
}

function workers3(){
	if(codeamount >= worker3cost){
		amountworker3 += 1;
		codeamount -= worker3cost;
		worker3cost *= 2;
		cps += 10;
		update()
	}
}

function workers4(){
	if(codeamount >= worker4cost){
		amountworker4 += 1;
		codeamount -= worker4cost;
		worker4cost *= 2;
		cps += 25;
		update()
	}
}
