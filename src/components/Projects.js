import React from "react";
import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import eagletekHome from "../assets/eagleTek/eagletek-home.png";
import eagletekPagination from "../assets/eagleTek/eagletek-pagination.png";
import eagletekCategories from "../assets/eagleTek/eagletek-categories.png";
import eagletekLogin from "../assets/eagleTek/eagletek-login.png";
import eagletekEmptyCart from "../assets/eagleTek/eagletek-emptycart.png";
import eagletekCart from "../assets/eagleTek/eagletek-cart.png";
import eagletekDesktopDropdown from "../assets/eagleTek/eagletek-desktop-dropdown.png";
import eagletekMobileDropdown from "../assets/eagleTek/eagletek-mobile-dropdown.png";
import eagletekAbout from "../assets/eagleTek/eagletek-about.png";

// FIXME: page this page look good
// TODO: add meowspace, cookie clicker
export const Projects = () => {
  return (
    <Wrapper>
      <Description>
        <h2>eagleTek</h2>
        <p>
          <strong>eagleTek</strong> was a group project done as part of my
          coding bootcamp curriculum where our goal was to build an e-commerce
          site for wearable tech.
        </p>
        <p>
          As team lead, I tried to assign tasks fairly while keeping the design
          of the app cohesive and responsive. The most difficult part of this
          project was working around other people's code but it was truly
          rewarding to see all our pieces come together.
        </p>
        <p>
          Credit to my teammates:
          <a href="https://github.com/Andrew-Fenrich"> Andrew Fenrich</a> &&
          <a href="https://github.com/MariePetit"> Marie Petit</a>
        </p>
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Description = styled.div`
  background: #dbe4cd;
  width: 75%;
  margin: 20px auto;
  border-radius: 20px;
  padding: 20px 0;
  h2 {
    font-size: 2rem;
    margin: 20px 40px;
  }
  p {
    line-height: 1.75;
    margin: 20px 40px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
`;

const Gallery = styled.div`
  background: ${COLORS.light};
  width: 75%;
  display: flex;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
  overflow-x: scroll;
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 0;
    border-radius: 0;
  }
`;

const Image = styled.img`
  height: 500px;
  border-radius: 30px;
  padding: 20px;
`;
