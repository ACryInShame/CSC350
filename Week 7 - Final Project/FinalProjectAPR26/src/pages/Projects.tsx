// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project
import Header from "../components/Header"
import Image from "../components/Image"
import UsedImage from "../assets/Controller.jpg"


export default function Contact()
{
    return(
        <div>
            <Header text="Projects"/>
            <div className="row m-3 align-items-start">
                <Image src={UsedImage} alt="A Picture of Tim Sweeney"/>
                <div className="col-md-6 text-black">
                    <p>
                        Timothy Dean Sweeney (born 1970) is an American video game
                        programmer and businessman. He is the founder and CEO of Epic Games, 
                        and the creator of Unreal Engine, a game development platform.
                    </p>
                        <h2>Early life</h2>
                    <p>
                        Sweeney was raised in Potomac, Maryland, the youngest of three brothers. 
                        At a young age, he became interested in tinkering with mechanical and electrical devices, 
                        and stated he had taken apart a lawnmower as early as five or six, and later built his own go-kart.
                        He became interested in arcade games when they began to become popular in the late 1970s, 
                        knowing that like the mechanical devices he took apart and repaired, there were those that had
                        programmed the games in the machines. Though the family got an Atari 2600, Sweeney was not as 
                        interested in the games for that, outside of Adventure, and later said he had not played many
                         video games in his life and very few to completion.
                    </p>
                </div>
            </div>
        </div>
    )
}