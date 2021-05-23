import styled from "styled-components";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { COLORS } from "../GlobalStyles";

export const SocialLinks = () => {
  return (
    <Wrapper>
      <a href="https://github.com/v-prt" target="_blank" rel="noreferrer">
        <Icon>
          <FaGithub />
        </Icon>
      </a>
      <a
        href="https://www.linkedin.com/in/victoria-peart/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon>
          <FaLinkedin />
        </Icon>
      </a>
      <a
        href="https://www.twitter.com/vikki_peart"
        target="_blank"
        rel="noreferrer"
      >
        <Icon>
          <FaTwitter />
        </Icon>
      </a>
      <a href="mailto:v-peart@outlook.com">
        <Icon>
          <GrMail />
        </Icon>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  a {
    &:hover,
    &:focus {
      div {
        background: ${COLORS.lightest};
        color: ${COLORS.medium};
      }
    }
  }
`;

const Icon = styled.div`
  display: flex;
  color: #333;
  margin: 0 10px;
  padding: 5px;
  border-radius: 50%;
  font-size: 1.3rem;
  transition: 0.2s ease-in-out;
`;
