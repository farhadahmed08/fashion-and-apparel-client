import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import FashionItemCard from "../../components/FashionItemCard";


const Home = () => {

    const fashionItems = useLoaderData();
    console.log(fashionItems)


    return (
        <div className="space-y-14">
            <Banner/>
            <h1 className="text-6xl text-center font-bold text-blue-600">Fashion Item</h1>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
                {
                    fashionItems?.map(fashionItem=><FashionItemCard key={fashionItem.id} card={fashionItem}></FashionItemCard>)
                }
            </div>
        </div>
    );
};

export default Home;