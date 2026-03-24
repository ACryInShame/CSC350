import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Image from './components/Image'

function App() {
  let BaseWidth = 200;
  let BaseHeight = 300;

  return (
    <>
      <Image img_file={"Edd_n_Eddy_Banner.webp"} width="100%" height="200" alt="Banner for Ed Edd and Eddy"></Image>
      <><h1>Favorite Characters From Ed, Edd, and Eddy</h1></>
      <div>
          <Image img_file={"ed.1.webp"} width={BaseWidth} height={BaseHeight} alt="Picture of Ed from Ed Edd and Eddy"></Image>
          <Image img_file={"edd.1.webp"} width={BaseWidth} height={BaseHeight} alt="Picture of Double D from from Ed Edd and Eddy"></Image>
          <Image img_file={"eddy.webp"} width={BaseWidth} height={BaseHeight} alt="Pisture of Eddy from from Ed Edd and Eddy"></Image>
          <Image img_file={"Rolf.webp"} width={BaseWidth} height={BaseHeight} alt="Picture of Rolf from from Ed Edd and Eddy"></Image>
          <Image img_file={"Plank.webp"} width={BaseWidth} height={BaseHeight} alt="Picture of Plank from from Ed Edd and Eddy"></Image>
       </div>
    </>
  )
}

export default App
