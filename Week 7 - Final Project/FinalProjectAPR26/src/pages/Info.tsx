// Louis J D'Agusto
// April 21st 2026
// Week 7 - Final Project
import Header from "../components/Header"
import Image from "../components/Image"
import UsedImage from "../assets/Unreal Example.webp"

export default function Info()
{
    return(
        <div>
            <Header text="Information"/>
                <Image src={UsedImage} alt="Unreal Engine"/>
                <div className="col-md-6 text-black">
                    <p>
                        Unreal Engine is written in C++ and features a high degree of portability, 
                        supporting a wide range of desktop, mobiles, console, and virtual reality platforms.
                        The latest generation, Unreal Engine 5, was launched in April 2022 ({yearsSince(2022)} years ago).
                        Its source code is available on GitHub, and commercial use is granted based on a royalty model,
                        with Epic charging 5% of revenues over US $1 million, which is waived for games published 
                        exclusively on the Epic Games Store. Epic has incorporated features in the engine from acquired 
                        companies such as Quixel.                    
                    </p>
                </div>
        </div>
    )
}

//gets the number of years from the year given to current year
function yearsSince(year: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}