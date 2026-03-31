import {Animals} from "../assets/data";

export default function DataList({value})
{
    const AnimalList = Animals.filter(Animal => 
        value === "" ||
        Animal.Name.toLowerCase().includes(value.toLowerCase()) ||
        Animal.Animal.toLowerCase().includes(value.toLowerCase()) ||
        Animal.Specialty.toLowerCase().includes(value.toLowerCase())
    );

    const rowItems=AnimalList.map(Animal=>
        <tr key={Animal.ID}>
            <td className="text-start">
                {Animal.Name}
            </td>
            <td className="text-start">
                {Animal.Animal}
            </td>
            <td className="text-start">
                {Animal.Specialty}
            </td>
            <td className="text-end">
                {Animal.Image}
            </td>
        </tr>
    )
    return rowItems;
}