import ProductCard from "../util/ProductCard";
const future = () => {
  return (
    <div className="py-1 pb-4">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
             {[1,2,3,4].map((e,i)=>{
                return(
                   <ProductCard  key={i} name={"broun b2"} img="/img/product/pr (1).jpeg" />
                )
             })}
                
        </div>
    </div>
  )
}

export default future