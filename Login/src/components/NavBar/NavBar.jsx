import './NavBar.scss';
import { IoShirtSharp } from "react-icons/io5";
import { PiPantsBold } from "react-icons/pi";
import { PiHoodieBold } from "react-icons/pi";
import { CiCircleMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import Btn from '../../App';

function NavBar () {
    return (
        <div className='navbar'>

            {/*---------- Navigation Bar ----------*/}
            <header>
                <nav>
                    <div>
                        <ul className="oneUl">
                            <li><i class="bi bi-bag-fill"/></li>
                            <li><Link to={"/"}><a href="#"> Online Shop </a></Link></li>
                        </ul>
                        <ul className="twoUl">
                            <li><a href="#"><i class="bi bi-house-fill"/> Home </a></li>
                            <li><a href="#" className='products'><i class="bi bi-box"/> Products <i class="bi bi-caret-up-fill dropDownIcon01" /> <i class="bi bi-caret-down-fill dropDownIcon02" /> 
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
                            <button className="circle01"onClick={Btn(2)}></button >
                            <Link to={"/b&w"}><button className="circle02"></button ></Link>
                            <Link to={"/Rainbow"}><button className="circle03"></button ></Link>
                        </ul>
                        <ul className="fourUl">
                            <li ><input type="text" placeholder="Search......."/><button className="btn01" value="button"><i class="bi bi-search"/></button></li> 
                        </ul>
                        <ul className="fiveUl">
                            <li className="btnli" ><Link to={"/LogIn"}><button value="button"> Log In </button></Link></li> 
                            <li className="btnli" ><Link to={"/SignIn"}><button value="button"> Sign Up </button></Link></li> 
                        </ul>
                    </div>
                </nav>
            </header>

        </div>
    );
}

export default NavBar;

