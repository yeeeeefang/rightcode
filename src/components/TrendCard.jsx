import { useNavigate } from 'react-router-dom';
import '../../src/assets/css/TrendCard.css'
function TrendCard() {
 
    const turnLearnArea = useNavigate();
    const handleturn =()=>turnLearnArea('/LearnArea');
    return (
        <div className="cardcontent">
            
            <div className="card1" onClick={handleturn}>
                <h3 className="learn">CSS</h3>
                <img src="./images/trendCourse2.svg" alt="" />
                <div className="item">
                    <h4 className="learn">背景</h4>
                    <p className="content">學習人數 2391人</p>
                    <p className="content">收藏人數 1022人</p>
                </div>
            </div>
            <div className="card2" onClick={handleturn}>
                <h3 className="learn">HTML</h3>
                <img src="./images/trendCourse1.svg" alt="" />
                <div className="item">
                    <h4 className="learn">文字樣式-1</h4>
                    <p className="content">學習人數 3123人</p>
                    <p className="content">收藏人數 2211人</p>
                </div>
            </div>
            <div className="card3" onClick={handleturn}>
                <h3 className="learn">CSS</h3>
                <img src="./images/trendCourse3.svg" alt="" />
                <div className="item">
                    <h4 className="learn">邊距與內距</h4>
                    <p className="content">學習人數 1930人</p>
                    <p className="content">收藏人數 1467人</p>
                </div>
            </div>
        </div>
    )
}
export default TrendCard;