#pragma strict

/**
 * Senses if a door is attempting to be opened by a player
**/

var Door : GameObject;

/**
 * When a player enters the sensors trigger range, attempts to open the door
**/

function OnTriggerEnter (other: Collider) {
		if(other.tag == "Player"){
			Door.SendMessage("OpenDoor");
		}				
}

/**
 * When a player exits the sensors trigger range, attempts to close the door
**/

function OnTriggerExit (other: Collider){
	if(other.gameObject.tag == "Player"){
		Door.SendMessage("CloseDoor");
		}
}