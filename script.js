const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


let current = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

function goToSlide(index) {
  current = index;
  showSlide(current);
}




/////shop page js/////

const data = [
  {img:"img/wine1.png", name:"TUSCANY MAIN", price:51, tag:"NEW"},
  {img:"img/wine3.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine2.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine5.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine4.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine6.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine1.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine3.png", name:"TUSCANY MAIN", price:51, tag:"SOLD"},
  {img:"img/wine2.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine5.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine4.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine6.png", name:"TUSCANY MAIN", price:51},
   {img:"img/wine5.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine4.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine6.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine1.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine3.png", name:"TUSCANY MAIN", price:51, tag:"SOLD"},
  {img:"img/wine2.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine2.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine5.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine4.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine6.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine1.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine3.png", name:"TUSCANY MAIN", price:51, tag:"SOLD"},
  {img:"img/wine2.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine5.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine4.png", name:"TUSCANY MAIN", price:51},
   {img:"img/wine1.png", name:"TUSCANY MAIN", price:51},
  {img:"img/wine3.png", name:"TUSCANY MAIN", price:51, tag:"SOLD"},
  {img:"img/wine2.png", name:"TUSCANY MAIN", price:51},
];

const perPage = 12;
let currentPage = 1;

function render() {
  const grid = document.getElementById("grid");
  const start = (currentPage - 1) * perPage;
  const items = data.slice(start, start + perPage);

  grid.innerHTML = items.map(item => `
   <div class="cards">
   <a href="shop-detles.html">
      <div class="cird_range_contend">
        ${item.tag ? `<div class="badge">${item.tag}</div>` : ""}
        <img src="${item.img}">
      </div>
      <h4>${item.name}</h4>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <span>$${item.price}.00</span>
      </a>
    </div>
    
  `).join("");

  document.getElementById("showing").innerText =
    `${start + 1}-${start + items.length}`;
}

function pagination() {
  const totalPages = Math.ceil(data.length / perPage);
  const container = document.getElementById("pagination");

  container.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    if (i === currentPage) btn.classList.add("active");

    btn.onclick = () => {
      currentPage = i;
      render();
      pagination();
    };

    container.appendChild(btn);
  }
}

render();
pagination();



///range bar///
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");

const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

function updatePrice() {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);

  // Prevent overlap
  if (minVal > maxVal) {
    [minVal, maxVal] = [maxVal, minVal];
  }

  minPrice.innerText = minVal;
  maxPrice.innerText = maxVal;
}

minRange.addEventListener("input", updatePrice);
maxRange.addEventListener("input", updatePrice);


