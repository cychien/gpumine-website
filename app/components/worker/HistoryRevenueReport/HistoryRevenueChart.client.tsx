// import { format } from 'date-fns'
// import type { UTCTimestamp } from 'lightweight-charts'
import { createChart } from 'lightweight-charts'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

// import computingPowerRaw from '~/mocks/computing-power'
// import toReadableNumber from '~/utils/calculation/toReadableNumber'

function HistoryRevenueChart() {
  const chartContainerRef = React.useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  React.useEffect(() => {
    if (!chartContainerRef.current) return

    // const timezoneOffsetInMinute = new Date().getTimezoneOffset()

    const chart = createChart(chartContainerRef.current, {
      layout: {
        backgroundColor: 'transparent',
        textColor: '#2A2D9E',
      },
      // timeScale: {
      //   timeVisible: true,
      //   tickMarkFormatter: (time: UTCTimestamp) => {
      //     const date = new Date((time + timezoneOffsetInMinute * 60) * 1000)
      //     return format(date, 'MMM-dd HH:mm')
      //   },
      //   borderColor: '#96B2FF',
      // },
      rightPriceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
        borderColor: '#96B2FF',
      },
      // localization: {
      //   priceFormatter: function (price: number) {
      //     return toReadableNumber(price)
      //   },
      // },
      grid: {
        horzLines: {
          color: '#C7D5FB',
        },
        vertLines: {
          color: '#C7D5FB',
        },
      },
      // crosshair: {
      //   vertLine: {
      //     color: '#1D2080',
      //     labelBackgroundColor: '#96B2FF',
      //   },
      //   horzLine: {
      //     color: '#1D2080',
      //     labelBackgroundColor: '#3243DA',
      //   },
      // },
    })

    const newSeries = chart.addLineSeries({
      color: '#07B9B9',
      lineWidth: 2,
    })
    const histogramSeries = chart.addHistogramSeries({
      color: '#618AF9',
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    })
    // const computingPowerData = computingPowerRaw
    //   .sort((a, b) => a.ts - b.ts)
    //   .map((raw) => ({
    //     time: (raw.ts - timezoneOffsetInMinute * 60) as UTCTimestamp,
    //     value: raw.hashrate,
    //   }))
    newSeries.setData([
      { time: '2018-10-19', value: 54.9 },
      { time: '2018-10-22', value: 54.98 },
      { time: '2018-10-23', value: 57.21 },
      { time: '2018-10-24', value: 57.42 },
      { time: '2018-10-25', value: 56.43 },
      { time: '2018-10-26', value: 55.51 },
      { time: '2018-10-29', value: 56.48 },
      { time: '2018-10-30', value: 58.18 },
      { time: '2018-10-31', value: 57.09 },
      { time: '2018-11-01', value: 56.05 },
      { time: '2018-11-02', value: 56.63 },
      { time: '2018-11-05', value: 57.21 },
      { time: '2018-11-06', value: 57.21 },
      { time: '2018-11-07', value: 57.65 },
      { time: '2018-11-08', value: 58.27 },
      { time: '2018-11-09', value: 58.46 },
      { time: '2018-11-12', value: 58.72 },
      { time: '2018-11-13', value: 58.66 },
      { time: '2018-11-14', value: 58.94 },
      { time: '2018-11-15', value: 59.08 },
      { time: '2018-11-16', value: 60.21 },
      { time: '2018-11-19', value: 60.62 },
      { time: '2018-11-20', value: 59.46 },
      { time: '2018-11-21', value: 59.16 },
      { time: '2018-11-23', value: 58.64 },
      { time: '2018-11-26', value: 59.17 },
      { time: '2018-11-27', value: 60.65 },
      { time: '2018-11-28', value: 60.06 },
      { time: '2018-11-29', value: 59.45 },
      { time: '2018-11-30', value: 60.3 },
      { time: '2018-12-03', value: 58.16 },
      { time: '2018-12-04', value: 58.09 },
      { time: '2018-12-06', value: 58.08 },
      { time: '2018-12-07', value: 57.68 },
      { time: '2018-12-10', value: 58.27 },
      { time: '2018-12-11', value: 58.85 },
      { time: '2018-12-12', value: 57.25 },
      { time: '2018-12-13', value: 57.09 },
      { time: '2018-12-14', value: 57.08 },
      { time: '2018-12-17', value: 55.95 },
      { time: '2018-12-18', value: 55.65 },
      { time: '2018-12-19', value: 55.86 },
      { time: '2018-12-20', value: 55.07 },
      { time: '2018-12-21', value: 54.92 },
      { time: '2018-12-24', value: 53.05 },
      { time: '2018-12-26', value: 54.44 },
      { time: '2018-12-27', value: 55.15 },
      { time: '2018-12-28', value: 55.27 },
      { time: '2018-12-31', value: 56.22 },
      { time: '2019-01-02', value: 56.02 },
      { time: '2019-01-03', value: 56.22 },
      { time: '2019-01-04', value: 56.36 },
      { time: '2019-01-07', value: 56.72 },
      { time: '2019-01-08', value: 58.38 },
      { time: '2019-01-09', value: 57.05 },
      { time: '2019-01-10', value: 57.6 },
      { time: '2019-01-11', value: 58.02 },
      { time: '2019-01-14', value: 58.03 },
      { time: '2019-01-15', value: 58.1 },
      { time: '2019-01-16', value: 57.08 },
      { time: '2019-01-17', value: 56.83 },
      { time: '2019-01-18', value: 57.09 },
      { time: '2019-01-22', value: 56.99 },
      { time: '2019-01-23', value: 57.76 },
      { time: '2019-01-24', value: 57.07 },
      { time: '2019-01-25', value: 56.4 },
      { time: '2019-01-28', value: 55.07 },
      { time: '2019-01-29', value: 53.28 },
      { time: '2019-01-30', value: 54.0 },
      { time: '2019-01-31', value: 55.06 },
      { time: '2019-02-01', value: 54.55 },
      { time: '2019-02-04', value: 54.04 },
      { time: '2019-02-05', value: 54.14 },
      { time: '2019-02-06', value: 53.79 },
      { time: '2019-02-07', value: 53.57 },
      { time: '2019-02-08', value: 53.95 },
      { time: '2019-02-11', value: 54.05 },
      { time: '2019-02-12', value: 54.42 },
      { time: '2019-02-13', value: 54.48 },
      { time: '2019-02-14', value: 54.03 },
      { time: '2019-02-15', value: 55.16 },
      { time: '2019-02-19', value: 55.44 },
      { time: '2019-02-20', value: 55.76 },
      { time: '2019-02-21', value: 56.15 },
      { time: '2019-02-22', value: 56.92 },
      { time: '2019-02-25', value: 56.78 },
      { time: '2019-02-26', value: 56.64 },
      { time: '2019-02-27', value: 56.72 },
      { time: '2019-02-28', value: 56.92 },
      { time: '2019-03-01', value: 56.96 },
      { time: '2019-03-04', value: 56.24 },
      { time: '2019-03-05', value: 56.08 },
      { time: '2019-03-06', value: 55.68 },
      { time: '2019-03-07', value: 56.3 },
      { time: '2019-03-08', value: 56.53 },
      { time: '2019-03-11', value: 57.58 },
      { time: '2019-03-12', value: 57.43 },
      { time: '2019-03-13', value: 57.66 },
      { time: '2019-03-14', value: 57.95 },
      { time: '2019-03-15', value: 58.39 },
      { time: '2019-03-18', value: 58.07 },
      { time: '2019-03-19', value: 57.5 },
      { time: '2019-03-20', value: 57.67 },
      { time: '2019-03-21', value: 58.29 },
      { time: '2019-03-22', value: 59.76 },
      { time: '2019-03-25', value: 60.08 },
      { time: '2019-03-26', value: 60.63 },
      { time: '2019-03-27', value: 60.88 },
      { time: '2019-03-28', value: 59.08 },
      { time: '2019-03-29', value: 59.13 },
      { time: '2019-04-01', value: 59.09 },
      { time: '2019-04-02', value: 58.53 },
      { time: '2019-04-03', value: 58.87 },
      { time: '2019-04-04', value: 58.99 },
      { time: '2019-04-05', value: 59.09 },
      { time: '2019-04-08', value: 59.13 },
      { time: '2019-04-09', value: 58.4 },
      { time: '2019-04-10', value: 58.61 },
      { time: '2019-04-11', value: 58.56 },
      { time: '2019-04-12', value: 58.74 },
      { time: '2019-04-15', value: 58.71 },
      { time: '2019-04-16', value: 58.79 },
      { time: '2019-04-17', value: 57.78 },
      { time: '2019-04-18', value: 58.04 },
      { time: '2019-04-22', value: 58.37 },
      { time: '2019-04-23', value: 57.15 },
      { time: '2019-04-24', value: 57.08 },
      { time: '2019-04-25', value: 55.85 },
      { time: '2019-04-26', value: 56.58 },
      { time: '2019-04-29', value: 56.84 },
      { time: '2019-04-30', value: 57.19 },
      { time: '2019-05-01', value: 56.52 },
      { time: '2019-05-02', value: 56.99 },
      { time: '2019-05-03', value: 57.24 },
      { time: '2019-05-06', value: 56.91 },
      { time: '2019-05-07', value: 56.63 },
      { time: '2019-05-08', value: 56.38 },
      { time: '2019-05-09', value: 56.48 },
      { time: '2019-05-10', value: 56.91 },
      { time: '2019-05-13', value: 56.75 },
      { time: '2019-05-14', value: 56.55 },
      { time: '2019-05-15', value: 56.81 },
      { time: '2019-05-16', value: 57.38 },
      { time: '2019-05-17', value: 58.09 },
      { time: '2019-05-20', value: 59.01 },
      { time: '2019-05-21', value: 59.5 },
      { time: '2019-05-22', value: 59.25 },
      { time: '2019-05-23', value: 58.87 },
      { time: '2019-05-24', value: 59.32 },
      { time: '2019-05-28', value: 59.57 },
    ])
    histogramSeries.setData([
      { time: '2018-10-19', value: 19103293 },
      { time: '2018-10-22', value: 21737523 },
      { time: '2018-10-23', value: 29328713 },
      { time: '2018-10-24', value: 37435638 },
      { time: '2018-10-25', value: 25269995 },
      { time: '2018-10-26', value: 24973311 },
      { time: '2018-10-29', value: 22103692 },
      { time: '2018-10-30', value: 25231199 },
      { time: '2018-10-31', value: 24214427 },
      { time: '2018-11-01', value: 22533201 },
      { time: '2018-11-02', value: 14734412 },
      { time: '2018-11-05', value: 12733842 },
      { time: '2018-11-06', value: 12371207 },
      { time: '2018-11-07', value: 14891287 },
      { time: '2018-11-08', value: 12482392 },
      { time: '2018-11-09', value: 17365762 },
      { time: '2018-11-12', value: 13236769 },
      { time: '2018-11-13', value: 13047907 },
      { time: '2018-11-14', value: 18288710 },
      { time: '2018-11-15', value: 17147123 },
      { time: '2018-11-16', value: 19470986 },
      { time: '2018-11-19', value: 18405731 },
      { time: '2018-11-20', value: 22028957 },
      { time: '2018-11-21', value: 18482233 },
      { time: '2018-11-23', value: 7009050 },
      { time: '2018-11-26', value: 12308876 },
      { time: '2018-11-27', value: 14118867 },
      { time: '2018-11-28', value: 18662989 },
      { time: '2018-11-29', value: 14763658 },
      { time: '2018-11-30', value: 31142818 },
      { time: '2018-12-03', value: 27795428 },
      { time: '2018-12-04', value: 21727411 },
      { time: '2018-12-06', value: 26880429 },
      { time: '2018-12-07', value: 16948126 },
      { time: '2018-12-10', value: 16603356 },
      { time: '2018-12-11', value: 14991438 },
      { time: '2018-12-12', value: 18892182 },
      { time: '2018-12-13', value: 15454706 },
      { time: '2018-12-14', value: 13960870 },
      { time: '2018-12-17', value: 18902523 },
      { time: '2018-12-18', value: 18895777 },
      { time: '2018-12-19', value: 20968473 },
      { time: '2018-12-20', value: 26897008 },
      { time: '2018-12-21', value: 55413082 },
      { time: '2018-12-24', value: 15077207 },
      { time: '2018-12-26', value: 17970539 },
      { time: '2018-12-27', value: 17530977 },
      { time: '2018-12-28', value: 14771641 },
      { time: '2018-12-31', value: 15331758 },
      { time: '2019-01-02', value: 13969691 },
      { time: '2019-01-03', value: 19245411 },
      { time: '2019-01-04', value: 17035848 },
      { time: '2019-01-07', value: 16348982 },
      { time: '2019-01-08', value: 21425008 },
      { time: '2019-01-09', value: 18136000 },
      { time: '2019-01-10', value: 14259910 },
      { time: '2019-01-11', value: 15801548 },
      { time: '2019-01-14', value: 11342293 },
      { time: '2019-01-15', value: 10074386 },
      { time: '2019-01-16', value: 13411691 },
      { time: '2019-01-17', value: 15223854 },
      { time: '2019-01-18', value: 16802516 },
      { time: '2019-01-22', value: 18284771 },
      { time: '2019-01-23', value: 15109007 },
      { time: '2019-01-24', value: 12494109 },
      { time: '2019-01-25', value: 17806822 },
      { time: '2019-01-28', value: 25955718 },
      { time: '2019-01-29', value: 33789235 },
      { time: '2019-01-30', value: 27260036 },
      { time: '2019-01-31', value: 28585447 },
      { time: '2019-02-01', value: 13778392 },
      { time: '2019-02-04', value: 15818901 },
      { time: '2019-02-05', value: 14124794 },
      { time: '2019-02-06', value: 11391442 },
      { time: '2019-02-07', value: 12436168 },
      { time: '2019-02-08', value: 12011657 },
      { time: '2019-02-11', value: 9802798 },
      { time: '2019-02-12', value: 11227550 },
      { time: '2019-02-13', value: 11884803 },
      { time: '2019-02-14', value: 11190094 },
      { time: '2019-02-15', value: 15719416 },
      { time: '2019-02-19', value: 12272877 },
      { time: '2019-02-20', value: 11379006 },
      { time: '2019-02-21', value: 14680547 },
      { time: '2019-02-22', value: 12534431 },
      { time: '2019-02-25', value: 15051182 },
      { time: '2019-02-26', value: 12005571 },
      { time: '2019-02-27', value: 8962776 },
      { time: '2019-02-28', value: 15742971 },
      { time: '2019-03-01', value: 10942737 },
      { time: '2019-03-04', value: 13674737 },
      { time: '2019-03-05', value: 15749545 },
      { time: '2019-03-06', value: 13935530 },
      { time: '2019-03-07', value: 12644171 },
      { time: '2019-03-08', value: 10646710 },
      { time: '2019-03-11', value: 13627431 },
      { time: '2019-03-12', value: 12812980 },
      { time: '2019-03-13', value: 14168350 },
      { time: '2019-03-14', value: 12148349 },
      { time: '2019-03-15', value: 23715337 },
      { time: '2019-03-18', value: 12168133 },
      { time: '2019-03-19', value: 13462686 },
      { time: '2019-03-20', value: 11903104 },
      { time: '2019-03-21', value: 10920129 },
      { time: '2019-03-22', value: 25125385 },
      { time: '2019-03-25', value: 15463411 },
      { time: '2019-03-26', value: 12316901 },
      { time: '2019-03-27', value: 13290298 },
      { time: '2019-03-28', value: 20547060 },
      { time: '2019-03-29', value: 17283871 },
      { time: '2019-04-01', value: 16331140 },
      { time: '2019-04-02', value: 11408146 },
      { time: '2019-04-03', value: 15491724 },
      { time: '2019-04-04', value: 8776028 },
      { time: '2019-04-05', value: 11497780 },
      { time: '2019-04-08', value: 11680538 },
      { time: '2019-04-09', value: 10414416 },
      { time: '2019-04-10', value: 8782061 },
      { time: '2019-04-11', value: 9219930 },
      { time: '2019-04-12', value: 10847504 },
      { time: '2019-04-15', value: 7741472 },
      { time: '2019-04-16', value: 10239261 },
      { time: '2019-04-17', value: 15498037 },
      { time: '2019-04-18', value: 13189013 },
      { time: '2019-04-22', value: 11950365 },
      { time: '2019-04-23', value: 23488682 },
      { time: '2019-04-24', value: 13227084 },
      { time: '2019-04-25', value: 17425466 },
      { time: '2019-04-26', value: 16329727 },
      { time: '2019-04-29', value: 13984965 },
      { time: '2019-04-30', value: 15469002 },
      { time: '2019-05-01', value: 11627436 },
      { time: '2019-05-02', value: 14435436 },
      { time: '2019-05-03', value: 9388228 },
      { time: '2019-05-06', value: 10066145 },
      { time: '2019-05-07', value: 12963827 },
      { time: '2019-05-08', value: 12086743 },
      { time: '2019-05-09', value: 14835326 },
      { time: '2019-05-10', value: 10707335 },
      { time: '2019-05-13', value: 13759350 },
      { time: '2019-05-14', value: 12776175 },
      { time: '2019-05-15', value: 10806379 },
      { time: '2019-05-16', value: 11695064 },
      { time: '2019-05-17', value: 14436662 },
      { time: '2019-05-20', value: 20910590 },
      { time: '2019-05-21', value: 14016315 },
      { time: '2019-05-22', value: 11487448 },
      { time: '2019-05-23', value: 11707083 },
      { time: '2019-05-24', value: 8755506 },
      { time: '2019-05-28', value: 3097125 },
    ])

    // chart.timeScale()

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
          {t('common.24h-history-revenue')}
        </div>
        <div className="align-middle text-sm font-medium text-darkGray">
          {t('common.revenue')}=
          <span className="text-primary-500">0.36231</span>
        </div>
        <div className="align-middle text-sm font-medium text-darkGray">
          {t('common.average-value')}=
          <span className="text-green">0.35324</span>
        </div>
      </div>
    </div>
  )
}

export default HistoryRevenueChart
