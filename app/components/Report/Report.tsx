type Props = {
  className?: string
  children: React.ReactNode
}

function Report({ children, className }: Props) {
  return <section children={children} className={className} />
}

export default Report
