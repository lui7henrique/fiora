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
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
    }

    sub {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      img {
        width: 20px;
        filter: contrast(0);
        opacity: 0.5;
      }
    }
  }
`

export const Chest = styled.div`
  width: 50px;
  height: 38px;
  opacity: 0.3;
  transform: scale(0.5);
  background-image: url("/img/chest.png");
  background-size: cover;
`
