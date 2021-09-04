import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 0.2rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    img {
      width: 25px;
      height: 25px;
    }

    .empty {
      width: 25px !important;
      height: 25px !important;
    }
  }

  img {
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

  .empty {
    width: 30px;
    height: 30px;
    background: var(--background);
  }

  div {
    max-height: 30px;

    border-radius: 5px;
  }
`
