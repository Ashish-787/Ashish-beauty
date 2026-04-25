import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Royal Diamond Braclet",
    price: "₹ 39,999",
    img: "/images/home/home7.jpg"
  },
  {
    id: 2,
    name: "Heritage Gold Necklace",
    price: "₹ 1,29,999",
    img: "/images/home2.jpg"
  },
  {
    id: 3,
    name: "Luxury Diamond Necklace",
    price: "₹ 54,999",
    img: "/images/home3.jpg"
  },
  {
    id: 4,
    name: "Bridal Majesty Set",
    price: "₹ 2,79,999",
    img: "/images/home/home4.jpg"
  },
  {
    id: 5,
    name: "Elegant Gold Necklace",
    price: "₹ 24,999",
    img: "/images/home/home5.jpg"
  },
  {
    id: 6,
    name: "Classic Diamond Necklace",
    price: "₹ 69,999",
    img: "/images/home/home6.jpg"
  }
];

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h2 className="text-center py-5">Product Not Found</h2>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={product.img}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4 className="text-warning my-3">{product.price}</h4>

          <p>
            This exquisite piece is crafted with premium quality gold and
            designed to enhance your elegance. A timeless addition to
            your luxury collection.
          </p>

          <button className="gold-btn mt-3">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;