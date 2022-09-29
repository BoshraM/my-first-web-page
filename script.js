/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);

var roll, dice, total_dice, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list2 = document.getElementById('list');
  roll.forEach((item) => {
    let new_li2 = document.createElement('li');
    new_li2.innerText = item;

    element_list2.appendChild(new_li2);
  });
  let element_total2 = document.getElementById('total');
  element_total2.innerText = roll.reduce((a,b) => a+b, 0);
  let element_button_roll = document.getElementById('button_roll');
  element_button_roll.style.color = '#ff9900';
  element_button_roll.style.backgroundColor = '#66ffff';
  let element_button_remove = document.getElementById('button_remove');
  element_button_remove.style.color = '#660000';
  element_button_remove.style.backgroundColor = '#ffccff';
  let element_button_restart = document.getElementById('button_restart');
  element_button_restart.style.color = '#666666';
  element_button_restart.style.backgroundColor = '#66ff99';
}

// Describe this function...
function display_the_roll() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_info = document.getElementById('info');
  total_dice = [roll.reduce((a,b) => a+b, 0)];
  if (total_dice == 11) {
    element_info.innerText = 'you won';
    element_info.style.color = '#00cccc';
  } else if (total_dice < 11) {
    element_info.innerText = 'keep playing';
    element_info.style.color = '#33ff33';
  } else if (total_dice > 11) {
    element_info.innerText = 'you lost';
    element_info.style.color = '#cc0000';
  }
}


roll = [];
dice = [1, 2, 3, 4, 5, 6];
let element_p1 = document.getElementById('p1');
element_p1.style.color = '#6600cc';
let element_p2 = document.getElementById('p2');
element_p2.style.color = '#6600cc';
rolls();


document.getElementById('button_roll').addEventListener('click', (event) => {
  roll.push(randomMember(dice));
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = roll.slice(-1)[0];

  element_list.appendChild(new_li);
  let element_total = document.getElementById('total');
  element_total.replaceChildren();
  element_total.innerText = roll.reduce((a,b) => a+b, 0);
  display_the_roll();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  roll = [];
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  let element_total3 = document.getElementById('total');
  element_total3.innerText = roll.reduce((a,b) => a+b, 0);
  display_the_roll();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  let element_list4 = document.getElementById('list');
  element_list4.replaceChildren();
  roll.pop();
  rolls();
  display_the_roll();

});
var price_984, totalprice1984, price_fraction, kite_price, number_1984, cartqty, number_fraction, number_kite, totalnumber1984, cartprice, totalnumberfraction, totalkitenumber, totalpricefraction, totalkiteprice;


price_984 = [];
totalprice1984 = [];
number_1984 = [];
totalnumber1984 = [];
price_fraction = [];
totalpricefraction = [];
number_fraction = [];
totalnumberfraction = [];
number_kite = [];
kite_price = [];
totalkiteprice = [];
totalkitenumber = [];
cartprice = [];
cartqty = [];
let element_1984img = document.getElementById('1984img');
element_1984img.setAttribute("src", 'https://images-na.ssl-images-amazon.com/images/I/41ygPDnvUxL._SX340_BO1,204,203,200_.jpg');
let element_fractionimg = document.getElementById('fractionimg');
element_fractionimg.setAttribute("src", 'https://images-na.ssl-images-amazon.com/images/I/51tA4MdkCAL._SX324_BO1,204,203,200_.jpg');
let element_kiteimg = document.getElementById('kiteimg');
element_kiteimg.setAttribute("src", 'https://images-na.ssl-images-amazon.com/images/I/51yHrgI1MXL._SX320_BO1,204,203,200_.jpg');


document.getElementById('kite').addEventListener('click', (event) => {
  kite_price.push(9);
  number_kite.push(1);
  cartprice.push(9);
  cartqty.push(1);
  let element_kite_number = document.getElementById('kite_number');
  totalkitenumber.push(number_kite.shift());
  element_kite_number.innerText = totalkitenumber.reduce((a,b) => a+b, 0);
  let element_kite_price = document.getElementById('kite_price');
  totalkiteprice.push(kite_price.shift());
  element_kite_price.replaceChildren();
  element_kite_price.innerText = totalkiteprice.reduce((a,b) => a+b, 0);

});

