// Function to fetch JSON data
async function fetchData() {
  try {
    const response = await fetch('json/productDetails.json');
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error('Error fetchando data:', error);
  }
}

// Function to create product elements
function createProductElements(productArr, parentElementPlaceId) {
  const parentPlaceElement = document.getElementById(parentElementPlaceId);
  for(let index = 0; index < productArr.length; index++){
	product = productArr[index];
  
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.imgSrc;
    productImage.alt = 'Product Image';
    const imageLink = document.createElement('a');
    imageLink.href = product.imgHref;
    imageLink.target = '_blank';
    imageLink.appendChild(productImage);

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const buyNowLink = document.createElement('a');
    buyNowLink.href = product.buyNowHref;
    buyNowLink.target = '_blank';
    buyNowLink.classList.add('product-button');
    buyNowLink.textContent = 'Buy Now';
	
	const moreImagesLink = document.createElement('a');
    moreImagesLink.href = product.moreImagesHref;
    //moreImagesLink.target = '_blank';
    moreImagesLink.classList.add('product-button');
    moreImagesLink.textContent = '+ images';

    productDiv.appendChild(imageLink);
    productDiv.appendChild(productDescription);
	productDiv.appendChild(moreImagesLink);
    productDiv.appendChild(buyNowLink);

    parentPlaceElement.appendChild(productDiv);
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

// Fetch data, shuffle array and create product elements
fetchData().then(elJason => {
  elJason.placeProductArray.forEach(placeProduct => {
	  
	//shuffle productoArray  
	const shuffledArray = shuffleArray(placeProduct.productoArray);
	//create elements
    const placeId = `place${placeProduct.place}`;
    createProductElements(shuffledArray, placeId);
	
  });
});
