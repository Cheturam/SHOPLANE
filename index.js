/// fetching data from API

let apiInfo ="https://5d76bf96515d1a0014085cf9.mockapi.io/product"
const clothingSec=document.querySelector(".clothing-section")
const searchBar=document.querySelector("#input")


const info=fetch(apiInfo).then(res=>res.json()).then(res=>{
    res.slice(0,5).map((item)=>{
    const{brand,description,name,preview,price}=item;
       // creating card div
    const card=document.createElement("div")
     card.className="cardClass"
     card.style.width="200px"
     card.style.overflowY="auto"
     card.style.boxShadow="0px 2px 10px #80807E"
     card.style.borderRadius="5px";
     card.addEventListener("click", ()=>{
        window.location= "http://127.0.0.1:5500/SHOP/product.html"
    })
    
// creating image tag
     const cardImage=document.createElement("img")
     cardImage.className="image"
     cardImage.src=preview
     cardImage.width="200"
     card.appendChild(cardImage) // appending img to card

     // creating name tag 
     const nameEl=document.createElement("h3")
     nameEl.className="name_item"
     nameEl.textContent=name;
     nameEl.style.paddingLeft="10px";
     nameEl.style.paddingTop="10px";
     nameEl.style.fontSize="16px";
     card.appendChild(nameEl) // appending img to card

        // creating brand tag
     const brandEl=document.createElement("h4")
     brandEl.className="brand_item"
     brandEl.textContent=brand;
     brandEl.style.fontSize="16px";
     brandEl.style.paddingLeft="10px";
     brandEl.style.paddingTop="10px";
     brandEl.style.fontWeight="700"
     card.appendChild(brandEl)

     // creating price tag
     const priceEl=document.createElement("h2")
     priceEl.className="price_item"
     priceEl.textContent=price;
     priceEl.style.fontSize="24px";
     priceEl.style.paddingLeft="10px";
     priceEl.style.color="rgb(3, 94, 94)";
     card.appendChild(priceEl)

     clothingSec.appendChild(card)
    })

})


const accessoriesSec=document.querySelector(".accessories-section")


fetch(apiInfo).then(res=>res.json()).then(res=>{
    res.slice(5).map((item)=>{
    const{brand,description,name,preview,price}=item;
       // creating card div
    const card=document.createElement("div")
     card.className="cardClass"
     card.style.width="200px"
     card.style.overflowY="auto"
     card.style.boxShadow="0px 2px 10px #80807E"
     card.style.borderRadius="5px";
     card.addEventListener("click", ()=>{
         console.log("cccc")
         window.location= "http://127.0.0.1:5500/SHOP/product.html"
     })
    
// creating image tag
     const cardImage=document.createElement("img")
     cardImage.className="image"
     cardImage.src=preview
     cardImage.width="200"
     card.appendChild(cardImage) // appending img to card

     // creating name tag 
     const nameEl=document.createElement("h3")
     nameEl.className="name_item"
     nameEl.textContent=name;
     nameEl.style.paddingLeft="10px";
     nameEl.style.paddingTop="10px";
     nameEl.style.fontSize="16px";
     card.appendChild(nameEl) // appending img to card

        // creating brand tag
     const brandEl=document.createElement("h4")
     brandEl.className="brand_item"
     brandEl.textContent=brand;
     brandEl.style.fontSize="16px";
     brandEl.style.paddingLeft="10px";
     brandEl.style.paddingTop="10px";
     brandEl.style.fontWeight="700"
     card.appendChild(brandEl)

     // creating price tag
     const priceEl=document.createElement("h2")
     priceEl.className="price_item"
     priceEl.textContent=price;
     priceEl.style.fontSize="24px";
     priceEl.style.paddingLeft="10px";
     priceEl.style.color="rgb(3, 94, 94)";
     card.appendChild(priceEl)

     accessoriesSec.appendChild(card)
    })

})


searchBar.addEventListener("keyup",(e)=>{

    console.log(e.target.value)
})