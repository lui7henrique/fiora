import Image from "next/image"

import * as S from "./styles"

interface IProgressProps {
  tier: string
  rank: number
  lps: number
}

export function Progress({ tier, rank, lps }: IProgressProps) {
  const size = 120
  const strokeWidth = 5
  const radius = size / 2 - strokeWidth * 2

  const circumference = radius * 2 * Math.PI
  const strokeDashArray = `${circumference} ${circumference}`

  let strokeDashOffset = circumference

  function setProgress(lps: number) {
    if (lps > 100) {
      strokeDashOffset = +strokeDashArray
    } else {
      const offset = circumference - (lps / 100) * circumference
      strokeDashOffset = offset
    }
  }
  setProgress(lps)

  return (
    <S.Progress
      className="progress"
      strokeDashArray={strokeDashArray}
      strokeDashOffset={strokeDashOffset}
    >
      <svg height={size} width={size}>
        <circle
          className="progress-ring_full"
          r={`${radius}`}
          cx={size / 2}
          cy={size / 2}
          stroke="var(--borders)"
          strokeWidth={strokeWidth * 1}
          fill="transparent"
          shapeRendering="geometricPrecision"
        />
      </svg>
      <svg height={size} width={size} className="progress-ring">
        <circle
          className="progress-ring__complete"
          r={`${radius}`}
          cx={size / 2}
          cy={size / 2}
          stroke={`var(--${tier})`}
          strokeWidth={strokeWidth}
          fill="transparent"
          shapeRendering="geometricPrecision"
          strokeLinecap="round"
        />
      </svg>
      <div className="rank">
        <sub>{lps} pdl</sub>
        <Image
          src={`/img/ranks/${tier}_${rank}.png`}
          alt="Rank"
          width={size / 2.5}
          height={size / 2.5}
        />
      </div>
    </S.Progress>
  )
}
