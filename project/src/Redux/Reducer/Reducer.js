import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";

export const Reducer = combineReducers({ productData: productReducer });
