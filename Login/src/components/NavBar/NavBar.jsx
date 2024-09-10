import './NavBar.scss';
import { IoShirtSharp } from "react-icons/io5";
import { PiPantsBold } from "react-icons/pi";
import { PiHoodieBold } from "react-icons/pi";
import { CiCircleMore } from "react-icons/ci";

function NavBar () {
    return (
        <div className='navbar'>

            {/*---------- Navigation Bar ----------*/}
            <header>
                <nav>
                    <div>
                        <ul className="oneUl">
                            <li><i class="bi bi-bag-fill"/></li>
                            <li><a href="../../../public/index.html"> Online Shop </a></li>
                        </ul>
                        <ul className="twoUl">
                            <li><a href="#"><i class="bi bi-house-fill"/> Home </a></li>
                            <li><a href="#" className='products'><i class="bi bi-box"/> Products 
                                <ul className='dropDown'>
                                    <li><a href="#"> <PiHoodieBold /> T-Shirts </a></li>
                                    <li><a href="#"> <IoShirtSharp /> Shirts </a></li>
                                    <li><a href="#"> <PiPantsBold /> Pants </a></li>
                                    <li><a href="#"> <CiCircleMore /> Others </a></li>
                                </ul>
                            </a></li>
                            <li><a href="#"><i class="bi bi-gear-wide"/> About </a></li>
                            <li><a href="#"><i class="bi bi-info-circle"/> Help </a></li>
                        </ul>
                        <ul className="threeUl">
                            <button className="circle01"></button >
                            <button className="circle02"></button >
                            <button className="circle03"></button >
                        </ul>
                        <ul className="fourUl">
                            <li ><input type="text" placeholder="Search......."/><button className="btn01" value="button"><i class="bi bi-search"/></button></li> 
                        </ul>
                        <ul className="fiveUl">
                            <li className="btnli" ><button value="button"> Log In </button></li> 
                            <li className="btnli" ><button value="button"> Sign Up </button></li> 
                        </ul>
                    </div>
                </nav>
            </header>

        </div>
    );
}

export default NavBar;

