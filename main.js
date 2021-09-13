var div = document.getElementById("cont");
var cars = [
  {
    model: "toyota",
    year: 1999,
    price: 120000,
    discount: 25,
    afterDiscount: function () {
      var discount = this.price * 0.25;
      return this.price - discount;
    },
    img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    model: "hundai",
    year: 2001,
    price: 100000,
    discount: 10,
    afterDiscount: function () {
      var discount = this.price * 0.1;
      return this.price - discount;
    },
    img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    model: "subaro",
    year: 2003,
    price: 80000,
    discount: 7,
    afterDiscount: function () {
      var discount = this.price * 0.07;
      return this.price - discount;
    },
    img: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    model: "mercedes",
    year: 2005,
    price: 60000,
    discount: 3,
    afterDiscount: function () {
      var discount = this.price * 0.03;
      return this.price - discount;
    },
    img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    model: "shevrolet",
    year: 2007,
    price: 100000,
    discount: 8,
    afterDiscount: function () {
      var discount = this.price * 0.08;
      return this.price - discount;
    },
    img: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

for (var i=0; i<cars.length; i++){
    div.innerHTML+=`<p>${cars[i].model} ${cars[i].year} ${cars[i].price} ${cars[i].afterDiscount()}<img src="${cars[i].img}"></p>`
}


for (let i = 0; i < cars.length; i++) {
  switch (cars[i].discount) {
    case 25:
      console.log("crazy sale");
      break;
    case 10:
      console.log("good deal for you");
      break;
    case 7:
      console.log("not bad");
      break;
    case 3:
      console.log("this is joke");

    default:
      console.log("no discount today");
      break;
  }
}


