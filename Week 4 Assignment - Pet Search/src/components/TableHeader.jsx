export default function TableHeader ({ Label, SortField, SortOrder, OnSort  })
{
    return (
        <th  className={`text-start cursor-pointer ${SortField === Label ? 
        "table-primary" : ""}`}
        onClick={() => OnSort(Label)}>
            {Label}
            {SortField === Label && (SortOrder === "asc" ? "▲" : "▼")}
        </th>
    )
}