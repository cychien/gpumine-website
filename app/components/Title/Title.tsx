import type { ReactNode } from 'react'

type TitleProps = {
  children: ReactNode
}

function Title(props: TitleProps) {
  return <h1 className="text-center text-xl font-bold" {...props} />
}

export default Title
