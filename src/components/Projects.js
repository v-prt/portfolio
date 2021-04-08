import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import { BsArrowRightShort } from "react-icons/bs";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import eagletekHome from "../assets/eagletek-home.png";
import eagletekPagination from "../assets/eagletek-pagination.png";
import eagletekCategories from "../assets/eagletek-categories.png";
import eagletekLogin from "../assets/eagletek-login.png";
import eagletekEmptyCart from "../assets/eagletek-emptycart.png";
import eagletekCart from "../assets/eagletek-cart.png";
import eagletekDesktopDropdown from "../assets/eagletek-desktop-dropdown.png";
import eagletekMobileDropdown from "../assets/eagletek-mobile-dropdown.png";
import eagletekAbout from "../assets/eagletek-about.png";

export const Projects = () => {
  return (
    <Wrapper>
      <Project>
        <Heading>Featured Project - eagleTek</Heading>

        <Gallery>
          <Icon>
            <BiLeftArrow />
          </Icon>
          <Images>
            <Image src={eagletekHome} alt="" />
            <Image src={eagletekPagination} alt="" />
            <Image src={eagletekCategories} alt="" />
            <Image src={eagletekLogin} alt="" />
            <Image src={eagletekEmptyCart} alt="" />
            <Image src={eagletekCart} alt="" />
            <Image src={eagletekDesktopDropdown} alt="" />
            <Image src={eagletekMobileDropdown} alt="" />
            <Image src={eagletekAbout} alt="" />
          </Images>
          <Icon>
            <BiRightArrow />
          </Icon>
        </Gallery>
        <p>
          Credit to my teammates:
          <a href="https://github.com/Andrew-Fenrich"> Andrew Fenrich</a> &&
          <a href="https://github.com/MariePetit"> Marie Petit</a>
        </p>
        <Link to="#">Read more about eagleTek ...</Link>
        <ProjectLink to="#">
          See more projects <BsArrowRightShort />
        </ProjectLink>
      </Project>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  border-top: 2px solid #ff99cc;
  border-bottom: 2px solid #ff99cc;
`;

const Heading = styled.h2`
  font-size: 2rem;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  h3 {
    font-size: 2rem;
  }
`;

const Gallery = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 2rem;
  color: ${COLORS.tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  // TODO: make this blurred background effect work (images need to scroll behind the icons)
  /* backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.4); */
`;

const Images = styled.div`
  height: 450px;
  display: flex;
  align-items: center;
  overflow: hidden;
  overflow-x: scroll;
`;

const Image = styled.img`
  height: 400px;
  border-radius: 30px;
  padding: 15px;
`;

const ProjectLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
