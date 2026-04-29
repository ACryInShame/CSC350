// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project

 import Header from "../components/Header"
// import Image from "../components/Image"
// import UELogo from "../assets/UnrealEnginLogo.png"
// import FMPic from "../assets/FrontMissions.png"
// import UnityLogo from "../assets/UnityLogo.png"

import '../App.css'
import { useState } from 'react'
import GameList from '../components/GameList'
import TableHeader from '../components/TableHeader';

export default function FavoriteGames()
{
    // return(
    //     <div>
    //         <Header text="Home"/>
    //         <div className="row m-3 align-items-start">
    //             <div className="col-md-12 text-black shadow">
    //                 Since my days playing mario on the Nintedo Entertainment System (NES) I have always wanted to make and publish my own games.
    //                 Over the years I started to learn how hard such a goal truly was.
    //             </div>
    //         </div>
    //         <div className="row m-3 align-items-start">
    //             <div className="col-md-4 text-black shadow">
    //                     <Image src={UnityLogo} alt="Unity Logo" className="img-fluid rounded m-3 w-50"/>
    //                     <p>
    //                         I started using the unity Engine and began to take my knowledge from school and using it to write code in C# and
    //                         learn a lot about how games loops work. I contunied to work with Unity until the Unity update of 2024, where they
    //                         changed their pricing model making it near impossible to work with their platform. I had then switched to Unreal Engine.
    //                         The Unity team had walked back their changes but I had already spent the time to switch that I decided not to go back.
    //                     </p>
    //             </div>
    //         </div>
    //     </div>
    // )

    const [Search, SetSearch] = useState<string>(""); //Search String
  
    //sorting if a header is clicked
    const [SortField, SetSortField] = useState<"ID" | "Name" | "Genre" | "PlayTime" | "Image">("Name"); 
    const [SortOrder, SetSortOrder] = useState("asc");

    //handles the sorting based on the variables feild and sort order
    const handleSort = (field : "ID" | "Name" | "Genre" | "PlayTime" | "Image") => {
        if (field === SortField) {
        SetSortOrder(SortOrder === "asc" ? "desc" : "asc"); //toggles between ascending and descending if header is clicked again
        } else {
        SetSortField(field);
        SetSortOrder("asc");
        }
    };

    return (
        <>
        <Header text="Favorite Games"/>
        {/* ----------------Page Top--------------------------- */}
        <div className="bg-dark text-white text-center p-4 rounded mb-4">
            <input type="text" placeholder='Search for an Game'
            value={Search}
            onChange={(Event)=>SetSearch(Event.target.value)}
                className="form-control shadow-sm"/>
        </div>
        {/* ----------------Page Body--------------------------- */}      
        <div className="container">
            <table className='table table-stripped table-hover'>
            {/* ----------------Table Head--------------------------- */}  
            <thead>
                <tr>
                <th className='text-start' >Image</th>
                <TableHeader
                    Label={"Name"}
                    SortField={SortField} 
                    SortOrder={SortOrder}
                    OnSort={handleSort} //pass as a prop
                />
                <TableHeader
                    Label={"Genre"}
                    SortField={SortField} 
                    SortOrder={SortOrder}
                    OnSort={handleSort} //pass as a prop
                />
                <TableHeader
                    Label={"PlayTime"}
                    SortField={SortField} 
                    SortOrder={SortOrder}
                    OnSort={handleSort} //pass as a prop
                />
                </tr>
            </thead>
            {/* ----------------Table Body--------------------------- */}  
            <tbody>
                <GameList 
                SearchInput={Search}
                sortField={SortField} 
                sortOrder={SortOrder} 

                />
            </tbody>
            </table>
        </div>
        </>
    )
}