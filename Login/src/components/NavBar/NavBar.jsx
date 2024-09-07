import './NavBar.scss';

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
                            <li><a href="#"><i class="bi bi-house"/> Home </a></li>
                            <li><a href="#"><i class="bi bi-box"/> Products </a></li>
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

