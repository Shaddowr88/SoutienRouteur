import {Outlet} from "react-router-dom";


export default function Log(){

    return(
      <div>
          <h1>
              Log
          </h1>
          <a href={"/home/1"}>home</a>
          <Outlet />
      </div>
    );
}
