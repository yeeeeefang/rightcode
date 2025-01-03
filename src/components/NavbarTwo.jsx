import { useEffect, useRef, useState } from 'react'
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


    const hamburgerRef = useRef(null); // 參考 Hamburger 元素
    useEffect(() => {
        const handleClickOutside = (event) => {
            // 如果點擊的地方不在 Navbar 或 Hamburger 內部，隱藏 Hamburger
            if (
                hamburgerRef.current && !hamburgerRef.current.contains(event.target)
            ) {
                setHamburgerVisible(false);
            }
        };

        // 監聽全域點擊事件
        document.addEventListener('mousedown', handleClickOutside);

        // 清除事件監聽器
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <section id="NavbarTwo-page-1">
                <div className="navBarBk">
                    <div className="navlogo">
                        <Link to='/'><img src="./images/logo.png" alt="" /></Link>                    </div>
                    <div className="navBarBk-1">
                        {/* <div className="learningBtn">
                            <img src="../public./images/navBtn.png" alt="" />
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

                <div
                    ref={hamburgerRef}
                    className={`HumMenu ${isHamburgerVisible ? 'show' : ''} ${!isHamburgerVisible ? 'hide' : ''}`}>
                    <Hamburger onClose={hideHamburger} />
                </div>
            </section>
        </>
    )
}
export default NavbarTwo