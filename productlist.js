

const urlParams = new URLSearchParams(window.location.search);
const brand = urlParams.get('brandname');

//const url = `https://kea-alt-del.dk/t7/api/products?brandname=${brand}`;

const url = `https://kea-alt-del.dk/t7/api/products?brandname=${brand}&limit=20`;


fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        handleProductList(data);
    })

    function handleProductList(data){
        data.forEach(showProduct);
    }




    function showProduct(product){

       
        
        // grab template 

        const template = document.querySelector('template').content;

        // clone it 

        const clone = template.cloneNode(true);

        clone.querySelector('a').href = `product.html?id=${product.id}`;

        // change type of product and brand name 

        const category = clone.querySelector('.category').textContent = `${product.articletype} | ${product.brandname}`;

        // change product's name

        const itemName = clone.querySelector('.itemName').textContent = `${product.productdisplayname}`;

        // change product's usage
        
        const itemDescription = clone.querySelector('.description').textContent = `${product.usagetype}`;


        // change product's image

        const changeImg = clone.querySelector('img').src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
        
        // grab parent

        const parent = document.querySelector('.brand-products');

        // append child to parent 

        parent.appendChild(clone);

    }


