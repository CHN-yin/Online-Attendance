import React from 'react'
import styles from './Home.module.scss'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h3><Outlet></Outlet></h3>
    </div>
  )
}
