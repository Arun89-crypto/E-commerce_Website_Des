products = [
    {
        catagory: 'chairs',
        src: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        itemName: 'black chair',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 23.50,
    },
    {
        catagory: 'sofas',
        src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        itemName: '5 Seater Sofa cum Bed',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 373.50,
    },

    {
        catagory: 'chairs',
        src: 'https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        itemName: 'blue velv',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 13.50,
    },
    {
        catagory: 'chairs',
        src: 'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        itemName: 'Classy Bar Chair',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 33.50,
    },
    {
        catagory: 'sofas',
        src: 'https://images.pexels.com/photos/5998119/pexels-photo-5998119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        itemName: 'Royal Sofa',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 233.50,
    },
    {
        catagory: 'sofas',
        src: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        itemName: 'Modern Two Sitter',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 173.50,
    },
    {
        catagory: 'chairs',
        src: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        itemName: 'Twin chairs',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 30.50,
    },

    {
        catagory: 'sofas',
        src: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        itemName: 'Classic Black',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 290.50,
    },
    {
        catagory: 'diningTable',
        src: 'https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        itemName: 'Classic 4 seater',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 390.50,
    },
    {
        catagory: 'diningTable',
        src: 'https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        itemName: 'Sofa type 4 Seater',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 340.50,
    },
    {
        catagory: 'decor',
        src: 'https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        itemName: 'Painting Set of 4',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 290.00,
    },
    {
        catagory: 'diningTable',
        src: 'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        itemName: 'Six seator',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 290.50,
    },
    {
        catagory: 'decor',
        src: 'https://images.pexels.com/photos/1470168/pexels-photo-1470168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        itemName: 'Plant Set',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 90.50,
    },
    {
        catagory: 'decor',
        src: 'https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        itemName: 'Stylish Lamps',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 50.50,
    },
    {
        catagory: 'decor',
        src: 'https://images.pexels.com/photos/1634580/pexels-photo-1634580.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        itemName: 'Futuristic Lamps',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 100.50,
    },

    {
        catagory: 'decor',
        src: 'https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        itemName: 'Stylish Drawers',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, veritatis.',
        price: 204.00,
    },


]

let cards = document.querySelector('.items');
update('all');
getButtons();

let green = document.querySelector('.green');
let red = document.querySelector('.red');

green.style.display = "none";
red.style.display = "none";

function getButtons() {
    let buttons = document.querySelectorAll('.addToCart');
    buttons.forEach((btn) => {
        // console.log(btn);
        btn.addEventListener('click', (e) => {
            console.log('clicked');
            let item = e.target.parentElement.cloneNode(true);
            let heading = item.querySelector('h2').innerText;
            let price = item.querySelector('.price').innerText;

            if (sessionStorage.getItem('cartShopperz') == null) {
                let cartItems = []
                cartItems.push([heading, price])
                sessionStorage.setItem('cartShopperz', JSON.stringify(cartItems));
            }
            else {
                let cartItems = sessionStorage.getItem('cartShopperz');
                let items = JSON.parse(cartItems);
                items.push([heading, price]);
                sessionStorage.setItem('cartShopperz', JSON.stringify(items));
            }
            showCartItems();
            green.style.display = "flex";
            setTimeout(() => {
                green.style.display = "none";
            }, 2000);
        });
    });
}

let cart = document.querySelector('.cart');

let togglers = document.querySelectorAll('.toggleBtns');
togglers.forEach((btntog) => {
    btntog.addEventListener('click', () => {
        update(btntog.id);
        getButtons();
    })
});

function update(id) {
    if (id == 'all') {
        let str = ''
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            str += `<div class="card">
                <img src=${element.src}
                    alt="image" class="item-image">
                <h2>${element.itemName}</h2>
                <p>${element.description}</p>
                <h3 class="price">$${element.price}</h3>
                <button class="addToCart">Add To Cart</button>
            </div>`;
        }
        cards.innerHTML = str;
    } else if (id == 'chairs' || id == 'sofas' || id == 'diningTable' || id == 'decor') {
        let str = ''
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            if (element.catagory == id) {
                str += `<div class="card">
                    <img src=${element.src}
                        alt="image" class="item-image">
                    <h2>${element.itemName}</h2>
                    <p>${element.description}</p>
                    <h3 class="price">$${element.price}</h3>
                    <button class="addToCart">Add To Cart</button>
                </div>`;
            }
        }
        cards.innerHTML = str;
    }
}

