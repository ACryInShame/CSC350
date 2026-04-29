// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
// import Info from '../pages/Info'
// import Inventor from '../pages/Inventor'

export default function Routing()
{
    return(
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/Info" element={<Info/>}/>
            <Route path="/Inventor" element={<Inventor/>}/>
            <Route path="/Inventor" element={<Inventor/>}/> */}
        </Routes>
    </div>
    )
}