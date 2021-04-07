import React from "react";
import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import eagletekHome from "../assets/eagletek-home.png";
import eagletekAbout from "../assets/eagletek-about.png";
import eagletekLogin from "../assets/eagletek-login.png";
import eagletekCart from "../assets/eagletek-cart.png";
import eagletekEmptyCart from "../assets/eagletek-emptycart.png";

export const Projects = () => {
  return (
    <Wrapper>
      <Heading>My Projects</Heading>
      <Div>
        <h3>eagleTek</h3>
        <p>
          Credit to
          <a href="https://github.com/Andrew-Fenrich"> Andrew Fenrich</a> and
          <a href="https://github.com/MariePetit"> Marie Petit</a> for working
          with me on this project!
        </p>
        <Gallery>
          <Image src={eagletekHome} alt="" />
          <Image src={eagletekAbout} alt="" />
          <Image src={eagletekLogin} alt="" />
          <Image src={eagletekCart} alt="" />
          <Image src={eagletekEmptyCart} alt="" />
        </Gallery>
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const Heading = styled.h2``;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 3rem;
  }
`;

// TODO: make scrollable sideways? (1 line)
const Gallery = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  border-radius: 20px;
  margin: 20px;
  max-height: 400px;
`;
