import { Outlet } from "react-router"

import Header from "shared/components/Header"
import Footer from "shared/components/Footer"

import './rootLayout.css'


const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout