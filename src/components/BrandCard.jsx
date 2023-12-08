import { useLoaderData, useParams } from "react-router-dom";
import SingleBrandCard from "./SingleBrandCard";



const BrandCard = () => {

    const allBrands = useLoaderData();

    


    // const {brand} = allBrand;
    // console.log(brand)
    const brandName = useParams()
    console.log(brandName)
    console.log(allBrands)

    






    return (

        
       <div>

        


         <div className="grid grid-cols-3 gap-5">
           
           
           
           {
               allBrands?.map(allBrand=><SingleBrandCard key={allBrand._id} singleCard={allBrand}></SingleBrandCard>)
           }
       </div>
       </div>
    );
};

export default BrandCard;