import styled from "styled-components";

const SectionHeroStyled = styled.section`
  width: 100vw;
  height: 75rem;

  background-image: url(images/banner/banner-home.png);
  background-size:cover;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  .container {
    width: 121.5rem;
    padding-top: 18.6rem;
    h1 {
    width: 52.5rem;
    color: #FFF;
    font-family: Monomaniac One;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 6.4rem;
  }
  }
`;

export default SectionHeroStyled;
