import ComposantOne from "../Componants/ComposantOne";
import Fort from "../Componants/ComposantFort";
import {UserContext} from "../App";

const el = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];



export default function UserScreen(){


        return(

            <div>
                <UserContext.Consumer>
                    { value => <h1> Hello { value.id} !!!</h1>}
                    {/* affiche: Reed */}
                </UserContext.Consumer>
                <Fort elements={el}/>
                <ComposantOne />
                <a href={"contacts/1"}>home</a>
            </div>
        )



 }
