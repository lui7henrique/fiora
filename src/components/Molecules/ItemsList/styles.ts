import styled from "styled-components"

export const Container = styled.section`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 1rem;
  gap: 1rem;
  overflow: hidden;
`

export const Item = styled.div`
  position: relative;
  cursor: pointer;

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
