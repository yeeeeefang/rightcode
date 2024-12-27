import { Link } from "react-router-dom"

function LinkPage() {
    return (
        <>
            {/* 這頁是個臨時Link頁面 */}

            <div>
                等待個頁完成再將首頁調整
                <Link to='/'><p>回到主頁</p></Link>
                <hr />
                志祥區
                <Link to='/Home'><p>進入首頁</p></Link>
                <Link to='/LearnPage'><p>進入課程總覽頁</p></Link>
                <Link to='/LearnGame'><p>進入小試身手頁</p></Link>
                <Link to='/LearnGameChoose'><p>進入小試身選擇頁</p></Link>
                <Link to='/Hamburger'><p>漢堡按鈕</p></Link>
                <hr />
                宜芳區
                <Link to='/Trend'><p>進入學習趨勢頁</p></Link>
                <Link to='/LearnArea'><p>進入學習主頁</p></Link>
                <hr />
                育瑱區
                <Link to='/LearnHome'><p>進入學習首頁</p></Link>

                <Link to='/Login'><p>進入登入頁</p></Link>
                <Link to='/Register'><p>進入註冊頁</p></Link>
                <hr />

                雨萱區
                <Link to='/LearnSelect'><p>進入學習選擇頁</p></Link>
                <Link to='/Member'><p>進入會員頁</p></Link>

            </div>
        </>
    )
}
export default LinkPage