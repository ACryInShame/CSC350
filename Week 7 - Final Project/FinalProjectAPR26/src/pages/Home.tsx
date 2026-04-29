// Louis J D'Agusto
// April 21st 2026
// Week 6 Assignment - Navigation
import Header from "../components/Header"
import Image from "../components/Image"
import UsedImage from "../assets/Unreal_Engine_4_screenshot.png"


export default function Home()
{
    return(
        <div>
            <Header text="Home"/>
            <div className="row m-3 align-items-start">
                <Image src={UsedImage} alt="Unreal Engine"/>
                <div className="col-md-6 text-black">
                    <p>
                        Unreal Engine (UE) is a 3D computer graphics game engine developed by Epic Games, 
                        initially made for use in the 1998 first-person shooter video game Unreal. 
                        Originally developed for PC first-person shooters, 
                        it has since been used in a variety of genres of games and has been adopted by other industries, 
                        most notably the film and television industry.
                    </p>
                </div>
            </div>
        </div>
    )
}