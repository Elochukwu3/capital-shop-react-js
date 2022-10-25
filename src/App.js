

import './App.css';
import Categories from './body/Categories';
import Main from './body/Main';
import Slider from './body/Slider';
import FirstHeader from './header/FirstHeader';
import HeaderTwo from './header/HeaderTwo';
import SubHeader from './header/SubHeader';
import { useRef, useState } from 'react';
import { sliderData } from './Data';


function App() {
  const [carousel, setCarousel] = useState(0);
  const styling = useRef()
  console.log(carousel + 'each');
  const forwardCarousel = () =>{
    
    setCarousel(prev=> prev < sliderData.length - 4 ? prev + 1 : prev = 0)
  }
  const prevCarousel =()=>{
    setCarousel((prev)=>prev <= 0 ? prev = sliderData.length - 4  : prev - 1 )
    
  }

  return (
    <div className="App">
      <section>
      <FirstHeader />
      <HeaderTwo/>
      <SubHeader/>
      </section>
      <main>
        <section>
          <Main stying={styling} counter={carousel}>
            <Categories name={"Men's fashion"} imgUrl={'./images/yellow.webp'}/>
            <Categories name={"Women's fashion"} imgUrl={'./images/brownhandbag.png'}/>
            <Categories name={'Baby Fashion'} imgUrl={'./images/pinkoutfit.png'}/>
          </Main>
        </section>
        <section className={"sliderSection"}>
         <div className='sliderWrapper'>
         <Slider handleEvent={forwardCarousel} counter={carousel} handleEventDec={prevCarousel} slider={sliderData} />
         </div>
        </section>
      </main>
    </div>
  );
}

export default App;
