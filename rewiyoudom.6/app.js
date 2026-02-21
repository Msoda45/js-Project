const section = document.querySelector("section");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const img = document.createElement("img");
section.append(h1,p,img)
h1.textContent = "In The Name Of Allah";
p.innerHTML = "<span>Lorem </span> ipsum dolor sit ametipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae totam, dolorem dignissimos, deleniti temporibus quas quae, repellendus fuga doloremque architecto omnis atque et minima similique illum molestiae iusto vel. consectetur adipisicing elit. Iste repudiandae totam, dolorem dignissimos, deleniti temporibus quas quae, repellendus fuga doloremque architecto omnis atque et minima similique illum molestiae iusto vel."
img.setAttribute("src","./img/6.jpg");
img.className = ("a");
h1.classList.add("h1");
p.style.cssText = "margin-top: 60px; font-size: 20px;color: lightblue;font-weight: 500;padding : 9px ;"
section.style.cssText = "display: grid; grid-template-columns:1fr 1fr ;padding : 9px 9px;box-shadow: 12px 9px 12px 12px rgba(0,0,0,0.4); border-radius: 9px; height: 600px; width:80%;margin:0 auto;";