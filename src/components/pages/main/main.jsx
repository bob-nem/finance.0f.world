import { SiGooglesheets } from "react-icons/si";
import { FaYoutube, FaTelegram } from "react-icons/fa";
import { TbArrowBigLeftLines } from "react-icons/tb";
import style from "./main.module.css";

export default function Main() {
    return (
        <>
          <header className={style.header}>
          <h1>Reviewing of following from trade bots and famous economists predictions. Statistics data in form of table sheet.</h1>
          <p>
            Welcome to our finance channel, where we dive deep into the world of financial instruments to help you make informed investment decisions. Understanding which financial instruments are the most productive and assessing the reliability of economists' statements is crucial for any investor.<br />
            On this channel, we provide you with meticulously collected statistics presented in user-friendly Google Sheets. You'll have access to open statistics on the performance of various trading bots, allowing you to see which ones yield the highest profits. Additionally, we analyze the income potential from following investment recommendations made by market experts and gurus.<br />
            Our content covers a wide range of financial assets, including company shares and cryptocurrencies. We aim to equip you with the knowledge and tools necessary to navigate the complexities of the financial markets confidently. Whether you're a seasoned investor or just starting out, our data-driven insights will help you make better investment choices.<br />
            Join us and stay updated with the latest trends and strategies in the world of finance!
          </p>
          </header><div className={style.content}>
            <div>
              <a
                href="https://docs.google.com/spreadsheets/d/1Ak3JNFpVWAY5eCDJCYkUnDEb9p1dpGhdxLZCMtCzlnI/"
                target="_blank"
                rel="noopener noreferrer"
                className={style.linkGreen}
              >
                <SiGooglesheets size="6rem" className={style.iconGreen} />
                <TbArrowBigLeftLines size="3rem" className={`${style.iconGreen} ${style.arrowGreen}`} />
                <p className={style.textGreen}>Google Sheet Calculations</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCHIf1br7EuHQ4NCsGdQewmA"
                target="_blank"
                rel="noopener noreferrer"
                className={style.linkRed}
              >
                <FaYoutube size="6rem" className={style.iconRed} />
                <TbArrowBigLeftLines size="3rem" className={`${style.iconRed} ${style.arrowRed}`} />
                <p className={style.textRed}>YouTube Channel</p>
              </a>
            </div>
            <div>
              <a
                href="https://t.me/finance_0f_world"
                target="_blank"
                rel="noopener noreferrer"
                className={style.linkBlue}
              >
                <FaTelegram size="6rem" className={style.iconBlue} />
                <TbArrowBigLeftLines size="3rem" className={`${style.iconBlue} ${style.arrowBlue}`} />
                <p className={style.textBlue}>Telegram Channel</p>
              </a>
            </div>
          </div>
        </>
    )
}