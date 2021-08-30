import styled from "styled-components"

export const Container = styled.section`
  width: 100%;

  .swiper-button-prev {
    margin-left: -2rem;
    position: absolute;
    top: 44%;
  }
  .swiper-button-next {
    margin-right: -2rem;
    position: absolute;
    top: 44%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: var(--primary) !important;
    border-radius: 50%;
    background: var(--shape);
    transform: scale(0.4);
    padding: 42px;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  position: relative;
`

export const Expand = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  cursor: pointer;
  margin: 0.5rem;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .splash-art {
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
  }
`
export const Infos = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;

  h4 {
    display: inline-block;
    background-color: rgba(63, 63, 63, 0.3);
    backdrop-filter: blur(5px) saturate(100%) contrast(90%) brightness(150%);
    color: var(--title);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 1rem;
  }
`

export const Price = styled.section`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1.2rem;

  div {
    display: flex;
    gap: 0.5rem;
    span {
      font-weight: bold;
    }
  }
`
