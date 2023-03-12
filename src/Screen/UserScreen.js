import ComposantOne from "../Componants/ComposantOne";
import Slider from "../Componants/SliderComposant";
import {UserContext} from "../App";
import {useParams} from "react-router-dom";
import FillerComponent from "../Componants/FillerComponent";

const el = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];



export default function UserScreen(){

    let {userId}=useParams();

    return(
            <div>
                <UserContext.Consumer>
                    { value => <h1> Hello { value.id} !!!</h1>}
                    {/* affiche: Reed */}
                </UserContext.Consumer>

                {el.filter(e => e.id == userId).map(filteredEl => (
                      <h1> {filteredEl.title}</h1>
                ))}
                <Slider elements={el}/>
                <FillerComponent/>

                <a href={"contacts/1"}>home</a>
            </div>


    )
 }
