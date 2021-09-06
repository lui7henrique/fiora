import styled from "styled-components"

interface IProgressProps {
  strokeDashArray: string
  strokeDashOffset: number
}

export const Progress = styled.div<IProgressProps>`
  position: relative;

  .rank {
    position: absolute;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: 2;

    sub {
      font-size: 0.7rem;
      font-weight: bold;
      color: var(--support);
      text-transform: uppercase;
      margin-bottom: -7px;
    }

    img {
      user-select: none;
      -webkit-user-drag: none;
    }
  }

  svg + svg {
    position: absolute;
    left: 0;
  }

  .progress-ring__complete {
    stroke-dasharray: ${(props) => props.strokeDashArray};
    stroke-dashoffset: ${(props) => props.strokeDashOffset};
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
`
