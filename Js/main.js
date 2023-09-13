let slider_items = $('.slider-items li');
let slider_next = $('.slider-nav.next');
let slider_prev = $('.slider-nav.prev');
let selected_item = 0;
const nav = document.querySelector('.Nav-content');

function setItemsSlider(index) {
  selected_item = index;

  slider_items.each(function (slide) {
    let offset = slide - selected_item;
    if (offset < 0) offset += slider_items.length;

    for (let i = 0; i < slider_items.length + 1; i++) {
      $(this)
        .removeClass(`item-${i}`)
        .addClass(`item-${offset + 1}`);
    }
  });
}



slider_items.click(function () {
  setItemsSlider($(this).index());
});

slider_prev.click(function () {
  selected_item = selected_item < slider_items.length - 1 ? ++selected_item : 0;
  setItemsSlider(selected_item);
});

slider_next.click(function () {
  selected_item = selected_item >= 1 ? --selected_item : slider_items.length - 1;
  setItemsSlider(selected_item);
});

window.addEventListener('scroll', function () {
  nav.classList.toggle('sticky', this.window.scrollY > 0);
});

function search() {
  const searchbox = document.getElementById('search-input').value.toUpperCase();
  const product = document.querySelectorAll('.product-search');

  for (let i = 0; i < product.length; i++) {
    let match = product[i].querySelector('h4');

    if (match) {
      let textValue = match.textContent || match.innerText;

      if (textValue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = '';
      } else {
        product[i].style.display = 'none';
      }
    }
  }
}


const openBtn = document.getElementById('open_cart_btn');
const cart = document.getElementById('sidecart');
const closeBtn = document.getElementById('close_btn');
const Backdrop = document.querySelector('.backdrop');
let itemsEl = document.querySelector('.items');
let cartItems = document.querySelector('.cart_items');
const itemsNum = document.getElementById('items_num')
const Total = document.getElementById('subtotal_price')
const sideSearch = document.querySelector('.sideSearch')
let cart_data = []


$('#login-btn').click(function () {
  $('.side-sign-up').addClass('open')

  Backdrop.style.display = 'block';

  setTimeout(() => {
    Backdrop.classList.add('show');
  }, 0);
})

$(Backdrop).on('click', function() {
  $('.side-sign-up').removeClass('open');
});




$('#Search').click(function () {
  $('.sideSearch').addClass('open')

  Backdrop.style.display = 'block';

  setTimeout(() => {
    Backdrop.classList.add('show');
  }, 0);
  })

$(Backdrop).on('click', function() {
  $('.sideSearch').removeClass('open');
});


function closeSearch() {
  $('.sideSearch').removeClass('open');
  Backdrop.classList.remove('show');

  setTimeout(() => {
    Backdrop.style.display = 'none';
  }, 500);
  
}


openBtn.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);
Backdrop.addEventListener('click', closeCart);

function openCart() {
  cart.classList.add('open');
  Backdrop.style.display = 'block';

  setTimeout(() => {
    Backdrop.classList.add('show');
  }, 0);
}

function closeCart() {
  cart.classList.remove('open');
  Backdrop.classList.remove('show');

  setTimeout(() => {
    Backdrop.style.display = 'none';
  }, 500);
}

function addItemMen(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(men_items[idx]);
  }

  updateCart();
  openCart();
}

function addItemWomen(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(women_items[idx]);
  }

  updateCart();
  openCart();
}

function addItemKids(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(kids_items[idx]);
  }

  updateCart();
  openCart();
}

function addItemDivided(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(divided_items[idx]);
  }

  updateCart();
  openCart();
}

function addItemBaby(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(baby_items[idx]);
  }

  updateCart();
  openCart();
}


function addItemTop(idx, itemId) {
  const foundItems = cart_data.find(item => item.id.toString() === itemId.toString());

  if (foundItems) {
    IncreaseQty(itemId)
  } else {
    cart_data.push(top_items[idx]);
  }
  updateCart();
  openCart();
}

function removeCartItem(itemId) {
  cart_data = cart_data.filter((item) => item.id !== itemId);

  updateCart();
}


function IncreaseQty(itemId) {
  cart_data = cart_data.map(item => item.id.toString() === itemId.toString() ? {...item, qty: item.qty + 1} : item)
  updateCart()
}

