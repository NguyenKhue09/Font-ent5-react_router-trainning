import React from "react";
import { useParams ,useRouteMatch,useHistory} from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const {url,path} = useRouteMatch()
  console.log("day la url",url);
  console.log("day la ")
  // nhan toan bo mang product
  // roi kiem san pham trong mang product
  // bang id
  // kiem ra thi luu vo bien product
  // Bien product nay hien thi dung thong tin cua id do
  const product = data.find((p) => p.id === Number(productId));
  let productData;
  const historyTest = ()=>
  {

    History.replace('/')
  }
  if (product) {
    productData = (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
        <button onClick={historyTest}></button>
      </div>
    );
  } else {
    productData = <h2>Sorry. Product doesn't exist</h2>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          background: "#ffffff"
        }}
      >
        {productData}
      </div>
    </div>
  );
};

export default Product;
