import Footer from "../components/Footer/Fotter";
import Navbar from "../components/nav/Navbar";
import ColorReg from "./registry/ColorReg";
const Layout = ({children,catlist = false}) => {
  return (

    <main>
     
        <ColorReg/>
        <Navbar catlist={catlist}/>
        {children}
        <Footer/>
     
    </main>

  )
}

export default Layout;