document.getElementById('fraction').addEventListener('click', (event) => {
  price_fraction.push(9.3);
  number_fraction.push(1);
  cartprice.push(9.3);
  cartqty.push(1);
  let element_fraction_number = document.getElementById('fraction_number');
  totalnumberfraction.push(number_fraction.shift());
  element_fraction_number.innerText = totalnumberfraction.reduce((a,b) => a+b, 0);
  let element_fraction_price = document.getElementById('fraction_price');
  totalpricefraction.push(price_fraction.shift());
  element_fraction_price.replaceChildren();
  element_fraction_price.innerText = totalpricefraction.reduce((a,b) => a+b, 0);

});

document.getElementById('1984').addEventListener('click', (event) => {
  price_984.push(8.5);
  number_1984.push(1);
  cartqty.push(1);
  cartprice.push(8.5);
  let element_1984_number = document.getElementById('1984_number');
  totalnumber1984.push(number_1984.shift());
  element_1984_number.innerText = totalnumber1984.reduce((a,b) => a+b, 0);
  let element_1984_price = document.getElementById('1984_price');
  totalprice1984.push(price_984.shift());
  element_1984_price.replaceChildren();
  element_1984_price.innerText = totalprice1984.reduce((a,b) => a+b, 0);

});

document.getElementById('removekite').addEventListener('click', (event) => {
  if (!!totalkitenumber.length) {
    cartqty.push(-1);
    cartprice.push(-9);
  }
  let element_kite_number2 = document.getElementById('kite_number');
  totalkitenumber.pop();
  element_kite_number2.innerText = totalkitenumber.reduce((a,b) => a+b, 0);
  let element_kite_price2 = document.getElementById('kite_price');
  totalkiteprice.pop();
  element_kite_price2.innerText = totalkiteprice.reduce((a,b) => a+b, 0);

});

document.getElementById('removefraction').addEventListener('click', (event) => {
  if (!!totalnumberfraction.length) {
    cartqty.push(-1);
    cartprice.push(-9.3);
  }
  let element_fraction_number2 = document.getElementById('fraction_number');
  totalnumberfraction.pop();
  element_fraction_number2.innerText = totalnumberfraction.reduce((a,b) => a+b, 0);
  let element_fraction_price2 = document.getElementById('fraction_price');
  totalpricefraction.pop();
  element_fraction_price2.innerText = totalpricefraction.reduce((a,b) => a+b, 0);

});

document.getElementById('remove1984').addEventListener('click', (event) => {
  if (!!totalnumber1984.length) {
    cartqty.push(-1);
    cartprice.push(-8.5);
  }
  let element_1984_number2 = document.getElementById('1984_number');
  totalnumber1984.pop();
  element_1984_number2.innerText = totalnumber1984.reduce((a,b) => a+b, 0);
  let element_1984_price2 = document.getElementById('1984_price');
  totalprice1984.pop();
  element_1984_price2.innerText = totalprice1984.reduce((a,b) => a+b, 0);

});

document.getElementById('cart').addEventListener('click', (event) => {
  let element_total_number = document.getElementById('total_number');
  element_total_number.replaceChildren();
  element_total_number.innerText = cartqty.reduce((a,b) => a+b, 0);
  let element_total_price = document.getElementById('total_price');
  element_total_price.innerText = cartprice.reduce((a,b) => a+b, 0);

});
var images, round;


let element_home_town = document.getElementById('home-town');
element_home_town.replaceChildren();
element_home_town.setAttribute("src", 'https://kurdistanhumanrights.org/fa/wp-content/uploads/2017/10/Pawe.jpg');
images = ['https://i.pinimg.com/736x/ef/5a/0f/ef5a0fe3d2f97639b8434adfea3b5287--iran.jpg', 'https://pbs.twimg.com/media/CXvrLXqWwAE7tfJ.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Winter_of_Paweh.jpg/800px-Winter_of_Paweh.jpg?20170323212257', 'https://theonearmedcrab.com/wp-content/uploads/2016/09/iran15_9_DSC03879.jpg', 'https://pbs.twimg.com/media/E1-KD60VUAAg9j-.jpg'];
round = [];


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  let element_home_town2 = document.getElementById('home-town');
  element_home_town2.replaceChildren();
  element_home_town2.setAttribute("src", images.shift());

});

document.getElementById('previouse').addEventListener('click', (event) => {
  images.unshift(images.slice(-1)[0]);
  let element_home_town3 = document.getElementById('home-town');
  element_home_town3.replaceChildren();
  element_home_town3.setAttribute("src", images.pop());

});
