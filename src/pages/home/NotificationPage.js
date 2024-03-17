import React, { useEffect } from 'react'
import SideNavbar from '../../components/SideNavbar'
import TopNavbar from '../../components/TopNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotification } from '../../Redux/actions/notificationsAction'
const NotificationPage = () => {
  const dispatch=useDispatch()
  const notifications=useSelector(state=>state.notificationReducer.notification)
  useEffect(()=>{
    const getNotifications=async()=>{
      await dispatch(getAllNotification())
    }
    getNotifications()
  },[])
  if(notifications){
    console.log(notifications)
  }
  return (
       <>
       <SideNavbar/>
       <div className="main-content" id="panel">
            <TopNavbar/>
            <div  className="container mt-5 ">
    <div className='text-center my-4 '>
        <h2 className='text font-bold'>
            Alerts
        </h2>
    </div>
    <div  className="w-100 bg-white rtl">
          <div  className="alert alert-warning " role="alert">
          يوجد رسالة جديدة
          <button type="button" className="btn btn-outline-dark mx-4">عرض التفاصيل</button>
          </div>
          
          <div  className="alert alert-info" role="alert">
          
          يوجد رسالة جديدة
          <button type="button" className="btn btn-outline-dark mx-4">عرض التفاصيل</button>
          </div>
          <div  className="alert alert-danger" role="alert">
          يوجد رسالة جديدة
          <button type="button" className="btn btn-outline-dark mx-4">عرض التفاصيل</button>
          </div>
          <div  className="alert alert-success" role="alert">
          يوجد رسالة جديدة
          <button type="button" className="btn btn-outline-dark mx-4">عرض التفاصيل</button>
          </div>
          <div  className="alert alert-secondary" role="alert">
          يوجد رسالة جديدة
          <button type="button" className="btn btn-outline-dark mx-4">عرض التفاصيل</button>
          </div>
        </div>
        </div>
            </div>

        </>
  )
}

export default NotificationPage