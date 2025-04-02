import React, { ReactNode } from 'react'

const FeatureCard = ({children, title, content}: {
    children: ReactNode,
    title: string,
    content: string
}) => {
  return (
    <div className="w-full border border-white border-dashed">
          <div className="p-[30px] flex flex-col items-center justify-center">
            {children}
            <h1 className="text-[27px] md:text-4xl text-white font-dm-serif-display font-bold mb-[12px]">
              {title}
            </h1>
            <p className="text-white text-center font-dm-sans text-base/5 mb-[30px] w-[90%]">
            {content}</p>
          </div>
        </div>
  )
}

export default FeatureCard