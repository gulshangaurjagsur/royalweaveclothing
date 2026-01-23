"use strict";

document.addEventListener("DOMContentLoaded", function () {

  function loadComponent(id, url, callback) {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Failed to load " + url);
        return res.text();
      })
      .then(data => {
        document.querySelector(id).innerHTML = data;
        if (callback) callback();
      })
      .catch(err => console.error(err));
  }

  loadComponent("#header", "components/header.html", function () {
    window.dispatchEvent(new Event("scroll"));
  });

  loadComponent("#footer", "components/footer.html");
  loadComponent("#form", "components/form.html");

});




function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width")
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}


const products = [
  { img: "images/product/men/1.jpeg", name: "Men Outfit", price: 100, category: "men" },
  { img: "images/product/women/1.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/kids/1.jpeg", name: "Kids Outfit", price: 100, category: "kids" },
  { img: "images/product/men/2.jpeg", name: "Men Outfit", price: 100, category: "men" },
  { img: "images/product/men/3.jpeg", name: "Men Outfit", price: 100, category: "men" },
  { img: "images/product/women/2.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/3.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/4.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/5.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/6.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/7.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/8.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/9.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/10.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/11.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/12.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/13.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/R1.jpg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/14.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/15.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/16.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/17.jpeg", name: "Women Outfit", price: 100, category: "women" },
  { img: "images/product/women/18.jpeg", name: "Women Outfit", price: 100, category: "women" },

  // baaki same pattern me
];
const container = document.getElementById("productContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const tabs = document.querySelectorAll(".tab-btn");

let itemsPerLoad = 12;
let currentIndex = 0;
let activeCategory = "all";

function getFilteredProducts() {
  if (activeCategory === "all") return products;
  return products.filter(p => p.category === activeCategory);
}

function loadProducts(reset = false) {
  if (reset) {
    container.innerHTML = "";
    currentIndex = 0;
  }

  const filtered = getFilteredProducts();
  const slice = filtered.slice(currentIndex, currentIndex + itemsPerLoad);

  slice.forEach(product => {
    const div = document.createElement("div");
    div.className = "box";

    div.innerHTML = `
      <div class="img-box">
        <img src="${product.img}" loading="lazy" alt="Royal Weave Clothing">
      </div>
      <div class="detail-box">
        <h4 class="single-price">${product.name}</h4>
        <h5>Price On Request</h5>
        <a href="https://wa.me/918527413089" class="buy-btn" target="_blank">Buy Now</a>
      </div>
    `;

    container.appendChild(div);
  });

  currentIndex += itemsPerLoad;

  loadMoreBtn.style.display =
    currentIndex >= filtered.length ? "none" : "inline-block";
}

/* Tab click */
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    activeCategory = tab.dataset.category;
    loadProducts(true);
  });
});

/* Load more */
loadMoreBtn.addEventListener("click", () => loadProducts());

/* Initial load */
loadProducts();

