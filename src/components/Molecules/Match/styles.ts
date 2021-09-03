import styled from "styled-components"

export const Container = styled.section`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background: var(--shape-hover);
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  h5 {
    /* text-transform: uppercase; */
    &.defeat {
      color: var(--defeat);
    }

    &.win {
      color: var(--win);
    }
  }
`

export const Times = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: var(--support);
  font-weight: bold;

  sub + sub {
    position: relative;
    &:before {
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background: var(--support);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-250%, -50%);
    }
  }
`

export const Spells = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-left: -1.5rem;
  z-index: 1;

  img {
    border-radius: 5px;
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

export const KDA = styled.h5`
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: -1px;
`

export const BuildTeams = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`
