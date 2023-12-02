// Function to fetch JSON data
async function fetchData() {
  try {
    const response = await fetch('json/moreImagesPlace01Details.json');
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error('Error fetchando data:', error);
  }
}

// Function to create image elements
function createImageElements(imgArr, parentElementDivId) {
  const parentDivElement = document.getElementById(parentElementDivId);
  
  for(let index = 0; index < imgArr.length; index++){
	anImageDetails = imgArr[index];
  
    const imageContainerDiv = document.createElement('div');
    imageContainerDiv.classList.add('imageContainer');

    const anImage = document.createElement('img');
    anImage.src = anImageDetails.imgSrc;
    anImage.alt = anImageDetails.imgAlt;
    const imageLink = document.createElement('a');
    imageLink.href = anImageDetails.imgHref;
    imageLink.target = '_blank';
    imageLink.appendChild(anImage);

    imageContainerDiv.appendChild(imageLink);

    parentDivElement.appendChild(imageContainerDiv);
  }
  
}

function shuffleArray(arr){
	//array length   shuffles
	//     0          0
	//     1          0
	//     2          2
	//     3          4
	for(let i = 0; i < 2 * (-1 + arr.length); i++){
		const anIndex   = Math.floor(  arr.length * Math.random() );
		const otherIndex = Math.floor(  arr.length * Math.random() );
		const savedValue = arr[anIndex];
		      arr[anIndex] = arr[otherIndex];
			  arr[otherIndex] = savedValue;
			  
		console.log(i + " shuffle")
	}
	return arr;
}

// Fetch data, shuffle array and create image elements
fetchData().then(elJason => {
	
  //shuffle moreImagesPlace00DetailsArray  
  const shuffledArray = shuffleArray( elJason.moreImagesPlace01DetailsArray );
  
  //create image elements
  const divId = 'imagesDiv';
  createImageElements(shuffledArray, divId);
  
});
