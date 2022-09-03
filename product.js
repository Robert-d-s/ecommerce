


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

// fetch the data


fetch(url).then(res=>res.json()).then(data=>showProduct(data));

//populate the page

function showProduct(product){
console.log(product);
document.querySelector('.brandName').textContent = product.brandname;
document.querySelector('.brandPrice').textContent = "DKK " + product.price;
document.querySelector('.brandImg').src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
document.querySelector('.brandImg').alt = product.productdisplayname;
document.querySelector('.brandDescription').textContent = product.productdisplayname;

}