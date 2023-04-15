import style from './Slider.module.css';
import sliderSerum from '../../../images/homeAndBlogPage/serum_slider.png';
import sliderCream from '../../../images/homeAndBlogPage/cream_slider.png';
import sliderGel from '../../../images/homeAndBlogPage/washing_gel_slider.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";


export default class SlickSlider extends Component {
  render() {
    const settings = {
        dots: true,
        dotsClass: `${style.customDots}`,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <></>, // пустой фрагмент вместо prevArrow
        nextArrow: <></>,
    customPaging: () => (
      <button type="button" aria-label="button" className={style.customDots}>
        &nbsp;
      </button>
    )
    };
    return (
        <div >
        <Slider {...settings}>
         <div>
                    <img src={sliderSerum} className={style.sliderImg} alt="Зволожуюча сиворотка для обличчя" />
                    <div className={style.textSlider}>
                    <h3 className={style.title}>Новинка від AESTHETICS</h3>
                    <p className={style.description}>Зволожуюча сиворотка для обличчя</p>
                  </div>
        </div>
        <div>
                    <img src={sliderCream} className={style.sliderImg} alt="Набір денний та нічний крем" />
                    <div className={style.textSlider}>
                    <h3 className={style.title}>Новинка від AESTHETICS</h3>
                    <p className={style.description}>
                      Набір Денний та <br />нічний крем
                    </p>
                  </div>
        </div>
        <div>
                    <img src={sliderGel} className={style.sliderImg} alt="Гель для вмивання для проблемної шкіри" />
                    <div className={style.textSlider}>
                    <h3 className={style.title}>Новинка від AESTHETICS</h3>
                    <p className={style.description}>
                      Гель для вмивання <br />
                      для проблемної шкіри
                    </p>
                  </div>
        </div>
            </Slider>
      </div>
    );
  }
}