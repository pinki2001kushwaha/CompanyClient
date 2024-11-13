
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {

const [data,setData]=useState([])
 
const apiget=async()=>{
  try{
let res=await axios.get("http://localhost:5000")
setData(res.data)
console.log(res.data)
  }catch(error){
    console.log(error)
  }
}

useEffect(()=>{
  apiget()
},[])
////////////--------post-----------////////
const [title,setTitle]=useState("")
const [description,setDescription]=useState("")
const [author,setAuthor]=useState("")

const postbooks=async()=>{
  let data = {
    title:title,
    description:description,
    author:author
};
let res = await axios.post("http://localhost:5000", data);
apiget()
}

async function deletedata(_id) {
  let res = await axios.delete(`http://localhost:5000/${_id}`);
  console.log(res);
  apiget();
}
  return (
    <>
      <div className="flex flex-col md:flex-row p-4 gap-4">
        {/* Table Section */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex-1">
          <br />
         
          <br />
          <br />
          <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 text-black">
            <thead className="text-xs text-white uppercase bg-black dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">Id</th>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Description</th>
                <th scope="col" className="px-6 py-3">Author</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item,index)=>{
                  return(
                  
              <tr className="border-b border-black text-black" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-blue-100"
                >
              {
                item._id
              }
                </th>
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">{item.description}</td>
                <td className='px-6 py-4'>{item.author}</td>
                <td className='px-6 py-4'><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => deletedata(item._id)}
                >Dark</button></td>
              </tr>
                
              )
            })
          }
            </tbody>
          </table>
        </div>
        <div className="flex-1 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Form Section</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Title
              </label>
              <input
                type="text"
                id="productName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 focus:ring-indigo-500 h-12 focus:border-indigo-500 sm:text-sm" required value={title} onChange={(e)=>setTitle(e.target.value)} 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="color" className="block text-sm font-medium text-gray-700 ">
              Description
              </label>
              <input
                type="text"
                id="color" 
                required
value={description} onChange={(e)=>setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 h-12  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                type="text"
                id="category"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12"
                value={author} onChange={(e)=>setAuthor(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg  hover:bg-blue-600 focus:ring-4 focus:ring-blue-300" onClick={()=>{postbooks()}}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
