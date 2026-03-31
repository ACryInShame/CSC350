
import './App.css'
import { useState } from 'react'
import DataList from '../src/components/DataList'
import TableHeader from './components/TableHeader';


function App(){
  const [Search, SetSearch] = useState(""); //Search String
  
  //sorting if a header is clicked
  const [SortField, SetSortField] = useState(""); 
  const [SortOrder, SetSortOrder] = useState("asc");

  //handles the sorting based on the variables feild and sort order
  const handleSort = (field) => {
    if (field === SortField) {
      SetSortOrder(SortOrder === "asc" ? "desc" : "asc"); //toggles between ascending and descending if header is clicked again
    } else {
      SetSortField(field);
      SetSortOrder("asc");
    }
  };

  return (
    <>
      {/* ----------------Page Top--------------------------- */}
      <div className="bg-dark text-white text-center p-4 rounded mb-4">
        <h1 className="text-center my-4 fw-bold text-primary"> Search for an Animal</h1>

        <input type="text" placeholder='Search for an Animal'
          value={Search}
          onChange={(Event)=>SetSearch(Event.target.value)}
            className="form-control shadow-sm"/>
      </div>
      {/* ----------------Page Body--------------------------- */}      
      <div className="container">
        <table className='table table-stripped table-hover'>
          {/* ----------------Table Head--------------------------- */}  
          <thead>
            <tr>
              <TableHeader
                Label={"Name"}
                SortField={SortField} 
                SortOrder={SortOrder}
                OnSort={handleSort} //pass as a prop
              />
              <TableHeader
                Label={"Animal"}
                SortField={SortField} 
                SortOrder={SortOrder}
                OnSort={handleSort} //pass as a prop
              />
              <TableHeader
                Label={"Specialty"}
                SortField={SortField} 
                SortOrder={SortOrder}
                OnSort={handleSort} //pass as a prop
              />
              <th className='text-start' >Image</th>
            </tr>
          </thead>
          {/* ----------------Table Body--------------------------- */}  
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