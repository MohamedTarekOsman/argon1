/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../Redux/actions/usersAction'
import SideNavbar from '../../components/SideNavbar'
import TopNavbar from '../../components/TopNavbar'

const AllUsers = () => {
    const [input,setInput]=useState("")
    function search(){
    //var seachval=input.toLowerCase()
    }  
    const dispatch=useDispatch()
    const allusers=useSelector(state=>state.userReducer.user)

    useEffect(()=>{
      const getUsers=async()=>{
        await dispatch(getAllUsers())
      }
      getUsers()
      if(allusers.data){
        console.log(allusers)
      }
      
    },[])
  return (
    <>
        <SideNavbar/>
        <div className="main-content" id="panel">
            <TopNavbar/>
            <div className="container my-5">
            <input onKeyUp={search} type='text' value={input} onChange={(e)=>{setInput(e.target.value)}} className="form-control w-25 mb-3" placeholder="Search...."/>
            <table className="table table-dark table-striped table-bordered  ">
                <thead className=''>
                    <th className="bg-dark">Username</th>
                    <th className="bg-dark">Reviewed</th>
                    <th className="bg-dark">Role</th>
                    <th className="bg-dark">Seen</th>
                    <th className="bg-dark">Created date</th>
                </thead>
                <tbody id="tableData">
                {
                    allusers.data?allusers.data.map((item,index)=><tr>
                    <td>{item.username}</td>
                    <td className="">{item.reviewed}</td>
                    <td className="">{item.role}</td>
                    <td className="">{item.seen}</td>
                    <td className="">{item.createdAt}</td>
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

export default AllUsers