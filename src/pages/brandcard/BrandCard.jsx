import { useParams } from "react-router-dom";
import Brand from "../../components/Brand";
import { useEffect, useState } from "react";

const BrandCard = () => {
  const [products, setProducts] = useState([]);
  const [displayBrand, setDisplayBrand] = useState([]);

  const brand = useParams();

  console.log(brand);

  const handleBrandFilter = (filter) => {
    if (filter === "Adidas") {
      const adidas = products.filter((brand) => brand.brand === "Adidas");
      setDisplayBrand(adidas);
    } else if (filter === "Levis") {
      const levis = products.filter((brand) => brand.brand === "Levis");
      setDisplayBrand(levis);
    } else if (filter === "H&M") {
      const hm = products.filter((brand) => brand.brand === "H&M");
      setDisplayBrand(hm);
    } else if (filter === "ZARA") {
      const zara = products.filter((brand) => brand.brand === "ZARA");
      setDisplayBrand(zara);
    }
    else if(filter === "GUCCI"){
        const gucci = products.filter((brand) => brand.brand === "GUCCI");
      setDisplayBrand(gucci);
    }
    else if(filter === "NIKE"){
        const nike = products.filter((brand) => brand.brand === "NIKE");
      setDisplayBrand(nike);
    }
    
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProducts(data);
        setDisplayBrand(data);
      });
  }, []);

  // const brands = useLoaderData();
  // console.log(brands);

  console.log(products);
  return (
    <div>
      <div className=" p-6 m-6 flex items-center justify-center gap-5">
        
        <button
          onClick={() => handleBrandFilter("Adidas")}
          className="btn btn-primary"
        >
          Adidas
        </button>
        <button
          onClick={() => handleBrandFilter("Levis")}
          className="btn btn-primary"
        >
          Levis
        </button>
        <button
          onClick={() => handleBrandFilter("ZARA")}
          className="btn btn-primary"
        >
          Zara
        </button>
        <button
          onClick={() => handleBrandFilter("H&M")}
          className="btn btn-primary"
        >
          H&M
        </button>
        <button
          onClick={() => handleBrandFilter("GUCCI")}
          className="btn btn-primary"
        >
          GUCCI
        </button>
        <button
          onClick={() => handleBrandFilter("NIKE")}
          className="btn btn-primary"
        >
          NIKE
        </button>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
        {displayBrand?.map((product) => (
          <Brand key={product._id} brandName={product}></Brand>
        ))}
      </div>
    </div>
  );
};

export default BrandCard;
