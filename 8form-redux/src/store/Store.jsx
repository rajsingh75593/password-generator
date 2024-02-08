import { configureStore } from "@reduxjs/toolkit"
import  {todoreducer} from "./slice/MaincategorySlice"

export const store = configureStore({
    reducer: todoreducer
    
})
