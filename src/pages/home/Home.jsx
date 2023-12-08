import { useLoaderData } from "react-router-dom";
import BrandTitle from "../../components/BrandTitle";
import Banner from "../../components/Banner";




const Home = () => {

    const BrandNames = useLoaderData();
    console.log(BrandNames)



    return (
      <div className="space-y-8">
        <Banner/>
          <div className="grid grid-cols-2 gap-5">
           
           {
               BrandNames?.map(brandName=><BrandTitle key={brandName.id} brandName={brandName}></BrandTitle>)
           }
       </div>
      </div>
    );
};

export default Home;




