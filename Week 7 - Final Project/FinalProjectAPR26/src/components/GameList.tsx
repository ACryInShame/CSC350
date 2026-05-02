// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project

import { Games } from "../assets/data";

type GameListProps = {
    SearchInput: string;
    sortField: "ID" | "Name" | "Genre" | "PlayTime" | "Image";
    sortOrder: string;
};

export default function GameList({ SearchInput, sortField, sortOrder } : GameListProps) 
{

    // create filtered list based on search but check each game name
    // Games are pulled from data
    const filtered  = Games.filter(Game =>
        SearchInput === "" ||
        Game.Name.toLowerCase().includes(SearchInput.toLowerCase()) ||
        Game.Genre.toLowerCase().includes(SearchInput.toLowerCase()) ||
        Game.PlayTime.toString().toLowerCase().includes(SearchInput.toLowerCase())
    );


    // create array copy for this function and run it through sort.
    // compares each item in the array to each other to find the order to put the items in
    const sorted = [...filtered].sort
    ( 
        //compare 2 items (a,b) at a time 
        (a, b) => 
        {
            if (!sortField) return 0; //if no sort feild then not sorting.

            // get value based on sort field and set both to lowercase for easy compare
            // Also checks to ensure data is avilable to pull
            const ValueA : string = a[sortField]?.toString().toLowerCase() || "";
            const ValueB : string = b[sortField]?.toString().toLowerCase() || "";

                // Handle numeric sorting
            if (sortField === "PlayTime") 
            {
                const NumA = Number(ValueA);
                const NumB = Number(ValueB);

                //check which value if higher and return 1 or -1 to move ahead or behind
                if (NumA < NumB) return sortOrder === "asc" ? -1 : 1;
                if (NumA > NumB) return sortOrder === "asc" ? 1 : -1;
            }

            //check which value if higher and return 1 or -1 to move ahead or behind
            if (ValueA < ValueB) return sortOrder === "asc" ? -1 : 1;
            if (ValueA > ValueB) return sortOrder === "asc" ? 1 : -1;
            return 0;

            //Sort wants -1 if A comes before B, 1 if B comes before A, and 0 if no changes
        }
    );

    //create row items with information pulled from Data file
    //Calls sorted which called filtered to get a fully filtered
    //and sorted list and then maps it to a table row.
    const rowItems = sorted.map(Game =>
        <tr key={Game.ID}>
            <td className="text-start">
                <img src={Game.Image} alt={Game.Name} width="50" />
            </td>
            <td className="text-start">{Game.Name}</td>
            <td className="text-start">{Game.Genre}</td>
            <td className="text-start">{Game.PlayTime}</td>
        </tr>
    );

    return rowItems;
}