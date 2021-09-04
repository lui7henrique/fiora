import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`

export const Team = styled.div`
  max-width: 80px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.7rem;
`

export const Participant = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;

  a {
    display: flex;
    gap: 0.2rem;
    align-items: center;
  }

  p {
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0.6;
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }

    &.principalPlayer {
      opacity: 1;
      font-weight: bold;
    }
  }
`