function DecreaseQty(itemId) {
  cart_data = cart_data.map(item => item.id.toString() === itemId.toString() ? {...item, qty: item.qty > 1 ? item.qty - 1  : item.qty}: item)
  updateCart()
}


function CalcItemsNum() {
  let itemsCount = 0

  cart_data.forEach((item) => (itemsCount += item.qty))
  itemsNum.innerHTML = itemsCount
}


function calcSubtotalPrice() {
  let subtotal = 0

  cart_data.forEach((item) => (subtotal+= item.price * item.qty))

  Total.innerHTML = subtotal
}


const women_items = [
  {
    id: 1,
    name: 'Adidas Shoes',
    price: 899,
    sale:494,
    image: 'img/5.webp',
    qty:1,
  },
  {
    
    id:2,
    name: 'Jacket',
    price: 400,
    sale:350,
    image: 'img/7.webp',
    qty:1,
  },
  {
    id:3,
    name: 'Nike Running',
    price: 1000,
    sale:499,
    image: 'img/6.webp',
    qty:1,
  },
  {
    id:4,
    name: 'Pants',
    price: 899,
    sale:600,
    image: 'img/4.webp',
    qty:1,
  },
  {
    id:5,
    name: 'Frill-trimmed muslin blouse',
    price: 800,
    sale:494,
    image: 'img/6.webp',
    qty:1,
  },
  {
    id: 6,
    name: 'Pants',
    price: 4099,
    sale:600,
    image: 'img/sweatpants.webp',
    qty: 1,
  },
  {
    id: 7,
    name: 'Frill-trimmed muslin blouse',
    price: 5099,
    sale:1200,
    image: 'img/oversized.webp',
    qty: 1,
  }
];


const men_items = [
  {
    id: 8,
    name: 'Frill-trimmed muslin blouse ',
    price: 1099,
    image: 'img/regularFit.webp',
    qty: 1,
  },
  {
    id: 9,
    name: 'Jacket',
    price: 2099,
    image: 'img/fit-t-shirt.webp',
    qty: 1,
  },
  {
    id: 10,
    name: 'Jacket',
    price: 2099,
    image: 'img/resort-shirt.webp',
    qty: 1,
  },
  {
    id: 11,
    name: 'Nike Running',
    price: 3099,
    image: 'img/fitCotton.webp',
    qty: 1,
  },

];


const kids_items = [
  {
    id: 12,
    name: 'Frill-trimmed muslin blouse ',
    price: 8999,
    image: 'img/kids-1.webp',
    qty: 1,
  },
  {
    id: 13,
    name: 'Jacket',
    price: 12099,
    image: 'img/kids-2.webp',
    qty: 1,
  },
  {
    id: 14,
    name: 'Nike Running',
    price: 11099,
    image: 'img/kids-3.webp',
    qty: 1,
  },
  {
    id: 15,
    name: 'Jacket',
    price: 2099,
    image: 'img/kids-4.webp',
    qty: 1,
  },
  {
    id: 16,
    name: 'Jacket',
    price: 8399,
    image: 'img/kids-5.webp',
    qty: 1,
  },

];





const limitedSales_items = [
  {
    id: 17,
    name: 'Adidas Shoes',
    price: 899,
    sale:200,
    image: 'img/5.webp',
    qty:1,
  },
  {
    
    id:18,
    name: 'Jacket',
    price: 400,
    sale:250,
    image: 'img/7.webp',
    qty:1,
  },
  {
    id:19,
    name: 'Nike Running',
    price: 1000,
    sale:399,
    image: 'img/regularFit.webp',
    qty:1,
  },
  {
    id:20,
    name: 'Pants',
    price: 899,
    sale:100,
    image: 'img/fit-t-shirt.webp',
    qty:1,
  },
  {
    id:21,
    name: 'Frill-trimmed muslin blouse',
    price: 800,
    sale:324,
    image: 'img/kids-1.webp',
    qty:1,
  },
  {
    id: 22,
    name: 'Pants',
    price: 4099,
    sale:1300,
    image: 'img/kids-2.webp',
    qty: 1,
  },
  {
    id: 23,
    name: 'Frill-trimmed muslin blouse',
    price: 5099,
    sale:1200,
    image: 'img/fitCotton.webp',
    qty: 1,
  }
];


