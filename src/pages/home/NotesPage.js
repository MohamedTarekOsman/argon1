import React from 'react'
import TopNavbar from '../../components/TopNavbar'
import SideNavbar from '../../components/SideNavbar'

const NotesPage = () => {
  return (
    <>
       <SideNavbar/>
       <div className="main-content" id="panel">
            <TopNavbar/>
            <div className="container mt-5 px-5">
    <div className="see w-100 bg-white ml-auto rtl">
    <div className="se m-3">
        <div className="ii w-50">
            <h3>الملاحظات</h3>
        </div>
        <div className="ii w-50"><button type="button" className="btn btn-outline-danger">حذف الملاحظات القديمة</button></div>
    </div>
    <div className="alert alert-secondary w-100" role="alert">
            لا يوجد ملاحظات 
      </div>
</div>
    </div>
            </div>

        </>
  )
}

export default NotesPage