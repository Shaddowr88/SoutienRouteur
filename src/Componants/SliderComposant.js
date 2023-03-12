const Slider = (props)=>{
    return(
       <div>

           <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
               <div className="carousel-indicators">
                   { props.elements.map((element, i) =>
                       <button key={i.toString()} type="button" data-bs-target="#myCarousel" data-bs-slide-to={i.toString()} className="active"
                               aria-label={"Slide "+ i.toString()} aria-current="true"></button>
                   )}
               </div>
               <div className="carousel-inner">
                   {props.elements.map((element,i) =>
                       <div style={Styles.grosElement} key={i.toString()} className="carousel-item active">
                           <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                               <rect width="100%" height="100%" fill="#777"></rect>
                           </svg>
                           <div className="container">
                               <div className="carousel-caption">
                                   <h1>Another example headline.</h1>
                                   <p>Some representative placeholder content for the second slide of the carousel.</p>
                                   <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                               </div>
                           </div>
                       </div>
                   )}
               </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                       data-bs-slide="prev">
                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                       data-bs-slide="next">
                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
                   <span className="visually-hidden">Next</span>
               </button>
           </div>


           <h1 style={Styles.grosTitre}>
               {props.titre}
           </h1>


       </div>
    )
 }
export default Slider

const Styles= {
     grosElement:{  height: '50em',
     backgroundColor: 'yellow',
     },

     grosTitre:{
         fontSize: '10em',
         color: 'red'
     },
 }
