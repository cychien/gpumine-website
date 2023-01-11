import { faker } from '@faker-js/faker'
import { format } from 'date-fns'
import type { UTCTimestamp } from 'lightweight-charts'
import { LineStyle } from 'lightweight-charts'
import { ColorType, createChart } from 'lightweight-charts'
import * as React from 'react'

import toReadableNumber from '~/utils/calculation/toReadableNumber'

const chartBreakPointInSmallScreen = 640 - 28 * 2

function WithdrawChart() {
  const chartContainerRef = React.useRef<HTMLDivElement>(null)

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
          bottom: 0,
        },
        borderColor: '#2A2D9E',
        drawTicks: false,
        entireTextOnly: true,
      },
      timeScale: {
        fixLeftEdge: true,
        fixRightEdge: true,
        borderColor: '#2A2D9E',
        minBarSpacing: inLargeScreen ? 0.5 : 24,
        lockVisibleTimeRangeOnResize: true,
        tickMarkFormatter: function (time: UTCTimestamp) {
          return format(time * 1000, 'MMM-dd')
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

    const totalWithdrawMockData = Array.from({ length: 30 }, (_, index) => {
      let dateTime = new Date()
      dateTime.setDate(dateTime.getDate() - (index + 1))
      const amount = faker.datatype.float({ min: 0.34, max: 0.5 })
      return {
        time: Math.floor(dateTime.getTime() / 1000) as UTCTimestamp,
        value: amount,
      }
    }).reverse()

    const serviceFeeMockData = Array.from({ length: 30 }, (_, index) => {
      let dateTime = new Date()
      dateTime.setDate(dateTime.getDate() - (index + 1))
      const amount = faker.datatype.float({ min: 0.34, max: 0.36 })
      return {
        time: Math.floor(dateTime.getTime() / 1000) as UTCTimestamp,
        value: amount,
      }
    }).reverse()

    const minValue = Math.min(...serviceFeeMockData.map((data) => data.value))
    const base = minValue * 0.9

    const totolWithdrawSeries = chart.addHistogramSeries({
      color: '#618AF9',
      priceLineColor: '#3243DA',
      priceLineStyle: LineStyle.Solid,
      base,
    })

    const serviceFeeSeries = chart.addHistogramSeries({
      color: '#FA7F26',
      priceLineVisible: false,
      base,
    })

    totolWithdrawSeries.setData(totalWithdrawMockData)
    serviceFeeSeries.setData(serviceFeeMockData)

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

  return <div ref={chartContainerRef} />
}

export default WithdrawChart
