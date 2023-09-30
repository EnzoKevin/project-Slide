import { useSwiper } from "swiper/react";
import "./btnCss.css";

export default (props) => {
  const swiper = useSwiper();

  return (
    <div className="swiper-buttons">
      <button
        onClick={() => swiper.slidePrev(1000)}
        className={`slide-btns-size left lnr lnr-chevron-left`}
      ></button>

      <button
        onClick={() => swiper.slideNext(1000)}
        className={`slide-btns-size right lnr lnr-chevron-right`}
      ></button>
    </div>
  );
};
