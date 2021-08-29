import styled from "styled-components"

export const Container = styled.section`
  .swiper-button-prev {
    margin-left: -1rem;
  }
  .swiper-button-next {
    margin-right: -1rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: var(--primary) !important;
    border-radius: 50%;
    background: var(--shape);
    transform: scale(0.5);
    padding: 42px;
    font-weight: bold;
  }

  position: relative;
`

export const Expand = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  cursor: pointer;
  margin: 1rem;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
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
  width: 100%;
  position: absolute;
  bottom: 0;

  h4 {
    display: inline-block;
    background-color: rgba(63, 63, 63, 0.3);
    backdrop-filter: blur(5px) saturate(100%) contrast(90%) brightness(150%);
    color: var(--title);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 5px;
    padding: 0 1rem;
    margin: 20px;
  }
`
