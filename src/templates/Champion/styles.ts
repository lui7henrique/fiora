import styled from "styled-components"

export const Container = styled.div``

export const Content = styled.div`
  max-width: 1180px;
  margin: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2.5fr;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

interface IBannerProps {
  splash_art: string
}

interface IIconProps {
  icon: string
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

export const Infos = styled.aside`
  display: flex;
  flex-direction: column;
  background: var(--shape);
  gap: 1rem;

  margin-top: -100px;
  position: relative;
  padding: 1rem;
  border-radius: 3px;
`

export const IconWrapper = styled.figure`
  width: 130px;
  height: 130px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  border: 5px solid var(--background);
`
export const Icon = styled.section<IIconProps>`
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.icon})`};
  background-size: cover;
  transform: scale(1.16);
`

export const BasicInfos = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 0.5px solid var(--borders);
  padding-bottom: 1rem;

  h1 {
    font-size: 3rem;
  }

  h2 {
    color: var(--support);
    text-transform: capitalize;
    margin-top: -5px;
    font-size: 0.8rem;
    opacity: 0.8;
  }
`
