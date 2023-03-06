import './App.css';
import React from "react";
import * as PropTypes from "prop-types";
import HomeScreen from "./Screen/HomeScreen";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NofoundScreen from "./Screen/NofoundScreen";
import InfoScreen from "./Screen/InfoScreen";
import Log from "./Screen/Log";
import LogOk from "./Screen/LogOK";
import UserScreen from "./Screen/UserScreen";
import AproposScreen from "./Screen/AppoposScreen";

const Users=[
    {
        id:20,
        name:'Lolo',
        avatarUrl:'https://media.licdn.com/dms/image/C4E03AQHJBuct_vZY1w/profile-displayphoto-shrink_100_100/0/1600690263845?e=1683763200&v=beta&t=ip7AfxeOOJ_Z0LvmUfN8c-CQsEFolNQA5bZ919XKgnc',
    }


]

export const UserContext = React.createContext();

RouterProvider.propTypes = {routes: PropTypes.any};

const routes = createBrowserRouter([
    {path: "/home", element: <LogOk/>, children: [
            {
                path: "/home/userScreen",
                element: <UserScreen/>,
            },
        ],
    },
    {path: "/", element: <Log/>},
    {path: "/A propos", element: <AproposScreen/>},
    {path: "/encore", element: <Log/>},
    {path: "/hello", element: <HomeScreen/>},
    {path: "/info/:isLoged", element: <InfoScreen/>},
    {path: "*", element: <NofoundScreen/>},
]);

function App() {
    return (
        <UserContext.Provider value={Users[0]} >
            <RouterProvider router={routes}/>
        </UserContext.Provider>
    );
}
export default App;
