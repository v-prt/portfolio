import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { COLORS } from '../GlobalStyles'

export const SocialLinks = () => {
  return (
    <Wrapper>
      <a href='https://github.com/v-prt' target='_blank' rel='noreferrer'>
        <Icon>
          <FaGithub />
        </Icon>
      </a>
      <a href='https://www.linkedin.com/in/victoria-peart/' target='_blank' rel='noreferrer'>
        <Icon>
          <FaLinkedin />
        </Icon>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  a {
    div {
      color: ${COLORS.light};
    }
    &:hover,
    &:focus {
      div {
        background: #fff;
        color: ${COLORS.accent};
      }
    }
  }
`

const Icon = styled.div`
  display: flex;
  margin: 0 10px;
  padding: 5px;
  border-radius: 50%;
  font-size: 1.3rem;
  transition: 0.2s ease-in-out;
`
