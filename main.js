/*
	TO DO:
	- Sort code out better
	- Add buildings
	- Add achievements
	- Add upgrades
	- Force things to unlock
	Upgrades:
	- Increase the rate you gather the resource: 20%, 50%, 100%, 200%, 400%
	- Increase the rate your workers gather the resource: 20%, 50%, 100%, 200%, 400%
	- Increase the value of the resource: 10%, 25%, 50%, 100%
	- "Workers Union", Increase the rate your workers gather resources based on how many workers you have total: (Bonus per/worker) 1%, 2%, 3%, 4%, 5%
	- Buildings: Logger Lodge - 
*/
//Variables
var resources = {
	cash: 0,
	wood: 0,
		woodPrice: 1,
		woodEff: 1,
	stone: 0,
		stonePrice: 3,
		stoneEff: 1,
	copper: 0,
		copperPrice: 9,
		copperEff: 1,
	tin: 0,
		tinPrice: 27,
		tinEff: 1,
	iron: 0,
		ironPrice: 81,
		ironEff: 1,
	steel: 0,
		steelPrice: 243,
		steelEff: 1
};
var workers = {
	workers: 0,
	workerCost: 20,
	nextCost: 20,
	totalWorkers: 0,
	woodWorkers: 0,
		woodWorkersEff: 0.5,
	stoneWorkers: 0,
		stoneWorkersEff: 1/6,
	copperWorkers: 0,
		copperWorkersEff: 1/10,
	tinWorkers: 0,														
		tinWorkersEff: 1/24,
	ironWorkers: 0,													
		ironWorkersEff: 1/60,
	steelWorkers: 0,													
		steelWorkersEff: 1/150
};
var upgrades = {
	unlockWood: 1,
		woodWorkerUpg1: 0,
		woodWorkerUpg2: 0,
		woodWorkerUpg3: 0,
		woodWorkerUpg4: 0,
		woodWorkerUpg5: 0,
	unlockStone: 1,
	unlockCopper: 0,
	unlockTin: 0,
	unlockIron: 0,
	unlockSteel: 0
	
};

//Update game numbers
function updateGameNumbers() {
	document.getElementById("cash").innerHTML = resources.cash;
	document.getElementById("wood").innerHTML = resources.wood.toFixed(1);
	document.getElementById("stone").innerHTML = resources.stone.toFixed(1);
	document.getElementById("copper").innerHTML = resources.copper.toFixed(1);
	document.getElementById("tin").innerHTML = resources.tin.toFixed(1);
	document.getElementById("iron").innerHTML = resources.iron.toFixed(1);
	document.getElementById("steel").innerHTML = resources.steel.toFixed(1);
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("woodWorkers").innerHTML = workers.woodWorkers;
	document.getElementById("stoneWorkers").innerHTML = workers.stoneWorkers;
	document.getElementById("copperWorkers").innerHTML = workers.copperWorkers;
	document.getElementById("tinWorkers").innerHTML = workers.tinWorkers;
	document.getElementById("ironWorkers").innerHTML = workers.ironWorkers;
	document.getElementById("steelWorkers").innerHTML = workers.steelWorkers;
	workers.nextCost = Math.round(20 * Math.pow(1.1,workers.totalWorkers));
	document.getElementById("workerCost").innerHTML = workers.nextCost;
}
	

