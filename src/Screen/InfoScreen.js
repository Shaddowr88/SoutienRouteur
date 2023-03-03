import ComposantOne from "../Componants/ComposantOne";
import Fort from "../Componants/ComposantFort";
import {useParams} from "react-router-dom";


export default function InfoScreen(){

    let {isLoged}=useParams();
// Affichage conditionnel en fonction du parametre ( age ) reçuc dans l'Uri
    if( isLoged !== 'Loged'){

        return(
            <div>
                <h1>Non Autorisé</h1>
                <a href={"/home"}>home</a>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <h1>Hello Info Screen !! </h1>
                <Fort/>
                <ComposantOne />
                <a href={"/home"}>home</a>
            </div>
        )

    }

 }