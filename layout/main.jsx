import Footer from "../components/Footer/Fotter";
import Navbar from "../components/nav/Navbar";
const Layout = ({children,catlist = false}) => {
    console.dir(children)
  return (

    <main>
        <Navbar catlist={catlist}/>

        {children}
        <Footer/>
    </main>

  )
}

export default Layout;