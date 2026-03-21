
// When the page loads, have JavaScript loop through a JSON object
//  and populate a Bootstrap table with some of your favorite 
// singers, their best songs, and other details, such as 
// date of birth or hometown.  Have at least four rows 
// and three columns.
// 

// JSON object as per JavaScript Object Notation (JSON) in Week 2 Resources
const Data = 
[
  {
    Singer: "Chuck Noris",
    BestSong: "Eye of the Ranger",
    DateOfBirth: "10 March 1940",
    Image: "IMG/Chuck.jpg"
  },
  {
    Singer: "Christina Aguilera",
    BestSong: "Genie in a Bottle",
    DateOfBirth: "18 December 1980",
    Image: "IMG/Christina.jpg"
  },
  {
    Singer: "Justin Timberlake",
    BestSong: "Keep Going Up",
    DateOfBirth: "31 January 1981",
    Image: "IMG/Justin.webp"
  },
  {
    Singer: "John Mayer",
    BestSong: "The Heart of Life",
    DateOfBirth: "16 October 1977",
    Image: "IMG/John.png"
  }
];

// variables for easy access
const Table = document.getElementById("TableBody");
const TableImage = document.getElementById("SingerImage");
function LoadData ()
{
    // loop through each singer
    Data.forEach(person => 
    {
        // create a row for the table
        const row = document.createElement("tr");

        // fill in row element with singer data
        row.innerHTML = 
        `
            <tr>
            <td>${person.Singer}</td>
            <td>${person.BestSong}</td>
            <td>${person.DateOfBirth}</td>
            </tr>
        `;

        // add an event to the element to change image on hover over (uses mouse enter so image only changes when a new singer is hovered over)
        row.addEventListener("mouseenter", () => 
        {
            TableImage.src = person.Image;
        });

        //add row to table
        Table.appendChild(row);
    });
}

LoadData ();
//Upload your website files and folders to your GitHub repository
// Zip the file and submit it via the assignment link, and also include your GitHub link in the comments


