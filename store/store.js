import { configureStore } from "@reduxjs/toolkit";
import themeReduser from "./Theme";
const store = configureStore({
    reducer:{
        Theme:themeReduser,
    }
});

export default store;