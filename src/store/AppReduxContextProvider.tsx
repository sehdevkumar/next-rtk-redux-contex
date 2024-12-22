"use client"

import React from "react";
import { Provider } from "react-redux";
import { appStore } from "./store";



export default function AppReduxContext({children}: {children: React.ReactNode})  {
       
    
    return  (
       
        <Provider store={appStore}>
           {children}
        </Provider>


    )


}