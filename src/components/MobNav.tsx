import React from 'react'

const MobNav = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='fixed bg-white/90 backdrop-blur-3xl left-0 right-0 top-0 py-10 px-10 flex flex-col items-end z-50'>{children}</div>
  )
}

export default MobNav