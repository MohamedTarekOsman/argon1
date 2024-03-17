/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect } from 'react'
import { Calendar } from 'fullcalendar'

import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks } from '../../Redux/actions/taskActions'
import SideNavbar from '../../components/SideNavbar'
import TopNavbar from '../../components/TopNavbar'
const HomePage = () => {
  const dispatch=useDispatch()
  const alltasks=useSelector(state=>state.taskReducer.task)
  useEffect(() => {
    const getTasks=async()=>{
      await dispatch(getAllTasks())
    }
    getTasks()
    const calendarEl = document.getElementById('calendar')
    const calendar = new Calendar(calendarEl, {
      events: alltasks && alltasks.data ? 
          alltasks.data.map((item, index) => ({
              start: item.registration_date,
              title: item.code
          })) : [{
              start: '',
              title: ''
          }]
  });
    calendar.render()
  }, [alltasks, dispatch])
  



  return (
    <>
    <SideNavbar/>

    <main class="main-content position-relative border-radius-lg "> 
    <TopNavbar/>
    <div className="header bg-primary pb-6">
      <div className="container-fluid py-4">
        <div className="header-body">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
        
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">إجمالي المهام</h5>
                      <span className="h2 font-weight-bold mb-0">350,897</span>
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
                      <span className="h2 font-weight-bold mb-0">2,356</span>
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
                      <span className="h2 font-weight-bold mb-0">924</span>
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
                      <span className="h2 font-weight-bold mb-0">49,65%</span>
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
      </div>
    </div>
    <div className="container-fluid mt--6">
      <div className="row">
        <div className="col-xl-8">
          <div className="card p-3" id='calendar'>

          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <div className="card-header bg-transparent">
              <div className="row align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">الملاحظات</h6>
                  <h5 className="h3 mb-0">الملاحظات الخاصة</h5>
                </div>
              </div>
            </div>
            <div className="card-body">
    
              <div className="chart">
                <canvas id="chart-bars" className="chart-canvas"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-header border-0">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="mb-0">Page visits</h3>
                </div>
                <div className="col text-right">
                  <a href="#!" className="btn btn-sm btn-primary">See all</a>
                </div>
              </div>
            </div>
            <div className="table-responsive">
         
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      /argon/
                    </th>
                    <td>
                      4,569
                    </td>
                    <td>
                      340
                    </td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3"></i> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      /argon/index.html
                    </th>
                    <td>
                      3,985
                    </td>
                    <td>
                      319
                    </td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3"></i> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      /argon/charts.html
                    </th>
                    <td>
                      3,513
                    </td>
                    <td>
                      294
                    </td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3"></i> 36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      /argon/tables.html
                    </th>
                    <td>
                      2,050
                    </td>
                    <td>
                      147
                    </td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3"></i> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      /argon/profile.html
                    </th>
                    <td>
                      1,795
                    </td>
                    <td>
                      190
                    </td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3"></i> 46,53%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <div className="card-header border-0">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="mb-0">Social traffic</h3>
                </div>
                <div className="col text-right">
                  <a href="#!" className="btn btn-sm btn-primary">See all</a>
                </div>
              </div>
            </div>
            <div className="table-responsive">
           
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Referral</th>
                    <th scope="col">Visitors</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      Facebook
                    </th>
                    <td>
                      1,480
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Facebook
                    </th>
                    <td>
                      5,480
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Google
                    </th>
                    <td>
                      4,807
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-gradient-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Instagram
                    </th>
                    <td>
                      3,678
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">75%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      twitter
                    </th>
                    <td>
                      2,645
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">30%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-gradient-warning" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width:'30px'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    </>
  )
}

export default HomePage