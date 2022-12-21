
function renderCard(arrayCard,classFather) {
  for (product of productList) {
    const productCart = document.createElement("div");
    const imag = document.createElement("img");
    const productinfo = document.createElement("div");
    const producttext = document.createElement("div");
    const productPrice = document.createElement("p");
    const productName = document.createElement("p");
    const productinfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");

    productCart.classList.add("product-card");
    imag.setAttribute("src", product.Image);
    productinfo.classList.add("product-info");
    productPrice.innerText = "$" + product.price;
    productName.innerText = product.name;
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productinfoFigure.append(productImgCart);
    producttext.append(productPrice, productName);
    productinfo.append(producttext, productinfoFigure);
    productCart.append(imag, productinfo);
    classFather.append(productCart);
  }
}


const menuEmail = document.querySelector(".navbar-email");
const menuButton = document.querySelector(".menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppinCart = document.querySelector(".product-detail");
const mainContainer = document.querySelector(".content");
/* const toggleDeskMenu = () => {
  desktopMenu.classList.toggle("inactive");
  shoppinCart.classList.add("inactive");
};
const toggleMobileMenu = () => mobileMenu.classList.toggle("inactive");
 */
function toggleMenu(elemento) {
  elemento.classList.toggle("inactive");
  shoppinCart.classList.add("inactive");
}

const toggleCart = () => {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shoppinCart.classList.toggle("inactive");
};

function closeMenusClick() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shoppinCart.classList.add("inactive");
}

// añadimos un evento de escucha y llamamos a la funcion antes creada
mainContainer.addEventListener("click", closeMenusClick);

menuCarritoIcon.addEventListener("click", (toggle) => {
  toggleCart();
});
menuEmail.addEventListener("click", (toggle) => {
  toggleMenu(desktopMenu);
});
menuButton.addEventListener("click", (toggle) => {
  toggleMenu(mobileMenu);
});

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  Image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Book",
  price: 120,
  Image: "https://picsum.photos/300/200 ",
});

productList.push({
  name: "Televisor",
  price: 120,
  Image: "https://picsum.photos/300/200 ",
});

productList.push({
  name: "Computer",
  price: 120,
  Image: "https://picsum.photos/300/200 ",
});

productList.push({
  name: "Bike",
  price: 120,
  Image: "https://picsum.photos/300/200 ",
});

productList.push({
  name: "Bike",
  price: 120,
  Image: "https://picsum.photos/300/200 ",
});

productList.push({
  name: "Bike",
  price: 120,
  Image: "https://picsum.photos/300/200 ",
});

const cardscontainer = document.querySelector(".cards-container");

renderCard(productList,cardscontainer);