// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import FavoriteGames from '../pages/FavoriteGames'
// import Info from '../pages/Info'
// import Inventor from '../pages/Inventor'

export default function Routing()
{
    return(
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/FavoriteGames" element={<FavoriteGames/>}/>
            {/* <Route path="/Inventor" element={<Inventor/>}/> */}
            {/* <Route path="/Inventor" element={<Inventor/>}/> */}
        </Routes>
    </div>
    )
}