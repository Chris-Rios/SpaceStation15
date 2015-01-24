#pragma strict

var Door : GameObject;

function OnTriggerEnter (other: Collider) {
		if(other.tag == "Player"){
			Door.SendMessage("OpenDoor");
		}	
			
}

function OnTriggerExit (other: Collider){
		if(other.gameObject.tag == "Player"){
			Door.SendMessage("CloseDoor");

		}
}