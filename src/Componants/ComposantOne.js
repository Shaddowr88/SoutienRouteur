

 export default function ComposantOne(props){

    return(
        <div>
            <div style={Styles.grosElement}>
                <h1>
                   <a style={Styles.grosTitre} href={"/home"}>TITRE Composant</a>
                </h1>
            </div>
        </div>
    )
 }

 const Styles= {
     grosElement:{  height: '20em',
         backgroundColor: 'blue',
         marginBottom:'5em'
     },

     grosTitre:{
         fontSize: '5em',
         color: 'red',
         textDecoration:'none',
     },
 }
