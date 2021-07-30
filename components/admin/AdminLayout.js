import NavbarAdmin from "./NavbarAdmin";
import Footer from "../Footer";
export default function Home({children}){
    return(
    <>
        <div className="container-fluid">
            <NavbarAdmin/>
            <div>{children}</div>
            <Footer/>
        </div>
    </>
    );
}