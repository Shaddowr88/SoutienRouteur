import React from 'react';

import {Outlet} from "react-router-dom";
import Nav from "../Componants/Nav";

const path= ['home','A propos','encore','hello'];

export default function LogOk(){

    return(
      <div>
          <Nav chemins={path}/>
          { /* <h1> LogOK </h1>*/}
          <Outlet />
      </div>
    );

}
