

import { useState } from "react";
import GameIcon from "../assets/Controller.jpg"

//Variable type of games (acts similar to a struct)
type Game = {
    GameName: string,
    Genre: String,
    Playtime: String
};

//filling a game form
export default function GameForm() {
    //hold data of current game being entered
    const [GameName, setGameName] = useState('');
    const [Genre, setGenre] = useState('');
    const [Playtime, setPlaytime] = useState('');

    //holds list of games
    const [Games, setGames] = useState<Game[]>([]);

    //handles the sumbit button being pressed
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); //prevent page from refreashing
        if (!GameName || !Genre || !Playtime)
            return 0; // do nothing if form is not filled out

        const NewGame: Game = { GameName, Genre, Playtime };

        setGames([...Games/*Current Game list*/, NewGame]); //spread operator to add to the current list
        ClearForm();

    }

    const ClearForm = () => {
        setGameName(''); //also clear out html input
        setGenre('');
        setPlaytime('');
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
                                        onChange={(e) => setGameName(e.target.value)}
                                        value={GameName}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3 col-4 bg-light">
                                    <label htmlFor="Genre" className="m-3 col-form-label">Game Genre</label>
                                    <input id="Genre" name="Genre" type="text" required
                                        onChange={(e) => setGenre(e.target.value)}
                                        value={Genre}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3 col-4 bg-light">
                                    <label htmlFor="Playtime" className="m-3 col-form-label">Game Playtime</label>
                                    <input id="Playtime" name="Playtime" type="text" required
                                        onChange={(e) => setPlaytime(e.target.value)}
                                        value={Playtime}
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
                                </tr>
                            </thead>
                            <tbody>
                                {Games.map((Game, index) => (
                                    <tr key={index}>
                                        <td>{Game.GameName}</td>
                                        <td>{Game.Genre}</td>
                                        <td>{Game.Playtime}</td>
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