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
      <form onSubmit={submitForm}>
        <div className="container">
          <div>
            <label>Product Id</label>
            <input type="id" value={idInput} onChange={idHandle}></input>
          </div>
          <div>
            <label>Selling price</label>
            <input
              type="price"
              value={priceInput}
              onChange={priceHandle}
            ></input>
          </div>
          <div>
            <label>Product Name</label>
            <input type="name" value={nameInput} onChange={nameHandle}></input>
          </div>
          <div>
            <select value={productType} onChange={categoryHnadle}>
              <option value="Electronics" selected>
                Electronics
              </option>
              <option value="Food">Food</option>
              <option value="Mobiles">Mobiles</option>
            </select>
          </div>
          <div>
            <button type="submit">Add Product </button>
          </div>
        </div>
      </form>

      <div>
        <div>Electronics</div>

        {elecproduct?.map((item, index) => (
          <div>
            <div key={item?.id}>{item?.id}</div>
            <div>{item?.sellingPrice}</div>
            <div>{item?.productName}</div>
            <button onClick={() => handleDelete(item?.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <div>Food</div>

        {foodItems?.map((item, index) => (
          <div>
            <div key={item?.id}>{item?.id}</div>
            <div>{item?.sellingPrice}</div>
            <div>{item?.productName}</div>
            <button onClick={() => handleDelete(item?.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <div>Mobiles</div>

        {mobileItems?.map((item, index) => (
          <div>
            <div key={item?.id}>{item?.id}</div>
            <div>{item?.sellingPrice}</div>
            <div>{item?.productName}</div>
            <button onClick={() => handleDelete(item?.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
