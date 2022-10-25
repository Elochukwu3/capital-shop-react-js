import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
export default function Slider({
  handleEvent,
  counter,
  handleEventDec,
  slider,
  styling,
}) {
  return (
    <>
      {slider.length > 0
        ? slider.map(({ img, price, discount, text, id }, index) => {
            return (
              <div
                ref={styling}
                className={
                  counter === index
                    ? "active-slide sliderContainer"
                    : "sliderContainer"
                }
                key={id}
                style={{ transform: `translateX(${counter}00%)` }}
              >
                <img src={img} />
                <p>{text}</p>
                <span>{price}</span>{" "}
                <span
                  style={{
                    color: "#d7c9af",
                    textDecoration: "line-through",
                    paddingLeft: ".4rem",
                  }}
                >
                  {discount}
                </span>
              </div>
            );
          })
        : ""}
      <span className="arrow left" onClick={handleEventDec}>
        {" "}
        <ArrowLeftCircle />
      </span>
      <span className="arrow right" onClick={handleEvent}>
        <ArrowRightCircle />
      </span>
    </>
  );
}
