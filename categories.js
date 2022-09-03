


// this works and I'm happy

const url = "https://kea-alt-del.dk/t7/api/brands";



fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        handleProductList(data);
    })

    function handleProductList(data){
        data.forEach(showBrand);
    }

    function showBrand(brand){

        console.log(brand);
       
        
        // grab template 

        const template = document.querySelector('template').content;

        // clone it 

        const clone = template.cloneNode(true);

        // grab the span with the brandName class and change its content

        clone.querySelector('.brandName').textContent = brand.brandname;

        // grab the anchor to redirect to brands with that brandName
        
       clone.querySelector('a').href = `productList.html?brandname=${brand.brandname}`;
        
        // grab parent

        const parent = document.querySelector('main');

        // append child to parent 

        parent.appendChild(clone);

    }