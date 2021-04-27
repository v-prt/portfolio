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
          light, water, temperature, and humidity they each required. For my
          final project at bootcamp, I was inspired to create{" "}
          <strong>plantgeek</strong> as an upgrade to my spreadsheet which could
          also serve as a hub for houseplant lovers to connect with each other
          and share useful information.
        </p>
        <a href="https://github.com/v-prt/plantgeek">View on GitHub</a>
        {/* TODO: add video, preferrably on page */}
      </Description>
      <Gallery>
        <Image src={plantgeekHome1} alt="" />
        <Image src={plantgeekHome2} alt="" />
        <Image src={plantgeekHome3} alt="" />
        <Image src={plantgeekBrowse1} alt="" />
        <Image src={plantgeekBrowse2} alt="" />
        <Image src={plantgeekBrowse3} alt="" />
        <Image src={plantgeekPlantProfile} alt="" />
        <Image src={plantgeekUserProfile} alt="" />
        <Image src={plantgeekCollection} alt="" />
        <Image src={plantgeekFriends} alt="" />
        <Image src={plantgeekSettings} alt="" />
      </Gallery>
      {/* TODO: improve this */}
      <ProjectLink to="/projects">View more projects</ProjectLink>
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
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    margin: 20px;
  }
  p {
    max-width: 1000px;
    line-height: 1.75;
    margin: 20px;
  }
  a {
    color: ${COLORS.medium};
    margin: 20px 40px;
    &:hover {
      color: ${COLORS.dark};
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
`;

const Gallery = styled.div`
  background: ${COLORS.light};
  width: 100%;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 0;
    border-radius: 0;
  }
`;

const Image = styled.img`
  height: 700px;
  border-radius: 30px;
  padding: 20px;
`;

const ProjectLink = styled(Link)`
  background: ${COLORS.dark};
  color: ${COLORS.light};
  text-align: center;
  margin: 20px;
  border-radius: 20px;
  padding: 20px;
  font-size: 1.2rem;
  width: 70%;
`;