let counter = document.getElementById('counter');
console.log(counter);
var count = 0;
function showCartItems() {
    let a = sessionStorage.getItem('cartShopperz');
    let items = JSON.parse(a);
    // console.log(items);
    count = 0;
    if (items != null) {
        let str = ''
        items.forEach((element, index) => {
            let heading = element[0];
            let price = element[1];
            str += `<div class="cart-item">
                                <h2>${heading}</h2>
                                <p>${price}</p>
                                <button class="deleteItem" onclick="deleteItemInCart(${index})">X</button>
                            </div>`;
            count++;

        });
        if (items.length != 0) {
            str += `<button id="check">Checkout</button>`;
            counter.innerText = count;
        } else {
            str += `<p>Nothing in the Cart!!!</p>`;
            counter.innerText = count;
        }
        cart.innerHTML = str;
    }
}

function deleteItemInCart(index) {
    console.log('delete');
    let a = sessionStorage.getItem('cartShopperz');
    let items = JSON.parse(a);
    items.splice(index, 1);
    sessionStorage.setItem('cartShopperz', JSON.stringify(items));
    count--;
    showCartItems();
    red.style.display = "flex";
    setTimeout(() => {
        red.style.display = "none";
    }, 2000);
}

cart.style.display = 'none';

let cartT = document.getElementById('cart');
let cartBtn = document.querySelector('.cartBtn');

// console.log(cartBtn);
cartBtn.addEventListener('click', () => {
    if (cartT.style.display == 'none') {
        cartT.style.display = 'flex';
    }
    else if (cartT.style.display == 'flex') {
        cartT.style.display = 'none';
    }
});

showCartItems();

reviews = [
    {
        Name: 'Jhon Walker',
        src: 'https://picsum.photos/200/300?random=1',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis tempora nemo ut ipsam eveniet rerum nisi consectetur voluptatem provident cum dicta iste earum soluta, aut quam tenetur fuga sednihil.',
    },
    {
        Name: 'Jaydeep Krishna',
        src: 'https://picsum.photos/200/300?random=2',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis tempora nemo ut ipsam eveniet rerum nisi consectetur voluptatem provident cum dicta iste earum soluta, aut quam tenetur fuga sednihil.',
    },
    {
        Name: 'Bhuvan Bam',
        src: 'https://picsum.photos/200/300?random=3',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis tempora nemo ut ipsam eveniet rerum nisi consectetur voluptatem provident cum dicta iste earum soluta, aut quam tenetur fuga sednihil.',
    },
    {
        Name: 'Sandeep Maheshwari',
        src: 'https://picsum.photos/200/300?random=4',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis tempora nemo ut ipsam eveniet rerum nisi consectetur voluptatem provident cum dicta iste earum soluta, aut quam tenetur fuga sednihil.',
    },
    {
        Name: 'Alexendrov Krikosky',
        src: 'https://picsum.photos/200/300?random=5',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis tempora nemo ut ipsam eveniet rerum nisi consectetur voluptatem provident cum dicta iste earum soluta, aut quam tenetur fuga sednihil.',
    },
]

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
// console.log(prev, next);
let review = document.querySelector('.review');
var index = 0;
updateReview(index);
prev.addEventListener('click', () => {
    index = index - 1;
    if (index < 0) {
        index = reviews.length - 1;
        updateReview(index);
    } else {
        updateReview(index);
    }
    console.log(index);
});

next.addEventListener('click', () => {
    index = index + 1;
    if (index > 4) {
        index = 0
        updateReview(index);
    } else {
        updateReview(index);
    }
    console.log(index);
});

function updateReview(num) {
    let ele = reviews[num];
    review.innerHTML = `<h1>${ele.Name}</h1>
                        <img src=${ele.src} alt="images">
                        <p>${ele.desc}</p>`;
}

let navItems = document.getElementById('items-nav');
let navbarToggle = document.getElementById('menu-toggle');
if (screen.width <= 660) {
    navItems.style.display = "none";
}

console.log(navItems, navbarToggle);
navbarToggle.addEventListener('click', () => {
    console.log('click');
    if (navItems.style.display == "none") {
        navItems.style.display = "flex";
        navbarToggle.style.transform = 'rotate(90deg)';
    }
    else if (navItems.style.display == "flex") {
        navItems.style.display = "none";
        navbarToggle.style.transform = 'rotate(0deg)';
    }
})

