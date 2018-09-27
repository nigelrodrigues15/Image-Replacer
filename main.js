// //changes background color to purple
// document.body.style.backgroundColor = "purple";

// //changes css style of a the page
// document.body.style = "transition: 5s; transform: rotate(5deg) scale(0.8); background-color: grey; color: white;";

// // get all html nodes with id="main" on the webpage and console log it
// const allIds = document.getElementById("main");
// console.log(allIds);

// get all images on the webpage
const allImages = document.getElementsByTagName('img');
// console.log(allImages);




document.body.style = "transition: 5s; transform: rotate(5deg) scale(0.8); background-color: grey; color: white;";

for (var i = 0; i < allImages.length; i++) {
  var imageHeight = allImages[i].clientHeight;
  var imageWidth = allImages[i].clientWidth;

  //cant use file for live links, only works for offline links
  allImages[i].setAttribute('src', 'file:///C:/Users/nigel/Documents/Coding_Directory/Canada%20Learning%20to%20Code/llc-intro-to-browser-extensions-master/first-extension/images/get_started128.png' );
}
