import {Animals} from "../assets/data";

export default function DataList({ value, sortField, sortOrder }) 
{

    //create filtered list based on search but check each value for data
    const filtered = Animals.filter(Animal =>
        value === "" ||
        Animal.Name.toLowerCase().includes(value.toLowerCase()) ||
        Animal.Animal.toLowerCase().includes(value.toLowerCase()) ||
        Animal.Specialty.toLowerCase().includes(value.toLowerCase())
    );

    const sorted = [...filtered].sort( //create array copy for this function and run it through sort.
        (a, b) => {  //compare 2 items (a,b) at a time 
        if (!sortField) return 0; //if no sort feild then not sorting.

        // get value based on sort field and set both to lowercase for easy compare
        const ValueA = a[sortField].toLowerCase();
        const ValueB = b[sortField].toLowerCase();

        //check which value if higher and return accordingly
        if (ValueA < ValueB) return sortOrder === "asc" ? -1 : 1;
        if (ValueA > ValueB) return sortOrder === "asc" ? 1 : -1;
        return 0;

        //Sort wants -1 if A comes before B, 1 if B comes before A, and 0 if no changes
        }
    );

    //create row items with information pulled from Data file
    //Calls sorted which called filtered to get a fully filtered
    //and sorted list and then maps it to a table row.
    const rowItems = sorted.map(Animal =>
        <tr key={Animal.ID}>
            <td className="text-start">{Animal.Name}</td>
            <td className="text-start">{Animal.Animal}</td>
            <td className="text-start">{Animal.Specialty}</td>
            <td className="text-end">
                <img src={Animal.Image} alt={Animal.Name} width="50" />
            </td>
        </tr>
    );

    return rowItems;
}