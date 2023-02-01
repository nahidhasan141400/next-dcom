import Footer from "../components/Footer/Fotter";
import Navbar from "../components/nav/Navbar";
const Layout = ({children}) => {
    console.dir(children)
  return (

    <main>
        <Navbar/>

        {children}
        <Footer/>
    </main>

  )
}

export default Layout;