import styled from "styled-components";
import { COLORS } from "../GlobalStyles";

import responsiveness from "../assets/illustrations/responsiveness.svg";
import accessibility from "../assets/illustrations/accessibility.svg";
import style from "../assets/illustrations/style.svg";

export const Priorities = () => {
  return (
    <Wrapper>
      <Heading>
        [ <b>priorities</b> ]
      </Heading>
      <p>
        There are so many ways to be a great developer. These are some of the
        things I focus on when I code.
      </p>
      <Div>
        <Priority>
          <h3>Responsiveness</h3>
          <img src={responsiveness} alt="responsiveness" />
          <p>
            You never know what kind of device your clients are using, so it's
            important to be sure your app works well across a myriad of screen
            sizes and browsers.
          </p>
        </Priority>

        <Priority>
          <h3>Accessibility</h3>
          <img src={accessibility} alt="assessibility" />
          <p>
            More people are using the internet now more than ever. They come in
            all shapes and sizes, and so should technology in order to address
            their needs.
          </p>
        </Priority>

        <Priority>
          <h3>Style</h3>
          <img src={style} alt="style" />
          <p>
            They say you shouldn't judge a book by its cover, but let's be real
            - most people do. There's nothing wrong with using a bit of flair to
            set your app apart.
          </p>
        </Priority>
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(#202c31, ${COLORS.dark});
  color: ${COLORS.lightest};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  p {
    text-align: center;
    margin: 0 30px;
  }
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 2rem;
`;

const Div = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Priority = styled.div`
  background: #fff;
  color: #333;
  text-align: center;
  max-width: 500px;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
  h3 {
    background: ${COLORS.medium};
    color: ${COLORS.lightest};
    padding: 10px;
    font-size: 1.5rem;
  }
  p {
    max-width: 600px;
    padding: 20px;
  }
  img {
    height: 150px;
    margin: 30px;
  }
`;