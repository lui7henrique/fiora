import styled from "styled-components"

export const Container = styled.section`
  max-width: none;
  position: absolute;
  background: var(--shape);
  border-radius: 5px;
  box-shadow: 0px -5px 0px var(--background) inset;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 1rem;
  gap: 1rem;
`

export const Item = styled.div`
  position: relative;

  &:hover {
    .infos {
      display: block;
    }
  }
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

export const Infos = styled.div`
  background: var(--shape-hover);
  position: absolute;
  bottom: auto;
  display: none;
  z-index: 55;
  border-radius: 5px;
  padding: 1rem;
`

export const Description = styled.div`
  width: 350px;
`

export const NameAndIcon = styled.div`
  display: flex;
  gap: 5px;

  h3 {
    white-space: nowrap;
  }
`
