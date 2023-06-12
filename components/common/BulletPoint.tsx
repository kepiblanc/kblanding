import React, { FC } from 'react'

interface Props {
    className?: string;
    content?: string
}

const BulletPoint:FC<Props> = ({ className, content }) => {
  return (
    <p className={`font-medium text-base leading-8 pl-[5px] ${className}`}>
        <span className='pr-2'>&#x2022;</span>
        {content}
    </p>
  )
}

export default BulletPoint