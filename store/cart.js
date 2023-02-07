export const state = () => ({
  items: [],
})

export const mutations = {
  initialiseStore(state) {
    const shoppingCart = localStorage.getItem('shoppingCart')

    if (shoppingCart) {
      state.items = JSON.parse(shoppingCart)
    }
  },
  set(state, items) {
    state.items = items

    localStorage.setItem("shoppingCart", JSON.stringify(state.items));
  },
  add(state, item) {
    let product_idx = state.items.findIndex(val => val.product_code === item.product_code)

    if (product_idx >= 0) {
      state.items[product_idx].amount += 1
    } else {
      item.amount = 1
      state.items.push(item)
    }

    localStorage.setItem("shoppingCart", JSON.stringify(state.items));
  },
  reduceQty(state, item) {
    let product_idx = state.items.findIndex(val => val.product_code === item.product_code)

    if (product_idx && state.items[product_idx].amount > 1) {
      state.items[product_idx].amount -= 1

      localStorage.setItem("shoppingCart", JSON.stringify(state.items));
    }
  },
  updateQty(state, item, qty) {
    let product_idx = state.items.findIndex(val => val.product_code === item.product_code)

    if (product_idx) {
      state.items[product_idx].amount = qty

      localStorage.setItem("shoppingCart", JSON.stringify(state.items));
    }
  },
  remove(state, item) {
    let product_idx = state.items.findIndex(val => val.product_code === item.product_code)

    state.items.splice(product_idx, 1);

    localStorage.setItem("shoppingCart", JSON.stringify(state.items));
  },
};