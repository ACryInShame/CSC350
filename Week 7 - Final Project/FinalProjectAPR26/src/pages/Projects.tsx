// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project
import Header from "../components/Header"
import Image from "../components/Image"
import ControllerImage from "../assets/Controller.jpg"
import ViralImage from "../assets/Viral.png"
import DungeonImage from "../assets/Dungeon.jpg"
import GridImage from "../assets/Grid.png"


export default function Projects()
{
    return(
        <div>
            <Header text="Projects"/>
            <div className="col-md-12  align-items-start">
                <div className="col-md-4"/>
                <Image src={ControllerImage} alt="A Picture of Tim Sweeney" className="col-md-4 img-fluid rounded m-3"/>
                <div className="col-md-4"/>
                <Header text="EZList" className="display-6 text-center fw-bold text-primary"/>
                <div className="col-md-12 text-black">
                    <a href="https://github.com/ACryInShame/EZList">Link to Project Page</a>
                    <p className="text-start">
                        This is a iteration of lists that try to make the use of lists easier to understand by removing a lot of friction in their use. 
                        <br />Examples of List Friction: 
                        <br />∙ The use of Pop in order to get information from a list. 
                        <br />∙ The use of an interator to go through the list.
                        <br />∙ The need to use loops just to change around aspects of a list That returning the length of the list is different then returning the 
                        last point on a list.
                        <br />∙ The inability to use the [] operator
                        <br /><br />At This time, EZList is still in the works and not all functions are added.
                    </p>
                </div>
                <Header text="Viral" className="display-6 text-center fw-bold text-primary"/>
                <Image src={ViralImage} alt="A Picture of the Viral Game"/>
                <div className="col-md-12 text-black">
                    <a href="https://acryinshame.itch.io/viral">Link to Project Page</a>
                    <p className="text-start">
                        Viral is a simple top down survial game where you play as a viral infection and must survive in the human body.
                        <br />This is a concept game created for the 2025 GameDev.TV game jam. 
                        <br />It is very much unfinished and unpolished but the main concept of a game is there. Hope you enjoy the idea.
                    </p>
                </div>
                <Header text="Dungeon Generator" className="display-6 text-center fw-bold text-primary"/>
                <Image src={DungeonImage} alt="A Picture of the Dungeon Generator"/>
                <div className="col-md-12 text-black">
                    <a href="https://github.com/ACryInShame/DungeonGenerationAlt">Link to Project Page</a>
                    <p className="text-start">
                        Using the Unreal Engine bluwprints I was able to create a random dungeon generator that created a fully connected dungeon.
                        The generator asks the user how many rooms it wishes the dungeon to have and then creates the dungeon to fit.
                    </p>
                </div>
                <Header text="Grid Combat" className="display-6 text-center fw-bold text-primary"/>
                <Image src={GridImage} alt="A Picture of the Dungeon Generator"/>
                <div className="col-md-12 text-black">
                    <a href="https://github.com/ACryInShame/Grid">Link to Project Page</a>
                    <p className="text-start">
                        This is the largest project I've worked on. It is the bases for a grid combat system for a game, including different unit and terrain types,
                        Unit movement, path finding, targeting, and player turns.
                    </p>
                </div>
            </div>
        </div>
    )
}