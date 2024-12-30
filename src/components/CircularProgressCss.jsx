import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useEffect, useState } from 'react';

function CircularProgressCss() {

    const targetPercentage = 50; // 目标百分比
    const [percentage, setPercentage] = useState(0); // 初始值为 0

    useEffect(() => {
        let currentPercentage = 0;
        const interval = setInterval(() => {
            if (currentPercentage < targetPercentage) {
                currentPercentage += 1; // 每次增加 1%
                setPercentage(currentPercentage); // 更新状态
            } else {
                clearInterval(interval); // 达到目标值后清除 interval
            }
        }, 20); // 每 20 毫秒增加 1%

        return () => clearInterval(interval); // 组件卸载时清除 interval
    }, []);
    return (
        <>
            <div style={{ width: 250, height: 250, fontFamily: 'nunito' }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={13}
                    styles={buildStyles({
                        // 路徑和軌蹟的旋轉，以圈數為單位 (0-1)
                        /* rotation : 0.25 , */

                        // 末端是否使用圓角或平角 - 可以使用 'butt' 或 'round' 
                        strokeLinecap: 'round',

                        // 文字大小
                        textSize: '24px',

                        //
                        // 動畫從一個百分比轉到另一個百分比需要多長時間（以秒為單位）
                        pathTransitionDuration: 0.1,

                        // 可以更詳細地指定路徑轉換，或完全刪除它
                        // pathTransition: 'none',

                        // 顏色
                        pathColor: `rgba(222, 91, 91)`, //內圈顏色
                        textColor: '#de5b5b', //文字顏色
                        trailColor: '#fff', //剩餘圈數顏色
                        backgroundColor: '#fff',
                    })}
                />
            </div>
        </>
    )
}
export default CircularProgressCss