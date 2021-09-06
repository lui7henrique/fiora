import styled from "styled-components"

export const Container = styled.div`
  margin-top: 5rem;
`
export const Content = styled.div`
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  gap: 2rem;
  padding: 1rem;

  display: flex;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Aside = styled.aside`
  width: 30%;
  margin-top: -104px;

  display: flex;
  flex-direction: column;
  background: var(--shape);

  border-radius: 3px;

  @media (max-width: 768px) {
    width: 100%;
  }

  > section {
    padding: 1rem;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  width: 70%;
  background: var(--shape);
  border-radius: 5px;
  box-shadow: 0px -5px 0px var(--background) inset;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Header = styled.header`
  height: 3rem;
  border-bottom: 1px solid var(--borders);
  display: flex;
  align-items: center;
`

export const Options = styled.section`
  padding: 0 1rem;
  display: flex;
  gap: 1rem;
  height: 3rem;

  h3 {
    margin-top: 0.7rem;
    text-decoration: none;
    color: var(--gray);
    filter: brightness(0.5);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    font-weight: normal;

    &.active {
      filter: brightness(1);
      border-bottom: 2px solid var(--primary);
    }
    &:hover {
      filter: brightness(1);
      border-bottom: 2px solid var(--primary);
    }
  }
`
