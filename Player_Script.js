#pragma strict

var speed : float;

/**
 * Simple Movement Script, takes input from user and moves player accordingly.
**/

function FixedUpdate(){
	
	var moveHorizontal = Input.GetAxis("Horizontal");
	var moveVertical = Input.GetAxis("Vertical");
	var movement = new Vector3(moveHorizontal,0,moveVertical);
	rigidbody.velocity = movement * speed;
}