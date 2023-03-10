import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoader } from "../../components/util/Loader/Loader";
import Slide from "./slider/Slide";

const Hero = () => {
    const {color} = useSelector((state)=> state.Theme)
    const setLoad = useLoader()
    // const {setLoad} = useLoader()
    
    useEffect(()=>{
        setLoad(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <header className="bg-white dark:bg-gray-900 border-red-400">
    <div className=" text-red-500 bg-red-600"></div>
    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Slim Silks <span className={`text-${color}-500`}>for trend</span></h1>

                    <p className="mt-3 text-gray-600 dark:text-gray-400">be the first to knows when our <span className={`font-medium text-${color}-500`}>Brand</span> is live</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <input id="email" type="text" className={`px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-${color}-400 dark:focus:border-${color}-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300`} placeholder="search"/>

                        <button className={`w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-${color}-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-${color}-200 focus:outline-none focus:bg-${color}-200`}>
                            search
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center relative justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
               
                        <Slide/>

            </div>
        </div>
    </div>
</header>
  )
}

export default Hero