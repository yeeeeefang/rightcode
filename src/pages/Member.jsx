import "../assets/css/Member.css"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom'
import PhonePage from "./PhonePage"

export default function Member() {
    const awardNames = [
        {
            id: "1",
            name: "我是獎盃名稱1",
        },
        {
            id: "2",
            name: "我是獎盃名稱2",
        },
        {
            id: "3",
            name: "我是獎盃名稱3",
        },
        {
            id: "4",
            name: "我是獎盃名稱4",
        },
        {
            id: "5",
            name: "我是獎盃名稱5",
        },
        {
            id: "6",
            name: "我是獎盃名稱6",
        },
    ]

    const awardNames2 = [
        {
            id: "1",
            name: "我是獎盃名稱1",
        },
        {
            id: "2",
            name: "我是獎盃名稱2",
        },
        {
            id: "3",
            name: "我是獎盃名稱3",
        },
        {
            id: "4",
            name: "我是獎盃名稱4",
        },
        {
            id: "5",
            name: "我是獎盃名稱5",
        },
        {
            id: "6",
            name: "我是獎盃名稱6",
        },
    ]

    const awardNames3 = [
        {
            id: "1",
            name: "我是獎盃名稱1",
        },
        {
            id: "2",
            name: "我是獎盃名稱2",
        },
        {
            id: "3",
            name: "我是獎盃名稱3",
        },
        {
            id: "4",
            name: "我是獎盃名稱4",
        },
        {
            id: "5",
            name: "我是獎盃名稱5",
        },
        {
            id: "6",
            name: "我是獎盃名稱6",
        },
    ]

    const awardNames4 = [
        {
            id: "1",
            name: "我是獎盃名稱1",
        },
        {
            id: "2",
            name: "我是獎盃名稱2",
        },
        {
            id: "3",
            name: "我是獎盃名稱3",
        },
        {
            id: "4",
            name: "我是獎盃名稱4",
        },
        {
            id: "5",
            name: "我是獎盃名稱5",
        },
        {
            id: "6",
            name: "我是獎盃名稱6",
        },
    ]

    return (
        <>
            <div id="nav">
                <Navbar />
            </div>
            <div id="memberPage">
                {/* 會員總資料 */}
                <section id="member">
                    {/* 會員圖片 */}
                    <div className="memberPic"><img src="./images/greenE.svg" alt="會員圖片" />
                    </div>
                    <div id="memberAll">
                        {/* 會員資料 */}
                        <div className="memberInfo">
                            <h2>個人資料</h2>
                            <div className="name">
                                <p>姓名：</p>
                                <p>王曉明</p>
                            </div>
                            <div className="sexal">
                                <p>性別：</p>
                                <p>男</p>
                            </div>
                            <div className="age">
                                <p>年齡：</p>
                                <p>13歲</p>
                            </div>
                            <div className="school">
                                <p>學校：</p>
                                <p>快樂國中</p>
                            </div>
                            <div className="time">
                                <p>加入時間：</p>
                                <p>2024/12/03</p>
                            </div>
                        </div>
                        {/* 會員獎盃 */}
                        <div className="memberAward">
                            <h2>獎盃挑戰</h2>
                            <div className="award">
                                <div className="aPic1"><img src="./images/award.svg" alt="" />
                                    <span className="awardName">我是獎盃名稱</span></div>
                                <div className="aPic1"><img src="./images/award.svg" alt="" />
                                    <span className="awardName">我是獎盃名稱</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="memberRight">
                    <div id="rightUp">
                        {/* 課程進度 */}
                        <section id="progress">
                            <div className="progressTitle">
                                <img src="./images/icon_blue.svg" alt="" />
                                <h2>課程進度</h2>
                            </div>

                            <Link to="/LearnPage" className="course">
                                <img src="./images/memberHTML.png" alt="" className="html" />
                                <div className="courseInfo">
                                    <h2>HTML 第<span>5</span>堂</h2>
                                    <div className="progress">
                                        <progress value={70} max={100} /> <p>70%</p>
                                    </div>
                                    <h3>最後學習時間：<span>2024年12月25日</span></h3>
                                </div>
                            </Link>


                            <Link to="/LearnPage" className="course">
                                <img src="./images/memberCSS.png" alt="" className="CSS" />
                                <div className="courseInfo">
                                    <h2>CSS 第<span>5</span>堂</h2>
                                    <div className="progress">
                                        <progress value={20} max={100} /> <p>20%</p>
                                    </div>
                                    <h3>最後學習時間：<span>2024年12月25日</span></h3>
                                </div>
                            </Link>

                        </section>
                        {/* 收藏課程 */}
                        <section id="collectionAll">
                            <div className="collectionTitle">
                                <img src="./images/icon_pink.svg" alt="" />
                                <h2>收藏課程</h2>
                            </div>
                            <Link to="/LearnArea" className="collect1">
                                <p className="title">HTML</p>
                                <p>HTML的各種標籤</p>
                            </Link>

                            <Link to="/LearnArea" className="collect">
                                <p className="title">HTML</p>
                                <p>HTML的各種標籤</p>
                            </Link>

                            <Link to="/LearnArea" className="collect">
                                <p className="title">HTML</p>
                                <p>HTML的各種標籤</p>
                            </Link>

                            <Link to="/LearnArea" className="collect">
                                <p className="title">HTML</p>
                                <p>HTML的各種標籤</p>
                            </Link>

                        </section>
                    </div>

                    {/* 獎盃總表 */}
                    <section id="award">
                        {/* 總堂數 */}
                        <div className="awardContent">
                            <h2><img src="./images/iconGreenA.png" alt="" />總堂數</h2>
                            <div className="awardPic">
                                <div className="aPic">
                                    {
                                        awardNames.map((data) => {
                                            return (
                                                <div key={data.id} className="aPic1">
                                                    <img src="./images/award.svg" alt="獎盃" />
                                                    <span className="awardName">{data.name}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* 挑戰次數 */}
                        <div className="awardContent">
                            <h2><img src="./images/iconRed.png" alt="" />挑戰次數</h2>
                            <div className="awardPic">
                                <div className="aPic">
                                    {
                                        awardNames2.map((data) => {
                                            return (
                                                <div key={data.id} className="aPic1">
                                                    <img src="./images/award.svg" alt="獎盃" />
                                                    <span className="awardName">{data.name}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* HTML */}
                        <div className="awardContent">
                            <h2><img src="./images/iconBlue.png" alt="" />HTML</h2>
                            <div className="awardPic">
                                <div className="aPic">
                                    {
                                        awardNames3.map((data) => {
                                            return (
                                                <div key={data.id} className="aPic1">
                                                    <img src="./images/award.svg" alt="獎盃" />
                                                    <span className="awardName">{data.name}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* CSS */}
                        <div className="awardContent">
                            <h2><img src="./images/iconPink.png" alt="" />CSS</h2>
                            <div className="awardPic">
                                <div className="aPic">
                                    {
                                        awardNames4.map((data) => {
                                            return (
                                                <div key={data.id} className="aPic1">
                                                    <img src="./images/award.svg" alt="獎盃" />
                                                    <span className="awardName">{data.name}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <PhonePage></PhonePage>


        </>
    )
}