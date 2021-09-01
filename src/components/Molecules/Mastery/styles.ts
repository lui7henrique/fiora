import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;

  & + & {
    border-top: 1px solid var(--borders);
  }
`

export const MasteryInfos = styled.div`
  display: flex;
  flex-direction: column;

  sub {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    img {
      width: 20px;
      filter: hue-rotate(210deg);
    }
  }
`
