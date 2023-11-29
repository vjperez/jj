// Function to fetch JSON data
async function fetchData() {
  try {
    const response = await fetch('info.json'); // Replace with your JSON file path
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to create product elements
function createProductElements(productArray, parentPlaceElementId) {
  const parentPlaceElement = document.getElementById(parentPlaceElementId);
  productArray.forEach(product => {
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
  });
}

// Fetch data and create product elements
fetchData().then(datos => {
  datos.place-product-array.forEach(place-product => {
    const placeId = `place${place-product.place}`;
    createProductElements(place-product.product-array, placeId);
  });
});
