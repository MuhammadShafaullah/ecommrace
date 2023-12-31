import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Edit(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();
  const parems = useParams()
  const successMsg = () =>
    toast.success("Product successfully created", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });


  //create item

  //get id of product
  useEffect(() => {
    axios.get(`https://65489546dd8ebcd4ab232d5f.mockapi.io/products/${parems.id}`)
      .then((res) => {
        if (res.status == 200) {
          setName(res.data.name)
          setPrice(res.data.price)
        }
      })
  }, [])

  const handleSubmit = () => {
    console.log(name, price);

    if (name !== "" && price !== 0) {
      // create product
      setLoading(true);
      axios
        .put(`https://65489546dd8ebcd4ab232d5f.mockapi.io/products/${parems.id}`, {
          name: name,
          price: price
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            successMsg();
            setTimeout(() => {
              navigator("/dashboard");
            }, 2000);
          }
        })
        .catch((er) => {
          console.log(er.message);
        })
        .finally(() => setLoading(false));
    } else {
      alert("fields are empty");
    }

  }


  return (
    <>
      <h2>Update Product</h2>
      <form onSubmit={(e) => {e.preventDefault();}}>
        <div className="mb-3">
          <label id="name">Product Name</label>
          <input type="text" id="name" onChange={(e)=>{setName(e.target.value);}}
            className="form-control" value={name}placeholder="product name"/>
        </div>
        <div className="mb-3">
          <label id="price">Price</label>
          <input type="number" id="price" onChange={(e)=>{setPrice(e.target.value);}}
            className="form-control" value={price} placeholder="product name"/>
        </div>

        <button class="btn btn-warning" type="button" onClick={handleSubmit}
          disabled={loading == true ? true : ""}>
          {loading == true ? (
            <span class="spinner-grow spinner-grow-sm me-1" aria-hidden="true"></span>
          ): null}
          <span role="status">
            {loading == false ? "Update" : "Loading..."}
          </span>
        </button>
      </form>
    </>
  )
}

export default Edit;
