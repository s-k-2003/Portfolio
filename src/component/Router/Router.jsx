import React from "react";
import { Routes, Route} from "react-router-dom"
import Portofilo from "../pages/Portofilo";

function RouteApp(){
    return (
        <Routes>
            <Route path="/" element={<Portofilo/>}/>
        </Routes>
      );
}

export default RouteApp;