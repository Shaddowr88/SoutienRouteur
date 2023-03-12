import {UserContext} from "../App";
import UserPicto from "../asset/img/User_Picto.png"
import DropMenu from "./DropMenuComponent";


export default function Nav(props){

    return(
       <nav>
           <header className="p-3 mb-3 border-bottom">
               <div className="container">
                   <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


                       <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                           {props.chemins.map((i,k) =>
                               <li key={k.toString()} >
                                   <a  href={'/'+i} className="nav-link px-2 link-dark">{i}</a>
                               </li>
                           )}
                       </ul>

                       <div className="dropdown text-end">

                           <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle"
                              data-bs-toggle="dropdown" aria-expanded="false">
                               <UserContext.Consumer>
                                   { value =>
                                       <img src={value.avatarUrl ||= UserPicto }
                                            alt="mdo"
                                            width="32"
                                            height="32"
                                            className="rounded-circle"/>
                                      }
                               </UserContext.Consumer>
                           </a>
                           <DropMenu/>
                       </div>
                   </div>
               </div>
           </header>
               <a  href={'/info/Loged'}>age</a>
       </nav>
    )
 }
