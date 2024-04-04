import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './print.css'

export default function SalesExpenseData() {


  const [info, setInfo] = useState([]);
  const [pri, setPri] = useState({})


  function getData() {
    axios.get("https://65f060f8da8c6584131b8cac.mockapi.io/GetInfo")
      .then((res) => {
        setInfo(res.data);
        console.log(info);
      })
  }


  useEffect(() => {
    getData();
  }, [])

  console.log(info);

  function handlePrint(e, id) {
    e.preventDefault();
    for (let i = 0; i < info.length; i++) {
      if (info[i].id === id) {
        setPri(info[i]);
      }
    }
    console.log(pri);
  }

  return (


    <div className="row">
      <div className="col-lg-2">
      </div>
      <div class="col-lg-10" style={{ marginTop: "30px" }}>
        <div style={{ margintop: "58px" }}>
          <div class="container pt-4">
            <div class="container mt-2">
              <h2>Sale Expense Table</h2>
              <div class="card">
                <div class="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Customer Name</th>
                        <th>Mobile No</th>
                        <th>Total Price</th>
                        <th>Total GST</th>
                        <th>Overall Subtotal</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        info.map((eachdata, i) => {
                          return (
                            <tr>

                              <td>{eachdata.date}</td>
                              <td>{eachdata.name}</td>
                              <td>{eachdata.number}</td>
                              <td>{eachdata.totalprice}</td>
                              <td>{eachdata.totalgst}</td>
                              <td>{eachdata.Subtotal}</td>
                              <td>
                                {/* <button class="btn btn-primary me-2">Edit</button>
                                <button class="btn btn-danger ml-2">Delete</button> */}
                                <button class="btn btn-success ml-2" data-bs-toggle="modal" data-bs-target="#salesexpensedata" onClick={(e) => { handlePrint(e, eachdata.id) }}>Print</button>
                              </td>
                            </tr>
                          )
                        })
                      }

                    </tbody>
                  </table>
                  <div class="mt-3">
                    <strong>
                      <h5>Total Overall Subtotal: </h5>
                    </strong>
                  </div>
                </div>
              </div>
              <div class="modal fade " id="salesexpensedata" tabindex="-1">
                <div class=" modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Print Bill</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-md-12">

                          <div class="receipt-main col-lg-12 col-md-10 col-sm-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                            <div class="row">
                              <div class="receipt-header">
                                <div class="col-lg-6 ">
                                  <div class="receipt-left">
                                    <img class="img-responsive" alt="iamgurdeeposahan" src="https://bootdey.com/img/Content/avatar/avatar6.png" style={{ width: "71px", borderRadius: "43px" }} />
                                  </div>
                                </div>
                               
                              </div>
                              <div className="row">
                              <div class="col-lg-12  text-right">
                                  <div class="receipt-right">
                                    <h5>Company Name.</h5>
                                    <p>+1 3649-6589 <i class="fa fa-phone"></i></p>
                                    <p>company@gmail.com <i class="fa fa-envelope-o"></i></p>
                                    <p>USA <i class="fa fa-location-arrow"></i></p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="receipt-header receipt-header-mid">
                                <div class="col-xs-8 col-sm-8 col-md-8 text-left">
                                  <div class="receipt-right">
                                    <h5>{pri.name} </h5>
                                    <p><b>Mobile: {pri.number}</b> </p>

                                  </div>
                                </div>
                                <div class="col-xs-4 col-sm-4 col-md-4">
                                  <div class="receipt-left">
                                    <h3>INVOICE # 102</h3>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>GST</th>
                                    <th>Amount</th>

                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    pri.product?.map((eachdata, i) => {

                                      return (
                                        <tr key={i}>
                                          <td>{eachdata.select.name}</td>
                                          <td>{eachdata.quantity}</td>
                                          <td>{eachdata.select.gst}</td>
                                          <td>{eachdata.select.price}</td>
                                        </tr>
                                      )
                                    })

                                  }
                                  <tr>
                                    <td class="text-right"><h2><strong>Total: </strong></h2></td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-left text-danger"><h2><strong><i class="fa fa-inr"></i>{pri.Subtotal}</strong></h2></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div class="row">
                              <div class="receipt-header receipt-header-mid receipt-footer">
                                <div class="col-xs-8 col-sm-8 col-md-8 text-left">
                                  <div class="receipt-right">
                                    <p><b>Date :</b> {pri.date}</p>
                                    <h5 style={{ color: "rgb(140, 140, 140);" }}>Thanks for shopping.!</h5>
                                  </div>
                                </div>
                                <div class="col-xs-4 col-sm-4 col-md-4">
                                  <div class="receipt-left">
                                    <h1>Stamp</h1>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Print</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
