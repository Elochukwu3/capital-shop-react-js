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
import Icons from "./body/Icons";
import Footer from "./body/Footer";

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
        <section
          style={{
            background: "#f6f6f6",
            marginTop: "3rem",
            padding: "1rem 0",
            minHeight: "0",
            paddingBottom:'3rem'
          }}
        >
          <h2 style={{ padding: "2rem 0 1rem 0", textAlign:'center' }}>Latest News</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <CardHolder
              header={"What Curly Irons are the best Ones"}
              image={"./images/redbottle.png"}
              description={
                "Looking nice and sweet is not a crime, we make you feel the vibe, with great products that shows love"
              }
            />
            <CardHolder
              header={"Let's open the itailiano baggage"}
              image={"./images/shoes.png"}
              description={
                "Stoops to kill, italian kits, ready to be dessemble down to fashion wrings"
              }
            />
            <CardHolder
              header={"It glitters to be gold or ore"}
              image={"./images/greensmallbottle.png"}
              description={
                "Stoops to kill, italian kits, ready to be dessemble down to fashion wrings"
              }
            />
          </div>
        </section>
        <article
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            width: "100%",
            background: "#fff",
            padding: "4rem 0",
          }}
        >
          <Icons
            icons={"./icons/services1.svg"}
            captions={"Free delivery on all orders"}
            msg={"fast & free delivery"}
          />
          <Icons
            icons={"./icons/services2.svg"}
            captions={"Free delivery on all orders"}
            msg={"fast & free delivery"}
          />
          <Icons
            icons={"./icons/services3.svg"}
            captions={"Free delivery on all orders"}
            msg={"fast & free delivery"}
          />
          <Icons
            icons={"./icons/services4.svg"}
            captions={"Free delivery on all orders"}
            msg={"fast & free delivery"}
          />
        </article>
        <footer>
          <Footer/>
        </footer>
      </main>
    </div>
  );
}

export default App;
