import Image from "next/image"
import styled from "styled-components"

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 678px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Mastery = styled.div<{ level: number }>`
  display: flex;
  background: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
  position: relative;
  overflow: hidden;

  transition: all 0.3s ease-in-out;

  &:hover {
    img[alt="${({ level }) => level}"] {
      transform: translateY(0%);
    }

    background: ${({ theme }) => theme.colors.shapeHover};
  }
`

export const ChampionLevelIcon = styled.img`
  width: 40px;
  margin: 0px 10px;

  transform: translateY(-100%);
  transition: all 0.3s ease-in-out;

  /* opacity: 0.5; */
  /* filter: grayscale(40%); */

  position: absolute;
  top: 0;
  right: 0;
  z-index: 25;

  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

export const MasteryTileWrapper = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 5px 0 0 5px;

  @media (max-width: 678px) {
    width: 60%;
  }
`

export const MasteryTile = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  object-position: top center;

  mask-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 30%,
    rgba(0, 0, 0, 0) 100%
  );

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

  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

export const MasteryInfos = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
`

export const MasteryChampion = styled.h4``

export const MasteryChest = styled.sub``

export const MasteryPoints = styled.h5`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.title};
`

export const MasteryFlexGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Divisor = styled.sub`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.support};
  font-weight: normal;
  user-select: none;

  @media (max-width: 678px) {
    font-size: 14px;
  }
`

export const LastPlayTime = styled.sub``
