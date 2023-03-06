import './App.css';
import React from "react";
import * as PropTypes from "prop-types";
import HomeScreen from "./Screen/HomeScreen";

import Nav from "./Componants/Nav";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NofoundScreen from "./Screen/NofoundScreen";
import InfoScreen from "./Screen/InfoScreen";
import Log from "./Screen/Log";
import LogOk from "./Screen/LogOK";
import UserScreen from "./Screen/UserScreen";

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
                path: "/home/:userId",
                element: <UserScreen />,
            },
        ],
    },
    {path: "/", element: < Log/>},
    {path: "/info/:isLoged", element: <InfoScreen/>},
    // route Not Match
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
