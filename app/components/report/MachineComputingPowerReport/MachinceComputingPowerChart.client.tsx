import { faker } from '@faker-js/faker'
import { format } from 'date-fns'
import type { UTCTimestamp } from 'lightweight-charts'
import { LineStyle } from 'lightweight-charts'
import { ColorType } from 'lightweight-charts'
import { createChart } from 'lightweight-charts'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import toReadableNumber from '~/utils/calculation/toReadableNumber'

const chartBreakPointInSmallScreen = 640 - 28 * 2

function MachinceComputingPowerChart() {
  const chartContainerRef = React.useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  React.useEffect(() => {
    if (!chartContainerRef.current) return

    const inLargeScreen =
      chartContainerRef.current.clientWidth > chartBreakPointInSmallScreen

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 250,
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#2A2D9E',
        fontSize: 12,
      },
      grid: {
        vertLines: {
          color: '#C7D5FB',
        },
        horzLines: {
          color: '#C7D5FB',
        },
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.3,
        },
        borderColor: '#96B2FF',
        drawTicks: false,
        entireTextOnly: true,
      },
      timeScale: {
        fixLeftEdge: true,
        fixRightEdge: true,
        borderColor: '#96B2FF',
        minBarSpacing: inLargeScreen ? 0.5 : 24,
        lockVisibleTimeRangeOnResize: true,
        tickMarkFormatter: function (time: UTCTimestamp) {
          return format(time * 1000, 'HH:mm')
        },
      },
      crosshair: {
        vertLine: {
          color: '#1D2080',
          labelBackgroundColor: '#96B2FF',
        },
        horzLine: {
          color: '#1D2080',
          labelBackgroundColor: '#96B2FF',
        },
      },
      localization: {
        priceFormatter: function (price: number) {
          return toReadableNumber(price)
        },
        timeFormatter: function (time: UTCTimestamp) {
          return format(time * 1000, 'MM/dd/yyyy HH:mm')
        },
      },
      handleScale: {
        axisPressedMouseMove: {
          price: false,
        },
      },
    })

    const mockData = Array.from({ length: 144 }, (_, index) => {
      const dateTime = new Date()
      const newDateTime = new Date(
        dateTime.getTime() - (index + 1) * 10 * 60 * 1000
      )
      const amount = faker.datatype.number({
        min: 500000000000,
        max: 2000000000000,
      })
      return {
        time: Math.floor(newDateTime.getTime() / 1000) as UTCTimestamp,
        value: amount,
      }
    }).reverse()

    const series = chart.addLineSeries({
      color: '#FA7F26',
      priceLineColor: '#3243DA',
      priceLineStyle: LineStyle.Solid,
      lineWidth: 2,
    })

    series.setData(mockData)

    if (inLargeScreen) {
      chart.timeScale().fitContent()
    }

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current?.clientWidth })

      const inLargeScreen =
        (chartContainerRef.current?.clientWidth ?? 0) >
        chartBreakPointInSmallScreen

      chart.timeScale().applyOptions({
        minBarSpacing: inLargeScreen ? 0.5 : 24,
        barSpacing: inLargeScreen ? 0.5 : 24,
      })

      if (inLargeScreen) {
        chart.timeScale().fitContent()
      } else {
        chart.timeScale().resetTimeScale()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chart.remove()
    }
  }, [])

  return (
    <div ref={chartContainerRef} className="relative isolate h-[250px]">
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
