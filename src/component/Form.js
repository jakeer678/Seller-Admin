import React, { useState } from "react";
import "./Form.css";

const productsData = [
  {
    id: 1,
    sellingPrice: 10,
    productName: "mobile",
    productType: "",
  },
];

const Form = (props) => {
  const [idInput, setIdInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [productType, setproductType] = useState("Electronics");

  const [list, setList] = useState(productsData);

  const idHandle = (event) => {
    setIdInput(event.target.value);
  };
  const priceHandle = (event) => {
    setPriceInput(event.target.value);
  };

  const nameHandle = (event) => {
    setNameInput(event.target.value);
  };

  const categoryHnadle = (e) => {
    setproductType(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem(idInput, JSON.stringify(list));
    setList([
      ...list,
      {
        id: idInput,
        sellingPrice: priceInput,
        productName: nameInput,
        productType: productType,
      },
    ]);
  };
  const elecproduct = list.filter((item) => {
    if (item.productType === "Electronics") return item;
  });

  const foodItems = list.filter((item) => {
    if (item.productType === "Food") return item;
  });
  const mobileItems = list.filter((item) => {
    if (item.productType === "Mobiles") return item;
  });

  const handleDelete = (Id) => {
    localStorage.removeItem(Id);
    const newList = elecproduct.filter((item) => {
      return item.id !== Id;
    });

    setList(newList);
  };

  return (
    <>
      <div className="header">
        <h1>Seller's Admin page</h1>
      </div>
      <hr />
      <form onSubmit={submitForm}>
        <div className="container">
          <div className="inputProduct">
            <label>Product Id</label>
            <input
              min="1"
              type="number"
              value={idInput}
              onChange={idHandle}
            ></input>
          </div>
          <div className="inputProduct">
            <label>Selling price</label>
            <input
              type="number"
              min="1"
              value={priceInput}
              onChange={priceHandle}
            ></input>
          </div>
          <div className="inputProduct">
            <label>Product Name</label>
            <input type="name" value={nameInput} onChange={nameHandle}></input>
          </div>
          <div className="category_select">
            <select
              className="category"
              value={productType}
              onChange={categoryHnadle}
            >
              <option value="Electronics" selected>
                Electronics
              </option>
              <option value="Food">Food</option>
              <option value="Mobiles">Mobiles</option>
            </select>
          </div>
          <div className="submitButton">
            <button type="submit">Add Product </button>
          </div>
        </div>
      </form>

      <div className="itemList">
        <div className="item">
          <div className="elctronics">
            <div>Electronics</div>
          </div>

          {elecproduct?.map((item, index) => (
            <div>
              <p key={item?.id}>{item?.id}</p>
              <p>{item?.sellingPrice}</p>
              <p>{item?.productName}</p>
              <button
                className="deleteButton"
                onClick={() => handleDelete(item?.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <div className="item">
          <div className="food">
            <div>Food</div>
          </div>

          {foodItems?.map((item, index) => (
            <div>
              <p key={item?.id}>{item?.id}</p>
              <p>{item?.sellingPrice}</p>
              <p>{item?.productName}</p>
              <button
                className="deleteButton"
                onClick={() => handleDelete(item?.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <div className="item">
          <div className="mobiles">
            <div>Mobiles</div>
          </div>
          {mobileItems?.map((item, index) => (
            <div>
              <p key={item?.id}>{item?.id}</p>
              <p>{item?.sellingPrice}</p>
              <p>{item?.productName}</p>
              <button
                className="deleteButton"
                onClick={() => handleDelete(item?.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Form;
