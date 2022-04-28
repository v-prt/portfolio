import styled from 'styled-components/macro'
import { COLORS } from '../GlobalStyles'

export const Skills = () => {
  return (
    <Wrapper>
      <Heading>
        [ <b>skills</b> ]
      </Heading>
      <p>
        My strengths lie mostly in front-end and UX/UI related development where my artistic
        abilities and eye for design can come into play. Psst... I built this portfolio from scratch
        with React - no tutorials or styling/component libraries used (aside from Styled
        Components). I also have excellent organization and communicational skills which ensure my
        teammates can easily read and understand my code.
      </p>
      <Groups>
        <Group>
          <Title>Frontend</Title>
          <List>
            <li>HTML</li>
            <li>CSS / SCSS</li>
            <li>Styled Components</li>
            <li>JavaScript / TypeScript</li>
            <li>React</li>
            <li>React Query</li>
            <li>Redux</li>
            <li>PHP</li>
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
            <li>Prisma</li>
          </List>
        </Group>
        <Group>
          <Title>Tools</Title>
          <List>
            <li>VS Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
            <li>Canva</li>
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
  p {
    max-width: 800px;
    margin: 10px 20px;
  }
`

const Heading = styled.h2`
  color: ${COLORS.medium};
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
  width: 250px;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
  overflow: hidden;
`

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
`

const List = styled.ul`
  li {
    line-height: 1.75;
  }
`
