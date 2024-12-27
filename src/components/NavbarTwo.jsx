import { useRef, useState } from 'react'
import '../../src/assets/css/navbar.css'
import Hamburger from './Hamburger'
import { Link } from 'react-router-dom';

function NavbarTwo() {

    const [isHamburgerVisible, setHamburgerVisible] = useState(false); // 控制 Hamburger 顯示/隱藏

    // 切換 Hamburger 顯示狀態
    const toggleHamburger = () => {
        setHamburgerVisible(!isHamburgerVisible);
    };

    // 隱藏 Hamburger（供 Hamburger 的 iconX 點擊使用）
    const hideHamburger = () => {
        setHamburgerVisible(false);
    };

    return (
        <>
            <section id="NavbarTwo-page-1">
                <div className="navBarBk">
                    <div className="navlogo">
                        <Link to='/'><img src="/images/logo.png" alt="" /></Link>                    </div>
                    <div className="navBarBk-1">
                        {/* <div className="learningBtn">
                            <img src="../public/images/navBtn.png" alt="" />
                        </div> */}

                        <div className="navhamBtn" onClick={toggleHamburger}>
                            <button className="nav-hamburger">
                                <span className="nav-bar"></span>
                                <span className="nav-bar"></span>
                                <span className="nav-bar"></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`HumMenu ${isHamburgerVisible ? 'show' : ''} ${!isHamburgerVisible ? 'hide' : ''}`}>
                    <Hamburger onClose={hideHamburger} />
                </div>
            </section>
        </>
    )
}
export default NavbarTwo