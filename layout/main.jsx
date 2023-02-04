import Footer from "../components/Footer/Fotter";
import Navbar from "../components/nav/Navbar";
const Layout = ({children,catlist = false}) => {

  return (

    <main>
        <Navbar catlist={catlist}/>

        {children}
        <Footer/>
    </main>

  )
}

export default Layout;