import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
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

  p {
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
