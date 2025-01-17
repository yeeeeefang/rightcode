import { useEffect, useRef } from 'react'
import '../assets/css/Home.css'
// import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'
import Aos from 'aos'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PhonePage from './PhonePage'


function Home() {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const eyes = [
                { element: document.querySelector('.greenLeftEye'), centerX: 233.88, centerY: 311.33 },
                { element: document.querySelector('.greenRightEye'), centerX: 392.85, centerY: 158.04 },
                { element: document.querySelector('.redRightEye'), centerX: 1657.66, centerY: 188.94 },
                { element: document.querySelector('.redLeftEye'), centerX: 1474, centerY: 150.25 },
                { element: document.querySelector('.pinkLeftEye'), centerX: 267.04, centerY: 875.77 },
                { element: document.querySelector('.pinkRightEye'), centerX: 489.84, centerY: 887.29 },
                { element: document.querySelector('.blueRightEye'), centerX: 1644.83, centerY: 812.64 },
                { element: document.querySelector('.blueLeftEye'), centerX: 1595.06, centerY: 930.49 },
            ];

            eyes.forEach((eye) => {
                if (eye.element) { // 檢查元素是否存在
                    const dx = event.pageX - eye.centerX;
                    const dy = event.pageY - eye.centerY;
                    const angle = Math.atan2(dy, dx);

                    // 限制瞳孔最大移動範圍，例如 20px
                    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 20);

                    const translateX = Math.cos(angle) * distance;
                    const translateY = Math.sin(angle) * distance;

                    eye.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
                }
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        // 清理事件監聽器
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // 空依賴陣列確保只在組件掛載後執行一次

    useEffect(() => {
        Aos.init()
    }, [])

    const blueARef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (blueARef.current) {
                const rect = blueARef.current.getBoundingClientRect(); // 获取元素的位置
                const windowHeight = window.innerHeight;

                // 判断元素是否进入视窗的一半
                if (rect.top <= windowHeight / 2 && rect.bottom >= 0) {
                    blueARef.current.classList.add('active'); // 添加动画类
                } else {
                    blueARef.current.classList.remove('active'); // 移除动画类
                }
            }
        };

        // 添加滚动监听
        window.addEventListener('scroll', handleScroll);

        // 清除监听
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const redRef = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            if (redRef.current) {
                const rect = redRef.current.getBoundingClientRect(); // 获取元素的位置
                const windowHeight = window.innerHeight;

                // 判断元素是否进入视窗的一半
                if (rect.top <= windowHeight / 2 && rect.bottom >= 0) {
                    redRef.current.classList.add('active'); // 添加动画类
                } else {
                    redRef.current.classList.remove('active'); // 移除动画类
                }
            }
        };

        // 添加滚动监听
        window.addEventListener('scroll', handleScroll);

        // 清除监听
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const pinkRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (pinkRef.current) {
                const rect = pinkRef.current.getBoundingClientRect(); // 获取元素的位置
                const windowHeight = window.innerHeight;

                // 判断元素是否进入视窗的一半
                if (rect.top <= windowHeight / 2 && rect.bottom >= 0) {
                    pinkRef.current.classList.add('active'); // 添加动画类
                } else {
                    pinkRef.current.classList.remove('active'); // 移除动画类
                }
            }
        };

        // 添加滚动监听
        window.addEventListener('scroll', handleScroll);

        // 清除监听
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <div id='Home-page-1'>
                {/*  */}
                <svg version="1.1" id="img1_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 1920 1080" >
                    <g>
                        <rect className="st0" width="1920" height="1080" />
                    </g>
                    <path className="st1" d="M542.43,0c7.04,13.57,9.91,27.13,12.94,41.97c14.2,69.49,11.2,116.1-11.4,183.33
	c-35.11,104.34-137.44,180.16-239.53,211.98c-61.32,19.12-116.94,21.93-180.48,12.54c-10.5-1.55-28.45-3.89-37.95-6.75
	c-6.09-1.84-10.46-5.97-15.96-8.19c-9.01-3.64-19.03-4.45-28.17-9.27c-5.36-2.83-9.16-7.48-13.7-10.44
	c-5.93-3.87-15.55-8.23-20.33-12.27c-3.72-3.15-4.42-6.77-7.85-9.65V366.7c0-0.22,1.29-1.86,1.29-4.08
	C1.62,241.76,0.87,120.86,1.21,0C181.6-0.01,362.04,0.02,542.43,0z" />
                    <path className="st2" d="M364.57,104.16c32.75-4.47,64.8,27.46,76.98,55.2c12.14,27.65-2.97,71.36-36.23,74.76
	c-44.08,4.49-79.41-36.23-81.58-77.74C322.43,131.44,338.88,107.67,364.57,104.16z"/>
                    <path className="st3" d="M249.76,177.7c18.88-3.83,26.6,27.5,4.26,29.63C237.6,208.9,233.48,181.01,249.76,177.7z" />
                    <path /* 綠色右邊眼睛 */ className="st4 greenRightEye" d="M392.85,158.04c22.72-3.26,36.07,16.82,32.84,37.6c-1.16,7.45-12.68,18.41-20.15,19.69
	c-19.14,3.27-30.64-8.54-34.99-26C366.61,173.51,377.02,160.31,392.85,158.04z"/>
                    <path className="st5" d="M1670.44,1.17H1920v321.29c-10.5,4.21-20.72,9.65-31.34,13.62c-23.83,8.89-49.19,12.48-74.45,15.47
	c-18.23,2.15-36.18,4.79-54.41,5.02c-40.71,0.51-81.15-0.96-121.65-3.75c-23.23-1.6-34.99-3.22-57.39-9.73
	c-57.03-16.58-110.57-37.66-165.86-58.27c-17.96-6.7-30.35-9.73-48.08-19.04c-28.66-15.05-58.96-33.89-85.18-52.81
	c-32.29-23.3-52.71-42.2-76.86-73.79c-7.36-9.64-16.11-16.47-20.81-28.54c-2.67-6.87-5.85-19.28-7.49-26.68
	c-3.17-14.39-3.46-20.79-0.03-35.26c4.07-17.15,11.08-34.13,22.74-47.51l466.17-0.03 M1667,1"/>
                    <path className="st6" d="M1617,102.01c11.01,3.95,28.77,37.04,15.57,44c-16.04,8.44-16.89-18.51-20.67-27.55
	c-1.89-1.41-29.91,9.49-34.93,10.03c-3.75,0.41-7.5,0.65-9.2-3.34c-0.54-1.51-0.2-2.74,0.44-4.14c3.09-6.65,35.75-16.79,43.72-19
	h5.07L1617,102.01z"/>
                    <path /* 紅色右邊眼睛 */ className="st7 redRightEye" d="M1657.66,188.94c10.22-0.72,19.95,5.6,23.18,15.41c5.31,16.15-6.72,47.9-21.97,56.37
	c-20.65,11.48-35.59-1.42-34.65-23.42c0.77-18.13,12.25-46.88,33.45-48.37L1657.66,188.94z"/>
                    <path /* 紅色左邊眼睛 */ className="st7 redLeftEye" d="M1474,150.25c20.95-2.99,29.37,11.14,27.04,30.35c-1.74,14.36-23.22,41.78-39.16,40.47
	c-35.13-2.88-16.98-66.66,12.11-70.83L1474,150.25z"/>
                    <path className="st8" d="M574.77,1080H1.04c-1.57-12.3,7.32-20.6,11.8-31.09c12.63-29.51,23.72-60.81,36.09-90.72
	c24.31-58.76,47.83-118.52,75.1-176.04c2.35-4.95,7.32-10.09,9.56-15.31c1.94-4.52,2.33-9.45,4.51-14.14
	c11.96-25.84,34.25-21.49,57.7-23.16c81.24-5.77,161.38-5.25,242.65-4.9c33.96,0.15,70.86-6.76,103.41-5.08
	c10.02,0.51,21.16,3.46,31.06,3.77c21.92,0.7,41.74-1.97,64.41,1.56c32.79,5.09,19.84,48.03,15.48,69.55
	c-8.92,44.07-19.95,90.79-30.84,134.49c-9.72,38.95-24.52,74.93-36.33,112.86c-3.95,12.66-5.59,25.96-10.86,38.23L574.77,1080z"/>
                    <path /* 粉色左邊眼睛 */ className="st9 pinkLeftEye" d="M267.04,875.77c-11.55-11.38-30.72-32.15-18.21-49.57c3.7-5.15,13.18-7.98,19.27-6.81
	c3.76,0.72,14.18,11.65,16.17,11.16c7.28-12.25,27.29-21.67,37.29-7.37c10.55,15.08-6.75,42.89-17.32,54.61
	c-17.44,19.34-20.73,14.19-37.2-2.03L267.04,875.77z"/>
                    <path /* 粉色右邊眼睛 */ className="st10 pinkRightEye" d="M489.84,887.29c-4.84,4.52-12.79,5.8-18.71,2.76c-5.14-2.64-26.98-30.52-29.45-36.47
	c-12.25-29.56,12.23-42.84,33.19-23.11c8.46-5.55,23.39-17.39,32.63-7.82c4.82,4.99,8.39,13.58,7.36,20.63
	c-1.68,11.47-16.52,36.04-25.03,43.98L489.84,887.29z"/>
                    <path className="st11" d="M394.44,923.78c-9.89-2.49-17.75,5.29-26.76,5c-4.94-0.16-0.81-7.14,1.95-9.28
	c24.55-19.03,57.29-2.49,26.07,22.29c6,4.11,13.45,10.88,13.71,18.68c0.66,19.64-45.48,33.3-41.11,11.19
	c1.61-8.13,24.93-4.58,24.95-12.46c0.04-11-28.99,1.56-23.17-15.63C372.57,936.3,392.17,932.7,394.44,923.78L394.44,923.78z"/>
                    <path className="st12" d="M1920,605.46V1080h-399.83c-7.13-17.07-18.47-33.49-25.85-50.19c-18.13-40.94-36.16-82.17-57.31-121.79
	c-11.44-21.4-40.64-60.16-41.96-83.25c-1.45-25.48,39.71-33.74,56.8-41.04c17.44-7.43,32.06-17.33,48.38-25.58
	c37.01-18.71,77.14-30.14,115.27-46.88c15.64-6.87,30.88-16.66,46.59-23.11c17.74-7.27,38.45-12.35,56.62-18.77
	c54.88-19.38,109.71-39.02,164.7-58.61c8.3-2.96,14.58-8.84,24.47-8.25c4.23,0.24,7.84,3.03,12.14,2.92V605.46z"/>
                    <path className="st13" d="M1626.82,872.05c-2.63,8.82-12.09,16.79-8.42,27.45c0.38,1.11,14.7,8.57,19.02,13.67
	c42.46,49.93-5.02,110.76-60.02,78.4c-26-15.3-32.84-42.74-23.31-70.63c6.93-20.26,33.04-29.62,52.7-24.8
	c-0.23-10.22,4.91-19.41,9.83-27.93l-16.69-18.48c-29.2-49.06,28.47-104.01,77.05-68.41c50.83,37.25,4.38,107.87-50.19,90.75
	L1626.82,872.05z M1674.6,792.94c-20.32-19.15-50.83-16.14-65.54,8.14c-10.5,17.33-14.17,30.48-0.8,47.44
	C1646.82,897.45,1718.28,834.1,1674.6,792.94L1674.6,792.94z M1594.96,905.22c-4.43,0.01-13.82,2.42-17.36,5.09
	c-1.91,1.44-14.19,13.83-15.52,15.77c-24.54,35.8,30.49,85.56,66.78,59.58c34.42-24.64,6.47-80.59-33.91-80.44L1594.96,905.22z"/>
                    <path className="st14" d="M1657.52,899.14c8.15-2.72,15.08,9.5,21.26,9.82c5.28,0.26,12.12-9.92,21.02-6.94
	c10.13,9.69-10.46,26.67-19.35,25.17c-7.83-1.31-35.71-23.76-22.92-28.03V899.14z"/>
                    <path /* 藍色右邊眼睛 */ className="st14 blueRightEye" d="M1644.83,812.64c24.56-5.04,25.78,27.12-1.75,29.53C1616.87,844.46,1622.36,817.25,1644.83,812.64z" />
                    <path /* 藍色左邊眼睛 */ className="st14 blueLeftEye" d="M1595.06,930.49c9.62-1.96,30.88,18.8,29.97,28.53c-1.27,13.5-16.08,16.53-25.37,7.5
	C1592.48,959.54,1578.51,933.88,1595.06,930.49L1595.06,930.49z"/>
                    <path /* Ｒ字 */ className="st4 handwriting" d="M661.88,506.32c-0.04,0.61-1.21,2.13-1.35,3.84c-0.67,7.69,0.45,13.78-3.18,21.43
	c-5.51,11.62-23.04,12.84-30.27,1.71c-7.81-12.01-1.35-45.95-1.45-61.99c-0.06-9.58-0.99-21-1.3-31.07
	c-0.38-12.23-2.79-26.71-2.75-38.81c0.03-6.6,2.48-15.38,2.44-21.99c-0.09-17-6.99-37.63-4.95-54.4
	c1.01-8.31,6.96-14.42,15.65-11.68c8.56,2.7,3.64,22.34,10.96,29.17c59.84-43.47,129.33,14.31,75.81,78.31
	c-5.61,6.72-14.37,12.36-19.45,18.13c-1,1.13-1.67,1.44-1.26,3.25c20.02,8.86,45.72,19.98,55.98,40.56
	c12.38,24.83-4.21,43.45-30.42,34.25c-21.11-7.4-43.77-27.55-64.48-37.25c-0.44,8.75,0.6,17.8,0,26.54L661.88,506.32z
	 M657.99,415.06c21.74-0.25,71.27-59.72,20.39-50.19c-5.2,0.97-13.26,6.47-16.5,10.7c-10.48,13.65-3.05,24.21-3.89,39.48V415.06z"/>
                    <path /* g字 */ className="st4 handwriting" d="M962.66,474.61c-6.17,2.87-11.69,7.34-18.16,9.69c-23.12,8.4-50.36-0.43-49.27-28.41
	c1.32-33.84,38.3-91.44,75.86-60.25c2.07,1.72,3.8,5.85,5.42,6.34c2.01,0.61,4.28-0.96,6.05-0.71c10.75,1.48,15.34,7.87,16.39,18.33
	c-4.16,49.07,10.01,148.29-23.96,187.06c-33.49,38.26-106.47-0.66-121.28-38.17c-2.19-5.56-5.51-20.1,2.23-22.47
	c7.58-2.32,11.36,11.72,17.23,17.27c15.64,14.74,44.03,25.2,65.51,22.68c12.84-1.52,17.54-22.74,19.66-33.45
	c4.99-25.26,4.15-52.28,4.29-77.91L962.66,474.61z M949.33,416.63c-10.5,2.39-20.93,25.75-21.59,35.5
	c-0.56,8.19,5.25,5.19,10.77,2.89c8.73-3.63,26.79-19.24,24.61-29.3c-1.57-7.26-6.46-10.77-13.81-9.1L949.33,416.63z"/>
                    <path /* r字 */ className="st4 handwriting" d="M1067.71,420.23c43.98-45.02,61.55,18.2,68.72,53.07c1.5,1.58,11.5-10.29,15.21-11.32
	c12.63-3.5,10.24,7.91,7.04,16.08c-4.76,12.15-17.36,29.73-31.95,28.96c-25.31-1.34-30.3-49.8-37.64-67.36
	c-9.24,8.13-17.24,23.49-18.66,35.72c-1.26,10.88,1.96,32.98-16.38,32.66c-15.22-0.27-16.7-20.3-17.46-31.52
	c-3.86-57.24,3.63-121.04-5.59-176.96c-1.08-6.56-8.23-19.11,2.62-21.5c21.41-4.69,26.89,42.31,28.69,56.24
	c3.66,28.32,4.51,57.4,5.38,85.91L1067.71,420.23z"/>
                    <path /* d字 */ className="st4 handwriting" d="M1176.68,709.85l2.57-0.64l3.89-75.07c1.82-5.76,2.31-36.32,7.3-38.03l6.09,0.04
	c3.6,1.23,5.29,15.86,5.86,20.04c5.33,39.18,1.85,79.5,4.02,118.97c0.7,12.74,4.54,26.5,5.21,38.79
	c0.96,17.4-8.91,24.35-23.97,14.92c-13.37,19.76-34.18,38.59-59.85,28.65c-37.37-14.44-38.88-76.26-19.67-105.53
	c16.1-24.53,51.6-25.8,68.53-2.17H1176.68z M1143.91,719.22c-13.82,2.26-16.01,31.74-15.07,42.92c0.64,7.6,5.28,26.03,14.82,26.67
	c10.93,0.73,30.12-17.84,33.97-27.98c-3.34-13.72-16.31-44.46-33.72-41.62V719.22z"/>
                    <path /* c字 */ className="st15 handwriting" d="M932.45,677.96c2.75,2.75,7.83,8.95,6.76,12.85c-5.35,8.89-14.03-1.87-21.55-2.71
	c-6.34-0.71-13.33,3.36-17.84,7.49c-16.82,15.44-26.76,66.8-20.47,87.83c8.83,29.51,47.61,11.8,63.32-2.32
	c7.22-6.5,11.92-17.45,22.65-18.16c3.32,9.65-1.05,17.63-5.93,25.79c-18.92,31.67-65.9,60.37-100.26,34.29
	c-40.09-30.42-16.89-115.33,17.41-142.92c16.62-13.37,39.34-18.77,55.92-2.17L932.45,677.96z"/>
                    <path /* e字 */ className="st4 handwriting" d="M1270,737.07c5.42,35.91,48.26-0.38,62.91,5.04c17.87,6.61-2.64,27.11-11.16,33.01
	c-51.76,35.86-91.81-1.78-86.73-58.12c3.53-39.16,53.73-64.14,84.87-39.48c34.07,26.98-25.39,59.34-49.88,59.54L1270,737.07z
	 M1268.71,716.34c6.55,2.09,37.52-14.87,36.3-20.04C1291.01,687.02,1267.58,698.95,1268.71,716.34z"/>
                    <path /* t字 */ className="st16 handwriting" d="M1243.69,395.31c-4.15,4.3-29.03,11.22-35.98,13.28l6.5,58.25c9.3-6.28,17.62-14.07,26.81-20.47
	c6.56-4.58,28.29-22.7,32.28-9.34c2.09,6.99-11.67,21.95-16.35,27.84c-9.02,11.36-35.97,45.63-48.88,48.28
	c-7.65,1.57-16.03-0.66-20.91-7.01c-10.2-13.25-2.87-39.65-2.74-55.43l-1.35-34.37c-9.97-0.43-42.38,8.26-47.3-2.59
	c-2.62-5.77,0-11.42,5.78-13.6c4.93-1.87,33.76-5.83,35.01-7.13c1.44-9.08-9.69-19.89-2.59-27.84
	c10.94-12.24,21.12,13.65,25.94,20.78c7.27,1.63,42.41-8.35,45.2,0.18c0.73,2.23,0.19,7.47-1.44,9.17L1243.69,395.31z"/>
                    <path /* o字 */ className="st17 handwriting" d="M1031.68,688.22c30.87-5.13,46.23,33.33,44.41,58.58c-1.96,26.97-29.17,74.95-61.81,61.75
	c-27.02-10.92-21.85-51.85-15.6-74.32C1002.83,719.3,1014.5,691.09,1031.68,688.22L1031.68,688.22z M1023.11,782.25
	c7.04,4.32,20.63-17.19,22.99-22.66c5.33-12.33,7.4-32.22-4.33-41.9c-4.9-4.05-14.18-5.45-18.83-0.64
	c-5.17,5.35-5.72,61.61,0.17,65.22L1023.11,782.25z"/>
                    <path /* i上面點 */ className="st17 handwriting" d="M836.64,379.18c9.08-0.78,21.99-1.56,24.4,9.92c3.47,16.6-27.34,23.69-39.41,25.57
	c-12.07,1.88-48.19,4.95-53.52-7.93c-3.07-7.42-0.34-13.48,6.98-16.53c8.32-3.47,50.89-10.1,61.57-11.02H836.64z"/>
                    <path /* i下面一束 */ className="st17 handwriting" d="M804.11,420.49c7.3-2.19,13.25,7.97,17,13.59c6.64,9.96,12.72,23.43,15.42,35.1
	c3.06,13.25,8.76,56.65-14.43,53.29c-15.27-2.22-10.31-28.98-11.07-39.48c-0.8-11.14-2.66-22.87-5.07-33.77
	c-1.34-6.04-10.7-26.05-1.85-28.71L804.11,420.49z"/>
                    <g id="img_2">
                    </g>
                    <path className="st4" d="M2093,579c-4.56,2.25-6,1.76-7,1c-5.68-4.32,4-32,4-32s0.07,0,0,0c50.05-36.37,107.88,11.92,63.11,65.45
	c-4.7,5.62-12.02,10.34-16.27,15.16c-0.01,0.01-0.02,0.02-0.02,0.03c-0.99,1.11-0.64,2.87,0.73,3.47
	c16.46,7.28,36.78,16.53,45.08,33.15c10.36,20.77-3.52,36.34-25.44,28.65c-17.66-6.19-38.72-19.57-53.94-31.16
	C2097,658,2094.82,652.75,2091,643c-2.15-5.5-3-14.76-3-22 M2089,619c1.98-0.15,6-3.61,11-7c12-6,42.39-32.67,35.55-42.81
	c-2.39-3.54-11.39-4.77-17.49-2.57C2113.1,568.41,2095,578,2095,578s0.03,0.97,0,1"/>
                    <path className="st4" d="M2363.13,660.84l2.15-0.53l3.25-62.8c1.52-4.82,1.93-30.38,6.11-31.81l5.1,0.03c3.02,1.03,4.43,13.26,4.9,16.77
	c4.46,32.78,1.55,66.5,3.36,99.52c0.59,10.66,3.8,22.17,4.36,32.45c0.8,14.55-7.45,20.37-20.05,12.48
	c-11.18,16.53-28.59,32.28-50.06,23.97c-31.26-12.08-32.53-63.79-16.45-88.27c13.47-20.52,43.17-21.58,57.33-1.81H2363.13z
	 M2335.72,668.67c-11.56,1.89-13.39,26.55-12.6,35.9c0.53,6.36,4.41,21.78,12.4,22.31c9.14,0.61,25.19-14.92,28.42-23.4
	c-2.8-11.47-13.64-37.19-28.21-34.81V668.67z"/>
                    <path className="st4" d="M2492.13,660.84l2.15-0.53l3.25-62.8c1.52-4.82,1.93-30.38,6.11-31.81l5.1,0.03c3.02,1.03,4.43,13.26,4.9,16.77
	c4.46,32.78,1.55,66.5,3.36,99.52c0.59,10.66,3.8,22.17,4.36,32.45c0.8,14.55-7.45,20.37-20.05,12.48
	c-11.18,16.53-28.59,32.28-50.06,23.97c-31.26-12.08-32.53-63.79-16.45-88.27c13.47-20.52,43.17-21.58,57.33-1.81H2492.13z
	 M2464.72,668.67c-11.56,1.89-13.39,26.55-12.6,35.9c0.53,6.36,4.41,21.78,12.4,22.31c9.14,0.61,25.19-14.92,28.42-23.4
	c-2.8-11.47-13.64-37.19-28.21-34.81V668.67z"/>
                    <path className="st4" d="M2041,446c1,7,3,16,3,16l3,14c-0.03,0.51-1.76,3.73-1.87,5.16c-0.56,6.43,0.38,11.53-2.66,17.93
	c-4.61,9.72-19.27,10.74-25.32,1.43c-6.53-10.04-1.13-38.44-1.21-51.85c-0.05-8.01-0.82-17.57-1.08-25.99
	c-0.31-10.23-2.33-22.34-2.3-32.46c0.02-5.52,2.07-12.86,2.04-18.39c-0.08-14.22-5.85-31.47-4.14-45.51
	c0.85-6.95,5.82-12.06,13.09-9.77c7.16,2.26,5.47,17.46,7.47,25.46c2.3,39.05,6,29,8,83"/>
                    <path className="st2" d="M174.57,233.16c32.75-4.47,64.8,27.46,76.98,55.2c12.14,27.65-2.97,71.36-36.23,74.76
	c-44.08,4.49-79.41-36.23-81.58-77.74C132.43,260.44,148.88,236.67,174.57,233.16z"/>
                    <path /* 綠色左邊眼睛 */ className="st4 greenLeftEye" d="M233.88,311.33c-0.4,10.66-10.41,26.64-21.42,28.67c-20.8,3.84-41.4-16.71-34.43-37.99
	c2.39-7.32,16.5-17.3,23.92-18.35c8.89-1.26,20.02,5.73,25.89,12C232.48,300.6,234.13,304.48,233.88,311.33L233.88,311.33z"/>
                </svg>
            </div>
            <div id='Home-page-all2'>
                <div id='navbartext'>
                    <Navbar></Navbar>
                </div>
                <div id='RWDtext'>
                    <div id="Home-page-all">
                        <section id="Home-page-2">{/* 第二分頁 */}
                            <div className="Home-content-bk-1"
                            >
                                <div className="Home-content-1"
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-offset='300'>{/* 左邊 第一次進入 逮捕互動 done */}
                                    <p className="Home-text-1">用<span>程式</span>創造未來</p>
                                    <p className="Home-eng-text-1">Create the Future with Programming</p>
                                </div>
                                <div className="Home-content-2"
                                    data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-offset='300'>{/* 左邊第二次進入 逮捕互動 done */}
                                    <p className="Home-text-1">用<span>英語</span>世界接軌</p>
                                    <p className="Home-eng-text-2">Connect the World in English</p>
                                </div>
                            </div>
                            <div className="Home-content-bk-2">
                                <div className="Home-content-3">
                                    <div className="Home-text-block-1"
                                        data-aos="fade-right"
                                        data-aos-duration="500"
                                        data-aos-offset='300'>
                                        <p className="Home-text-2">程式語言納入108課綱</p>
                                        <br />
                                        <p className="Home-eng-text-2">Programming included in 108 syllabus</p>
                                        <p className="Home-sml-text-2">為了因應科技時代的需求，<br />
                                            108課綱將「程式設計」正式納入中小學的資訊教育。<br />
                                            通過基礎程式學習來鍛鍊孩子的邏輯思考、創意思維和問題解決能力，<br />
                                            並且學會技術應用，強化數位素養。</p>
                                    </div>
                                    <div className="Home-content-3-img"> {/* 右往左邊移動 逮捕 done */}
                                        <img className='move-right-blue' ref={blueARef} src="images/blueA.svg" alt="" />
                                    </div>
                                </div>
                                <div className="Home-content-4">
                                    <div className="Home-text-block-2"
                                        data-aos="fade-left"
                                        data-aos-duration="500"
                                        data-aos-offset='300' >
                                        <p className="Home-text-2">2030雙語政策</p>
                                        <br />
                                        <p className="Home-eng-text-2">Bilingual 2030</p>
                                        <p className="Home-sml-text-2">教育部正在推動「2030雙語政策」。
                                            <br />目標是到2030年在國民教育中達成雙語環境，
                                            <br />
                                            希望孩子不僅能在課堂上學習語法與詞彙，
                                            <br />更能在日常生活和學習中靈活運用英語，
                                            <br />讓孩子未來更具國際競爭力！</p>
                                    </div>
                                    <div className="Home-content-4-img"> {/* 左往右邊移動 逮捕done */}
                                        <img className='move-left-red' ref={redRef} src="images/red.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="Home-page-3">
                            <div className="Home-content-bk">
                                <div className="Home-content-bk-3"
                                    data-aos="fade-up"
                                    data-aos-offset='300'>
                                    <p>會</p><p>擔</p><p>心</p><p>這</p><p>些</p><p>情</p><p>況</p><p>嗎</p><p>？</p>
                                </div>
                                <div className="Home-content-bk-4">
                                    <div className="Home-content-5"
                                        data-aos="fade-left"
                                        data-aos-duration="500"
                                        data-aos-offset='300'>
                                        <p className="Home-text-3">課程 <span>枯燥乏味</span></p>
                                        <p className="Home-sml-text-3">傳統程式設計課程往往過於理論化，
                                            <br />缺乏趣味性，
                                            缺少互動和遊戲化的學習方式，<br />
                                            使得學習變得單調、難以引起學生的持續動力。</p>
                                    </div>
                                    <div className="Home-content-6"
                                        data-aos="fade-right"
                                        data-aos-duration="500"
                                        data-aos-offset='300'>
                                        <p className="Home-text-3">額外補習課程 <span>費用昂貴</span></p>
                                        <p className="Home-sml-text-3">
                                            市面上的程式補習班通常價格高昂，<br />
                                            對許多家庭來說是額外的經濟負擔，<br />
                                            導致家長對於讓孩子接觸這類課程望而卻步。
                                        </p>
                                    </div>
                                    <div className="Home-content-7"
                                        data-aos="fade-left"
                                        data-aos-duration="500"
                                        data-aos-offset='300'>
                                        <p className="Home-text-3"><span>時間及距離</span> 無法配合</p>
                                        <p className="Home-sml-text-3">許多補習班的上課時間與學校課程衝突，<br />
                                            加上需要通勤，對於家長與孩子而言  都很不方便。<br />
                                            特別是偏遠地區的家庭，能夠選擇的課程資源更有限。</p>
                                    </div>
                                </div>
                                <div > {/* 下移速度改150px done  */}
                                    <img className="Home-ladder" ref={pinkRef} src="images/pinkB.svg" alt="梯子" />
                                </div>
                            </div>

                        </section>
                        <section id="Home-page-4">
                            <div className="Home-content-6"

                            >
                                <p
                                    data-aos="zoom-in-down"
                                    data-aos-duration="500"
                                    data-aos-offset='300'
                                >不只是學習<br /> {/* 從土地中間出來 done */}
                                    更是一場充滿樂趣的探索之旅</p>
                            </div>
                            <div className="Home-content-bk-all">
                                <div className="Home-content-bk-1"

                                > {/* 變個改為字體效果  done */}
                                    <div className="Home-content-7">
                                        <p
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                            data-aos-delay="700"
                                            data-aos-offset='300'>
                                            \ 讓學程式成為習慣 /
                                        </p>
                                    </div>
                                    <div className="Home-content-8">
                                        <p
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                            data-aos-offset='300'>\ 好玩又好學 /</p>
                                    </div>
                                    <img className="Home-content-img" src="images/pinkA.svg" alt="" />
                                </div>
                                <div className="Home-content-bk-2"
                                    data-aos="fade-down"
                                    data-aos-duration="500"
                                    data-aos-offset='300'
                                >
                                    <img className='Home-content-bk-2-img' src="images/homeIntroA.jpg" alt="" />
                                    <p className="Home-content-9">程式結合單字學習</p>
                                    <p className="Home-content-10">寓教於樂的學習樂園
                                        <br />
                                        讓知識充滿溫度</p>
                                </div>
                                <div className="Home-content-bk-3"
                                    data-aos="fade-down"
                                    data-aos-duration="500"
                                    data-aos-offset='300'>
                                    <img className='Home-content-bk-3-img' src="images/homeIntroB.jpg" alt="" />
                                    <p className="Home-content-11">情緒覺察</p>
                                    <p className="Home-content-12">學習後選擇心情，一起分享成就感
                                        <br />
                                        加入程式探索的行列</p>
                                </div>
                            </div>

                        </section>
                        <section id="Home-page-5">


                            <div className="Home-content-bk-4"
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-offset='300'
                            >
                                <div className="Home-content-15">
                                    <p className="Home-content-13">還在猶豫什麼？
                                        <br /> 程式世界等著你去探索 ！</p>
                                </div>
                                <div className="Home-content-bk-5">
                                    <Link to='/LearnHome'>
                                        <p className='Home-content-bk-text-5'>Start Now</p>
                                        {/* <img className="Home-btn" src="../images/btn.png" alt=""
                                    ref={startRef}
                                    onMouseUp={startMouseUp}
                                    onMouseDown={startMouseDown}
                                /> */}
                                    </Link>
                                    <img className="Home-greenIp" src="images/greenB.svg" alt="" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
            <PhonePage></PhonePage>
        </>

    )

}
export default Home