import { useEffect } from 'react';
import '../assets/css/LearnArea2.css'
import $ from 'jquery';

function LearnArea2() {
    
    return (
        <>
            <section id='LearnAreaall2'>
                <div className="areaTitle">
                    <div className="areaBlue">
                        <img src="/images/blueB.svg" alt="" />
                    </div>
                    <img className='areaimportant' src="/images/LearnArea-important.svg" alt="" />
                    <h2 className='areah2'>你能想像字體能做甚麼變化嗎?</h2>

                </div>
                <div className="areaContent">
                    <div className="diabox1">
                        {/* 第一個對話框 */}
                        <div >
                            <p className='areap1 diatext'>在生活當中會看到許多字體，小朋友們可以舉例看看嗎？</p>
                        </div>
                        {/* 第二對話框(紅) */}
                        <div className='areatwo'>
                            <div className='areap2'>
                                <p className='areap2-1 diatext'>這些字體有些大大的像太陽</p>
                                <p className='areap2-2 diatext'>有些小小的像星星</p>
                            </div>

                            <div className='areaimg1'>
                                <img className='areaimg1-1' src="/images/redBack.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="diabox2">
                        {/* 第三個 (粉)*/}
                        <div className='areathree'>
                            <div className='areap3'>
                                <p className='diatext'>甚至還有斜斜的像溜滑梯！</p>
                            </div>
                            <div>
                                <img src="/images/pinkBack.svg" alt="" />
                            </div>
                        </div>
                        {/* 第四個(綠) */}
                        <div className='areafour'>
                            <div className='areap4'>
                                <p className='areap4-1 diatext'>有些粗粗的像電線杆，</p>
                                <p className='areap4-2 diatext'>也有些細細的像電線</p>
                            </div>
                            <div>
                                <img src="/images/greenBack.svg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            
        </>
    )
}
export default LearnArea2