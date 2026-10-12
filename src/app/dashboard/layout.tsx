import React, { ReactNode } from 'react'
import { Navbar } from '../components/navbar'
import { Nav } from 'react-day-picker'

const layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default layout
