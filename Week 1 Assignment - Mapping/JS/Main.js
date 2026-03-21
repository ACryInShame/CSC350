// Louis J D'Agusto : Week 1 Assignment - Mapping : Last Updated March 14th 2026 

(function () // prevent use of global variables as per rubric by using an IIFE (Immediately Invoked Function Expression)
{
    //Map and current add index
    const CountryList = new Map();
    let LastIndex = 0;

    const Input = document.getElementById("CountryInput"); //Input at top of page
    const CountryListDisplay = document.getElementById("CountryList"); //List in center of page

    //Events for Add and clear buttons
    document.getElementById("AddButton").addEventListener("click", Add);
    document.getElementById("ClearButton").addEventListener("click", Clear);

    //Adds items to the webpage list and map
    function Add ()
    {   
        //get input from user
        let InputVar = Input.value;

        // Test Input for value, if no value stop
        if (InputVar === "")
            return;

        // Test if Input already in Map, if found send warning and stop add
        if (CheckCountryValues(InputVar))
        {
            alert("Destination already on the list.");
            return;
        }

        //After checks passed, add to List and update current index.
        CountryList.set(LastIndex, InputVar);
        LastIndex++;

        //Add input to the display
        let NewCountry = document.createElement('li');
        NewCountry.textContent = Input.value;
        CountryListDisplay.appendChild(NewCountry);

        //reset input to blank
        Input.value = "";

        //Set focus back to input to allow user to input data quickly without reclicking Input
        Input.focus();
    }

    //Checks input against values in the country list
    function  CheckCountryValues(input)
    {
        //check each item in list against user input
        for (const value of CountryList.values())
        {
            if (input == value)
                return true;
        }

        return false;
    }

    // Clears list and Display
    function Clear ()
    {
        CountryList.clear();
        CountryListDisplay.innerHTML = "";
        LastIndex = 0;
    }
})();