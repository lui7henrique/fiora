import styled from "styled-components"

export const Container = styled.div``

export const Content = styled.div`
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  gap: 1rem;
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

export const Infos = styled.aside`
  width: 30%;
  margin-top: -104px;

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.shape};
  gap: 1rem;

  position: relative;
  padding: 1rem;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const About = styled.main`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: -50px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
