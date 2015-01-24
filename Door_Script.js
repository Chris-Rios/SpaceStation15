#pragma strict




var unlocked : boolean;
var open : boolean;
var starting_position : float;

function Start () {
	OpenDoor();
	starting_position = rigidbody.position.z;
	unlocked = true;
}

//When the player collides with the door, it will open if unlocked
function OnCollisionEnter (other: Collision) {
		Debug.Log("collided!");
		Debug.Log(unlocked);
		if(unlocked && other.gameObject.tag == "Player"){
			open = true;
			//gameObject.SetActive(false);
			rigidbody.position.z +=5;
		}	
			
}

function OnCollisionExit (other: Collision){
		Debug.Log("left");
		if(open && other.gameObject.tag == "Player"){
			open = false;
			//gameObject.SetActive(true);
			rigidbody.position.z -=5;

		}
}

//called by a controller to open the door when a puzzle is completed
function OpenDoor(){
	open = true;
	
}

function CloseDoor(){

	
}

function MoveDoor(){

	
}
