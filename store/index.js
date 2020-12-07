export const state = () => ({
  authenticated: false,
  bestFood : [],
  foods : [],
  carts : [],
})

export const mutations = {
  setAuthentication(state, status) {
    state.authenticated = status;
  },
  setBestFood(state, payload){
    state.bestFood = payload;
  },
  setFoods(state, payload){
    state.foods = payload;
  },
  setCarts(state, payload){
    state.carts = payload
  },
  updatedCarts(state, payload){
    state.carts.push(payload)
  },
  deletedCarts(state, id){
    state.carts = state.carts.filter((cart) => cart.id !== id)
  }
}
