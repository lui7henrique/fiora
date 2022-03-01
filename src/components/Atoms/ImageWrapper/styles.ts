import styled from "styled-components"

interface IWrapperProps {
  size: number
}

export const Container = styled.div`
  position: relative;
`

export const Wrapper = styled.figure<IWrapperProps>`
  max-height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  img {
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    object-fit: cover;
    -webkit-transform: scale(1.13);
    transform: scale(1.13);
    object-position: center;
    user-select: none;
    -webkit-user-drag: none;

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

export const MasteryIcon = styled.div`
  position: absolute;
  top: 0;
  margin-top: -5px;
  margin-left: 2px;
`
