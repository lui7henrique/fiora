import styled from "styled-components"

export const BasicInfos = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 0.5px solid var(--borders);
  padding-bottom: 1rem;
  width: 100%;

  h1 {
    white-space: nowrap;
    font-size: 2rem;
  }

  h2 {
    color: var(--support);
    text-transform: capitalize;
    margin-top: -5px;
    font-size: 0.8rem;
    opacity: 0.8;
  }
`

export const IconWrapper = styled.figure`
  width: 130px;
  height: 130px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid var(--background);
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  img {
    transform: scale(1.2);
    user-select: none;
    -webkit-user-drag: none;
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

export const Level = styled.span`
  margin-top: -1rem;
  z-index: 10;
  background: var(--primary);
  padding: 0.2rem 0.5rem;
  color: var(--white);
  font-size: 0.6rem;
  border-radius: 5px;
  font-weight: bold;
`
