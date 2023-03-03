

 export default function Nav(props){

    return(
       <nav>
           <ul>
               {/* boucle pour affiché les routes reçus en props*/}
               {props.chemins.map((i,k) =>
               <li>
                   <a key={k.toString()}  href={'/'+i}>{i}</a>
               </li>
               )}
           </ul>

           <li>
               <a  href={'/info/Loged'}>age</a>
           </li>
       </nav>
    )
 }