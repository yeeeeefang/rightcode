import CircularProgressCss from "../components/CircularProgressCss"
import LearnCardCss from "../components/LearnCardCss"
import LearnPageExpCss from "../components/LearnPageExpCss"
import LearnTitleCss from "../components/LearnTitleCss"
import "../assets/css/LearnPageCss.css"
import LearnPagePersonCss from "../components/LearnPagePersonCss"
import NavbarBack from "../components/NavbarBack"
import { useState } from "react"


function LearnPageCss() {

    const [selectedSection, setSelectedSection] = useState(null); // 初始顯示第一個標題


    return (
        <>
            <section id="LEPCss-Home">
                <NavbarBack />
                <div id="LEPCss-bk-big">
                    <div className="LEPCss-img-top">
                       {/*  <img src="./images/homeBubble.png" alt="" /> */}
                    </div>
                    <div className="LEPCss-content-top">
                        <p className="LEPCss-content-top-1">每個困境中都存在著機會。</p>
                        <p className="LEPCss-content-top-2">In the middle of every difficulty lies opportunity.</p>
                        <p className="LEPCss-content-top-3">- Albert Einstein</p>
                    </div>
                    <div className="LEPCss-title">
                        <LearnTitleCss onSelectTitle={setSelectedSection} />
                    </div>
                    <div className="LEPCss-PersonCard">
                        <div className="LEPCss-personAll">
                            <div className="LEPCss-PersonEXP">
                                <div className="LEPCss-PE">
                                    <div className="LEPCss-Person"><LearnPagePersonCss /></div>
                                    <div><LearnPageExpCss /></div>
                                </div>
                                <div><CircularProgressCss /></div>
                            </div>
                        </div>
                        <div className="LEPCss-card">
                            <LearnCardCss selectedSection={selectedSection} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LearnPageCss