import { useEffect, useRef, useState } from 'react';
import '../assets/css/LearnCard.css'
import $ from 'jquery'
import { Link } from 'react-router-dom';
function LearnCard({ selectedSection }) {

    const CardTitle = [
        {
            id: "section-0",
            title: "HTML基礎知識",
            children: [
                {
                    title: "定義文檔的標籤",
                    imgSrc: "./images/learnPage8.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "定義標題、描述與資源",
                    imgSrc: "./images/learnPage9.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "引用外部資源與連結",
                    imgSrc: "./images/learnPage10.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-1",
            title: "文本內容",
            children: [
                {
                    title: "標題與段落",
                    imgSrc: "./images/learnPage1.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "文字樣式-1",
                    imgSrc: "./images/learnPage2.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "文字樣式-2",
                    imgSrc: "./images/learnPage3.svg",
                    tags: ["#問題解決", "#決策能力"],
                    isFavorite: false,
                },
                {
                    title: "短語和語義",
                    imgSrc: "./images/learnPage4.svg",
                    tags: ["#問題解決", "#創意思維"],
                    isFavorite: false,
                },
                {
                    title: "引用",
                    imgSrc: "./images/learnPage5.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "分隔、刪除與插入",
                    imgSrc: "./images/learnPage6.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "超連結和導覽列",
                    imgSrc: "./images/learnPage7.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-2",
            title: "多媒體內容",
            children: [
                {
                    title: "圖像與圖例",
                    imgSrc: "./images/learnPage11.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "音檔與影片",
                    imgSrc: "./images/learnPage12.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "嵌入內容",
                    imgSrc: "./images/learnPage13.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-3",
            title: "表格與表單",
            children: [
                {
                    title: "表格行列",
                    imgSrc: "./images/learnPage14.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "結構與標題",
                    imgSrc: "./images/learnPage15.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "表單元素-1",
                    imgSrc: "./images/learnPage16.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "表單元素-2",
                    imgSrc: "./images/learnPage17.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-4",
            title: "列表與頁面",
            children: [
                {
                    title: "列表標籤",
                    imgSrc: "./images/learnPage18.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "節內容",
                    imgSrc: "./images/learnPage19.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-5",
            title: "內嵌、無語意標籤與模組化",
            children: [
                {
                    title: "內嵌標籤",
                    imgSrc: "./images/learnPage20.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "無語意標籤",
                    imgSrc: "./images/learnPage21.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "程式和模組化",
                    imgSrc: "./images/learnPage22.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-6",
            title: "HTML5 新增標籤",
            children: [
                {
                    title: "結構",
                    imgSrc: "./images/learnPage23.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "媒體",
                    imgSrc: "./images/learnPage24.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "表單擴展",
                    imgSrc: "./images/learnPage25.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
    ];

    /* 點選切換圖片的效果 */
    const LeftRef = useRef(null)
    const LeftImgMouseDown = () => {
        LeftRef.current.src = './images/learnPageLeft_hover.svg'
    }
    const LeftImgMouseUp = () => {
        LeftRef.current.src = './images/learnPageLeft.svg'
    }
    const RightRef = useRef(null)
    const RightImgMouseDown = () => {
        RightRef.current.src = './images/learnPageRight_hover.svg'
    }
    const RightImgMouseUp = () => {
        RightRef.current.src = './images/learnPageRight.svg'
    }

    /* 愛心卡片 */
    /* const imgRef = useRef(null)
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(prev => !prev); // 更新狀態
    }; */


    /* 第二次 */
    /* const [favorites, setFavorites] = useState(() =>
        CardTitle.flatMap((section) =>
            section.children.map(() => false) // 初始狀態全為 false
        )
    );

    const toggleFavorite = (index) => {
        setFavorites((prevFavorites) =>
            prevFavorites.map((fav, i) => (i === index ? !fav : fav)) // 切換指定索引的狀態
        );
    }; */

    /* 第三次 更新 */

    const [favorites, setFavorites] = useState({}); // 存儲每個卡片的愛心狀態

    // 切換愛心狀態
    const toggleFavorite = (title) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [title]: !prevFavorites[title], // 根據 title 切換對應狀態
        }));
    };

    /* 調整卡片頁面顯示方式 */
    const containerRef = useRef(null); // 參考滾動容器
    const chooseCard = selectedSection === null
        ? CardTitle.flatMap((section) => section.children)
        : CardTitle[selectedSection]?.children || [];

    let currentScrollLeft = 0; // 初始化當前滾動位置
    $(function () {
        const step = 220; // 每次滾動的距離
        const container = $('.Learn-Card-all'); // 滾動容器
        const maxScroll = container[0].scrollWidth - container.width(); // 最大可滾動距離
        const leftArrow = $('.LearnPageLeft-1');
        const rightArrow = $('.LearnPageLeft-2');

        const updateScroll = () => { // 將滾動和箭頭顯示/隱藏的邏輯封裝成一個函式
            const maxScroll = container[0].scrollWidth - container.width();
            rightArrow.toggleClass('hideArrow', maxScroll <= 0); // 使用 toggleClass 更簡潔
            leftArrow.toggleClass('hideArrow', maxScroll <= 0);
        };
        $('.LearnPageLeft-2').click(function () {
            // 計算新的滾動位置，不能超過最大滾動距離
            currentScrollLeft = Math.min(currentScrollLeft + step, maxScroll);
            // 更新滾動位置
            container.stop().animate({
                scrollLeft: currentScrollLeft
            }, 500);
        })
        $('.LearnPageLeft-1').click(function () {
            // 計算新的滾動位置，不能小於 0
            currentScrollLeft = Math.max(currentScrollLeft - step, 0);
            // 更新滾動位置
            container.stop().animate({
                scrollLeft: currentScrollLeft
            }, 500); // 500ms 平滑滾動
        });
        $(window).on('resize load', updateScroll); // 在視窗大小調整和頁面載入完成後更新箭頭狀態
        updateScroll(); // 初始呼叫一次，確保初始狀態正確
    })

    useEffect(() => {
        if (containerRef.current) {
            currentScrollLeft = 0; // 重置當前滾動位置
            containerRef.current.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
        // 當 selectedSection 改變時，重置索引
    }, [selectedSection]);


    return (
        <section id='LearnPageAll'>
            <div className='LearnPageLeft-1 ' /* onClick={changLeft} */>
                <img
                    src="./images/learnPageLeft.svg"
                    alt="Previous"
                    ref={LeftRef}
                    onMouseEnter={LeftImgMouseDown}
                    onMouseLeave={LeftImgMouseUp}
                />
            </div>
            <div
                className='Learn-Card-all'
                ref={containerRef}

            >
                {chooseCard.map((child, index) => (
                    <div
                        className="Learn-Card-1"
                        key={index}
                    >
                        <div className="Learn-Card-bk-1">
                            <div className="Learn-Card-icon-1">
                                <img
                                    /* src={favorites[index] ? favoriteImg : notFavoriteImg} // 動態根據狀態切換圖片
                                    alt="favorite toggle"
                                    onClick={() => toggleFavorite(index)} // 點擊觸發切換 */

                                    src={
                                        favorites[child.title]
                                            ? "./images/learnPageLeftHeart_hover.svg"
                                            : "./images/learnPageLeftHeart.svg"
                                    }
                                    alt="favorite toggle"
                                    onClick={() => toggleFavorite(child.title)} // 使用 title 作為鍵切換狀態
                                />
                            </div>
                            <Link to='/LearnArea'>
                                <div className='Learn-Card-2'>
                                    <div className="Learn-Card-img-1">
                                        <img src={child.imgSrc} alt={child.title} />
                                    </div>
                                    <div className="Learn-Card-Content-1">
                                        <p>{child.title}</p>
                                    </div>
                                    <div className="Learn-Card-Content-2">
                                        {child.tags.map((tag, tagIndex) => (
                                            <p key={tagIndex}>{tag}</p>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='LearnPageLeft-2 ' /* onClick={chalgRight} */>
                <img
                    src="./images/learnPageRight.svg"
                    alt="Next"
                    ref={RightRef}
                    onMouseEnter={RightImgMouseDown}
                    onMouseLeave={RightImgMouseUp}
                />
            </div>
        </section>
    );
}

export default LearnCard;
