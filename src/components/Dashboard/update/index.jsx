import { React, useEffect } from "react";
import "./style.css";
const Update = ({ data ,cancelBtn=()=>{},setCategory,setPrice,setQuantity,setValue,handleSubmit}) => {
  console.log(data);
  return (
    <div className="update-main_container">
      <div className="content">
        <div className="heading">
          <div className="main-heading">Edit Product</div>
          <div className="product-name">{data.name}</div>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="form-group">
                <label>Category</label>
                <input placeholder="category" value={data.category} onChange={setCategory} type="text" />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input placeholder="price" value={data.price} onChange={setPrice} type="number" />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input placeholder="quantity" value={data.quantity} onChange={setQuantity} type="number" />
              </div>
              <div className="form-group">
                <label>Value</label>
                <input placeholder="value" value={data.value} onChange={setValue} type="number"/>
              </div>
            </div>
            <div className="action">
              <button className="cancelBtn" type="button" onClick={cancelBtn}>
                Cancel
              </button>
              <button className="submitBtn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Update;
