// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project
import Header from "../components/Header"
import Image from "../components/Image"
import UELogo from "../assets/UnrealEnginLogo.png"
import FMPic from "../assets/FrontMissions.png"
import UnityLogo from "../assets/UnityLogo.png"


export default function Home()
{
    return(
        <div>
            <Header text="Home"/>
            <div className="row m-3 align-items-start">
                <div className="col-md-12 text-black shadow">
                    Since my days playing mario on the Nintedo Entertainment System (NES) I have always wanted to make and publish my own games.
                    Over the years I started to learn how hard such a goal truly was.
                </div>
            </div>
            <div className="row m-3 align-items-start">
                <div className="col-md-4 text-black shadow">
                        <Image src={UnityLogo} alt="Unity Logo" className="img-fluid rounded m-3 w-50"/>
                        <p>
                            I started using the unity Engine and began to take my knowledge from school and using it to write code in C# and
                            learn a lot about how games loops work. I contunied to work with Unity until the Unity update of 2024, where they
                            changed their pricing model making it near impossible to work with their platform. I had then switched to Unreal Engine.
                            The Unity team had walked back their changes but I had already spent the time to switch that I decided not to go back.
                        </p>
                </div>
                <div className="col-md-4 text-black shadow">
                    <Image src={UELogo} alt="Unreal Engine Logo" className="img-fluid rounded m-3 w-50"/>
                    <p>
                        Unreal Engine (UE) much like Unity was a well known game engine. Unlike Unity however it focused on a more open environment for 
                        making games and had a visual scripting to make it easy to throw together game mechanics without having to know the entire 
                        Unreal Engine Documentation. Unreal Engine Uses the C++ programing lanaguage along side their visual scripting which makes it 
                        A powerful to throw togehter working models and minimal viable products (MVP) for testing and then switch to coding in C++ when 
                        ideas have been fleshed out.
                    </p>
                </div>
                <div className="col-md-4 text-black shadow">
                    <Image src={FMPic} alt="Scene from Front Mission Game" className="img-fluid rounded m-3 w-50"/>
                    <p>
                        My first major project that at the time of this writing is will in the works, is a turn based strategy game 
                        taking inperation from the mech battling series named Front Mission. These styles of games where you command a group of 
                        units to fight an adversary always intreged me and were a challenge I wanted to face. At this time the game is in a great starting 
                        where I am able to spawn units, battlefeilds, and even give the units move commands that have navigation through a Hex-Grid. Programing 
                        the A* pathfinding was so far the biggest hurdle I have had to overcome. Currently working on the action system has prove to be the next one.
                    </p>
                </div>
            </div>
        </div>
    )
}