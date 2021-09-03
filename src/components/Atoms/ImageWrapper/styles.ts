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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  img {
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
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

export const MasteryIcon = styled.div`
  position: absolute;
  top: 0;
  margin-top: -5px;
  margin-left: 2px;
`
