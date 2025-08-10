import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/counter'
import  blogReducer  from "./slice/blogslice";

const store=configureStore({
    counter:counterReducer,
    blog:blogReducer

})

export default store;