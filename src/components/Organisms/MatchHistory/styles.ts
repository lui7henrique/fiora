import Image from "next/image"
import styled from "styled-components"

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
  border-left: 5px solid
    ${({ win, theme }) =>
      win ? theme.colors["success-darker"] : theme.colors["error-darker"]};
`

export const ChampionIcon = styled.figure`
  height: 70px;
  width: 70px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`

export const ChampionImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  object-position: top center;
  filter: brightness(0.8);
`

export const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
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
