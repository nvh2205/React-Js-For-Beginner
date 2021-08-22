import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from '../features/Phones/PhonesSlice'
import cartReducer from '../features/Cart/CartSlice'
import oderReducer from '../features/Oder/OderSlice'
const rootReducer ={
    phones:phonesReducer,
    cart:cartReducer,
    oder:oderReducer,
}

const store = configureStore({
    reducer:rootReducer,
})

export default store;