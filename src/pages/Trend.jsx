import TrendCard from "../components/TrendCard";
import TrendCard2 from "../components/TrendCard2";
import "../assets/css/Trend.css"
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Trend() {
  //每次點到時，都是從頂部開始
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="div1" >
        <Navbar />

        <div className="lightcontainer">

          <img className="light" src="/images/trendLight.png" alt="" />
          <h3 className="hottitle">熱門學習趨勢</h3>
          <div className="container">
            {/* 
            <img className="light1" src="./public/images/trendLightA.svg" alt="" /> 
             <img className="light2" src="./public/images/trendLightB.svg" alt="" />
             <img className="light3" src="./public/images/trendLightC.svg" alt="" /> */}
            <svg className="light1" width="1484" height="823" viewBox="0 0 1484 823" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 822.225L638.5 0H764L1483.5 814L0 822.225Z" fill="rgba(255, 233, 162, 0.8)" />
            </svg>

            <svg className="light2" width="997" height="823" viewBox="0 0 997 823" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 822.653L451.5 0H565L996.663 822.656L0 822.653Z" fill="rgb(252, 238, 194)" />
            </svg>
            <svg className="light3" width="657" height="823" viewBox="0 0 657 823" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 822.186L296 0H382.5L656.144 822.186H0Z" fill="#FEF5D3" />
            </svg>
          </div>
        </div>
        <TrendCard />
        <img className="deco-1" src="/images/trendDecoA.png" alt="" />
        <img className="deco-2" src="/images/trendDecoB.png" alt="" />
        <img className="deco-3" src="/images/trendDecoC.png" alt="" />
        <div id="item3">
          <div className="item4"><img className="char-1" src="/images/blueA.svg" alt="" /></div>
          <div className="item4"><img className="char-2" src="/images/redC.svg" alt="" /></div>
          <div className="item4"><img className="char-3" src="/images/pinkE.svg" alt="" /></div>
        </div>
        <div >
          <img className="path" src="/images/trendPath.svg" alt="" />
        </div>
      </section>
      <section id="div2">
        <TrendCard2 />
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}

