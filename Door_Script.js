#pragma strict




var unlocked : boolean;
var open : boolean;
var starting_position : float;

function Start () {
	starting_position = rigidbody.position.z;
	//unlocked = true;
}

//When the player collides with the door, it will open if unlocked


//called by a controller to open the door when a puzzle is completed
function OpenDoor(){
	
	Debug.Log("opening");
	if(unlocked == true){
		open = true;
		rigidbody.position.z +=5;
	}
}

function CloseDoor(){
	Debug.Log("closing");
	if(unlocked == true){
		rigidbody.position.z -=5;
	}
}

function MoveDoor(){

	
}
