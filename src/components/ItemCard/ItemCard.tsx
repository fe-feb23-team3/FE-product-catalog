/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './ItemCard.scss';
import home from '../images/home.svg';
import arrowGreyRight from '../images/arrow_grey_right.svg';
import arrowGreyLeft from '../images/arrow_grey_left.svg';
import arrowBlackLeft from '../images/Stroke.svg';
import arrowBlackRight from '../images/arrow_black_right.svg';
import colorCircle from '../images/color_circle.svg';
import favourites from '../images/favourites.svg';
import { getItemCardDataById } from '../../api/phones';
import { ItemCardData } from '../../types/itemCardData';

export const ItemCard: React.FC = () => {
  const [cardData, setCardData] = useState<ItemCardData | null>(null);

  const url = window.location.hash;
  const splitedUrl = url.split('/');
  const itemName = splitedUrl[2];

  // eslint-disable-next-line no-console
  console.log(itemName);

  const loadPhoneData = async () => {
    const desiredPhone = await getItemCardDataById(itemName);

    setCardData(desiredPhone);
  };

  // eslint-disable-next-line no-console
  console.log(cardData);

  useEffect(() => {
    loadPhoneData();
  }, []);

  return (
    <div className="item__card">
      <div className="path">
        <img src={home} alt="home" className="path__item" />

        <img src={arrowGreyRight} alt="arrow right" className="path__item" />

        <p className="path__item-text">Phones</p>

        <img src={arrowGreyRight} alt="arrow right" className="path__item" />

        <p className="path__item-text">{cardData?.name}</p>
      </div>

      <NavLink to="/" className="back__link">
        <img
          src={arrowBlackLeft}
          alt="arrow left"
          className="back__link-item"
        />

        <p className="back__link-name">Back</p>
      </NavLink>

      <h1 className="title">{cardData?.name}</h1>

      <div className="grid">
        <div
          className="
          phone__photo-wraper
          grid__item--desktop-1-12
          grid__item--tablet-1-7
          grid__item--phone-1-4"
        >
          <div
            className="
            grid__item--desktop-3-10
            grid__item--tablet-3-7
            grid__item--phone-1-4"
          >
            <div className="phone__photo">
              <img
                src="https://be-product-catalog.onrender.com/products/phones/8/image"
                alt="phone"
                className="phone__photo--main"
              />
            </div>
          </div>

          <div
            className="
            grid__item--desktop-1-2
            grid__item--tablet-1-2
            grid__item--phone-1-4"
          >
            <div className="phone__photo-container">
              <div className="phone__photo--small"></div>
              <div className="phone__photo--small"></div>
              <div className="phone__photo--small"></div>
              <div className="phone__photo--small"></div>
              <div className="phone__photo--small"></div>
            </div>
          </div>
        </div>

        <div
          className="
          grid__item--desktop-13-19
          grid__item--tablet-8-12
          grid__item--phone-1-4"
        >
          <div className="controllers">
            <div className="colors">
              <div className="controllers__title">
                <p>Available colors</p>
                <p>{`ID: ${cardData?.namespaceId}`}</p>
              </div>
              <div className="colors__circle-container">
                <img
                  src={colorCircle}
                  alt="color circle"
                  className="colors__circle"
                />
              </div>
            </div>
          </div>

          <div className="capacity">
            <p>Select capacity</p>
            <div className="capacity__container">
              {cardData?.capacityAvailable.map((capacity) => (
                <div className="capacity__button" key={cardData?.id}>
                  {capacity}
                </div>
              ))}
            </div>
          </div>

          <div className="price">
            <span className="price__new">{`$${cardData?.priceRegular}`}</span>
            <span className="price__old">{`$${cardData?.priceDiscount}`}</span>
          </div>

          <div className="add-to-cart">
            <button type="button" className="add-to-cart__button">
              Add to cart
            </button>
            <img
              src={favourites}
              alt="favourites"
              className="add-to-cart__favourites"
            />
          </div>

          <div className="characteristics">
            <div className="characteristics__title">
              <p className="characteristics__item">Screen</p>
              <p className="characteristics__item">Resolution</p>
              <p className="characteristics__item">Processor</p>
              <p className="characteristics__item">RAM</p>
            </div>

            <div className="characteristics__description">
              <p className="characteristics__item">{cardData?.screen}</p>
              <p className="characteristics__item">{cardData?.resolution}</p>
              <p className="characteristics__item">{cardData?.processor}</p>
              <p className="characteristics__item">{cardData?.ram}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid">
        <div
          className="
          grid__item--desktop-1-11
          grid__item--tablet-1-12
          grid__item--phone-1-4"
        >
          <div className="about">
            <h2 className="about__title">About</h2>
            <h3 className="about__paragraph-title">
              {cardData?.description[0].title}
            </h3>

            <p className="about__text">{cardData?.description[0].text[0]}</p>

            <p className="about__text">{cardData?.description[0].text[1]}</p>

            <h3 className="about__paragraph-title">
              {cardData?.description[1].title}
            </h3>

            <p className="about__text">{cardData?.description[1].text[0]}</p>

            <h3 className="about__paragraph-title">
              {cardData?.description[2].title}
            </h3>

            <p className="about__text">{cardData?.description[2].text[0]}</p>
          </div>
        </div>

        <div
          className="
          grid__item--desktop-13-24
          grid__item--tablet-1-12
          grid__item--phone-1-4"
        >
          <div className="tech-specs">
            <h2 className="tech-specs__title">Tech specs</h2>
            <div className="tech-specs__container">
              <div className="tech-specs__name">
                <p className="tech-specs__item">Screen</p>
                <p className="tech-specs__item">Resolution</p>
                <p className="tech-specs__item">Processor</p>
                <p className="tech-specs__item">RAM</p>
                <p className="tech-specs__item">Built in memory</p>
                <p className="tech-specs__item">Camera</p>
                <p className="tech-specs__item">Zoom</p>
                <p className="tech-specs__item">Cell</p>
              </div>

              <div className="tech-specs__description">
                <p className="tech-specs__item">{cardData?.screen}</p>
                <p className="tech-specs__item">{cardData?.resolution}</p>
                <p className="tech-specs__item">{cardData?.processor}</p>
                <p className="tech-specs__item">{cardData?.ram}</p>
                <p className="tech-specs__item">{cardData?.capacity}</p>
                <p className="tech-specs__item">{cardData?.camera}</p>
                <p className="tech-specs__item">{cardData?.zoom}</p>
                <p className="tech-specs__item">{cardData?.cell.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recomended">
        <div className="recomended__container">
          <h2 className="recomended__title">You may also like</h2>

          <div className="arrow">
            <img
              src={arrowGreyLeft}
              alt="arrow left"
              className="arrow-icon arrow-icon--grey"
            />

            <img
              src={arrowBlackRight}
              alt="arrow right"
              className="arrow-icon arrow-icon--black"
            />
          </div>
        </div>
      </div>

      <div className="empty__card">Place for card</div>
    </div>
  );
};
