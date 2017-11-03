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
		[1,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,3,3,3,3,,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1],
		[1,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1],
		[1,2,2,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1],
		[1,2,2,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1],
		[1,2,2,4,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	]
};


// these map to the CSS classes in main.css
const cssClass = Object.freeze({
	CHEST1: 	"chest1",
	KEY1: 		"key1",
	MONSTER1: 	"monster1",
	MONSTER2: 	"monster2",
	MONSTER3: 	"monster3",
	PLAYER: 	"player",
	RING1: 		"ring1",
	TREASURE1: 	"treasure1",
	TREASURE2: 	"treasure2"
});

const allGameObjects = {
	// we aren't using .type yet
	level1:[
		{x:10, y:18, type:"monster", 	className: cssClass.MONSTER1, name:"Monster"},
		{x:12, y:18, type:"monster",	className: cssClass.MONSTER1, name:"Monster"},
		{x:25, y:15, type:"monster",	className: cssClass.MONSTER2, name:"Monster"},
		{x:10, y:3,  type:"monster",	className: cssClass.MONSTER3, name:"Monster"},
		{x:24, y:15, type:"chest",		className: cssClass.CHEST1, name:"Chest"},
		{x:28, y:3,  type:"key",		className: cssClass.KEY1, name:"Key"},
		{x:17, y:5,  type:"treasure",	className: cssClass.TREASURE1, name:"Pendant"},
		{x:2,  y:17, type:"treasure",	className: cssClass.TREASURE2, name:"Gold"},
		{x:10, y:16, type:"ring",		className: cssClass.RING1, name:"Ring"}
	]
}

const chestItems = {   
    treasureList:[
        {className: cssClass.TREASURE1, name: "Pendant"},
        {className: cssClass.TREASURE2, name: "Gold"},
        {className: cssClass.RING1, name:"Ring"}
    ]
}


