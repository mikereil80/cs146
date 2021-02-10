/**Michael Reilly**/
/**I pledge my honor that I have abided by the Stevens Honor System**/

// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   // Pass values to addNewPost()
   var username=document.getElementById("formUsername").value;
   var caption=document.getElementById("formCaption").value;
   var imageLocation=fileLocations[document.getElementById("formImg").value];
   addNewPost(username, caption, imageLocation);
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
   // Create a span for the user
   // Create image element
   // Create overlay element
   // Add all child elements (order matters)
   // Add event listeners to post
   // Add post element to post list
   var elementdiv=document.createElement("div");
   elementdiv.className="post";
   var elementspan=document.createElement("span");
   var user=document.createTextNode(username);
   var elementimg=document.createElement("img");
   elementimg.src=imgLocation;
   elementimg.alt=caption;
   var elementchilddiv=document.createElement("div");
   elementchilddiv.className="postOverlay";
   var paragraph=document.createTextNode(caption);
   elementspan.appendChild(user);
   elementchilddiv.appendChild(paragraph);
   elementdiv.appendChild(elementspan);
   elementdiv.appendChild(elementimg);
   elementdiv.appendChild(elementchilddiv);
   var event1=elementdiv.getElementsByClassName("postOverlay");
   for (i = 0; i < event1.length; i++) {
   event1[i].addEventListener("mouseover", function(){
	   this.style.opacity="1";
		   });
   event1[i].addEventListener("mouseleave", function(){ 
	   this.style.opacity="0";
		   });
   }
   var mainelement=document.getElementById("postList");
   mainelement.appendChild(elementdiv);
   
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};