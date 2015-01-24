#pragma strict




var unlocked : boolean;
private var open : boolean;
var starting_position : float;
var open_speed : float;
var close_speed : float;
var open_sound : AudioClip;
var close_sound : AudioClip;

function Start () {
	starting_position = rigidbody.position.z;
	unlockDoor();
}

/**
 * Updates every Frame. When updating, door will gradually fully open or close depending on
 * which state it is in.
**/
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



/**
 * Called by a controller to open the door if it is unlocked.
 * Plays opening sound when opening.
**/
function OpenDoor(){
	if(unlocked == true){
		open = true;
		audio.clip = open_sound;
		audio.Play();	
	}
}
/**
 * Called by a controller to close the door when it is unlocked
 * Plays the closing sound when closing.
**/
function CloseDoor(){
	if(unlocked == true){
		open = false;
		audio.clip = close_sound;
		audio.Play();
	}
}

/**
 * Called to unlock a door after conditions are met
**/

function unlockDoor(){
	unlock = true;
}
