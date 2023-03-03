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

RouterProvider.propTypes = {routes: PropTypes.any};

const routes = createBrowserRouter([
    {path: "/home", element: <LogOk/>},
    {path: "/", element: < Log/>},
    // route avec paramètre
    {path: "/info/:isLoged", element: <InfoScreen/>},
    // route 404
    {path: "*", element: <NofoundScreen/>},
]);

// tableau de nom de route ( optionnel ) fonctionne avec la nav qui accepte des props
const path= ['home', 'info','ff','encore','hello'];

function App() {
    return (
        <div>

            <Nav chemins={path}/>

            <RouterProvider router={routes}/>
        </div>
    );
}
export default App;
