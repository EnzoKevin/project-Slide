import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Manipulation,
  Parallax,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BtnSlide from "./element/BtnSlide";

import Img from "../../images/rosadepreda.jpeg";
import Img2 from "../../images/vermelinho.jpeg";
import Img3 from "../../images/plantinha-fofa.jpeg";
import Img4 from "../../images/plantas.jpeg";

import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

export default (props) => {
  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return (
        '<span class="' + "swiper-pagination-bullet" + '"' + ">" + "</span>"
      );
    },
  };

  const data = [
    { id: "1", image: Img },
    { id: "2", image: Img2 },
    { id: "3", image: Img3 },
    { id: "4", image: Img4 },
  ];

  return (
    <div>
      <Swiper
        className=""
        modules={[
          Manipulation,
          Autoplay,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Parallax,
        ]}
        slides-per-view="1"
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        centeredSlides={true}
        loop={true}
        pagination={pagination}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        css-mode="true"
      >
        {data.map((item) => (
          <SwiperSlide>
            <img src={item.image} alt={item.image} className="slide_content" />
          </SwiperSlide>
        ))}
        <BtnSlide />
      </Swiper>
    </div>
  );
};