//workers
function workerBuy (number){
	workers.workerCost = Math.round(20 * Math.pow(1.1,workers.totalWorkers));
	if(resources.cash >= workers.workerCost){
	workers.workers = workers.workers + number;
	resources.cash = resources.cash - workers.workerCost;
	workers.totalWorkers = workers.workers + workers.woodWorkers + workers.stoneWorkers + workers.copperWorkers + workers.ironWorkers + workers.tinWorkers + workers.steelWorkers;
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("cash").innerHTML = resources.cash;
	workers.nextCost = Math.round(20 * Math.pow(1.1,workers.totalWorkers));
	document.getElementById("workerCost").innerHTML = workers.nextCost;
}

//Wood
function woodG (number){
	resources.wood = resources.wood + number*resources.woodEff;
	document.getElementById("wood").innerHTML = resources.wood.toFixed(1);
}
function woodS (number){
	if(resources.wood >= number){
	resources.wood = resources.wood - number;
	resources.cash = resources.cash + number*resources.woodPrice;
	
	}
	document.getElementById("wood").innerHTML = resources.wood.toFixed(1);
	document.getElementById("cash").innerHTML = resources.cash;
}
function woodWorkerAdd (number){
	if(workers.workers > 0){
	workers.workers = workers.workers - number;
	workers.woodWorkers = workers.woodWorkers + number;
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("woodWorkers").innerHTML = workers.woodWorkers;
}
function woodWorkerRemove (number){
	if(workers.woodWorkers > 0){
	workers.woodWorkers = workers.woodWorkers - number;
	workers.workers = workers.workers + number;	
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("woodWorkers").innerHTML = workers.woodWorkers;
}

//Stone
function stoneG (number){
	resources.stone = resources.stone + number*resources.stoneEff;
	document.getElementById("stone").innerHTML = resources.stone.toFixed(1);
}
function stoneS (number){
	if(resources.stone >= number){
	resources.stone = resources.stone - number;
	resources.cash = resources.cash + resources.stonePrice*number;
	}
	document.getElementById("stone").innerHTML = resources.stone.toFixed(1);
	document.getElementById("cash").innerHTML = resources.cash;
}
function stoneWorkerAdd (number){
	if(workers.workers > 0){
	workers.workers = workers.workers - number;
	workers.stoneWorkers = workers.stoneWorkers + number;
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("stoneWorkers").innerHTML = workers.stoneWorkers;
}
function stoneWorkerRemove (number){
	if(workers.stoneWorkers > 0){
	workers.stoneWorkers = workers.stoneWorkers - number;
	workers.workers = workers.workers + number;	
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("stoneWorkers").innerHTML = workers.stoneWorkers;
}
/* Copper - Steel (LOCKED FOR NOW)*/

//Copper
function copperG (number){
	resources.copper = resources.copper + number*resources.copperEff;
	document.getElementById("copper").innerHTML = resources.copper.toFixed(1);
}
function copperS (number){
	if(resources.copper >= number){
	resources.copper = resources.copper - number;
	resources.cash = resources.cash + resources.copperPrice*number;
	}
	document.getElementById("copper").innerHTML = resources.copper.toFixed(1);
	document.getElementById("cash").innerHTML = resources.cash;
}
function copperWorkerAdd (number){
	if(workers.workers > 0){
	workers.workers = workers.workers - number;
	workers.copperWorkers = workers.copperWorkers + number;
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("copperWorkers").innerHTML = workers.copperWorkers;
}
function copperWorkerRemove (number){
	if(workers.copperWorkers > 0){
	workers.copperWorkers = workers.copperWorkers - number;
	workers.workers = workers.workers + number;	
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("copperWorkers").innerHTML = workers.copperWorkers;
}
function unlockCopper1 (number){
	if(resources.cash >= 100 && resources.wood >= 50 && resources.stone >= 50 && upgrades.unlockCopper != 1){
	upgrades.unlockCopper = 1;
	resources.cash = resources.cash - 100;
	resources.wood = resources.wood - 50;
	resources.stone = resources.stone - 50;
	document.getElementById("UnlockCopper").style.display="none";
	document.getElementById("Gcopper").style.display = "inline";
	document.getElementById("Scopper").style.display = "inline";
	}
	document.getElementById("cash").innerHTML = resources.cash;
	document.getElementById("wood").innerHTML = resources.wood.toFixed(1);
	document.getElementById("stone").innerHTML = resources.stone.toFixed(1);
}
//Tin
function tinG (number){
	resources.tin = resources.tin + number*resources.tinEff;
	document.getElementById("tin").innerHTML = resources.tin.toFixed(1);
}
function tinS (number){
	if(resources.tin >= number){
	resources.tin = resources.tin - number;
	resources.cash = resources.cash + resources.tinPrice*number;
	}
	document.getElementById("tin").innerHTML = resources.tin.toFixed(1);
	document.getElementById("cash").innerHTML = resources.cash;
}
function tinWorkerAdd (number){
	if(workers.workers > 0){
	workers.workers = workers.workers - number;
	workers.tinWorkers = workers.tinWorkers + number;
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("tinWorkers").innerHTML = workers.tinWorkers;
}
function tinWorkerRemove (number){
	if(workers.tinWorkers > 0){
	workers.tinWorkers = workers.tinWorkers - number;
	workers.workers = workers.workers + number;	
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("tinWorkers").innerHTML = workers.tinWorkers;
}
function unlockTin1 (number){
	if(resources.cash >= 500 && resources.wood >= 200 && resources.stone >= 125 && resources.copper >= 75 && upgrades.unlockTin != 1){
	upgrades.unlockTin = 1;
	resources.cash = resources.cash - 500;
	resources.wood = resources.wood - 200;
	resources.stone = resources.stone - 125;
	resources.copper = resources.copper - 75;
	document.getElementById("UnlockTin").style.display="none";
	document.getElementById("Gtin").style.display = "inline";
	document.getElementById("Stin").style.display = "inline";
	}
	document.getElementById("cash").innerHTML = resources.cash;
	document.getElementById("wood").innerHTML = resources.wood.toFixed(1);
	document.getElementById("stone").innerHTML = resources.stone.toFixed(1);
	document.getElementById("copper").innerHTML = resources.copper.toFixed(1);
}
//Iron
function ironG (number){
	resources.iron = resources.iron + number*resources.ironEff;
	document.getElementById("iron").innerHTML = resources.iron.toFixed(1);
}
function ironS (number){
	if(resources.iron >= number){
	resources.iron = resources.iron - number;
	resources.cash = resources.cash + resources.ironPrice*number;
	}
	document.getElementById("iron").innerHTML = resources.iron.toFixed(1);
	document.getElementById("cash").innerHTML = resources.cash;
}
function ironWorkerAdd (number){
	if(workers.workers > 0){
	workers.workers = workers.workers - number;
	workers.ironWorkers = workers.ironWorkers + number;
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("ironWorkers").innerHTML = workers.ironWorkers;
}
function ironWorkerRemove (number){
	if(workers.ironWorkers > 0){
	workers.ironWorkers = workers.ironWorkers - number;
	workers.workers = workers.workers + number;	
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("ironWorkers").innerHTML = workers.ironWorkers;
}
function unlockIron1 (number){
	if(resources.cash >= 2500 && resources.wood >= 1000 && resources.stone >= 700 && resources.copper >= 500 && resources.tin >= 300 && upgrades.unlockIron != 1){
	upgrades.unlockIron = 1;
	resources.cash = resources.cash - 2500;
	resources.wood = resources.wood - 1000;
	resources.stone = resources.stone - 700;
	resources.copper = resources.copper - 500;
	resources.tin = resources.tin - 300;
	document.getElementById("UnlockIron").style.display="none";
	document.getElementById("Giron").style.display = "inline";
	document.getElementById("Siron").style.display = "inline";
	}
	document.getElementById("cash").innerHTML = resources.cash;
	document.getElementById("wood").innerHTML = resources.wood.toFixed(1);
	document.getElementById("stone").innerHTML = resources.stone.toFixed(1);
	document.getElementById("copper").innerHTML = resources.copper.toFixed(1);
	document.getElementById("tin").innerHTML = resources.tin.toFixed(1);
}


//Steel
function steelG (number){
	resources.steel = resources.steel + number*resources.steelEff;
	document.getElementById("steel").innerHTML = resources.steel.toFixed(1);
}
function steelS (number){
	if(resources.steel >= number){
	resources.steel = resources.steel - number;
	resources.cash =resources.cash + resources.steelPrice*number;
	}
	document.getElementById("steel").innerHTML = resources.steel.toFixed(1);
	document.getElementById("cash").innerHTML = resources.cash;
}
function steelWorkerAdd (number){
	if(workers.workers > 0){
	workers.workers = workers.workers - number;
	workers.steelWorkers = workers.steelWorkers + number;
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("steelWorkers").innerHTML = workers.steelWorkers;
}
function steelWorkerRemove (number){
	if(workers.steelWorkers > 0){
	workers.steelWorkers = workers.steelWorkers - number;
	workers.workers = workers.workers + number;	
	}
	document.getElementById("workers").innerHTML = workers.workers;
	document.getElementById("steelWorkers").innerHTML = workers.steelWorkers;
}
function unlockSteel1 (number){
	if(resources.cash >= 15000 && resources.wood >= 5000 && resources.stone >= 3000 && resources.copper >= 2000 && resources.tin >= 1500 && upgrades.unlockIron != 1 && resources.iron >= 1000){
	upgrades.unlockSteel = 1;
	resources.cash = resources.cash - 15000;
	resources.wood = resources.wood - 5000;
	resources.stone = resources.stone - 3000;
	resources.copper = resources.copper - 2000;
	resources.tin = resources.tin - 1500;
	resources.iron = resources.iron - 1000;
	document.getElementById("UnlockSteel").style.display="none";
	document.getElementById("Gsteel").style.display = "inline";
	document.getElementById("Ssteel").style.display = "inline";
	}
	document.getElementById("cash").innerHTML = resources.cash;
	document.getElementById("wood").innerHTML = resources.wood.toFixed(1);
	document.getElementById("stone").innerHTML = resources.stone.toFixed(1);
	document.getElementById("copper").innerHTML = resources.copper.toFixed(1);
	document.getElementById("tin").innerHTML = resources.tin.toFixed(1);
	document.getElementById("iron").innerHTML = resources.iron.toFixed(1);
}




//Game Loop
window.setInterval(function(){
	woodG(workers.woodWorkers*workers.woodWorkersEff);
	stoneG(workers.stoneWorkers*workers.stoneWorkersEff);
	copperG(workers.copperWorkers*workers.copperWorkersEff);
	tinG(workers.tinWorkers*workers.tinWorkersEff);
	ironG(workers.ironWorkers*workers.ironWorkersEff);
	steelG(workers.steelWorkers*workers.steelWorkersEff);
	document.getElementById("cash").innerHTML = resources.cash;
	if(upgrades.unlockCopper != 1){
		if(resources.cash >= 50 || resources.wood >= 30 || resources.stone >= 30){
		document.getElementById("COPPER").style.visibility='visible';
		document.getElementById("UnlockCopper").style.display="inline";
		}
	}
	if(upgrades.unlockTin != 1){
		if(resources.cash >= 250 || resources.wood >= 100 || resources.stone >= 100 || resources.copper >= 50){
		document.getElementById("TIN").style.visibility="visible";
		document.getElementById("UnlockTin").style.display="inline";
		}
	}
	if(upgrades.unlockIron != 1){
		if(resources.cash >= 2000 || resources.wood >= 500 || resources.stone >= 500 || resources.copper >= 400 || resources.tin >= 300){
		document.getElementById("IRON").style.visibility="visible";
		document.getElementById("UnlockIron").style.display="inline";
		}
	}
	if(upgrades.unlockSteel != 1){
		if(resources.cash >= 2500 || resources.wood >= 1000 || resources.stone >= 1000 || resources.copper >= 1000 || resources.tin >= 1000 || resources.iron >= 500){
		document.getElementById("STEEL").style.visibility="visible";
		document.getElementById("UnlockSteel").style.display="inline";
		}
	}
}, 1000); 
window.setInterval(function(){
	if(workers.workers < 1 && upgrades.unlockWood == 1){
	document.getElementById("AddW1").style.visibility="hidden";
	}
	if(workers.workers >= 1 && upgrades.unlockWood == 1){
	document.getElementById("AddW1").style.display="inline";
	document.getElementById("AddW1").style.visibility="visible";
	}
	if(workers.woodWorkers < 1){
	document.getElementById("RemoveW1").style.visibility="hidden";
	}
	else{
	document.getElementById("RemoveW1").style.visibility="visible";
	document.getElementById("RemoveW1").style.display="inline";
	}
	if(workers.workers < 1 && upgrades.unlockStone == 1){
	document.getElementById("AddW2").style.visibility="hidden";
	}
	if(workers.workers >= 1 && upgrades.unlockStone == 1){
	document.getElementById("AddW2").style.display="inline";
	document.getElementById("AddW2").style.visibility="visible";
	}
	if(workers.stoneWorkers < 1){
	document.getElementById("RemoveW2").style.visibility="hidden";
	}
	else{
	document.getElementById("RemoveW2").style.visibility="visible";
	document.getElementById("RemoveW2").style.display="inline";
	}
	if(workers.workers < 1 && upgrades.unlockCopper == 1){
	document.getElementById("AddW3").style.visibility="hidden";
	}
	if(workers.workers >= 1 && upgrades.unlockCopper == 1){
	document.getElementById("AddW3").style.display="inline";
	document.getElementById("AddW3").style.visibility="visible";
	}
	if(workers.copperWorkers < 1){
	document.getElementById("RemoveW3").style.visibility="hidden";
	}
	else{
	document.getElementById("RemoveW3").style.visibility="visible";
	document.getElementById("RemoveW3").style.display="inline";
	}
	if(workers.workers < 1 && upgrades.unlockTin == 1){
	document.getElementById("AddW4").style.visibility="hidden";
	}
	if(workers.workers >= 1 && upgrades.unlockTin == 1){
	document.getElementById("AddW4").style.display="inline";
	document.getElementById("AddW4").style.visibility="visible";
	}
	if(workers.tinWorkers < 1){
	document.getElementById("RemoveW4").style.visibility="hidden";
	}
	else{
	document.getElementById("RemoveW4").style.visibility="visible";
	document.getElementById("RemoveW4").style.display="inline";
	}
	if(workers.workers < 1 && upgrades.unlockIron == 1){
	document.getElementById("AddW5").style.visibility="hidden";
	}
	if(workers.workers >= 1 && upgrades.unlockIron == 1){
	document.getElementById("AddW5").style.display="inline";
	document.getElementById("AddW5").style.visibility="visible";
	}
	if(workers.ironWorkers < 1){
	document.getElementById("RemoveW5").style.visibility="hidden";
	}
	else{
	document.getElementById("RemoveW5").style.visibility="visible";
	document.getElementById("RemoveW5").style.display="inline";
	}
	if(workers.workers < 1 && upgrades.unlockSteel == 1){
	document.getElementById("AddW6").style.visibility="hidden";
	}
	if(workers.workers >= 1 && upgrades.unlockSteel == 1){
	document.getElementById("AddW6").style.display="inline";
	document.getElementById("AddW6").style.visibility="visible";
	}
	if(workers.steelWorkers < 1){
	document.getElementById("RemoveW6").style.visibility="hidden";
	}
	else{
	document.getElementById("RemoveW6").style.visibility="visible";
	document.getElementById("RemoveW6").style.display="inline";
	}
}, 10);
function woodWorkerUpgA(){
	if(resources.cash >= 250){
	upgrades.woodWorkerUpg1 = 1;
	resources.cash = resources.cash - 250;
	workers.woodWorkersEff = 0.75;
	document.getElementById("WoodWorkerUpgA").style.display="none";
	document.getElementById("WoodWorkerUpgB").style.display="inline";
	}
	document.getElementById("cash").innerHTML = resources.cash;
}
function woodWorkerUpgB(){
	if(resources.cash >= 1000 && upgrades.woodWorkerUpg1 == 1){
	upgrades.woodWorkerUpg2 = 1;
	resources.cash = resources.cash - 1000;
	workers.woodWorkersEff = 1;
	document.getElementById("WoodWorkerUpgB").style.display="none";
	}
	document.getElementById("cash").innerHTML = resources.cash;
}

window.setInterval(function() {
    save_game();
	updateGameNumbers();
}, 100);

function save_game() {
    localStorage.game_save1 = btoa(JSON.stringify(resources));
	localStorage.game_save2 = btoa(JSON.stringify(workers));
	localStorage.game_save3 = btoa(JSON.stringify(upgrades));
}
	
function load_game() {
	var save_data1 = JSON.parse(atob(localStorage.game_save1));
	var save_data2 = JSON.parse(atob(localStorage.game_save2));
	var save_data3 = JSON.parse(atob(localStorage.game_save3));
	
	resources = save_data1;
	workers = save_data2;
	upgrades = save_data3;
	
	updateGameNumbers();
}
	