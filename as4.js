let apiurl = "https://fakestoreapi.com/products"


async function getApi(url){
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);

    let cart =""
    
    data.forEach(element =>{
    cart +=
        
        `<div class="carts">
        <img src=${element.image} alt="my-product" height="200px width="200px>
            <h3>${element.title}</h3>
            <p>${element.description}</p>
            <h2>Rs.${element.price}</h2>
            <button>Add to Cart</button>
        </div>`
        document.getElementById("main").innerHTML = cart
});


}

getApi(apiurl)