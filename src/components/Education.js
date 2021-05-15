import styled from "styled-components";
import { Certificates } from "./Certificates";
import { COLORS } from "../GlobalStyles";

export const Education = () => {
  return (
    <Wrapper>
      <Card>
        <Heading>
          [ <b>education</b> ]
        </Heading>
        <School>Concordia University, 2021</School>
        <Degree>Diploma, Full-Stack Web Development</Degree>
        <Description>
          <p>
            This intense 12-week coding bootcamp taught me the fundamentals of
            programming and gave me hands-on experience building complex modern
            web applications using the MERN stack.
          </p>
          <p>
            <b>Curriculum :</b> Programming Fundamentals (HTML, CSS, JavaScript,
            Git, GitHub), Server-side programming with Node (RESTful APIs,
            Express), Advanced Frontend (React, Redux), Full-Stack Group
            Project, Data Persistence (MongoDB), Full-Stack Solo Project
          </p>
        </Description>
        <Certificates />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: ${COLORS.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0;
`;

const Card = styled.div`
  background: rgba(250, 250, 250, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const Heading = styled.h2`
  margin-bottom: 30px;
  font-size: 2rem;
`;

const School = styled.h3`
  font-size: 1.5rem;
`;

const Degree = styled.p`
  font-style: italic;
`;

const Description = styled.div`
  max-width: 600px;
  p {
    margin: 20px;
    line-height: 1.75;
  }
`;
