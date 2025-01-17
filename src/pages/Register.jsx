import { Link } from "react-router-dom"
import "../assets/scss/register.scss"
import Navbar from "../components/Navbar"
import { useForm } from "react-hook-form";
import PhonePage from "./PhonePage";


export default function Register() {
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
        await (data.username, data.email, data.uesrpw)
    }
    return (
        <>

            <div id="register-page">
                <Navbar />
                <div className="register-main">
                    <div className="amoeba-blobs2">
                        <img src="./images/register.png" alt="" />
                    </div>

                    <div className="characters">
                        <img src="./images/greenA.svg" alt="" className="green-char" />
                        <img src="./images/red.svg" alt="" className="red-char" />
                        <img src="./images/blueC.svg" alt="" className="blue-char" />
                        <img src="./images/pinkA.svg" alt="" className="pink-char" />
                    </div>

                    <div className="register-form">
                        <h2>會員註冊</h2>
                        <form>
                            <div className="register-form-content">
                                {/* 使用者名稱 */}
                                <label htmlFor="username">*姓名：</label>
                                <input type="text" id="username" title="姓名" placeholder="請輸入姓名" required
                                    {...register('username')} />
                                <label htmlFor="email">*Email：</label>
                                <input type="email" id="email" title="Email" placeholder="請輸入Email" required
                                    {...register('email')} />

                                <label htmlFor="uesrpw">*請輸入密碼：</label>
                                <input type="password" id="uesrpw" title="密碼" placeholder="請輸入6~8英數混合字元"
                                    {...register('uesrpw')} />
                                {/* <label  htmlFor="password-1">再次確認密碼</label>
                            <input type="password" name="password" id="password-1" title="再次確認密碼" placeholder="請輸入6~8英數混合字元" /> */}
                            </div>
                            <div className="remember-password">
                                <input type="checkbox" name="remember" id="remember" title="記住密碼" value="記住密碼" />
                                <label htmlFor="">記住這個帳號密碼</label>
                            </div>
                            {/* <Link to='/'></Link>  */}
                            <button type="submit" className="register-button">註冊</button>
                        </form>
                        <div className="register-divider">
                            <hr />
                            <span>OR</span>
                            <hr />
                        </div>
                        <div className="social-register">
                            <button className="facebook"><img src="./images/icon_fb.svg" alt="" /></button>
                            <button className="apple"><img src="./images/icon_apple.svg" alt="" /></button>
                            <button className="google"><img src="./images/icon_google.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <PhonePage></PhonePage>

        </>
    )
}