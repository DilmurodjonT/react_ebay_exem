import { createStore } from "redux";
import cartReducer from "../reduser/reduser";

const store = createStore(cartReducer);

export default store;
