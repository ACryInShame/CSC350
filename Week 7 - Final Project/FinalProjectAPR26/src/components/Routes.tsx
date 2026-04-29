// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import FavoriteGames from '../pages/FavoriteGames'
import RecentGames from '../pages/RecentGames'
import Contact from '../pages/Contact'

export default function Routing()
{
    return(
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/FavoriteGames" element={<FavoriteGames/>}/>
            <Route path="/RecentGames" element={<RecentGames/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </div>
    )
}