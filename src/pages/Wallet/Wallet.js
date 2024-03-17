/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import SideNavbar from '../../components/SideNavbar'
import TopNavbar from '../../components/TopNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWallet } from '../../Redux/actions/walletAction'
const Wallet = () => {
    const dispatch=useDispatch()
    const wallet=useSelector(state=>state.walletReducer.wallet)
  useEffect(()=>{
    const getWallets=async()=>{
    await dispatch(getAllWallet())
    }
    getWallets()
  },[])
  
  return (
    <> 
    <SideNavbar/>
    <div className="main-content" id="panel">
        <TopNavbar/>
        <div className='container py-4'>
        <div className="row align-items-center ">
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
        
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">إجمالي المهام</h5>
                      <span className="h3 font-weight-bold mb-0">7</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                        <i className="ni ni-active-40"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
              
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">مهام لم ترسل</h5>
                      <span className="h3 font-weight-bold mb-0">2</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                        <i className="ni ni-chart-pie-35"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
               
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-xs text-muted mb-0 ">مهام في انظار القبول او الرفض</h5>
                      <span className="h3 font-weight-bold mb-0">5</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                        <i className="ni ni-money-coins"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
       
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">المهام المكتمله</h5>
                      <span className="h3 font-weight-bold mb-0">6</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                        <i className="ni ni-chart-bar-32"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
        </div>
        <div className="container my-5 bg-white">

        <div class="sec4">
             <div class="sec2 ms-2">
                 <p>entries per page</p>
             </div>
             <div class="sec5 ">
                 <h5 >اخر المبالغ المستلمة</h5>
                 <input class="form-control my-4 " type="text" name=" first name" placeholder="search" required />
             </div>
        </div>

        <table className="table table-dark table-striped table-bordered  text-center">
            <thead className=''>
             <th className="bg-dark">المرسل</th>
             <th className="bg-dark">المبلغ</th>
             <th className="bg-dark">التفاصيل</th>
             <th className="bg-dark">التاريخ</th>
             <th className="bg-dark">الموضوع</th>
                
            </thead>
            <tbody id="tableData">
                <tr>
                    <td>2345</td>
                    <td className="">12/2/2333</td>
                    <td className="">

    اول موضوع
    </td>
    <td className="">5</td>
    <td className="">5</td>



    </tr>





    </tbody>
        </table>
    </div>
 
<div className='container bg-white'>
<div class="sec4">
             <div class="sec2 ms-2">
                 <p>entries per page</p>
             </div>
             <div class="sec5">
                 <h5 >اخر المبالغ المصروفة</h5>
                 <input class="form-control my-4 " type="text" name=" first name" placeholder="search" required />
             </div>
         </div>

 <table className="table table-dark table-striped table-bordered  text-center">
         <thead className=''>
             <th className="bg-dark">المستلم</th>
             <th className="bg-dark">المرسل</th>
             <th className="bg-dark">المبلغ</th>
             <th className="bg-dark">التفاصيل</th>
             <th className="bg-dark">التاريخ</th>
             <th className="bg-dark">الموضوع</th>
             <th className="bg-dark">الكود</th>
             
         </thead>
         <tbody id="tableData">
         <tr>
                 <td> <input class="form-control  " type="text" name=" first name" placeholder="بحث بمصاريف بدون ايصال" required /></td>
                 <td className="">  <input class="form-control " type="text" name=" first name" placeholder="بحث بمصاريف بايصال" required /></td>
                 <td className=""> <input class="form-control  " type="text" name=" first name" placeholder="بحث بالانتقالات" required /></td>
                 <td className="">

                 <input class="form-control  " type="text" name=" first name" placeholder="بحث بالخطوه" required />
 </td>
 <td className=""> <input class="form-control   " type="text" name=" first name" placeholder="بحث بتاريخ " required /></td>
 <td className=""> <input class="form-control  " type="text" name=" first name" placeholder="بحث  بالموضوع" required /></td>
 <td className=""><input class="form-control   " type="text" name=" first name" placeholder="بحث بالكود " required /></td>




 </tr>
             <tr>
                 <td> 2345</td>
                 <td className="">2345</td>
                 <td className="">2345</td>
                 <td className="">

اول خطوة
 </td>
 <td className="">3/7/2023</td>
 <td className="">اول موضوع</td>
 <td className="">6</td>
 </tr>
 </tbody>
 </table>
 </div>
    </div>

</>
  )
}

export default Wallet