import NextImage from "next/image"
import Link from "next/link"
import styled from "styled-components"

export const Container = styled(Link)``

export const Card = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Image = styled.figure<{ alt: string }>`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  border-radius: 5px 5px 0 0;

  &:hover {
    img[alt="${({ alt }) => alt}"] {
      transform: scale(1);
      filter: brightness(0.8);
    }

    div.category {
      transform: translateX(150%);
    }
  }
`

export const Splash = styled(NextImage)`
  position: absolute;
  object-fit: cover;
  transform: scale(1.3);

  filter: brightness(0.5);
  transition: all 0.3s ease-in-out;

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
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

export const NameAndTitle = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.h2`
  font-size: 1.5rem;
`

export const Title = styled.h3`
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.support};

  font-size: 14px;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  filter: grayscale(1);
  transition: filter 0.3s ease-in-out;
  opacity: 0.3;

  &:hover {
    filter: grayscale(0);
  }
`

export const BlueEssenceIcon = styled.img`
  width: 16px;
`

export const PriceValue = styled.h5`
  margin-left: 0.3rem;
  font-size: 0.9rem;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.blue_essence};
`

export const Category = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  background-color: rgba(63, 63, 63, 0.1);
  backdrop-filter: blur(5px) saturate(100%) contrast(90%) brightness(150%);
  padding: 4px 8px;
  border-radius: 5px;

  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
`

export const CategoryIcon = styled.img`
  width: 20px;
  filter: grayscale(1);
`

export const CategoryName = styled.h5`
  margin-left: 0.3rem;
  font-size: 0.9rem;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text};
`

export const BestPlayer = styled(Link)``

export const BestPlayerContainer = styled.div`
  display: flex;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 1rem;
  padding: 1rem;
`

export const BestPlayerIconWrapper = styled.figure`
  width: 30px;
  height: 30px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;

  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const BestPlayerIcon = styled(NextImage)`
  position: absolute;
  object-fit: cover;
`

export const BestPlayerName = styled.h5`
  margin-left: 0.3rem;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.support};

  a {
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    filter: brightness(1.2);
  }
`
