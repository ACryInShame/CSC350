export default function TableHeader ({ Label, SortField, SortOrder, OnSort  })
{
    //converted header tages over to component
    //replaced hardcoded labels with variabled and now accepts the handleSort as a prop
    return (
        <th  className={`text-start cursor-pointer ${SortField === Label ? 
        "table-primary" : ""}`}
        onClick={() => OnSort(Label)}>
            {Label}
            {SortField === Label && (SortOrder === "asc" ? "▲" : "▼")}
        </th>
    )
}