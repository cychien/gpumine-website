import { format } from 'date-fns'
import type { UTCTimestamp } from 'lightweight-charts'
import { createChart } from 'lightweight-charts'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import computingPowerRaw from '~/mocks/computing-power'
import toReadableNumber from '~/utils/calculation/toReadableNumber'

function MachinceComputingPowerChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    if (!chartContainerRef.current) return

    const timezoneOffsetInMinute = new Date().getTimezoneOffset()

    const chart = createChart(chartContainerRef.current, {
      layout: {
        backgroundColor: 'transparent',
        textColor: '#2A2D9E',
      },
      timeScale: {
        timeVisible: true,
        tickMarkFormatter: (time: UTCTimestamp) => {
          const date = new Date((time + timezoneOffsetInMinute * 60) * 1000)
          return format(date, 'MMM-dd HH:mm')
        },
        borderColor: '#96B2FF',
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.3,
        },
        borderColor: '#96B2FF',
      },
      localization: {
        priceFormatter: function (price: number) {
          return toReadableNumber(price)
        },
      },
      grid: {
        horzLines: {
          color: '#C7D5FB',
        },
        vertLines: {
          color: '#C7D5FB',
        },
      },
      crosshair: {
        vertLine: {
          color: '#1D2080',
          labelBackgroundColor: '#96B2FF',
        },
        horzLine: {
          color: '#1D2080',
          labelBackgroundColor: '#3243DA',
        },
      },
    })

    const newSeries = chart.addLineSeries({
      color: '#FA7F26',
      lineWidth: 2,
    })
    const computingPowerData = computingPowerRaw
      .sort((a, b) => a.ts - b.ts)
      .map((raw) => ({
        time: (raw.ts - timezoneOffsetInMinute * 60) as UTCTimestamp,
        value: raw.hashrate,
      }))
    newSeries.setData(computingPowerData)

    chart.timeScale()

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current?.clientWidth })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chart.remove()
    }
  }, [])

  return (
    <div ref={chartContainerRef} className="relative isolate h-[253px]">
      <div className="absolute z-10 hidden items-baseline space-x-3 sm:flex">
        <div className="font-bold text-darkGray">
          {t('common.machine-computing-power-chart')}
        </div>
        <div className="align-middle text-sm font-medium text-darkGray">
          {t('common.average-computing-power')}=
          <span className="text-orange">1580</span>
        </div>
      </div>
    </div>
  )
}

export default MachinceComputingPowerChart
