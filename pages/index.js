import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from './landingPage'
import ComerceData from '../components/ComerceData'


export default function Home() {
  return (
    <>
        <LandingPage/>
          <ComerceData/>
          </>
  )
}
