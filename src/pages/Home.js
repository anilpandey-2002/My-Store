import React from "react";
import Products from "../components/Products";

const Home = ({ searchTerm }) => {
  return (
    <>
      <div>
        <section>
          {/* <h3>Products</h3> */}
          <Products searchTerm={searchTerm} />
        </section>
      </div>
    </>
  );
};

export default Home;
