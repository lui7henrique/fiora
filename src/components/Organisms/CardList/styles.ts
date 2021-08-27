import styled from "styled-components"

export const CardList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--shape);
  position: relative;

  &:hover {
    .wrapper {
      img {
        transform: scale(1.1);
        filter: brightness(1);
      }
    }
  }

  &:after {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    border-style: solid;
    border-top-color: var(--background);
    border-width: 25px 25px 0 0;
    content: "";
    position: absolute;
    transform: rotate(90deg);
    right: 0;
    top: 0;
    z-index: 40;
  }
`

export const Infos = styled.div`
  padding: 0.5rem 1rem;
`

export const Splash = styled.div`
  margin: 0;
  overflow: hidden;
  padding: 0;
  background: #121214;
  background-image: linear-gradient(
    to right,
    #121214 0%,
    #171719 20%,
    #121214 40%,
    #121214 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }

  .wrapper {
    height: 210px;
    position: relative;
    overflow: hidden;

    img {
      object-fit: cover;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transition: all 0.2s linear;
      transition: all 0.2s linear;
      object-position: top center;
      filter: brightness(0.8);
    }
  }
`
