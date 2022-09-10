import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

function Card({ children }: CardProps) {
  return (
    <div className="bg-surface rounded-[20px] px-4 py-3 shadow-[4px_4px_6px_0_rgba(142,149,170,0.2)] sm:py-3">
      {children}
    </div>
  )
}

export default Card
