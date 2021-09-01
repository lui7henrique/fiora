import styled from "styled-components"

interface IWrapperProps {
  size: number
}

export const Wrapper = styled.figure<IWrapperProps>`
  height: ${({ size }) => `${size}px`};
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  img {
    object-fit: cover;
    -webkit-transform: scale(1.13);
    transform: scale(1.13);
    object-position: center;

    filter: brightness(0.8);
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
