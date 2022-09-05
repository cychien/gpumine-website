import BigNumber from 'bignumber.js'

const UNITS = [
  {
    label: '',
    perUnit: 1,
    highBound: 1e3,
  },
  {
    label: 'K',
    perUnit: 1e3,
    highBound: 1e6,
  },
  {
    label: 'M',
    perUnit: 1e6,
    highBound: 1e9,
  },
  {
    label: 'G',
    perUnit: 1e9,
    highBound: 1e12,
  },
  {
    label: 'T',
    perUnit: 1e12,
    highBound: 1e15,
  },
  {
    label: 'P',
    perUnit: 1e15,
    highBound: 1e21,
  },
]

export default function toReadableNumber(num: number) {
  const numInBigNumber = new BigNumber(num)

  for (let i = 0; i < UNITS.length; i++) {
    if (numInBigNumber.isLessThan(UNITS[i].highBound)) {
      return (
        numInBigNumber.dividedBy(UNITS[i].perUnit).toFixed(2) + UNITS[i].label
      )
    }
  }
}
