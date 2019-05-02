import { createStore, combineReducers } from "redux";
import game from "./game.reducer";

const store = createStore(combineReducers({
    game
}));

export {
    store
}