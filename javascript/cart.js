import navbar from '../components/nav.js';

document.getElementById('navbar').innerHTML =  navbar()


const ui = (data) => {
    data.map((prodcut) => {
      if (prodcut.catagary == "gift plants") {
        let img1 = document.createElement("img")
        img1.src = prodcut.img1
        let title = document.createElement("p")
        title.innerHTML = prodcut.title
        let selling_price = document.createElement("p")
        selling_price.innerHTML = prodcut.selling_price
        let orginal_price = document.createElement("p")
        orginal_price.innerHTML = prodcut.orginal_price
        let btn = document.createElement("button")
        btn.innerHTML = "buy now"
        let div = document.createElement("div")
        div.append(title, selling_price, orginal_price, btn)
        let div2 = document.createElement("div")
        div2.append(img1,div)
        document.getElementById("cart").append(div2)
      }
    })
  };
  
  let get = async () => {
    let res = await fetch("http://localhost:3000/cart/");
    let data = await res.json();
    ui(data);
    console.log(data)
  };
  
  get();