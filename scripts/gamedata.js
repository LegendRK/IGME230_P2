const gameworld = {

	world1: [ 
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1],
		[1,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1],
		[1,2,2,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1],
		[1,2,2,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1],
		[1,2,2,4,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	],
	
	world2: [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	]
};


// these map to the CSS classes in main.css
const cssClass = Object.freeze({
	CHEST1: 	"chest1",
	CHEST2:		"chest2",
	KEY1: 		"key1",
	MONSTER1: 	"monster1",
	MONSTER2: 	"monster2",
	MONSTER3: 	"monster3",
	PLAYER: 	"player",
	RING1: 		"ring1",
	TREASURE1: 	"treasure1",
	TREASURE2: 	"treasure2",
	DOOR:		"door",
    GUARD:      "guard",
    IRONDAGGER: "iron_dagger",
    IRONSWORD: "iron_sword",
    IRONLANCE: "iron_lance",
    IRONAXE: "iron_axe",
});

const allGameObjects = {
	// we aren't using .type yet
	level1:[
		{x:10, y:18, type:"monster", 	className: cssClass.MONSTER1, 	name:"Monster", health:6, power:5, hit:95},
		{x:12, y:18, type:"monster",	className: cssClass.MONSTER1, 	name:"Monster", health:6, power:5, hit:100},
		{x:25, y:15, type:"monster",	className: cssClass.MONSTER2, 	name:"Monster", health:6, power:5, hit:30},
		{x:10, y:3,  type:"monster",	className: cssClass.MONSTER3, 	name:"Monster", health:6, power:5, hit:80},
		{x:24, y:15, type:"chest",		className: cssClass.CHEST1, 	name:"Chest"},
		{x:28, y:3,  type:"key",		className: cssClass.KEY1, 		name:"Key"},
		{x:17, y:5,  type:"treasure",	className: cssClass.TREASURE1, 	name:"Pendant"},
		{x:2,  y:17, type:"treasure",	className: cssClass.TREASURE2, 	name:"Gold"},
		{x:10, y:16, type:"ring",		className: cssClass.RING1, 		name:"Ring"},
		{x:29, y:9,	 type:"door",		className: cssClass.DOOR, 		name:"Door"},
		{x:29, y:10, type:"door",		className: cssClass.DOOR, 		name:"Door"},
        {x:2,  y:2,  type:"weapon",     className: cssClass.IRONDAGGER, name:"Dagger", power:3, hit:100},
        //{x:3,  y:2,  type:"weapon",     className: cssClass.IRONSWORD, name:"Sword", power:4, hit:90},
        //{x:4,  y:2,  type:"weapon",     className: cssClass.IRONLANCE, name:"Lance", power:5, hit:75},
        //{x:5,  y:2,  type:"weapon",     className: cssClass.IRONAXE, name:"Axe", power:6, hit:65},
	],
	
	level2:[
		{x:0,  y:9,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:0,  y:10,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:17, y:5,  type:"treasure",	className: cssClass.TREASURE1, 	name:"Pendant"},
        {x:1, y:8,  type:"guard1",       className: cssClass.GUARD,      name:"Bob"},
	]
}

const chestItems = {   
    treasureList:[
        {type:"treasure", className: cssClass.TREASURE1, name: "Pendant"},
        {type:"treasure", className: cssClass.TREASURE2, name: "Gold"},
        {type:"ring", className: cssClass.RING1, name:"Ring"}
    ]
}

const enemyLoot = {
    treasureList:[
        {type:"treasure", className: cssClass.TREASURE2, name: "Gold"},
        {type:"weapon", className: cssClass.IRONDAGGER, name:"Dagger", power:3, hit:100},
        {type:"weapon", className: cssClass.IRONSWORD, name:"Sword", power:4, hit:90},
        {type:"weapon", className: cssClass.IRONLANCE, name:"Lance", power:5, hit:75},
        {type:"weapon", className: cssClass.IRONAXE, name:"Axe", power:6, hit:65},
    ]
}

