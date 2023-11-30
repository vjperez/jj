// Function to fetch JSON data
async function fetchData() {
  try {
    const response = await fetch('info.json');
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error('Error fetchando data:', error);
  }
}

// Function to create product elements
function createProductElements(productArray, parentPlaceElementId) {
  const parentPlaceElement = document.getElementById(parentPlaceElementId);
  for(let index = 0; index < productArray.length; index++){
	product = productArray[index];
  
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

    productDiv.appendChild(imageLink);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(buyNowLink);

    parentPlaceElement.appendChild(productDiv);
  
  }
}

// Fetch data and create product elements
fetchData().then(elJason => {
  elJason.placeProductArray.forEach(placeProduct => {
    const placeId = `place${placeProduct.place}`;
    createProductElements(placeProduct.productoArray, placeId);
  });
});
