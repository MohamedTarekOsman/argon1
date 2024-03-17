/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks } from '../../Redux/actions/taskActions'
import SideNavbar from '../../components/SideNavbar'
import TopNavbar from '../../components/TopNavbar'

const AllTasks = () => {
    const [input,setInput]=useState("")
    function search(){
    // var seachval=input.toLowerCase()
    }  
    const dispatch=useDispatch()
    const alltasks=useSelector(state=>state.taskReducer.task)

    useEffect(()=>{
      const getTasks=async()=>{
        await dispatch(getAllTasks())
      }
      getTasks()
    },[])
    return (
        <>
            <SideNavbar/>
            <div className="main-content" id="panel">
            <TopNavbar/>
            <div className="container my-5" >
            <input onKeyUp={search} type='text' value={input} onChange={(e)=>{setInput(e.target.value)}} className="form-control w-25 mb-3" placeholder="Search...."/>
            <table className="table table-dark table-striped table-bordered  ">
                <thead className=''>
                    <th className="bg-dark">Company Name</th>
                    <th className="bg-dark">Code</th>
                    <th className="bg-dark">Department</th>
                    <th className="bg-dark">Subject</th>
                    <th className="bg-dark">Comment</th>
                </thead>
                <tbody id="tableData">
                  {
                    alltasks.data?alltasks.data.map((item,index)=><tr>
                    <td>{item.company_name}</td>
                    <td className="">{item.code}</td>
                    <td className="">{item.department}</td>
                    <td className="">{item.subject}</td>
                    <td className="">{item.comment}</td>
                </tr>):""
                  }
                    
        </tbody>
        </table>
    
        {/* <nav aria-label="Page navigation example ">
      <ul className="pagination justify-content-center my-5">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item"><a className="page-link">1</a></li>
        <li className="page-item"><a className="page-link" >2</a></li>
        <li className="page-item"><a className="page-link"  >3</a></li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav> */}
            </div>
            </div>
            
        </>
      )
}

export default AllTasks