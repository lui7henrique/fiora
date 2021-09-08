import styled from "styled-components"

export const Container = styled.div`
  max-width: 1180px;
  margin-top: 5rem;
  margin: 5rem auto 0 auto;
  padding: 1rem;

  padding: 1rem;

  display: flex;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
  z-index: 2;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Filters = styled.aside`
  width: 30%;

  display: flex;
  flex-direction: column;
  background: var(--shape);
  gap: 1rem;

  position: relative;
  padding: 1rem;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const List = styled.main`
  width: 70%;
  background: var(--shape);
  border-radius: 5px;
  box-shadow: 0px -5px 0px var(--background) inset;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
