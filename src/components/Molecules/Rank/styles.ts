import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const WinLosses = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;

  span + span {
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

interface ITierRankLps {
  tier: string
}

export const TierRankLps = styled.div<ITierRankLps>`
  display: flex;
  align-items: flex-end;
  gap: 0.3rem;

  h5 {
    font-size: 1.1rem;
    color: ${(props) => `var(--${props.tier})`};
  }

  sub {
    margin-bottom: 4px;
  }
`

export const Winrate = styled.div`
  span {
    display: block;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 0.8rem;

    &.negative {
      color: var(--defeat);
    }

    &.positive {
      color: var(--win);
    }
  }
`
