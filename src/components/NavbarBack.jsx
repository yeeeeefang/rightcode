import '../../src/assets/css/Navbar.css'
import { Link } from "react-router-dom"
import Hamburger from './Hamburger'
import { useRef, useState } from 'react';

function NavbarBack() {

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
            <div>
                <div className="navBarBk">
                    <div className="navlogo">

                        {/* <Link to=''>1234</Link> Link 打了之後出不來 */}
                        <Link to='/'><img src="./images/logo.png" alt="" /></Link>
                    </div>
                    {/* 這邊back跟two的navbar尚未處理 剩下接完成 */}
                    <div className="navBarBk-1">
                        <div className="navlearningBtn">
                            <Link to='/LearnHome'>
                                <p className='navHamBtn-starLearn'>返回選單</p>
                            </Link>
                        </div>
                        <div className="navhamBtn" onClick={toggleHamburger}>
                            <button className="nav-hamburger">
                                <span className="nav-bar"></span>
                                <span className="nav-bar"></span>
                                <span className="nav-bar"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`HumMenu ${isHamburgerVisible ? 'show' : ''} ${!isHamburgerVisible ? 'hide' : ''}`}>
                <Hamburger onClose={hideHamburger} />
            </div>
        </>
    )
}
export default NavbarBack