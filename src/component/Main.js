// import React, { useState } from 'react';
// import Form from './Form';
// import Category from './Category';

// const Main = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const addProduct = product => {
//     setProducts([...products, product]);
//     if (!categories.includes(product.category)) {
//       setCategories([...categories, product.category]);
//     }
//   };

//   return (
//     <div>
//       <Form categories={categories} onAddProduct={addProduct} />
//       {categories.map(category => (
//         <Category
//           key={category}
//           name={category}
//           products={products.filter(product => product.category === category)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Main;
