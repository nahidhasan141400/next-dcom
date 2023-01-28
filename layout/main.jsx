import Navbar from "../components/nav/Navbar";
const Layout = ({children}) => {
    console.dir(children)
  return (

    <main>
        <Navbar/>
        {children}
    </main>

  )
}

export default Layout;