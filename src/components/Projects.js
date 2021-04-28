import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import background from "../assets/bg-forest1.jpg";
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

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Wrapper>
      <Banner>
        <h1>My Projects</h1>
      </Banner>
      <Project>
        <Description>
          <Title>
            <h2>
              [ <b>eagleTek</b> ]
            </h2>
            <button onClick={toggleVisible}>
              read details{" "}
              <div>
                <BiChevronDown />
              </div>
            </button>
          </Title>
          <Details visible={visible}>
            <p>
              <strong>eagleTek</strong> was a group project done as part of my
              coding bootcamp curriculum where our goal was to build an
              e-commerce site for wearable tech.
            </p>
            <p>
              As team lead, I tried to assign tasks fairly while keeping the
              design of the app cohesive and responsive. The most difficult part
              of this project was working around other people's code but it was
              truly rewarding to see all our pieces come together.
            </p>
            <p>
              Teammates:
              <a href="https://github.com/Andrew-Fenrich"> Andrew Fenrich</a> &&
              <a href="https://github.com/MariePetit"> Marie Petit</a>
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
            <button onClick={toggleVisible}>
              read details{" "}
              <div>
                <BiChevronDown />
              </div>
            </button>
          </Title>
          <Details visible={visible}>
            <p>
              This was a super fun 3-day project in which I had to recreate
              "Facespace" from a provided mock-up. The original used an ugly
              orange theme and super creepy generated images of people. I took
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
            <button onClick={toggleVisible}>
              read details{" "}
              <div>
                <BiChevronDown />
              </div>
            </button>
          </Title>
          <Details visible={visible}>
            <p>
              I really enjoyed making this simple version of the classic "Cookie
              Clicker" idle game! This is another one of my workshops I took the
              opportunity to improve upon after completing the required tasks.
              On top of updating the style, I added further functionalities such
              as showing a temporary points alert when you click on the cookie,
              shortening the display number at certain thresholds, adding a
              reset button, and visual indication for unavailable upgrades.
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
`;

const Banner = styled.div`
  background: url(${background}) center center / cover;
  /* filter: grayscale(1); */
  height: 170px;
  width: 100%;
  text-align: center;
  h1 {
    color: #fff;
    margin-top: 90px;
    font-size: 4rem;
  }
`;

const Project = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 40px 0;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
`;

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    margin: 10px;
  }
  button {
    width: 125px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    padding: 7px 5px 3px 5px;
    border-radius: 5px;
    &:hover {
      background: #b3b3b3;
      cursor: pointer;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  p {
    max-width: 800px;
    line-height: 1.75;
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
  width: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
`;

const Image = styled.img`
  height: 500px;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 8px #b3b3b3;
  @media (max-width: 1000px) {
    height: 300px;
  }
`;
