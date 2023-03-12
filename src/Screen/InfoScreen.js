import ComposantOne from "../Componants/ComposantOne";
import Fort from "../Componants/SliderComposant";
import {useParams} from "react-router-dom";


export default function InfoScreen(){

    let isLoged = false;
        return(
            isLoged ?
                <div>
                    <h1>Hello Info Screen !! </h1>

                    <ComposantOne />
                    <a href={"/home"}>home</a>
                </div> :

            <div>
                <h1>Non Autorisé</h1>
                <a href={"/home"}>home</a>
            </div>
        )

 }
