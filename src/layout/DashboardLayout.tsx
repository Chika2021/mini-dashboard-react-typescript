import React from 'react'

interface DashboardLayoutProps {
  children:React.ReactNode;
}

const  DashboardLayout:React.FC<DashboardLayoutProps> = ({children})  => {
  return (
    <div className='flex h-screen'>
      <div>
        <main className='p-4 bg-gray-100 flex-grow'>{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout;