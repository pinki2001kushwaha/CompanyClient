
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
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-12 focus:ring-indigo-500 h-12 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="color" className="block text-sm font-medium text-gray-700 ">
                Color
              </label>
              <input
                type="text"
                id="color"

                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 h-12  sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                id="category"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg  hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
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
