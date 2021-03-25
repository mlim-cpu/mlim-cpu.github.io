function onloadFunction() {
  var amount = X; //The amount of loops
  var arrayIDs = ["imgID1", "imgID2", "imgID3"];    //all the IDs of the images

  for (i=1;i<=amount;i++) {

   //First get the image height and width in a var
   var element = document.getElementById(arrayIDs[i-1]);
   var positionInfo = element.getBoundingClientRect();
   var imgHeight = positionInfo.height;
   var imgWidth = positionInfo.width;

   //Then get the width and height of the screen. if the container is not the screen
   //use the same code as above for the image width/height and change the imgID
   //The the Id of the container element.
   var screenWidth = window.innerWidth;
   var screenHeight = window.innerHeight;

   //Now generate a random top and left position for the image on page load
   var imgLeft = Math.floor(Math.random() * (screenWidth - imgWidth));
   var imgTop= Math.floor(Math.random() * (screenHeight - imgHeight));

   //The reason to get the img and screen height and width is to not let the
   //image
   //overlap out of the screen


   //Now set the image to correct position
   document.getElementById(arrayIDs[i-1]).style.top = imgTop+"px";
   document.getElementById(arrayIDs[i-1]).style.left = imgLeft+"px";
  }
}
