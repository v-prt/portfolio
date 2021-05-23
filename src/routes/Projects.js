import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS, fadeIn, UnderlinedLink } from "../GlobalStyles";
import { BiChevronDown } from "react-icons/bi";

import eagletekHome from "../assets/eagleTek/eagletek-home.png";
import eagletekPagination from "../assets/eagleTek/eagletek-pagination.png";
import eagletekCategories from "../assets/eagleTek/eagletek-categories.png";
import eagletekLogin from "../assets/eagleTek/eagletek-login.png";
import eagletekEmptyCart from "../assets/eagleTek/eagletek-emptycart.png";
import eagletekCart from "../assets/eagleTek/eagletek-cart.png";
import eagletekDesktopDropdown from "../assets/eagleTek/eagletek-desktop-dropdown.png";
import eagletekMobileDropdown from "../assets/eagleTek/eagletek-mobile-dropdown.png";
import eagletekAbout from "../assets/eagleTek/eagletek-about.png";

import meowspaceHome1 from "../assets/meowspace/meowspace-homepage.png";
import meowspaceHome2 from "../assets/meowspace/meowspace-homepage2.png";
import meowspaceLogin from "../assets/meowspace/meowspace-login.png";
import meowspaceProfile1 from "../assets/meowspace/meowspace-profile.png";
import meowspaceProfile2 from "../assets/meowspace/meowspace-profile2.png";
import facespace from "../assets/meowspace/facespace.png";

import cookieHeavenHome from "../assets/cookie-heaven/cookie-heaven-home.png";
import cookieHeavenGame1 from "../assets/cookie-heaven/cookie-heaven-game1.png";
import cookieHeavenGame2 from "../assets/cookie-heaven/cookie-heaven-game2.png";
import cookieHeavenGame3 from "../assets/cookie-heaven/cookie-heaven-game3.png";
import cookieClicker from "../assets/cookie-heaven/cookie-clicker.png";

