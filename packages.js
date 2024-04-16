const container = document.getElementById('container');
const filter = document.getElementById('filter');
const priceSelect = document.getElementById('priceSelect');
const ratingSelect = document.getElementById('ratingSelect');
const boxes = document.querySelectorAll('.box');
const data = [
   { name: 'Spain Package', price: 1149, rating: 5 },
   { name: 'Paris Package', price: 500, rating: 4 },
   { name: 'Amsterdam Package', price: 700, rating: 3 },
   { name: 'Lapland Package', price: 633, rating: 4 },
   { name: 'Berlin Package', price: 379, rating: 3 },
   { name: 'New York Package', price: 1825, rating: 4 },
];

// Store original display style
boxes.forEach(box => {
   box.originalDisplay = box.style.display;
});

// Function to filter and render data
const filterAndRender = () => {
   const priceValue = parseInt(priceSelect.value);
   const ratingValue = parseInt(ratingSelect.value);
   const filteredData = data.filter(item => {
      return (!priceValue || item.price <= priceValue) && (!ratingValue || item.rating <= ratingValue);
   });
   render(filteredData);
};

// Function to render filtered data
const render = (filteredData) => {
   boxes.forEach(box => {
      if (filteredData.some(item => item.name === box.querySelector('.name').textContent)) {
         box.style.display = box.originalDisplay;
      } else {
         box.style.display = 'none';
      }
   });
};

// Event listeners for filtering
priceSelect.addEventListener('change', filterAndRender);
ratingSelect.addEventListener('change', filterAndRender);
filter.addEventListener('click', filterAndRender);
