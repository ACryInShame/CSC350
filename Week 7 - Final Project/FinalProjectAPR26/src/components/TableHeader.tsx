
type TableHeaderProps = {
    Label: string;
    SortField: "ID" | "Name" | "Genre" | "PlayTime" | "Image";
    SortOrder: string;
    OnSort: Function;
};


export default function TableHeader ({ Label, SortField, SortOrder, OnSort  }:TableHeaderProps)
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