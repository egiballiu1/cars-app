import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import { carReducer, addCar, removeCar, changeSearchTerm } from "./slices/carSlice";

const store = configureStore({
    reducer : {
        form : formReducer,
        cars : carReducer
    }
})

export { store , changeCost, changeName, addCar, removeCar, changeSearchTerm}