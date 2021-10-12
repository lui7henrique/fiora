import styled from "styled-components"

export const CardList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.3rem;
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
  position: relative;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 80%) 0px 20px 25px -16px,
    rgb(0 0 0 / 72%) 0px 20px 20px -20px;

  &:hover {
    .wrapper {
      img {
        transform: scale(1.1);
        filter: brightness(0.4);
      }
    }

    .infos {
      transform: translate(0%, 0%);
    }
  }
`

export const Infos = styled.div`
  position: absolute;
  bottom: 0;
  transform: translate(-100%, 0%);
  padding: 1rem;
  transition: all 0.3s ease-in-out;
`

export const Name = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`

export const Title = styled.h4`
  font-size: 0.9rem;
  font-weight: normal;
  filter: brightness(0.7);
  text-transform: capitalize;
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
    border-radius: 5px;

    img {
      object-fit: cover;
      -webkit-transition: all 0.2s linear;
      transition: all 0.2s linear;
      object-position: top center;
      filter: brightness(0.8);
    }
  }
`
