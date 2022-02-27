import { ApexOptions } from "apexcharts"
import dynamic from "next/dynamic"
import { useCallback } from "react"
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
}

export const Chart = ({ data }: ChartProps) => {
  const defaultOptions = useCallback((): ApexOptions => {
    return {
      chart: {
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [...data.map((participant) => participant.summoner.name)]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    }
  }, [])

  const series = [
    {
      name: "Players",
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
