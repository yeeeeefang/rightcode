import { useEffect, useRef, useState } from 'react';
import '../../src/assets/css/Navbar.css'
import { Link } from "react-router-dom"
import Hamburger from './Hamburger';

function Navbar() {


    const [isHamburgerVisible, setHamburgerVisible] = useState(false); // 控制 Hamburger 顯示/隱藏
    const modalRef = useRef(null); // 參考模態框元素（foomodal）

    // 切換 Hamburger 顯示狀態
    const toggleHamburger = () => {
        setHamburgerVisible(!isHamburgerVisible);
    };

    // 隱藏 Hamburger（供 Hamburger 的 iconX 點擊使用）
    const hideHamburger = () => {
        setHamburgerVisible(false);
    };


    /* 按下切換圖片 */

    const hamburgerRef = useRef(null); // 參考 Hamburger 元素
    useEffect(() => {
        const handleClickOutside = (event) => {
            // 如果點擊的地方不在 Navbar 或 Hamburger 內部，隱藏 Hamburger
            if (
                hamburgerRef.current && !hamburgerRef.current.contains(event.target) 
                &&(!modalRef.current || !modalRef.current.contains(event.target))
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
            <div className='navbarall' >
                <div className="navBarBk">
                    <div className="navlogo">

                        {/* <Link to=''>1234</Link> Link 打了之後出不來 */}
                        <Link to='/'><img src="./images/logo.png" alt="" /></Link>
                    </div>
                    <div className="navBarBk-1">
                        <Link to='/LearnHome'>
                            <div className="navlearningBtn">
                                <p className='navHamBtn-starLearn'>開始學習</p>

                                {/* <img src="../public./images/navBtn.png" alt=""
                                    ref={starLearnBtnRef}
                                    onMouseDown={navbtnMouseDown}
                                    onMouseUp={navbtnMouseUp}
                                /> */}
                            </div>
                        </Link>
                        <div className="navhamBtn"  /* onClick={toggleMenu} */ onClick={toggleHamburger}>
                            <button className="nav-hamburger">
                                <span className="nav-bar"></span>
                                <span className="nav-bar"></span>
                                <span className="nav-bar"></span>
                            </button>
                            {/* <img src="../public./images/hamBtn.svg" alt=""
                                ref={humBtnRef}
                                onMouseDown={humBtnMouseDown}
                                onMouseUp={humBtnMouseUp}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div
                ref={hamburgerRef}
                className={`HumMenu ${isHamburgerVisible ? 'show' : ''} ${!isHamburgerVisible ? 'hide' : ''}`}>

                <Hamburger onClose={hideHamburger}
                    modalRef={modalRef} // 傳遞模態框參考
                />
            </div>
        </>
    )
}
export default Navbar