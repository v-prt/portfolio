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

export const Projects = () => {
  return (
    <Wrapper>
      <Description>
        <h2>My Featured Project</h2>
        <p>
          <strong>eagleTek</strong> was an e-commerce group project done as part
          of my coding bootcamp curriculum. As team lead, my focus was to assign
          tasks fairly while ensuring a cohesive design and responsive app. The
          most difficult part of this project was working around other people's
          code and learning how to manage our git branches to prevent conflicts.
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
  width: 100%;
`;

const Description = styled.div`
  background: #dbe4cd;
  margin: 20px 50px;
  border-radius: 20px;
  padding: 20px;
  h2 {
    margin: 20px;
    font-size: 2rem;
  }
  p {
    line-height: 1.75;
    margin: 20px;
  }
`;

// FIXME: add a bit of space at end of gallery
const Gallery = styled.div`
  background: ${COLORS.light};
  display: flex;
  margin: 0 50px 20px 50px;
  border-radius: 20px;
  overflow: hidden;
  overflow-x: scroll;
`;

const Image = styled.img`
  box-shadow: 0px 0px 10px #b3b3b3;
  height: 500px;
  margin: 15px;
  border-radius: 20px;
  padding: 10px;
`;
