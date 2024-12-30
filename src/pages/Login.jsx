import { useState } from 'react';
import "../assets/scss/Login.scss"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom';

export default function Login() {

    const [forgot, setForgot] = useState(false);
    const forgotOpen = () => { setForgot(true); }
    const forgotClose = () => { setForgot(false); }
    return (
        <>

            <div id="login-page">
                <Navbar />
                {/* topbar  */}
                {/* <header className="topbar">
                    <div className="logo">
                        <h1 className="logo"><img src="./images/logo.png" alt="rightCode" title="rightCode" /></h1>
                    </div>
                    <div className="learnBtn">
                        <figure><img src="./images/hamBtn.svg" alt="" /></figure>
                    </div>
                </header> */}
                <div className="login-main">
                    <div className="amoeba-blobs">
                        <img src="./images/login.png" alt="" />
                    </div>

                    <div className="characters">
                        <img src="./images/greenA.svg" alt="" className="green-char" />
                        <img src="./images/redB.svg" alt="" className="red-char" />
                        <img src="./images/blueA.svg" alt="" className="blue-char" />
                        <img src="./images/pinkA.svg" alt="" className="pink-char" />
                    </div>

                    <div className="login-form">
                        <h2>會員登入</h2>
                        <form>
                            <label htmlFor="email">*Email：</label>
                            <input type="email" name="email" id="email" title="Email" placeholder="請輸入Email" required autoFocus />

                            <label htmlFor="password">*請輸入密碼：</label>
                            <input type="password" name="password" id="password" title="重設密碼" placeholder="請輸入6~8英數混合字元" />

                            <p className="forgot-password" onClick={forgotOpen}>忘記密碼</p>

                            <button type="submit" className="login-button">登入</button>
                        </form>
                        <div className="login-divider">
                            <hr />
                            <span>OR</span>
                            <hr />
                        </div>
                        <div className="social-login">
                            <button className="facebook"><img src="./images/icon_fb.svg" alt="" /></button>
                            <button className="apple"><img src="./images/icon_apple.svg" alt="" /></button>
                            <button className="google"><img src="./images/icon_google.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
                {forgot && (
                    <div className="forgot" onClick={forgotClose}>
                        <div className="forgot-content">
                            <div className="foricon">
                                <h4>忘記密碼</h4>
                                {/* <img src="./images/icon_pink.svg" alt="" /> */}
                            </div>
                            <form className='forgot-form'>
                                <label htmlFor="email">*Email：</label>
                                <input type="email" name="email" id="email" title="Email" placeholder="請輸入Email" required />
                                <label htmlFor="password">*請輸入密碼：</label>
                                <input type="password" name="password" id="password" title="密碼" placeholder="請輸入6~8英數混合字元" />
                                <div>
                                <input type="checkbox" name="remember" id="remember" title="記住密碼" value="記住密碼" />
                                <label htmlFor="">記住這個帳號密碼</label>
                                </div>
                            </form>
                            <Link to='/Login'><p className='forgot-button'>確認</p></Link>
                                                    

                        </div>
                    </div>
                )}
            </div>
        </>
    )
}