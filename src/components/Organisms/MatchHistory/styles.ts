import Image from "next/image"
import styled, { css, keyframes } from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Match = styled.div<{ win: boolean }>`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  padding: 1rem;
  gap: 1rem;
  border-left: 4.5px solid
    ${({ win, theme }) =>
      win ? theme.colors["success-darker"] : theme.colors["error-darker"]};
`

export const ChampionIcon = styled.figure`
  height: 70px;
  width: 70px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  border: 1.5px solid ${({ theme }) => theme.colors.border};
`

export const ChampionImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  object-position: top center;
  filter: brightness(0.8);

  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

export const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`
export const Win = styled.h3<{ win: boolean }>`
  font-size: 1.2rem;
  color: ${({ theme, win }) =>
    win ? theme.colors.success : theme.colors.error};
  opacity: 0.7;
`

export const MatchTime = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const MatchDuration = styled.h4`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`

export const Divisor = styled.sub`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.support};
  font-weight: normal;
  user-select: none;
`

export const MatchCreation = styled.h4`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  opacity: 0.5;
`

export const SummonerStats = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const KDA = styled.h4`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
  opacity: 0.5;
  letter-spacing: 2px;
`

export const AMA = styled.h4<{ AMA: number }>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.support};

  ${({ AMA }) =>
    AMA > 2 &&
    css`
      color: ${({ theme }) => theme.colors["attention-darker"]};
    `}

  ${({ AMA }) =>
    AMA > 4 &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  font-weight: bold;
  letter-spacing: 2px;
`
const opacity = keyframes`
  0% {
    opacity: 0.2
  }

  20% {
    opacity: 0.4
  }

  40% {
    opacity: 0.6
  }
  60% {
    opacity: 0.8
  }

  80% {
    opacity: 1
  }

  100% {
    opacity: 0.2
  }
`

export const Loading = styled.h5`
  font-size: 1.2rem;
  margin-top: 1rem;
  animation: ${opacity} 1.5s linear infinite;
`
