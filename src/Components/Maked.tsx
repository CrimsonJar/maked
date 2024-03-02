import React from "react";
import CardPart from "./CardPart";
import Tabs from "./Tabs";
import NewsBlock from "./NewsBlock";
import Stock from "./Stock";
const Maked = () => {
  const tabsData = [
    { label: "Video", link: "https://example.com/1" },
    { label: "Pics", link: "https://example.com/2" },
    { label: "News", link: "https://example.com/3" },
    { label: "Maps", link: "https://example.com/4" },
    { label: "Market", link: "https://example.com/5" },
    { label: "Translator", link: "https://example.com/6" },
    { label: "Ephir", link: "https://example.com/7" },
    { label: "Anything", link: "https://example.com/8" },
  ];
  return (
    <div className='full '>
      <div className='upper-part'>
        <CardPart className='tabs-f-news'>
          <Tabs>
            <h3>{"заг-к 1"}</h3>
          </Tabs>
          <Tabs>
            <h3>{"заг-к 2"}</h3>
          </Tabs>
          <Tabs>
            <h3>{"заг-к 3"}</h3>
          </Tabs>
          <Tabs>
            <h4>{"current date"}</h4>
          </Tabs>
          <Tabs>
            <h3>{"spam!"}</h3>
            <p> exlelent spam</p>
          </Tabs>
        </CardPart>
        <div className='news'>
          <NewsBlock />
          <Stock
            values={{
              usd: 1,
              eur: 2,
              oil: 3,
            }}
          />
        </div>
      </div>

      <div className='middle-part'>
        <CardPart>
          <div className='input-tab'>
            {tabsData.map((tab, index) => (
              <Tabs key={index}>
                <a href={tab.link}> {tab.label} </a>
              </Tabs>
            ))}
          </div>

          <div className='LOGO'>Я</div>
          <div className='search'>
            <input type='text' placeholder='Поиск...' />
            <button>Поиск</button>
          </div>
          <div className='tabs-container'>
            <Tabs>
              <p> найдётся всё!111</p>
            </Tabs>
          </div>
        </CardPart>
      </div>
      <div className='bottom-part'>
        <CardPart>
          <Tabs className='banner'>
            <h3>{"Большой баннер"}</h3>
          </Tabs>
          <Tabs className='tabs-container-too1'>
            <h4>{"погода"}</h4>
            <img src='имитация_картинки.jpg' alt='emuPic' />
            <p>Надпись ниже</p>
            <h4>{"Посещаемое"}</h4>
            <p>инфа1</p>
            <p>инфа2</p>
            <p>инфа3</p>
          </Tabs>
          <Tabs className='tabs-container-too2'>
            <h4>{"карта"}</h4>
            <p>инфа4</p>
            <h4>{"ТВ"}</h4>
            <p>житьздорово</p>
            <p>житьздорово</p>
            <p>житьздорово</p>
          </Tabs>
          <Tabs className='tabs-container-too3'>
            <h4>{"Эфир"}</h4>
            <p>инфа </p>
            <p>инфа </p>
            <p>инфа </p>
          </Tabs>
        </CardPart>
      </div>
    </div>
  );
};
export default Maked;
