import { configureStore } from "@reduxjs/toolkit";
import currReduser from './Curr';
import themeReduser from "./Theme";
const store = configureStore({
    reducer:{
        Theme:themeReduser,
        Curr:currReduser,
    }
});

export default store;