export const Projects = () => {
  // makes window scroll to top between renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [eagleTek, setEagleTek] = useState(false);
  const [meowspace, setMeowspace] = useState(false);
  const [cookieHeaven, setCookieHeaven] = useState(false);

  return (
    <Wrapper>
      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>eagleTek</b> ]
            </h2>
            <button
              onClick={() => {
                setEagleTek(!eagleTek);
              }}
            >
              <Icon direction={eagleTek}>
                <BiChevronDown />
              </Icon>
              project details
            </button>
          </Title>
          <Details visible={eagleTek}>
            <div>
              <em>Collaborators : </em>
              <p>
                <b>Myself</b> (Team Lead, Frontend)
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/andrew-fenrich/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Andrew Fenrich
                </a>{" "}
                (Backend)
              </p>
              <p>
                <a
                  href="https://mariiesmall.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Marie Petit
                </a>{" "}
                (Frontend)
              </p>
            </div>
            <p>
              This group project was completed over the course of one week as
              part of our coding bootcamp, in which we developed an e-commerce
              web app for wearable tech and designed the front as well as
              back-end.
            </p>
            <p>
              As team lead, my focus was on dividing our tasks fairly while
              keeping the app design cohesive and responsive. The most difficult
              part of this project was working around other people's code but it
              was truly rewarding to see all our pieces come together!
            </p>
            <p>
              <UnderlinedLink
                href="https://www.youtube.com/watch?v=a9O7pC1S2KI"
                target="_blank"
                rel="noreferrer"
              >
                Watch a short demo on YouTube
              </UnderlinedLink>{" "}
            </p>
          </Details>
        </Description>
        <Gallery>
          <Image src={eagletekHome} alt="eagletek homepage" />
          <Image src={eagletekPagination} alt="eagletek pagination" />
          <Image src={eagletekCategories} alt="eagletek categories page" />
          <Image src={eagletekLogin} alt="eagletek login page" />
          <Image src={eagletekEmptyCart} alt="eagletek empty cart" />
          <Image src={eagletekCart} alt="eagletek cart with items" />
          <Image src={eagletekDesktopDropdown} alt="eagletek desktop menu" />
          <Image src={eagletekMobileDropdown} alt="eagletek mobile menu" />
          <Image src={eagletekAbout} alt="eagletek about page" />
        </Gallery>
      </Project>
      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>meowspace</b> ]
            </h2>
            <button
              onClick={() => {
                setMeowspace(!meowspace);
              }}
            >
              <Icon direction={meowspace}>
                <BiChevronDown />
              </Icon>
              project details
            </button>
          </Title>
          <Details visible={meowspace}>
            <p>
              This was a super fun 3-day project in which I had to recreate
              "Facespace" from a provided mock-up. The original used an ugly
              orange theme and super creepy computer-generated images. I took
              extra time after completing the MVP requirements to upgrade the
              look of the app by replacing the humans with cats and changing the
              banners as well as the color scheme, name, and layout.
            </p>
          </Details>
        </Description>
        <Gallery>
          <Image src={meowspaceHome1} alt="" />
          <Image src={meowspaceLogin} alt="" />
          <Image src={meowspaceHome2} alt="" />
          <Image src={meowspaceProfile1} alt="" />
          <Image src={meowspaceProfile2} alt="" />
          <Image src={facespace} alt="" />
        </Gallery>
      </Project>
      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>Cookie Heaven</b> ]
            </h2>
            <button
              onClick={() => {
                setCookieHeaven(!cookieHeaven);
              }}
            >
              <Icon direction={cookieHeaven}>
                <BiChevronDown />
              </Icon>
              project details
            </button>
          </Title>
          <Details visible={cookieHeaven}>
            <p>
              I really enjoyed making this simple version of the classic "Cookie
              Clicker" idle game! This is another one of my workshops I took the
              opportunity to improve upon. On top of updating the style, I added
              further functionalities such as showing a temporary points alert
              when you click on the cookie, shortening the display number at
              certain thresholds, adding a reset button, and visual indication
              for unavailable upgrades.
            </p>
          </Details>
        </Description>
        <Gallery>
          <Image src={cookieHeavenHome} alt="" />
          <Image src={cookieHeavenGame1} alt="" />
          <Image src={cookieHeavenGame2} alt="" />
          <Image src={cookieHeavenGame3} alt="" />
          <Image src={cookieClicker} alt="" />
        </Gallery>
      </Project>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-top: 50px;
`;

const Project = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 40px 0;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 10px;
    font-size: 2.5rem;
  }
  button {
    background: #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    border-radius: 5px;
    padding: 5px 10px 3px 10px;
    transition: 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      background: #ccc;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    h2 {
      font-size: 2rem;
    }
  }
`;

const Icon = styled.div`
  transform: ${(props) => (props.direction ? "" : "rotate(-90deg)")};
  font-size: 1.3rem;
  margin-right: 5px;
  transition: 0.1s ease-in-out;
`;

const Details = styled.div`
  opacity: ${(props) => (props.visible ? "1" : "0")};
  max-height: ${(props) => (props.visible ? "1000px" : "0")};
  text-align: center;
  transition: 0.5s ease-in-out;
  div {
    margin-top: 20px;
    p {
      margin: 10px;
    }
  }
  p {
    max-width: 800px;
    margin: 20px;
  }
  a {
    color: ${COLORS.medium};
    font-weight: bold;
    &:hover {
      color: #333;
    }
  }
`;

const Gallery = styled.div`
  display: flex;
  width: calc(100% - 40px);
  border-bottom: 1px dotted #ccc;
  overflow-x: scroll;
`;

const Image = styled.img`
  animation: ${fadeIn} 2s ease-in-out;
  height: 500px;
  margin: 20px 10px;
  border-radius: 10px;
  position: relative; // removes glitch where page stops scrolling vertically when hovering on gallery
  // TODO: slide stacking?
  /* position: sticky;
  left: 20px; */
  &:first-child {
    margin-left: 0;
  }
  @media (max-width: 1000px) {
    height: 300px;
  }
`;
