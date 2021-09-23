const initialState = {
       products: [
              {
                     id: 22,
                     title: "Cabbage",
                     category: "Vegetables"
              }
       ]
}

export const productReducers = ( state = initialState, type: string) => {
       switch(type) {
              case "SET_PRODUCT":
                     return state
              default:
                     return state
       }
}