let theCart = {
  cart: [],
  addToCart(item){
    if (!this.cart.find(i => i.item.id == item.id)) this.cart.push(item);
  },
  clear() {
    this.cart = []; 
  }
};

export default theCart;