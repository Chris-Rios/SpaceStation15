#pragma strict




var unlocked : boolean;
var open : boolean;
var starting_position : float;
var open_speed : float;
var close_speed : float;

function Start () {
	starting_position = rigidbody.position.z;
	unlocked = true;
}

function Update(){
	if(open){
		if(rigidbody.position.z<= (starting_position+5)){
			rigidbody.position.z+= open_speed * Time.deltaTime;
		}
	}
	
	else{	
		if(rigidbody.position.z >= (starting_position)){
			rigidbody.position.z-= close_speed * Time.deltaTime;
		}
	}
}

//When the player collides with the door, it will open if unlocked


//called by a controller to open the door when a puzzle is completed
function OpenDoor(){
	if(unlocked == true){
		open = true;
	}
}

function CloseDoor(){
	if(unlocked == true){
		open = false;
	}
}

function MoveDoor(){

	
}
