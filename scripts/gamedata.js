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
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,1,0,0,0,0,0,0,0,3,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[0,0,1,0,0,0,0,0,0,3,3,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,1,0,0,0,0,0,3,3,3,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,2,2,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1],
		[1,2,2,2,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
		[1,2,2,2,2,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
		[1,2,2,2,2,2,2,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	],
	
	world3: [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,3,3,3,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,3,3,3,1],
		[1,3,3,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3,3,1],
		[1,3,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,3,1],
		[1,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,1],
		[1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1],
		[1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1],
		[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
		[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
		[1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
		[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
		[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
		[1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1],
		[1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1],
		[1,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,1],
		[1,3,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,3,1],
		[1,3,3,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3,3,1],
		[1,3,3,3,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,3,3,3,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	],
	
	world4: [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1],
		[1,0,0,1,1,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,1,1,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,3,3,3,3,1,3,3,3,3,1,3,3,3,3,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,3,3,3,3,1,3,4,4,3,1,3,3,3,3,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,3,3,3,3,3,4,4,3,3,3,3,3,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,3,3,3,3,4,4,3,3,3,3,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,1,1,0,0,0,0,0,0,0,3,3,4,4,3,3,0,0,0,0,0,0,0,1,1,0,0,1],
		[1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	],
	
	world6: [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1],
		[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
		[1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1],
		[1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1],
		[1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1],
		[1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
		[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1],
		[1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1],
		[1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1],
		[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
		[1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	],
	
	world5: [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1],
		[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
		[1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
		[0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1],
		[0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
		[1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1],
		[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
		[1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	],
	
	world7: [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1],
		[1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1],
		[1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
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
	MONSTER4:	"monster4",
	MONSTER5:	"monster5",
	BOSS:		"boss",
	PLAYER: 	"player",
	RING1: 		"ring1",
	TREASURE1: 	"treasure1",
	TREASURE2: 	"treasure2",
	TREASURE3:	"treasure3",
	TREASURE4:	"treasure4",
	DOOR:		"door",
    GUARD:      "guard",
	GUARD2:		"guard2",
	PIXIE:		"pixie",
    IRONDAGGER: "iron_dagger",
    IRONSWORD: "iron_sword",
    IRONLANCE: "iron_lance",
    IRONAXE: "iron_axe",
	NPC:		"npc"
});

const allGameObjects = {
	// we aren't using .type yet
	level1:[
		{x:10, y:18, type:"monster", 	className: cssClass.MONSTER1, 	name:"Monster", health:6, power:5, hit:95},
		{x:12, y:18, type:"monster",	className: cssClass.MONSTER4, 	name:"Monster", health:6, power:5, hit:100},
		{x:25, y:15, type:"monster",	className: cssClass.MONSTER2, 	name:"Monster", health:6, power:5, hit:30},
		{x:10, y:3,  type:"monster",	className: cssClass.MONSTER3, 	name:"Monster", health:6, power:5, hit:80},
		{x:24, y:15, type:"chest",		className: cssClass.CHEST1, 	name:"Chest"},
		{x:28, y:3,  type:"key",		className: cssClass.KEY1, 		name:"Key"},
		{x:17, y:5,  type:"treasure",	className: cssClass.TREASURE1, 	name:"Pendant"},
		{x:2,  y:17, type:"treasure",	className: cssClass.TREASURE2, 	name:"Gold"},
		{x:10, y:16, type:"ring",		className: cssClass.RING1, 		name:"Ring"},
		{x:29, y:9,	 type:"door",		className: cssClass.DOOR, 		name:"Door"},
		{x:29, y:10, type:"door",		className: cssClass.DOOR, 		name:"Door"},
        {x:2,  y:2,  type:"weapon",     className: cssClass.IRONDAGGER, name:"Dagger", power:3, hit:100}
        //{x:3,  y:2,  type:"weapon",     className: cssClass.IRONSWORD, name:"Sword", power:4, hit:90},
        //{x:4,  y:2,  type:"weapon",     className: cssClass.IRONLANCE, name:"Lance", power:5, hit:75},
        //{x:5,  y:2,  type:"weapon",     className: cssClass.IRONAXE, name:"Axe", power:6, hit:65},
	],
	
	level2:[
		{x:0,  y:9,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:0,  y:10,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:29,  y:9,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:29,  y:9,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:15,  y:0,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:14,  y:0,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:15,  y:19,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:14,  y:19,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:27,  y:17, type:"treasure",	className: cssClass.TREASURE2, 	name:"Gold"},
        {x:1, y:8,  type:"guard1",       className: cssClass.GUARD,     name:"Bob"},
		{x:6, y:12,  type:"monster",	className: cssClass.MONSTER5, 	name:"Monster", health:4, power:3, hit:60},
		{x:11, y:12,  type:"monster",	className: cssClass.MONSTER3, 	name:"Monster", health:6, power:3, hit:80},
		{x:14, y:6, type:"monster",		className: cssClass.MONSTER1, 	name:"Monster", health:9, power:5, hit:95},
		{x:27, y:15, type:"monster",	className: cssClass.MONSTER4, 	name:"Monster", health:6, power:5, hit:100},
		{x:2, y:17, type:"monster",		className: cssClass.MONSTER2, 	name:"Monster", health:6, power:5, hit:30},
		{x:1,  y:17, type:"treasure",	className: cssClass.TREASURE1, 	name:"Pendant"},
		{x:25,  y:3, type:"ring",		className: cssClass.RING1, 		name:"Ring"}
	],
	
	level3:[
		{x:15,  y:19,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:14,  y:19,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:3, 	y:3,  type:"key",		className: cssClass.KEY1, 		name:"Key"},
		{x:14,  y:9, type:"chest",		className: cssClass.CHEST1, 	name:"Chest"},
		{x:25,  y:16, type:"ring", 		className: cssClass.RING1,		name:"Ring"},
		{x:11, y:9,  type:"monster",	className: cssClass.MONSTER5, 	name:"Monster", health:6, power:3, hit:95},
		{x:18, y:9,  type:"monster",	className: cssClass.MONSTER1, 	name:"Monster", health:9, power:3, hit:80},
		{x:4,  y:4,  type:"monster",	className: cssClass.MONSTER2,	name:"Monster", health:10, power:2, hit:100}
	],
	
	level4:[
		{x:15,  y:0,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:14,  y:0,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:15, y:9, type:"treasure",	className: cssClass.TREASURE3, 	name:"Diamond"},
		{x:14, y:9,  type:"pixie",		className: cssClass.PIXIE, 		name:"Pixie"},
        {x:14, y:16,  type:"guard1",    className: cssClass.GUARD,      name:"Bob"},
        {x:15, y:16,  type:"guard2",    className: cssClass.GUARD2,      name:"Bob"},
	],
	
	level5:[
		{x:0,  y:9,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:0,  y:10,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:14,  y:10,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:14,  y:10, type:"treasure",	className: cssClass.TREASURE4, 	name:"Power Pendant"},
		{x:15,  y:10, type:"npc",		className: cssClass.NPC,		name:"Wizard"}
	],
	
	level6:[
		{x:0,  y:9,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:0,  y:10,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:29,  y:9,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:29,  y:10,  type:"door",		className: cssClass.DOOR,		name:"Door"},
		{x:20,  y:9,  type:"monster",	className: cssClass.BOSS,		name:"Boss",	health:15, power: 6, hit: 75}
	],
	
	level7: [
		
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

