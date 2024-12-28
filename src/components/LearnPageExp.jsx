import { useEffect, useState } from 'react';
import '../assets/css/LearnPageExp.css'

function LearnPageExp() {


    const [progressValues, setProgressValues] = useState([0, 0, 0, 0]); // 初始化为 0
    const targetValues = [50, 30, 70, 50]; // 目标值

    useEffect(() => {
        const intervals = targetValues.map((target, index) => {
            let currentValue = 0;
            return setInterval(() => {
                if (currentValue < target) {
                    currentValue += 1; // 每次增加 1
                    setProgressValues((prev) =>
                        prev.map((value, i) => (i === index ? currentValue : value))
                    );
                } else {
                    clearInterval(intervals[index]); // 达到目标值时清除 interval
                }
            }, 20); // 每 20 毫秒增加 1
        });

        return () => intervals.forEach(clearInterval); // 清除所有 intervals
    }, []);

    return (
        <>
            <section id='LearnPageExp'>
                <div className='LearnPageExp-bk-big'>
                    <div className='LearnPageExp-content-1'>
                        <p>目前獲得的能力:</p>
                    </div>
                    <div className='LearnPageExp-bk-1'>
                        <div className='LearnPageExp-img-1'>
                            <img src="./images/icon_greenB.svg" alt="" />
                        </div>
                        <div className='LearnPageExp-content-2'>
                            <p>邏輯思考</p>
                            <progress value={progressValues[0]} max={100} className='LearnPageExp-progress' />
                        </div>
                        <div className='LearnPageExp-img-1'>
                            <img src="./images/icon_greenB.svg" alt="" />
                        </div>
                        <div className='LearnPageExp-content-2'>
                            <p>問題解決</p>
                            <progress value={progressValues[1]} max={100} className='LearnPageExp-progress' />
                        </div>
                        <div className='LearnPageExp-img-1'>
                            <img src="./images/icon_greenB.svg" alt="" />
                        </div>
                        <div className='LearnPageExp-content-2'>
                            <p>決策能力</p>
                            <progress value={progressValues[2]} max={100} className='LearnPageExp-progress' />
                        </div>
                        <div className='LearnPageExp-img-1'>
                            <img src="./images/icon_greenB.svg" alt="" />
                        </div>
                        <div className='LearnPageExp-content-2'>
                            <p>創意思維</p>
                            <progress value={progressValues[3]} max={100} className='LearnPageExp-progress' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LearnPageExp
