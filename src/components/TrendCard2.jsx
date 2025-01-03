import { useNavigate } from 'react-router-dom';
import '../../src/assets/css/TrendCard2.css'
function TrendCard2() {
    const turnLearnArea = useNavigate();
    const handleturn =()=>turnLearnArea('/LearnArea');
    return (
        <>
            <div className="tdcard">
                <section className='tdtd1'>
                    <div className="ttitle1">
                        <div className='trendtitle1'>
                            <img className='titleicon-1' src="./images/icon_greenA.svg" alt="" />
                            <h3>充滿成就感</h3>
                        </div>
                    </div>
                    <div className="tdcard-1">
                        <div className="card1-1" onClick={handleturn}>
                            <h3 className="learn-1">HTML</h3>
                            <img src="./images/trendCourse1.svg" alt="" />
                            <div className="item-1">
                                <h4 className="learn1-1">文字樣式-1</h4>
                                <p className="content-1">學習人數 2391人</p>
                                <p className="content-1">收藏人數 1022人</p>
                            </div>
                        </div>
                        <div className="card2-1" onClick={handleturn}>
                            <h3 className="learn-1">CSS</h3>
                            <img src="./images/trendCourse2.svg" alt="" />
                            <div className="item-1">
                                <h4 className="learn1-1">背景-1</h4>
                                <p className="content-1">學習人數 473人</p>
                                <p className="content-1">收藏人數 294人</p>
                            </div>
                        </div>
                        <div className="card3-1" onClick={handleturn}>
                            <h3 className="learn-1">HTML</h3>
                            <img src="./images/trendCourse3.svg" alt="" />
                            <div className="item-1">
                                <h4 className="learn1-1">音檔與影片</h4>
                                <p className="content-1">學習人數 930人</p>
                                <p className="content-1">收藏人數 467人</p>
                            </div>
                        </div>
                        <div className="card4-1" onClick={handleturn}>
                            <h3 className="learn-1">CSS</h3>
                            <img src="./images/trendCourse4.svg" alt="" />
                            <div className="item-1">
                                <h4 className="learn1-1">顏色</h4>
                                <p className="content-1">學習人數 1930人</p>
                                <p className="content-1">收藏人數 874人</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='tdtd2'>
                    <div className="ttitle2">
                        <div className='trendtitle2'>
                            <img className='titleicon-1' src="./images/icon_blueB.svg" alt="" />
                            <h3>我能挑戰自己</h3>
                        </div>
                    </div>
                    <div className="tdcard-2">
                        <div className="card5-1" onClick={handleturn}>
                            <h3 className="learn-1">CSS</h3>
                            <img src="./images/trendCourse5.svg" alt="" />
                            <div className="item-1">
                                <h4 className="learn1-1">邊距</h4>
                                <p className="content-1">學習人數 930人</p>
                                <p className="content-1">收藏人數 467人</p>
                            </div>
                        </div>
                        <div className="card6-1" onClick={handleturn}>
                            <h3 className="learn-1">HTML</h3>
                            <img src="./images/trendCourse6.svg" alt="" />
                            <div className="item-1">
                                <h4 className="learn1-1">表單擴展</h4>
                                <p className="content-1">學習人數 1121人</p>
                                <p className="content-1">收藏人數 855人</p>
                            </div>
                        </div>
                        <div className="card7-1" onClick={handleturn}>
                            <h3 className="learn-1">CSS</h3>
                            <img src="./images/trendCourse7.svg" alt="" />
                            <div className="item-1">
                                <h4 className="learn1-1">定位-1</h4>
                                <p className="content-1">學習人數 2512人</p>
                                <p className="content-1">收藏人數 1111人</p>
                            </div>
                        </div>
                        <div className="card8-1" onClick={handleturn}>
                            <h3 className="learn-1">HTML</h3>
                            <img src="./images/trendCourse8.svg" alt="" />
                            <div className="item-1">
                                <h4 className="learn1-1">嵌入內容</h4>
                                <p className="content-1">學習人數 930人</p>
                                <p className="content-1">收藏人數 467人</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='out'>
                    <div className="sofa">
                        <img src="./images/trendSofa.svg" alt="" />
                    </div>
                    <img className='deco1-1' src="./images/trendDecoC.png" alt="" />
                    <img className='deco1-2' src="./images/trendDecoD.png" alt="" />
                </section>

            </div>


        </>
    )
}
export default TrendCard2