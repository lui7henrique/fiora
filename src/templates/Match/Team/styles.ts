import Image from "next/image"
import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  gap: 0.5rem;
  padding: 0 5rem;
`

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;

  &:first-child {
    align-items: flex-end;

    @media (max-width: 978px) {
      align-items: flex-start;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }

  @media (max-width: 978px) {
    padding: 1rem;
  }

  & + & {
    @media (max-width: 978px) {
      border-left: 0px solid ${({ theme }) => theme.colors.border};
      padding: 1rem;
    }

    border-left: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1rem 0.5rem;
  }
`

export const Participant = styled.div<{ team: number }>`
  display: flex;
  gap: 1rem;
  align-items: center;

  ${({ team }) =>
    team === 100 &&
    css`
      @media (max-width: 978px) {
        flex-direction: row;
      }

      flex-direction: row-reverse;
    `}
`

export const Summoner = styled.div<{ team: number; isMvp?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  ${({ team }) =>
    team === 100 &&
    css`
      @media (max-width: 978px) {
        flex-direction: row;
      }

      flex-direction: row-reverse;
    `};

  ${({ isMvp }) =>
    isMvp &&
    css`
      &::after {
        content: "MVP";
        position: absolute;
        bottom: 0;
        left: 0;

        font-size: 0.5rem;
        font-weight: bold;

        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.title};

        padding: 0.2rem;
        border-radius: 5px;

        transform: translateY(0.1rem);
      }
    `}
`

export const ChampionIconWrapper = styled.figure<{ isMvp?: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

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

export const ChampionIcon = styled(Image)`
  transform: scale(1.2);
`

export const ParticipantNick = styled.a<{ team: number }>`
  font-size: 0.8rem;
  width: 10ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ team }) =>
    team === 100 &&
    css`
      text-align: right;

      @media (max-width: 978px) {
        text-align: left;
      }
    `}
`

export const Build = styled.div`
  display: flex;
  gap: 0.1rem;
`

export const ItemWrapper = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  background: #121214;
`

export const Item = styled.img`
  width: 100%;
  height: 100%;
`

export const ItemEmpty = styled.div``

export const Stats = styled.div<{ team: number }>`
  display: flex;
  flex-direction: column;
  width: 7ch;

  ${({ team }) =>
    team === 100 &&
    css`
      align-items: flex-end;

      @media (max-width: 978px) {
        align-items: flex-start;
      }
    `}
`

export const KDA = styled.h5`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 2px;
`

export const CreepScore = styled.h6<{ team: number }>`
  font-size: 0.7rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.support};

  ${({ team }) =>
    team === 100 &&
    css`
      text-align: right;

      @media (max-width: 978px) {
        text-align: left;
      }
    `}
`

export const DamageContainer = styled.div`
  width: 100px;
  height: 5px;
  background: ${({ theme }) => theme.colors.shapeHover};
  border-radius: 5px;
`

export const TotalDamage = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;

  background: linear-gradient(
    90deg,
    rgba(130, 87, 229, 1) 0%,
    rgba(77, 50, 140, 1) 100%
  );
  border-radius: 3px;
`
