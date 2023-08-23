import navbar from '../components/nav.js';

document.getElementById('navbar').innerHTML =  navbar()

const display=(data)=>{
    data.map((product)=>{
        let img=document.createElement("img");
        img.src=product.image;
        let title=document.createElement("h2");
        title.innerHTML=product.title;
        let price=document.createElement("h4");
        price.innerHTML=product.price;
        let category=document.createElement("p");
        category.innerHTML=product.category;
        let rate=document.createElement("p");
        rate.innerHTML=product.rating.rate;
        let btn=document.createElement("button");
        btn.innerHTML="buy Now";
        
        let div = document.createElement("div")
        div.append(img,title,price,category,rate,btn)
        document.getElementById("box2").append(div)
    })
}

const get=()=>{
    fetch("http://localhost:3000/product")
    .then((response)=> response.json())
    .then((response)=>display(response));
}

get();