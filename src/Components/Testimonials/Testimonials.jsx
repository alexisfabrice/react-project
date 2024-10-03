import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/arrow1.png'
import back_icon from '../../assets/leftarrow.png'
import user_1 from '../../assets/user_1.png'
import user_2 from '../../assets/user_2.png'
import user_3 from '../../assets/user_3.png'
import user_4 from '../../assets/user_4.png'
import user_5 from '../../assets/user_5.png'


function Testimonials() {
const slider=useRef();
let tx=0;

const next = ()=>{
if(tx >-50){
  tx -=25;
}
slider.current.style.transform =`translateX(${tx}%)`;

}
const back = ()=>{
if(tx < 0){
  tx +=25;
}
slider.current.style.transform=`translatex(${tx}%)`;
}

  return (
    <div className='Testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={next} />
      <img src={back_icon} alt="" className='back-btn' onClick={back}  />
      <div className="slider">
<ul ref={slider}>
  <li>
    <div className="slide">
    <img src={user_1} alt="" />
      <div className="user-info">
 
        <div>
        <h3>bigirimana fabrice</h3>
        <span>visit,kagera national park</span>
       
        </div>
        

      </div>
      <p>Lorem ipsum dolor sit amet consectetur adi
          pisicing elit. Ab recusandae voluptatibus alias
           molestias, adipisci nemo, enim porro sed quod
          </p>
    </div>
  </li>
  <li>
    <div className="slide">
    <img src={user_2} alt="" />
      <div className="user-info">
    
        <div>
        <h3>bigirimana fabrice</h3>
        <span>visit,kagera national park</span>
       
        </div>
        

      </div>
      <p>Lorem ipsum dolor sit amet consectetur adi
          pisicing elit. Ab recusandae voluptatibus alias
           molestias, adipisci nemo, enim porro sed quod
         </p>
    </div>
  </li>
  <li>
    <div className="slide">
    <img src={user_2} alt="" />
      <div className="user-info">
       
        <div>
        <h3>bigirimana fabrice</h3>
        <span>visit,kagera national park</span>
        
        </div>
        

      </div>
      <p>Lorem ipsum dolor sit amet consectetur adi
          pisicing elit. Ab recusandae voluptatibus alias
           molestias, adipisci nemo, enim porro sed quod
           </p>
    </div>
  </li>
  <li>
    <div className="slide">
    <img src={user_3} alt="" />
      <div className="user-info">
       
        <div>
        <h3>bigirimana fabrice</h3>
        <span>visit,kagera national park</span>
      
        </div>
        

      </div>
      <p>Lorem ipsum dolor sit amet consectetur adi
          pisicing elit. Ab recusandae voluptatibus alias
           molestias, adipisci nemo, enim porro sed quod
        </p>
    </div>
  </li>
  <li>
    <div className="slide">
    <img src={user_4} alt="" />
      <div className="user-info">
      
        <div>
        <h3>bigirimana fabrice</h3>
        <span>visit,kagera national park</span>
       
        </div>
        

      </div>
      <p>Lorem ipsum dolor sit amet consectetur adi
          pisicing elit. Ab recusandae voluptatibus alias
           molestias, adipisci nemo, enim porro sed quod
    </p>
    </div>
  </li>
  <li>
    <div className="slide">
    <img src={user_5} alt="" />
      <div className="user-info">
       
        <div>
        <h3>bigirimana fabrice</h3>
        <span>visit,kagera national park</span>
      
        </div>
        

      </div>
      <p>Lorem ipsum dolor sit amet consectetur adi
          pisicing elit. Ab recusandae voluptatibus alias
           molestias, adipisci nemo, enim porro sed quod
        </p>
    </div>
  </li>
</ul>
      </div>
    </div>
  )
}

export default Testimonials
