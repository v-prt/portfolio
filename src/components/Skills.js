import styled from "styled-components";
import { COLORS } from "../GlobalStyles";

export const Skills = () => {
  return (
    <Wrapper>
      <Heading>
        [ <b>skills</b> ]
      </Heading>
      <p>
        My strengths lie mostly in the front-end where my natural design skills
        can come into play - I could spend all day just messing around with CSS
        (and I often do)! I'm not as good at the math or logic side of coding,
        so I aim to study and practice that whenever I can to round out my
        abilities.
      </p>
      <Groups>
        <Group>
          <Title>Frontend</Title>
          <List>
            <li>HTML ✨</li>
            <li>CSS ✨</li>
            <li>JavaScript</li>
            <li>Styled Components ✨</li>
            <li>React ✨</li>
            <li>Redux</li>
          </List>
        </Group>
        <Group>
          <Title>Backend</Title>
          <List>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node</li>
            <li>RESTful APIs</li>
            <li>CRUD ✨</li>
          </List>
        </Group>
        <Group>
          <Title>Tools</Title>
          <List>
            <li>VS Code ✨</li>
            <li>Git</li>
            <li>GitHub ✨</li>
          </List>
        </Group>
        <Group>
          <Title>Languages</Title>
          <List>
            <li>English ✨</li>
            <li>American Sign Language ✨</li>
            <li>Hungarian</li>
          </List>
        </Group>
      </Groups>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: ${COLORS.light};
  color: ${COLORS.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 80px 0 50px 0;
  p {
    text-align: center;
    max-width: 800px;
    margin: 0 30px;
  }
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 2rem;
`;

const Groups = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Group = styled.div`
  background: ${COLORS.dark};
  color: ${COLORS.lightest};
  text-align: center;
  width: 300px;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
`;

const Title = styled.h3`
  background: ${COLORS.darkest};
  padding: 10px;
  font-size: 1.5rem;
`;

const List = styled.ul`
  padding: 20px;
  li {
    line-height: 1.75;
  }
`;
