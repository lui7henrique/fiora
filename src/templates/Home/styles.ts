import styled from "styled-components"

export const Container = styled.div`
  margin-top: 5rem;
`

export const ImageWrapper = styled.section`
  width: 100%;
  height: 85vh;
  position: relative;

  img {
    object-fit: cover;
    transform: scale(1);
    object-position: top center;
    filter: brightness(0.3) blur(5px);
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

export const ImageContainer = styled.section`
  width: 100%;
  position: absolute;
  top: 50%;
  z-index: 2;

  div {
    max-width: 640px;
    padding: 1rem;
    margin: 0 auto;

    form {
      display: flex;
      justify-content: space-between;
      border-radius: 5px 50px 50px 5px;
      height: 3rem;
      background: var(--white);
      padding: 0 0 0 1rem;

      input {
        outline: 0;
        border: 0;
        font-weight: bold;
        width: 100%;
      }

      button {
        outline: 0;
        border: 0;
        background: var(--primary);
        width: 50px;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`
