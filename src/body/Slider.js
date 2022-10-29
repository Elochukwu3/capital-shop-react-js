
export default function Slider({
  counter,
  slider,
  slid
}) {
  

  return (
    <>
      {slider.length > 0
        ? slider.map(({ img, price, discount, text, id }, index) => {
          // console.log(index, 'innn');
            return (
              <div
                className={
                  counter === index?
                    "active-slide sliderContainer":
                   "sliderContainer"
                }
                key={id}
                ref={slid}
                style={{ transform: `translateX(${counter}00%)` }}
              >
                <img src={img} alt={price}/>
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

    </>
  );
}
