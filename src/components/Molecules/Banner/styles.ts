import styled from "styled-components"

interface IBannerProps {
  splash_art: string
}

export const BannerWrapper = styled.figure`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 70vh;
  border-bottom: 5px solid var(--background);

  &:hover {
    section {
      filter: blur(0px);
    }
  }
`

export const Banner = styled.section<IBannerProps>`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
    ${(props) => `url(${props.splash_art})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;
  filter: blur(3px);
  transition: all 0.2s ease-in-out;
`
