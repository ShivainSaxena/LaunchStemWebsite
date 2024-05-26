import { useEffect, useState } from "react";

const Carousel = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 10000);
  }, []);

  return (
    <div
      class="scroll-container"
      style={{ pointerEvents: show ? "auto" : "none" }}
    >
      <div class="carousel-primary">
        <div className="testimonial">
          <h1>Testimonial 1</h1>
          <p>Wow you guys are so stem</p>
        </div>
        <div className="testimonial">
          <h1>Testimonial 2</h1>
          <p>Wow you guys are so stem</p>
        </div>
      </div>
      <div
        class="carousel-primary carousel-secondary"
        style={{ opacity: show ? 1 : 0 }}
      >
        <div className="testimonial">
          <h1>Testimonial 3</h1>
          <p>Wow you guys are so stem</p>
        </div>
        <div className="testimonial">
          <h1>Testimonial 4</h1>
          <p>Wow you guys are so stem</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
