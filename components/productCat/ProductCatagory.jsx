import Link from "next/link";
import { useSelector } from "react-redux";


const ProductCatagory = () => {

  const {color} = useSelector((state)=> state.Theme)
  
  const categories = [
    { id: 1, name: "IT & Tech", href: "#linkToCategory", picture: "https://fancytailwind.com/static/keyboard1-d324995c7d24b66f6935a11f1afcd6e7.jpg" },
    { id: 2, name: "Accessories", href: "#linkToCategory", picture: "https://fancytailwind.com/static/watch5-a86e63e37a603823384a28ed21b5bd30.jpg" },
    { id: 3, name: "Christmas", href: "#linkToCategory", picture: "https://fancytailwind.com/static/fun-pull1-c99e4d9aad2713d512f34897d43d7382.jpg" },
    { id: 4, name: "Cameras", href: "#linkToCategory", picture: "https://fancytailwind.com/static/photo3-7a3f62bb0365e6bcfb3695a21e194700.jpg" },
    { id: 5, name: "Shoes", href: "#linkToCategory", picture: "https://fancytailwind.com/static/shoes5-c9e834160d04845addcdf9d9e95d951c.webp" },
  ]

  return (
    <div className="mx-auto py-5 px-4 w-full max-w-7xl">
      <div className="mx-auto max-w-sm sm:max-w-3xl lg:max-w-none">
        
        {/* :TITLE */}
        <div className="flex justify-between">
        <h2 className="text-2xl lg:text-3xl text-black font-bold">Shop by Category</h2>
        <Link href={'/categories'}>
          <a className="cursor-pointer"> see all</a>  
        </Link>
        </div>

        {/* :CATEGORIES */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 sm:gap-x-8">
          {categories.map(category => (
            <div key={category.id} className="col-span-1 aspect-w-2 aspect-h-3 relative shadow-sm rounded-lg overflow-hidden bg-white hover:shadow-lg">
              <a href={category.href} className="py-6 flex justify-center items-end">
                {/* ::Background Image */}
                <img src={category.picture} alt="" className="absolute inset-0 w-full h-full object-contain object-center" />
                {/* ::Overlay */}
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-t from-gray-100 via-${color}-200`} />
                {/* ::Category Name */}
                <h3 className="relative text-center text-sm sm:text-base lg:text-lg  text-black font-semibold tracking-wide antialiased">{category.name}</h3>
              </a>
            </div>
          ))
          }
        </div>

      </div>
    </div>
  )
}

export default ProductCatagory
