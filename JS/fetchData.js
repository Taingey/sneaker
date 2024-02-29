import { getData } from "./getData.js";
import { renderProducts } from "./randerProduct.js";
import { renderUsers } from "./randerUsers.js";

// Fetch data and render cards
getData("./product.js").then((products) => {
  if (products) {
    renderProducts(products);
  }
});

getData("./users.js").then((users) => {
  if (users) {
    renderUsers(users);
  }
});
