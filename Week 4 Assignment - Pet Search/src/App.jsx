
import './App.css'
import { useState } from 'react'
import DataList from '../src/components/DataList'


function App(){
  const [Search, SetSearch] = useState("");
  const [SortField, SetSortField] = useState("");
  const [SortOrder, SetSortOrder] = useState("asc");

  const handleSort = (field) => {
    if (field === SortField) {
      SetSortOrder(SortOrder === "asc" ? "desc" : "asc");
    } else {
      SetSortField(field);
      SetSortOrder("asc");
    }
  };

  return (
    <>
      <div className="bg-dark text-white text-center p-4 rounded mb-4">
        <h1 className="text-center my-4 fw-bold text-primary"> Search for an Animal</h1>
        <input type="text" placeholder='Search for an Animal'
          value={Search}
          onChange={(Event)=>SetSearch(Event.target.value)}
            className="form-control shadow-sm"
        />
      </div>
      <div className="container">
        <table className='table table-stripped table-hover'>
          <thead>
            <tr>
              <th  className={`text-start cursor-pointer ${SortField === "Name" ? 
              "table-primary" : ""}`}
              onClick={() => handleSort("Name")} >
                Name
                {SortField === "Name" && (SortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th className={`text-start cursor-pointer ${SortField === "Animal" ? 
              "table-primary" : ""}`}
                onClick={() => handleSort("Animal")} >
                Animal
                {SortField === "Animal" && (SortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th className={`text-start cursor-pointer ${SortField === "Specialty" ? 
              "table-primary" : ""}`}
              onClick={() => handleSort("Specialty")} >
                Specialty 
                {SortField === "Specialty" && (SortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th className='text-start' >Image</th>
            </tr>
          </thead>
          <tbody>
            <DataList 
              value={Search}
              sortField={SortField} 
              sortOrder={SortOrder} 
            />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App