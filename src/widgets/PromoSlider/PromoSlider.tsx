import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './promoSlider.module.css';
import { PromoSlide } from 'entities/PromoSlide';
import { useMedia } from 'shared/hooks/useMedia';

import SliderInfo from '../../../public/static/promo_SliderInfo.json';
import classNames from 'classnames';

const CARD_HEIGHT_COEFFICIENT_TABLET = 1.05;
const CARD_HEIGHT_COEFFICIENT_DESKTOP = 0.45;

export const PromoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tablet = useMedia('(max-width:376px)');
  const container = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState<-1 | 0 | 1>(0);

  const { prevImgIndex, nextImgIndex, lastImgIndex } = useMemo(() => {
    let prevImgIndex;
    let nextImgIndex;
    let lastImgIndex;

    prevImgIndex = activeIndex ? activeIndex - 1 : SliderInfo.length - 1;
    nextImgIndex = activeIndex === SliderInfo.length - 1 ? 0 : activeIndex + 1;

    if (activeIndex === SliderInfo.length - 1) {
      lastImgIndex = 1;
    } else if (activeIndex === SliderInfo.length - 2) {
      lastImgIndex = 0;
    } else lastImgIndex = activeIndex + 2;

    return { prevImgIndex, nextImgIndex, lastImgIndex };
  }, [activeIndex]);

  const hendleScrollLeft = function () {
    setActiveIndex((current) => {
      const res = current === SliderInfo.length - 1 ? 0 : current + 1;
      return res;
    });
  };

  const hendleScrollRight = function () {
    setActiveIndex((current) => {
      const res = current ? current - 1 : SliderInfo.length - 1;
      return res;
    });
  };

  const sliderHight = useMemo(() => {
    return tablet ? cardWidth * CARD_HEIGHT_COEFFICIENT_TABLET : cardWidth * CARD_HEIGHT_COEFFICIENT_DESKTOP;
  }, [tablet, cardWidth]);

  useEffect(() => {
    if (container.current === null) return;
    const widthContainer = container.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width !== cardWidth) {
          setCardWidth(entry.contentRect.width);
        }
      }
    });
    resizeObserver.observe(container.current);

    let interval = setInterval(() => {
      setScrollLeft(false);
      hendleScrollLeft();
    }, 8000);

    if (touchEnd === 1) {
      clearInterval(interval);

      hendleScrollLeft();
      interval = setInterval(() => {
        hendleScrollLeft();
      }, 8000);
      setTouchStart(0);
      setTouchEnd(0);
    }

    if (touchEnd === -1) {
      clearInterval(interval);

      hendleScrollRight();
      interval = setInterval(() => {
        hendleScrollLeft();
      }, 8000);
      setTouchStart(0);
      setTouchEnd(0);
    }

    if (scrollLeft) {
      clearInterval(interval);
      setScrollLeft(false);
      hendleScrollRight();
      interval = setInterval(() => {
        hendleScrollLeft();
      }, 8000);
    }

    if (scrollRight) {
      clearInterval(interval);
      setScrollRight(false);
      hendleScrollLeft();
      interval = setInterval(() => {
        hendleScrollLeft();
      }, 8000);
    }

    return () => {
      widthContainer && resizeObserver.unobserve(widthContainer);
      clearInterval(interval);
    };
  }, [cardWidth, scrollLeft, scrollRight, tablet, touchEnd]);

  return (
    <section className={styles.root}>
      <div
        className={classNames(styles.slider, 'container')}
        style={{ height: `${sliderHight}px` }}
        ref={container}
      >
        <div key={prevImgIndex} className={classNames(styles.sliderImg, styles.sliderImgPrev)}>
          <PromoSlide
            title={SliderInfo[prevImgIndex].title}
            picture={!tablet ? SliderInfo[prevImgIndex].picture : SliderInfo[prevImgIndex].pictureMobile}
            description={SliderInfo[prevImgIndex].description}
            width={cardWidth}
            height={sliderHight}
          />
        </div>

        <div
          key={activeIndex}
          className={classNames(styles.sliderImg, styles.currentSlideImg)}
          onTouchStart={(e) => setTouchStart(e.changedTouches[0].clientX)}
          onTouchEnd={(e) => {
            touchStart > e.changedTouches[0].clientX ? setTouchEnd(1) : setTouchEnd(-1);
          }}
        >
          <PromoSlide
            title={SliderInfo[activeIndex].title}
            picture={!tablet ? SliderInfo[activeIndex].picture : SliderInfo[activeIndex].pictureMobile}
            description={SliderInfo[activeIndex].description}
            width={cardWidth}
            height={sliderHight}
          />
        </div>

        <div key={nextImgIndex} className={classNames(styles.sliderImg, styles.sliderImgNext)}>
          <PromoSlide
            title={SliderInfo[nextImgIndex].title}
            picture={!tablet ? SliderInfo[nextImgIndex].picture : SliderInfo[nextImgIndex].pictureMobile}
            description={SliderInfo[nextImgIndex].description}
            width={cardWidth}
            height={sliderHight}
          />
        </div>

        <div key={lastImgIndex} className={classNames(styles.sliderImg, styles.sliderImgLast)}>
          <PromoSlide
            title={SliderInfo[lastImgIndex].title}
            picture={tablet ? SliderInfo[lastImgIndex].picture : SliderInfo[lastImgIndex].pictureMobile}
            description={SliderInfo[lastImgIndex].description}
            width={cardWidth}
            height={sliderHight}
          />
        </div>
      </div>
      <button
        className={classNames(styles.btnControls, styles.btnControlsLeft, 'icon-arrowLeft_12x32__0')}
        onClick={() => setScrollLeft(true)}
      />
      <button
        className={classNames(styles.btnControls, styles.btnControlsRight, 'icon-arrowRight_12x32__0')}
        onClick={() => setScrollRight(true)}
      />
    </section>
  );
};
