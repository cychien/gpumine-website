import BigNumber from 'bignumber.js'

const UNITS = [
  {
    label: '',
    perUnit: new BigNumber(1),
    highBound: new BigNumber(1024),
  },
  {
    label: 'K',
    perUnit: new BigNumber(1024),
    highBound: new BigNumber(1024).exponentiatedBy(2),
  },
  {
    label: 'M',
    perUnit: new BigNumber(1024).exponentiatedBy(2),
    highBound: new BigNumber(1024).exponentiatedBy(3),
  },
  {
    label: 'G',
    perUnit: new BigNumber(1024).exponentiatedBy(3),
    highBound: new BigNumber(1024).exponentiatedBy(4),
  },
  {
    label: 'T',
    perUnit: new BigNumber(1024).exponentiatedBy(4),
    highBound: new BigNumber(1024).exponentiatedBy(5),
  },
  {
    label: 'P',
    perUnit: new BigNumber(1024).exponentiatedBy(5),
    highBound: new BigNumber(1024).exponentiatedBy(8),
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
