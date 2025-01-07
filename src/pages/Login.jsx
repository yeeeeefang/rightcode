import { useState } from 'react';
import "../assets/scss/Login.scss"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Login() {

    const [forgot, setForgot] = useState(false);
    const forgotOpen = () => { setForgot(true); }
    const forgotClose = () => { setForgot(false); }

    const {
        register, //是一種狀態(state)，可以綁定N個表單欄位
        handleSubmit, //是一種方法
        formState: { errors }, // 捕捉驗證規則
    } = useForm();
    // 建立一個字定義的方法，被表單觸發時，將register資料進來
    const onSubmit = async (data) => {
        // 取得表單被綁定的全部資料，以物件型態顯示
        console.log(data);
        // 取得表單指定的欄位資料 => data.欄位名稱
        console.log(data.uesrpw);

        await(data.email, data.uesrpw)
    }

    return (
        <>

            <div id="login-page">
                <Navbar />
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
                        <form action='' onSubmit={handleSubmit(onSubmit)}>
                            {/* Email */}
                            <label htmlFor="email">Email：</label>
                            <input type="email" id="email" title="email" placeholder="請輸入Email"
                                {...register('email')} />
                            {/* 使用者密碼 */}
                            <label htmlFor="userpw">請輸入密碼：</label>
                            <input type="password" id="userpw" title="密碼" placeholder="請輸入6~8英數混合字元" {...register('userpw')} />

                            <p className="forgot-password" onClick={forgotOpen}>忘記密碼</p>
                            {/* <Link to='/'></Link> */}
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
                                <label htmlFor="password-1">*再次確認密碼</label>
                                <input type="password" name="password" id="password-1" title="再次確認密碼" placeholder="請輸入6~8英數混合字元" />
                                <div className='remember'>
                                    <input type="checkbox" name="remember" id="remember" title="記住密碼" value="記住密碼" />
                                    <label htmlFor="">記住這個帳號密碼</label>
                                </div>

                            </form>
                            <Link to='/Member'><button className='forgot-button'>確認</button></Link>


                        </div>
                    </div>
                )}
            </div>
        </>
    )
}