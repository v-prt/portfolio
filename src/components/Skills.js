import styled from 'styled-components'
import { COLORS } from '../GlobalStyles'

export const Skills = () => {
  return (
    <Wrapper>
      <Heading>
        [ <b>skills</b> ]
      </Heading>
      <p>
        My strengths lie mostly in the front-end where my natural design skills can come into play -
        I could spend all day just messing around with CSS (and I often do)! I'm not as good at the
        math or logic side of coding, so I practice as much as I can to round out my abilities.
      </p>
      <Groups>
        <Group>
          <Title>Frontend</Title>
          <List>
            <li>HTML</li>
            <li>CSS / SCSS</li>
            <li>Styled Components</li>
            <li>JavaScript / TypeScript</li>
            <li>PHP</li>
            <li>React</li>
            <li>WordPress</li>
          </List>
        </Group>
        <Group>
          <Title>Backend</Title>
          <List>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node</li>
            <li>RESTful APIs</li>
            <li>CRUD</li>
            <li>MySQL</li>
          </List>
        </Group>
        <Group>
          <Title>Tools</Title>
          <List>
            <li>VS Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
          </List>
        </Group>
        <Group>
          <Title>Languages</Title>
          <List>
            <li>English</li>
            <li>American Sign Language</li>
            <li>Hungarian</li>
          </List>
        </Group>
      </Groups>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top: 5px solid ${COLORS.accent};
  border-bottom: 5px solid ${COLORS.accent};
  p {
    text-align: center;
    max-width: 800px;
    margin: 30px;
  }
`

const Heading = styled.h2`
  margin: 70px 0 20px 0;
  font-size: 2rem;
`

const Groups = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`

const Group = styled.div`
  background: #fff;
  color: #1a1a1a;
  text-align: center;
  width: 300px;
  margin: 20px;
  border-radius: 15px;
  border: 1px solid ${COLORS.light};
  overflow: hidden;
`

const Title = styled.h3`
  background: ${COLORS.light};
  color: #fff;
  padding: 10px;
  font-size: 1.5rem;
`

const List = styled.ul`
  padding: 20px 0;
  li {
    line-height: 1.75;
  }
`
