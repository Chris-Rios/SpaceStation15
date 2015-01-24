#pragma strict


var pushed : boolean;

function OnStart(){

	pushed = false;
}

/**
 * If an object collides with the switch, it is marked as pushed
**/

function OnCollisionEnter( other : Collision){
	
	pushed = true;	
	
}