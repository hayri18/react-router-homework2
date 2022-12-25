import { useSelector } from "react-redux";
import Header from "./components/Header";
import Product from "./components/Product";
import Receipt from "./components/Receipt";

function App() {
  const { products } = useSelector((state) => state.data);
  return (
    <div className="bg-[#f1f2f6]">
      <div className="w-[78%] mx-auto pt-6">
        <Header />
        <div className="grid grid-cols-3 gap-[10px] desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
          {products.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
        <Receipt />
      </div>
    </div>
  );
}

export default App;
