import "./App.css";
import Categories from "./body/Categories";
import Main from "./body/Main";
import Slider from "./body/Slider";
import FirstHeader from "./header/FirstHeader";
import HeaderTwo from "./header/HeaderTwo";
import SubHeader from "./header/SubHeader";
import { useRef, useState } from "react";
import { sliderData } from "./Data";
import Testimonial from "./body/Testimonial";
import CardHolder from "./body/CardHolder";


function App() {
  const [carousel, setCarousel] = useState(0);
  const styling = useRef();
  console.log(carousel + "each");
  const forwardCarousel = () => {
    setCarousel((prev) =>
      prev < sliderData.length - 4 ? prev + 1 : (prev = 0)
    );
  };
  const prevCarousel = () => {
    setCarousel((prev) =>
      prev <= 0 ? (prev = sliderData.length - 4) : prev - 1
    );
  };

  return (
    <div className="App">
      <section>
        <FirstHeader />
        <HeaderTwo />
        <SubHeader />
      </section>
      <main>
        <section>
          <Main stying={styling} counter={carousel}>
            <Categories name={"Men's fashion"} imgUrl={".//images/men4.jpeg"} />
            <Categories
              name={"Women's fashion"}
              imgUrl={"./images/cloths.jpg"}
            />
            <Categories name={"Baby Fashion"} imgUrl={"./images/babby.jpg"} />
          </Main>
        </section>
        <section className={"sliderSection"}>
          <div className="sliderWrapper">
            <Slider
              handleEvent={forwardCarousel}
              counter={carousel}
              handleEventDec={prevCarousel}
              slider={sliderData}
            />
          </div>
        </section>
        <div className="testimonialContainer">
          <Testimonial />
        </div>
        <section className={"sliderSection"}>
          <div className="sliderWrapper">
            <Slider
              handleEvent={forwardCarousel}
              counter={carousel}
              handleEventDec={prevCarousel}
              slider={sliderData}
            />
          </div>
        </section>
        <div>
          <CardHolder/>
        </div>
      </main>
    </div>
  );
}

export default App;
