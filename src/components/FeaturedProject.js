import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../GlobalStyles";

import plantgeekHome1 from "../assets/plantgeek/plantgeek-homepage1.png";
import plantgeekHome2 from "../assets/plantgeek/plantgeek-homepage2.png";
import plantgeekHome3 from "../assets/plantgeek/plantgeek-homepage3.png";
import plantgeekBrowse1 from "../assets/plantgeek/plantgeek-browse1.png";
import plantgeekBrowse2 from "../assets/plantgeek/plantgeek-browse2.png";
import plantgeekBrowse3 from "../assets/plantgeek/plantgeek-browse3.png";
import plantgeekPlantProfile from "../assets/plantgeek/plantgeek-plantprofile.png";
import plantgeekUserProfile from "../assets/plantgeek/plantgeek-userprofile.png";
import plantgeekCollection from "../assets/plantgeek/plantgeek-collection.png";
import plantgeekFriends from "../assets/plantgeek/plantgeek-friends.png";
import plantgeekSettings from "../assets/plantgeek/plantgeek-settings.png";

import developer from "../assets/illustrations/developer.svg";

export const FeaturedProject = () => {
  return (
    <Wrapper>
      <Description>
        <h2>
          ft. [ <b>plantgeek</b> ]
        </h2>
        <p>
          Houseplants are a fairly new obsession of mine and sometimes I
          struggle to remember their various needs. My solution had been to keep
          a spreadsheet with information on each plant, such as the level of
          light, water, temperature, and humidity they each required.
        </p>
        <Image src={plantgeekPlantProfile} alt="" />
        <p>
          As my final project for bootcamp, I thought it would be fun to create{" "}
          <strong>plantgeek</strong> as an upgrade to my spreadsheet, which
          could also serve as a hub for houseplant lovers to connect with each
          other and share useful tips. For more information, you may
          <a href="https://github.com/v-prt/plantgeek"> check out my repo</a> on
          GitHub or
          <a href="https://youtu.be/_LXWqhxIMrQ"> watch a short demo</a> on
          YouTube!
        </p>
      </Description>
      <Gallery>
        <Image src={plantgeekHome1} alt="" />
        <Image src={plantgeekHome2} alt="" />
        <Image src={plantgeekHome3} alt="" />
        <Image src={plantgeekBrowse1} alt="" />
        <Image src={plantgeekBrowse2} alt="" />
        <Image src={plantgeekBrowse3} alt="" />
        <Image src={plantgeekUserProfile} alt="" />
        <Image src={plantgeekCollection} alt="" />
        <Image src={plantgeekFriends} alt="" />
        <Image src={plantgeekSettings} alt="" />
      </Gallery>
      <ViewProjects>
        <img src={developer} alt="" />
        <div>
          <p>Interested in seeing other things I've worked on?</p>
          <ProjectsLink to="/projects">View more projects</ProjectsLink>
        </div>
      </ViewProjects>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    margin: 50px 20px 20px 20px;
  }
  p {
    text-align: center;
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

const ViewProjects = styled.div`
  background: linear-gradient(#ccc, #f2f2f2);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 30px 0;
  img {
    height: 150px;
    margin: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 20px;
    p {
      text-align: center;
      margin-bottom: 10px;
    }
  }
`;

const ProjectsLink = styled(Link)`
  background: ${COLORS.medium};
  color: ${COLORS.lightest};
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    background: ${COLORS.dark};
  }
`;
