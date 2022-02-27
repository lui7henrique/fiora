import { ApexOptions } from "apexcharts"
import dynamic from "next/dynamic"
import { useCallback } from "react"
import theme from "styles/theme"
import { formatMatch } from "utils/match/formatMatch"

const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false
})

type Participant = ReturnType<typeof formatMatch>["participants"][0]

type ChartProps = {
  data: Array<{
    summoner: Participant["summoner"]
    champion: Participant["champion"]
    data: Array<number | boolean>
  }>
  title: string
}

export const Chart = ({ data, title }: ChartProps) => {
  const defaultOptions = useCallback((): ApexOptions => {
    return {
      chart: {},
      grid: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "55%"
        }
      },
      // tooltip: {
      //   enabled: false
      // },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [...data.map((participant) => participant.summoner.name)],
        axisBorder: {
          color: theme.colors.primary
        },
        axisTicks: {
          color: theme.colors.primary
        }
      },
      tooltip: {
        enabled: true,
        followCursor: true,
        inverseOrder: true,
        theme: "dark",
        y: {
          formatter: (value: number) => value.toLocaleString()
        }
      },
      fill: {
        opacity: 0.3,
        type: "gradient",
        gradient: {
          shade: "dark",
          opacityFrom: 1,
          opacityTo: 0.8
        }
      },
      colors: [theme.colors.primary]
    }
  }, [data])

  const series = [
    {
      name: title,
      data: [...data.map((participant) => participant.data)]
    }
  ]

  return (
    <ApexChart
      options={defaultOptions()}
      series={series}
      type="bar"
      height={500}
      width="100%"
    />
  )
}
