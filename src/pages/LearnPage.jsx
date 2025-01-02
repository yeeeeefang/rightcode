import CircularProgress from "../components/CircularProgress"
import LearnCard from "../components/LearnCard"
import LearnPageExp from "../components/LearnPageExp"
import LearnTitle from "../components/LearnTitle"
import LearnPagePerson from "../components/LearnPagePerson"
import NavbarBack from "../components/NavbarBack"
import { useState } from "react"
import "../assets/css/LearnPage.css"

function LearnPage() {

    const [selectedSection, setSelectedSection] = useState(null); // 初始顯示第一個標題


    return (
        <>
            <section id="LEP-Home">
                <NavbarBack />
                <div id="LEP-bk-big">
                    <div className="LEP-img-top">
                        {/* <img src="./images/homeBubble.png" alt="" /> */}
                    </div>
                    <div className="LEP-content-top-all">
                        <div className="LEP-content-top">
                            <p className="LEP-content-top-1">每個困境中都存在著機會。</p>
                            <p className="LEP-content-top-2">In the middle of every difficulty lies opportunity.</p>
                            <p className="LEP-content-top-3">- 愛因斯坦 Albert Einstein</p>
                        </div>
                        <div className="LEP-title">
                            <LearnTitle onSelectTitle={setSelectedSection} />
                        </div>
                    </div>
                    <div className="LEP-PersonCard">
                        <div className="LEP-personAll">
                            <div className="LEP-PersonEXP">
                                <div><CircularProgress /></div>
                                <div className="LEP-PE">
                                    <div className="LEP-Person"><LearnPagePerson /></div>
                                    <div><LearnPageExp /></div>
                                </div>
                            </div>
                        </div>
                        <div className="LEP-card">
                            <LearnCard selectedSection={selectedSection} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LearnPage