const divided_items = [
  {
    id: 24,
    name: 'Frill-trimmed muslin blouse ',
    price: 8999,
    image: 'img/divided-1.webp',
    qty: 1,
  },
  {
    id: 25,
    name: 'Jacket',
    price: 12099,
    image: 'img/divided-2.webp',
    qty: 1,
  },
  {
    id: 26,
    name: 'Nike Running',
    price: 11099,
    image: 'img/divided-3.webp',
    qty: 1,
  },
  {
    id: 27,
    name: 'Jacket',
    price: 2099,
    image: 'img/divided-4.webp',
    qty: 1,
  },
  {
    id: 28,
    name: 'Jacket',
    price: 8399,
    image: 'img/divided-5.webp',
    qty: 1,
  },

];


const baby_items = [
  {
    id: 29,
    name: 'Frill-trimmed muslin blouse ',
    price: 8999,
    image: 'img/baby-1.webp',
    qty: 1,
  },
  {
    id: 30,
    name: 'Jacket',
    price: 12099,
    image: 'img/baby-2.webp',
    qty: 1,
  },
  {
    id: 31,
    name: 'Nike Running',
    price: 11099,
    image: 'img/baby-3.webp',
    qty: 1,
  },
  {
    id: 32,
    name: 'Jacket',
    price: 2099,
    image: 'img/baby-4.webp',
    qty: 1,
  },
  {
    id: 33,
    name: 'pejama',
    price: 8399,
    image: 'img/baby-5.webp',
    qty: 1,
  },

];





const top_items = [
  {
    id: 34,
    name: 'Adidas Shoes',
    price: 899,
    sale:494,
    image: 'img/5.webp',
    qty:1,
  },  
  {
    
    id:35,
    name: 'Jacket',
    price: 400,
    sale:350,
    image: 'img/7.webp',
    qty:1,
  },
  {
    id:36,
    name: 'Nike Running',
    price: 1000,
    sale:499,
    image: 'img/regularFit.webp',
    qty:1,
  },
  {
    id:37,
    name: 'Pants',
    price: 899,
    sale:600,
    image: 'img/fit-t-shirt.webp',
    qty:1,
  },
  {
    id:38,
    name: 'Frill-trimmed muslin blouse',
    price: 800,
    sale:494,
    image: 'img/kids-1.webp',
    qty:1,
  },
  {
    id: 39,
    name: 'Pants',
    price: 4099,
    sale:600,
    image: 'img/kids-2.webp',
    qty: 1,
  },
  {
    id: 40,
    name: 'Frill-trimmed muslin blouse',
    price: 5099,
    sale:1200,
    image: 'img/fitCotton.webp',
    qty: 1,
  }
];







function onSale() {
  let carousel_item = document.querySelector('.carousel-rows');

  limitedSales_items.forEach((item) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row' , 'text-center'  , 'hover-img');
    itemEl.innerHTML = `
      <img src="${item.image}" alt="">
      <div class="price">
        <div class="bookmark"><i class="fa-regular fa-bookmark" style="font-size: 12px;"></i></div>
        <h4>${item.name}</h4>
        <p class="sale fw-bold">
          <span class="text-dark text-decoration-line-through">
            <small>EGP</small> ${item.price}
          </span>
          <span> EGP ${item.sale}</span>
        </p>
      </div>
    </div>`;

    carousel_item.appendChild(itemEl);
  });
}

onSale();


function searchInput(items) {
  $('#Search').click(function () {
    $('.sideSearch').addClass('open');
    Backdrop.style.display = 'block';
    setTimeout(() => {
      Backdrop.classList.add('show');
    }, 0);
  });

  const sideSearch = document.querySelector('.search-contents');

  items.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('row' , 'product-all' , 'product-search' , 'text-center' ,  'hover-img');
    itemElement.innerHTML = `
    <img  src="${item.image}" alt="">
    <div class="price pt-2 fw-bold">
      <h4>${item.name}</h4>
      <p class="sale"><small>EGP</small> ${item.price.toFixed(2)}</p>
    </div>
    `;
    sideSearch.appendChild(itemElement);
  });
}


