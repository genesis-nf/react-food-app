import star from '../images/star.png';
import Restaurants from '../data';



  function Main(){
      const PrintRestaurants = Restaurants.map((i)=>{
            return(
                  <section className="restaurant1">
                          <div className="imgrest0">
                                <a href="./menu.html"><img src={i.img} alt="rest_1" className="rest_1"/></a>
                          </div> 
                          <div className="rest1text">
                                <p id="title">{i.name}</p>
                                <p id="rating" className='starrating'><img src={star} alt="rating" className="starrating"/> {i.score}</p>
                                <p id="distancia">{i.location}</p>
                                <p id="dinein">{i.type}</p>
                          </div>
                    </section>

            )
            
      }) 
      return(PrintRestaurants())
  }
  export default Main;
  
  