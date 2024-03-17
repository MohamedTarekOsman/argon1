/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { createTask } from '../../Redux/actions/taskActions'
import notify from '../../notification/notify'
import { ToastContainer } from 'react-toastify'
import flatpickr from 'flatpickr'
import Swal from 'sweetalert2'
import SideNavbar from '../../components/SideNavbar'


const NewTaskPage = () => {
  const dispatch=useDispatch();
  
  function handleSubmit(date) {
    dispatch(createTask({
      "code":date.code,
      "department":date.department,
      "subject":date.subject,
      "company_name":date.company_name,
      "userId":date.userId,
      "comment":date.comment,
      "registration_date":selectedDate
    }))
    notify('تم اضافة التاسك بنجاح','success')
    Swal.fire({
      title:'good job'
    })
    setTimeout(()=>{
      window.location.reload('false')
    },2000)
  }

  let validationSchema = Yup.object({
    // registration_date: Yup.string().required('is Required'),
    company_name: Yup.string().required('is Required'),
    code: Yup.string().required('is Required'),
    department: Yup.string().required('is Required'),
    subject: Yup.string().required('is Required'),
    comment: Yup.string().required('is Required'),
    // status: Yup.string().required('is Required'),
    userId: Yup.string().required('is Required'),
    // completed: Yup.string().required('is Required'),
  })




  let Formik = useFormik({
    initialValues: {
      registration_date: "",
      company_name: "",
      code: "",
      department: "",
      subject: "",
      comment: "",
      // status: "",
      userId: "",
      // completed: "",
    },
    onSubmit: handleSubmit,
    validationSchema
  })

  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const flatpickrInstance = flatpickr('#registration_date', {
      dateFormat: 'Y-m-d',
      onChange: (selectedDates, dateString, instance) => {
        setSelectedDate(dateString);
        Formik.setFieldValue('registration_date', dateString);
      },
    });

    return () => {
      flatpickrInstance.destroy();
    };
  }, []);
  return (
    <>
      <SideNavbar/>
      <div className='container' style={{ marginLeft: '20%', width: '70%',marginTop:'10vh',height:'95vh',backgroundColor:'#F0F3FF' }}>
        <form  onSubmit={Formik.handleSubmit}>

        <div className='mb-3 rtl'>
      <label htmlFor='registration_date'>تاريخ التسجيل</label>
      <input
        onBlur={Formik.handleBlur}
        className='form-control'
        name='registration_date'
        type='text'
        id='registration_date'
        readOnly
      />
      {(Formik.errors.registration_date && Formik.touched.registration_date) ? (
        <div className='alert alert-danger'>{Formik.errors.registration_date}</div>
      ) : ('')}
    </div>



          <div className='mb-3'>
            <label htmlFor='company_name' style={{float:'right'}}>اسم الشركة</label>
            <input onBlur={Formik.handleBlur} onChange={Formik.handleChange} className='form-control  'style={{direction:'rtl'}} name='company_name' type='text' id='company_name'></input>
            {(Formik.errors.company_name && Formik.touched.company_name) ? <div className='alert alert-danger'>{Formik.errors.company_name}</div>
           :""}
          </div>


          <div className='mb-3'>
            <label htmlFor='code' style={{float:'right'}}>الكود</label>
            <input onBlur={Formik.handleBlur} onChange={Formik.handleChange} className='form-control  ' name='code' type='text' id='code'></input>
            {(Formik.errors.code && Formik.touched.code) ? <div className='alert alert-danger'>{Formik.errors.code}</div>
           :""}
            
          </div>

          <div className='mb-3'>
            <label htmlFor='department ' style={{float:'right'}}>القسم</label>
            <input onBlur={Formik.handleBlur} onChange={Formik.handleChange} className='form-control  ' name='department' type='text' id='department'></input>
            {(Formik.errors.department && Formik.touched.department) ? <div className='alert alert-danger'>{Formik.errors.department}</div>
           :""}
          </div>


          <div className='mb-3'>
            <label htmlFor='subject' style={{float:'right'}}>العنوان</label>
            <input onBlur={Formik.handleBlur} onChange={Formik.handleChange} className='form-control  ' name='subject' type='text' id='subject'></input>
            {(Formik.errors.subject && Formik.touched.subject) ? <div className='alert alert-danger'>{Formik.errors.subject}</div>
           :""}
          </div>


          <div className='mb-3'>
            <label htmlFor='comment' style={{float:'right'}}>تعليق</label>
            <input onBlur={Formik.handleBlur} onChange={Formik.handleChange} className='form-control  ' name='comment' type='text' id='comment'></input>

            {(Formik.errors.comment  && Formik.touched.comment)? <div className='alert alert-danger'>{Formik.errors.comment}</div>
           :""}
          </div>

          {/* <div className='mb-3'>
            <label htmlFor='status'>الحالة</label>
            <input onBlur={Formik.handleBlur} onChange={Formik.handleChange} className='form-control  ' name='status' type='text' id='status'></input>
            {(Formik.errors.status  && Formik.touched.status)? <div className='alert alert-danger'>{Formik.errors.status}</div>
           :""}
          </div> */}

          <div className='mb-3'>
            <label htmlFor='userId' style={{float:'right'}}>اسم المستخدم</label>
            <input onBlur={Formik.handleBlur} onChange={Formik.handleChange} className='form-control  ' name='userId' type='text' id='userId'></input>
            {(Formik.errors.userId && Formik.touched.userId) ? <div className='alert alert-danger'>{Formik.errors.userId}</div>
           :""}
          </div>


          {/* <div className='mb-3'>
            <label htmlFor='completed'>مكتمل ؟ </label>
            <input onBlur={Formik.handleBlur} onChange={Formik.handleChange} className='form-control  ' name='completed' type='text' id='completed'></input>
            {(Formik.errors.completed && Formik.touched.completed) ? <div className='alert alert-danger'>{Formik.errors.completed}</div>
           :""}
          </div> */}

          <button type='submit' className='btn btn-success mt-3' style={{float:'right'}}>حفظ المعلومات</button>
        </form>
      </div>
      <ToastContainer/>
    </>
  )
}

export default NewTaskPage