searchInput(men_items);
searchInput(women_items);
searchInput(kids_items);
searchInput(divided_items);
searchInput(baby_items)



function renderItemsTop() {
  top_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'top' , 'd-none');
    itemEl.onclick = () => addItemTop(idx , item.id)
    itemEl.innerHTML = `
    
      <img src="${item.image}" alt="">
      <div class="price fw-bold">
        <div class="add-to-cart add_cartBtn" style="cursor:pointer;">
          <i class="fa-1x fa-solid fa-shopping-cart  p-2"></i>
        </div>
        <h4>${item.name}</h4>
        <p class="sale"><small>EGP</small> ${item.price}</p>
      </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsTop();




function renderItemsBaby() {
  baby_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'baby' , 'd-none');
    itemEl.onclick = () => addItemBaby(idx , item.id)
    itemEl.innerHTML = `
    
      <img src="${item.image}" alt="">
      <div class="price fw-bold">
        <div class="add-to-cart add_cartBtn" style="cursor:pointer;">
          <i class="fa-1x fa-solid fa-shopping-cart  p-2"></i>
        </div>
        <h4>${item.name}</h4>
        <p class="sale"><small>EGP</small> ${item.price}</p>
      </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsBaby();




function renderItemsDivided() {
  divided_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'divided' , 'd-none');
    itemEl.onclick = () => addItemDivided(idx , item.id)
    itemEl.innerHTML = `
    
      <img src="${item.image}" alt="">
      <div class="price fw-bold">
        <div class="add-to-cart add_cartBtn" style="cursor:pointer;">
          <i class="fa-1x fa-solid fa-shopping-cart  p-2"></i>
        </div>
        <h4>${item.name}</h4>
        <p class="sale"><small>EGP</small> ${item.price}</p>
      </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsDivided();



function renderItemsWomen() {
  women_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'women' );
    itemEl.onclick = () => addItemWomen(idx , item.id)
    itemEl.innerHTML = `
    
      <img src="${item.image}" alt="">
      <div class="price fw-bold">
        <div class="add-to-cart add_cartBtn" style="cursor:pointer;">
          <i class="fa-1x fa-solid fa-shopping-cart  p-2"></i>
        </div>
        <h4>${item.name}</h4>
        <p class="sale"><small>EGP</small> ${item.price}</p>
      </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsWomen();

function TopFilter() {
  $('.top').removeClass('d-none')
  $('.women').addClass('d-none')
  $('.baby').addClass('d-none')
  $('.divided').addClass('d-none')
  $('.kids').addClass('d-none')
  $('.men').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.top-btn').addClass('active')
}


function BabyFilter() {
  $('.baby').removeClass('d-none')
  $('.women').addClass('d-none')
  $('.divided').addClass('d-none')
  $('.top').addClass('d-none')
  $('.kids').addClass('d-none')
  $('.men').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.baby-btn').addClass('active')
}

function BabyFilter() {
  $('.baby').removeClass('d-none')
  $('.women').addClass('d-none')
  $('.divided').addClass('d-none')
  $('.kids').addClass('d-none')
    $('.top').addClass('d-none')
  $('.men').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.baby-btn').addClass('active')
}



function DividedFilter() {
  $('.divided').removeClass('d-none')
  $('.women').addClass('d-none')
  $('.kids').addClass('d-none')
    $('.top').addClass('d-none')
  $('.men').addClass('d-none')
  $('.baby').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.divided-btn').addClass('active')
}


function menFilter() {
  $('.men').removeClass('d-none')
  $('.women').addClass('d-none')
  $('.kids').addClass('d-none')
    $('.top').addClass('d-none')
  $('.baby').addClass('d-none')
  $('.divided').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.men-btn').addClass('active')
}

function kidsFilter() {
  $('.kids').removeClass('d-none')
  $('.women').addClass('d-none')
  $('.men').addClass('d-none')
  $('.divided').addClass('d-none')
  $('.top').addClass('d-none')
  $('.baby').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.kids-btn').addClass('active')
}


