// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project

import { useState } from "react";
import GameIcon from "../assets/Controller.jpg"

//Variable type of games (acts similar to a struct)
type Game = {
    id: string,
    GameName: string,
    Genre: String,
    Playtime: String
};

//filling a game form
export default function GameForm() {
    //hold data of current game being entered
    const [AddNew, setAddNew] = useState({GameName:'',Genre:'',Playtime:''});
    const [CurrentID, setCurrentID] = useState(1);

    //holds list of games
    const [Games, setGames] = useState<Game[]>([]);

    //handles the sumbit button being pressed
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); //prevent page from refreashing
        if (!AddNew.GameName || !AddNew.Genre || !AddNew.Playtime)
            return 0; // do nothing if form is not filled out

        const NewGame: Game = {id:CurrentID.toString(), GameName:AddNew.GameName, Genre:AddNew.Genre, Playtime:AddNew.Playtime };
        setCurrentID(CurrentID+1);

        setGames([...Games/*Current Game list*/, NewGame]); //spread operator to add to the current list
        ClearForm();

    }

    const handleRemove = (IDToRemove: string) =>
    {
        setGames(prev =>
        prev.filter(game => game.id !== IDToRemove));
    }

    const ClearForm = () => {
        setAddNew({GameName:'',Genre:'',Playtime:''});
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form id="GameForm" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="mb-3 col-4 bg-light">
                                    <label htmlFor="GameName" className="m-3 col-form-label">Game Name</label>
                                    <input id="GameName" name="GameName" type="text" required
                                        onChange={(e) => setAddNew({GameName:e.target.value,Genre:AddNew.Genre,Playtime:AddNew.Playtime})}
                                        value={AddNew.GameName}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3 col-4 bg-light">
                                    <label htmlFor="Genre" className="m-3 col-form-label">Game Genre</label>
                                    <input id="Genre" name="Genre" type="text" required
                                        onChange={(e) => setAddNew({GameName:AddNew.GameName,Genre:e.target.value,Playtime:AddNew.Playtime})}
                                        value={AddNew.Genre}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3 col-4 bg-light">
                                    <label htmlFor="Playtime" className="m-3 col-form-label">Game Playtime</label>
                                    <input id="Playtime" name="Playtime" type="text" required
                                        onChange={(e) => setAddNew({GameName:AddNew.GameName,Genre:AddNew.Genre,Playtime:e.target.value})}
                                        value={AddNew.Playtime}
                                        className="form-control"
                                    />
                                </div>
                                <div className="row">
                                    <button className="btn-sm btn-success m-3" type="submit" form="GameForm">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={GameIcon} alt="Video game" className="img-thumbnail w-100" />
                    </div>
                    <div className="col-sm-8">
                        <table id="VideoGames" className="table table-striped text-start">
                            <thead>
                                <tr>
                                    <th>Game Name</th>
                                    <th>Game Genre</th>
                                    <th>Play Time</th>
                                    <th></th>  {/*column for delete button*/}
                                </tr>
                            </thead>
                            <tbody>
                                {Games.map((Game) => (
                                    <tr key={Game.id}>
                                        <td>{Game.GameName}</td>
                                        <td>{Game.Genre}</td>
                                        <td>{Game.Playtime}</td>
                                        <td
                                        className="btn btn-sm btn-dager"
                                        onClick={() => handleRemove(Game.id)} >
                                            X
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}