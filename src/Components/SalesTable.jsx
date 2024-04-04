import React, { useEffect, useState } from 'react'
import './Layout.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SalesTable() {
  const [product, setProduct] = useState([]);
  const [rows, setRows] = useState([{ quantity: 1 },{ quantity: 1 },{ quantity: 1 }]);
  const [totalprice, setTotalprice]=useState(0);
  const [totalgst, setTotalgst]=useState(0);
  const [Subtotal, setSubtotal]=useState(0);
  const [data, setData]=useState({
    date:"",
    name:"",
    number:"",
   
  });
  const navigate = useNavigate()

function handleGet(e){
  setData({...data,[e.target.id]:e.target.value});
  console.log(e.target.value);
}

function handleSubmit(e){
  e.preventDefault();
  const sentData={ date:data.date,
  name:data.name,
  number:data.number,
  product:[...rows],
  totalprice:totalprice,
  totalgst:totalgst,
  Subtotal:Subtotal  }

  console.log(data);
  axios.post("https://65f060f8da8c6584131b8cac.mockapi.io/GetInfo",sentData)
  .then((res)=>{
    console.log(res.data);
  })
  setData({
    date:"",
    name:"",
    number:""
  })

 navigate("/layout/salesexpensedata")
}

  function loadData() {
    axios.get("https://65f060f8da8c6584131b8cac.mockapi.io/Sales1")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
  }

  function handleChange(id, index) {
    console.log(id);
    let dropdown = product.find((e) => e.id === id)
    console.log(dropdown.price);
    // let dropdown 
    // for(let i=0;i<product.length;i++){
    //   if(product[i].id===id){
    //     dropdown=product[i]
    //   }
    // }

    let copyproduct = [...rows]
    copyproduct[index].select = dropdown
    setRows(copyproduct)
    GetTotal();

  }

  function addrow(e) {

    let copyrows = [...rows]
    copyrows.push({})

    setRows(copyrows)
    console.log(copyrows);


  }

  function quantitychange(value, index) {
    let copyquantity = [...rows]

    copyquantity[index].quantity = value
    setRows(copyquantity);
    GetTotal();
  }

  function GetTotal() {
    let total = 0;
    for (let i = 0; i <= rows.length; i++) {
      if(rows[i]?.select){
        total+=rows[i].select.price*rows[i].quantity;
      }
      setTotalprice(total);
  }

    let gst = 0;
    for (let i = 0; i <= rows.length;i++) {
      if(rows[i]?.select){
        gst+=(rows[i].select.price*rows[i].select.gst)/100;
      }
      setTotalgst(gst);
  }
  let sub=total+gst;
  setSubtotal(sub);
  }

  useEffect(() => {
    loadData();
  }, [])


  
  return (

    <div className="row">
      <div className="col-lg-2">
      </div>
      <div className="col-lg-10 " style={{ marginTop: "30px" }}>
        <div>

          <div class="mt-5">

            <div className="card mt-5">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 mb-3">
                    <div>
                      <label for="date" class="form-label">Date:</label>
                      <input type="date" class="form-control" id="date" value={data.date} onChange={(e)=>handleGet(e)}  />
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div>
                      <label for="name" class="form-label">Customer Name:</label>
                      <input type='text' class="form-control" id="name" vlue=""onChange={(e)=>handleGet(e)} />
                    </div>

                  </div>
                  <div className="col-lg-4 mb-3">
                    <div>
                      <label for="number" class="form-label">Mobile Number:</label>
                      <input type='text' class="form-control" id="number" vlue="" onChange={(e)=>handleGet(e)} />
                    </div>
                  </div>
                </div>
                <div>
                  <button className='btn btn-primary' onClick={(e) => addrow(e)}>Add Row</button>
                </div>

              </div>
            </div>

            <div>
              <div className="card mt-1">
                <div className="card-body">
                  <div>
                    <table class="table table-striped">

                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">GST</th>
                          <th scope="col">SubTotal</th>
                          <th scope="col">Action</th>


                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, index) => {
                          return (


                            <tr>

                              <td><select class="form-select" onChange={(e) => handleChange(e.target.value, index)}>

                                <option value="" disabled="">Select a product</option>
                                {
                                  product.map((eachdata, i) => {
                                    return (
                                      <option value={eachdata.id}>{eachdata.name}</option>
                                    )
                                  })
                                }


                              </select>
                              </td>
                              <td> ₹{row.select ? row.select.price : ""}/-</td>
                              <td><input type="number" min="1" class="form-control" value={row.quantity} onChange={(e) => { quantitychange(e.target.value, index) }} /></td>

                              <td>{row.select ? row.select.gst : ""}%</td>
                              <td>₹{row.select ? (((parseInt(row.select.price)) + ((parseInt(row.select.price)) * (parseInt(row.select.gst))) / 100) * (parseInt(row.quantity))) : ""}/-</td>
                              <td><button class="btn btn-danger">Remove</button></td>
                            </tr>
                          )
                        })}


                      </tbody>
                    </table>
                    <hr />

                  </div>
                  <div class="mt-5">
                    <h4 >Total Price:  ₹{totalprice}/- </h4>
                    <h4>Total GST:  ₹{totalgst}/-</h4>
                    <h4>Overall Subtotal:   ₹{Subtotal}/-</h4>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-lg-10">

                      </div>
                      <div className="col-lg-1">
                        <button class="btn btn-success" onClick={(e)=>handleSubmit(e)}>Submit Data</button>
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
