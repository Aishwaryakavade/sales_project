import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products() {
  const [data, setData] = useState({
    name: "",
    price: "",
    gst: "",

  });

  const [newData, setNewData] = useState([]);
const [id,setId]= useState(undefined);


  function handleAdd(e) {
    e.preventDefault();
    // console.log(data);


  }

  function handleSubmit(e) {
    if(id===undefined){
      axios.post("https://65f060f8da8c6584131b8cac.mockapi.io/Sales1", data)
      .then((res) => {
        console.log(res.data);
        loadData();

        
      })

      setData({
        name:"",
        price:"",
        gst:"",
      })
    }
    else{
      axios.put("https://65f060f8da8c6584131b8cac.mockapi.io/Sales1/"+id ,data)
      .then((res)=>{
        console.log(res.data);
        setId(undefined)
        loadData();
        
      })
      setData({
        name:"",
        price:"",
        gst:""
      })
    }
  
   
  }


  function loadData() {
    axios.get("https://65f060f8da8c6584131b8cac.mockapi.io/Sales1")
      .then((res) => {
        setNewData(res.data);
      })
    console.log(newData);
  }

  useEffect(() => {
    loadData();
  }, [])


  function handleChange(e) {
    // console.log(e.target.value);
    setData({ ...data, [e.target.id]: e.target.value });
  }

 function handleEdit(e,id){
  e.preventDefault();
  setId(id)
axios.get("https://65f060f8da8c6584131b8cac.mockapi.io/Sales1/"+id)
.then((res)=>{
  console.log(res.data);
  setData({
    name:res.data.name,
        price:res.data.price,
        gst:res.data.gst
  })

})
  }

  function handleDelete(e,id){
    axios.delete("https://65f060f8da8c6584131b8cac.mockapi.io/Sales1/"+id)
    .then((res)=>{
      console.log(res.data);
      loadData();
    })

  }

  return (
    <div className="">
      <div className="row">

        <div className="col-lg-2">
        </div>
        <div className="col-lg-10">
          <div style={{ marginTop: "80px;" }}>
            <div>Products</div>
            <div className=" container mt-5">
              <ul class="nav">
                <li class="nav-item"><a href="" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="" class="nav-link">Products</a></li>

              </ul>


            </div>
            <div >
              <div className="row">
                <div className="col-lg-11">
                </div>
                <div className="col-lg-1">
                  <button onClick={(e) => handleAdd(e)} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productmodal">Add</button>
                </div>
              </div>

            </div>

            <div>
              <div className="card m-5">
                <div className="px-3">

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">GST%</th>
                        <th scope="col">Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {
                        newData.map((eachdata,i)=>{
                          return(
                            <tr>
                            <th scope="row">{i+1}</th>
                            <td>{eachdata.name}</td>
                            <td>₹{eachdata.price}/-</td>
                            <td>{eachdata.gst}</td>
                            <td>
                              <button onClick={(e)=>handleEdit(e,eachdata.id)} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#productmodal">Edit</button>
                              <button onClick={(e)=>handleDelete(e,eachdata.id)} className='btn btn-danger'>Delete</button>
    
                            </td>
    
                          </tr>
                          )
                        })
                      
                      }
                      

                    </tbody>
                  </table>
                </div>

              </div>

            </div>

            <div>
              <div class="modal" id="productmodal" tabindex="-1">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div>
                        <form>


                          <div class="mb-3">
                            <label for="disabledTextInput" class="form-label">Product</label>
                            <input type="text" value={data.name} onChange={(e) => handleChange(e)} id="name" class="form-control" />
                          </div>
                          <div class="mb-3">
                            <label for="disabledTextInput" class="form-label">Price</label>
                            <input type="text" value={data.price} onChange={(e) => handleChange(e)} id="price" class="form-control" />
                          </div>
                          <div class="mb-3">
                            <label for="disabledSelect" class="form-label">GST %</label>
                            <select id="gst" value={data.gst} onChange={(e) => handleChange(e)} class="form-select">
                              <option>Choose option</option>
                              <option>18</option>
                              <option>12</option>

                            </select>
                          </div>



                        </form>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button onClick={(e) => handleSubmit(e)} type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
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
