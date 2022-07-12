// we only need one reducer thats why we combine all in one but here there is only one so not necessary but although

import changeTheNumber from "./updown";

import { combineReducers } from "redux";

const rootReducers = combineReducers(
    {
        changeTheNumber:changeTheNumber,
    }
);

export default rootReducers;
