import star from '../images/star.png';
import cordoba from '../images/cordoba.png';

function Main() {
    
  
    return (
  
      <section className="restaurant1">
              <div className="imgrest0">
                    <a href="./menu.html"><img src={cordoba} alt="rest_1" className="rest_1"/></a>
              </div> 
              <div className="rest1text">
                    <p id="title">Cordoba Restaurant</p>
                    <p id="rating" className='starrating'><img src={star} alt="rating" className="starrating"/>  9</p>
                    <p id="distancia">0.5km away</p>
                    <p id="dinein">Dine-in, take away, delivery...</p>
              </div>
        </section>
    );
  }
  export default Main;
  