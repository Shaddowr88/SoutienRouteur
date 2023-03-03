

 export default function Fort(props){

    return(
       <div>

           <h1 style={Styles.grosTitre}>
               {props.titre}
           </h1>


           <div style={Styles.grosElement}>


           </div>

       </div>
    )
 }

 const Styles= {
     grosElement:{  height: '10em',
     backgroundColor: 'yellow',
     },

     grosTitre:{
         fontSize: '10em',
         color: 'red'
     },
 }