function womenFilter() {
  $('.women').removeClass('d-none')
  $('.men').addClass('d-none')
  $('.kids').addClass('d-none')
  $('.top').addClass('d-none')
  $('.divided').addClass('d-none')
  $('.baby').addClass('d-none')
  $('#btns li').removeClass('active')
  $('.women-btn').addClass('active')
}

womenFilter()


function renderItemsMen() {
  men_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'men' , 'd-none');
    itemEl.onclick = () => addItemMen(idx , item.id)
    itemEl.innerHTML = `
    
      <img src="${item.image}" alt="">
      <div class="price fw-bold">
        <div class="add-to-cart add_cartBtn" style="cursor:pointer;">
          <i class="fa-1x fa-solid fa-shopping-cart  p-2"></i>
        </div>
        <h4>${item.name}</h4>
        <p class="sale"><small>EGP</small> ${item.price}</p>
      </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsMen();
renderCartItems()

function renderItemsKids() {
  kids_items.forEach((item ,idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('row', 'product-all' , 'hover-img' , 'kids' , 'd-none');
    itemEl.onclick = () => addItemKids(idx , item.id)
    itemEl.innerHTML = `
    
      <img src="${item.image}" alt="">
      <div class="price fw-bold">
        <div class="add-to-cart add_cartBtn" style="cursor:pointer;">
          <i class="fa-1x fa-solid fa-shopping-cart  p-2"></i>
        </div>
        <h4>${item.name}</h4>
        <p class="sale"><small>EGP</small> ${item.price}</p>
      </div>
    `;

    itemsEl.appendChild(itemEl);
  });
}

renderItemsKids();


function renderCartItems() 
{
  cartItems.innerHTML = ''

  cart_data.forEach(item => {
    const cartItem = document.createElement("div")
    cartItem.classList.add('cart_item' )
    cartItem.innerHTML=`
      <div class="remove_item position-absolute z-3 " onclick="removeCartItem(${item.id})">
        <span style="color:black">&times;</span>
      </div>
      <div class="item_img">
        <img src="${item.image}" alt="">
      </div>
      <div class="item_details ms-3">
        <p>${item.name}</p>
        <p class="sale  fw-bold"><small>EGP</small> ${item.price} </p>
        <div class="qty">
          <span onclick="DecreaseQty(${item.id})">-</span>
          <strong>${item.qty}</strong>
          <span onclick="IncreaseQty(${item.id})">+</span>
        </div>
        <div class="dropdown">
  <button class="btn bg-transparent btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Available Sizes
  </button>
  <ul class="dropdown-menu  ">
    <li><a class="dropdown-item">XS</a></li>
    <li><a class="dropdown-item">S</a></li>
    <li><a class="dropdown-item">M</a></li>
  </ul>
</div>
      </div>
    `;

    cartItems.appendChild(cartItem);
  });
}


function updateCart() {
  renderCartItems();
  CalcItemsNum();
  calcSubtotalPrice();
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(usernameValue === '' ) {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





const NewUpdate = [
  {
    id: 1,
    name: 'Find a Store',
    image: "img/blog-1.jpg",
    paragraph: 'Our Store',
    qty: 1,
  },
  {
    id: 2,
    name: 'From your Blog',
    image: "img/blog-2.jpg",
    paragraph: 'Our Store',
    qty: 1,
  },
  {
    id: 3,
    name: 'From your Blog',
    image: "img/blog-3.jpg",
    paragraph: 'Our Store',
    qty: 1,
  },
];



function newUpdates() {
  let newUpdates_item = document.querySelector('.newUpdates');

  NewUpdate.forEach((item) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('col-md-4');
    itemEl.innerHTML = `
      <div class="update-info">
        <div class="image">
          <img src="${item.image}" alt="">
        </div>
        <div class="info mt-3 mt-md-4 ">
          <h5>${item.name}</h5>
          <a href="#"><p>${item.paragraph} <i class=" fa-solid fa-arrow-right"></i></p></a>
        </div>
      </div>`;

    newUpdates_item.appendChild(itemEl);
  });
}

newUpdates();

let switcherLis = document.querySelectorAll(".switcher li")
let imgs = Array.from(document.getElementsByClassName('filters'))

switcherLis.forEach((li) => {
  li.addEventListener("click", function() {
    
  });
});
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active")
    this.classList.add('active')
  })
}



