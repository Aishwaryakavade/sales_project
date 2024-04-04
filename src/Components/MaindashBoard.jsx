import React from 'react'

export default function MaindashBoard() {
  return (


    <div className="">
      <div className="row">
        <div className="col-lg-2">
        </div>

        <div className="col-lg-10">
          <div >

            <div  style={{ marginTop: "60px;" }}>


              <div class="container-fluid p-4 m-5">

                <div className="card">
                  <div className="card-body">
                    <div className="row mt-4">
                      <div className="col-lg-4">
                        <div class="card m-4" style={{ width: "18rem;" }}>
                          <div class="card-body">
                            <h5 class="card-title">Products <span>| Today</span>
                            </h5>
                            <div class="d-flex align-items-center">
                              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i class="fa-solid fa-cart-shopping fa-2xl" style={{ color: "blue" }}>
                                </i>
                              </div>
                              <div class="ps-3">
                                <h3 style={{ color:"blue" }}>30</h3>
                                <span class="text-success small pt-1 fw-bold">1200%</span>
                                <span class="text-muted small pt-2 ps-1">increase</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div class="card m-4" style={{ width: "18rem;" }}>
                          <div class="card-body">
                            <h5 class="card-title">Sales <span>| Today</span>
                            </h5>
                            <div class="d-flex align-items-center">
                              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i class="fa-solid fa-cart-shopping fa-2xl" style={{ color: "blue" }}>
                                </i>
                              </div>
                              <div class="ps-3">
                                <h3 style={{ color: "blue" }}>30</h3>
                                <span class="text-success small pt-1 fw-bold">1200%</span>
                                <span class="text-muted small pt-2 ps-1">increase</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div class="card m-4" style={{ width: "18rem;" }}>
                          <div class="card-body">
                            <h5 class="card-title">Sales <span>| Today</span></h5>
                            <div class="d-flex align-items-center">
                              <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i class="fa-solid fa-cart-shopping fa-2xl" style={{ color: "blue" }}></i>
                              </div>
                              <div class="ps-3">
                                <h3 style={{ color: "blue" }}>7</h3>
                                <span class="text-success small pt-1 fw-bold">12%</span>
                                <span class="text-muted small pt-2 ps-1">increase</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mt-2">
                    <div className="card-body">
                      <div className="row mt-4">
                        <div className="col-lg-12">
                          <h1>Chart</h1>
                        </div>
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
