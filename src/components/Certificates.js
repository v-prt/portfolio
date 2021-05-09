import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import testDomeCert from "../assets/certs/test-dome-js.png";
import mimoCert from "../assets/certs/mimo-web-dev.jpg";

export const Certificates = () => {
  return (
    <Wrapper>
      <Heading>
        [ <b>certificates</b> ]
      </Heading>
      <Text>
        <p>
          On top of my diploma, I'm also proud to have earned these little
          certificates by completing various online courses and tests.
        </p>
      </Text>
      <Certs>
        <Cert>
          <img src={mimoCert} alt="Mimo Web Dev Certificate" />
        </Cert>
        <Cert>
          <a href="https://app.testdome.com/cert/9f0776ba5d8a4eba98526521a3e8ab6a">
            <img src={testDomeCert} alt="Test Dome Certificate" />
          </a>
        </Cert>
      </Certs>
      <Text>
        <p>
          I'm currently studying{" "}
          <a href="https://www.freecodecamp.org/learn/responsive-web-design/">
            Responsive Web Design on freeCodeCamp
          </a>{" "}
          and taking the{" "}
          <a href="https://javascript30.com/">JavaScript30 challenge</a>.
        </p>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  border-radius: 20px;
  padding: 30px 0;
`;

const Heading = styled.h3`
  font-size: 1.5rem;
`;

const Text = styled.div`
  max-width: 600px;
  padding: 30px;
  a {
    color: ${COLORS.medium};
    font-weight: bold;
    &:hover {
      color: ${COLORS.darkest};
    }
  }
`;

const Certs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Cert = styled.li`
  img {
    max-height: 200px;
    max-width: 200px;
    margin: 10px;
    border-radius: 10px;
  }
  a {
    transition: 0.2s ease-in-out;
    &:hover {
      opacity: 0.6;
    }
  }
`;
