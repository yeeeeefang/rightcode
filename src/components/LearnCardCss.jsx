import { useEffect, useRef, useState } from 'react';
import '../assets/css/LearnCardCss.css'
import $ from 'jquery'
import { Link } from 'react-router-dom';
function LearnCardCss({ selectedSection }) {

    const CardTitleCss = [
        {
            id: "section-0",
            title: "字型與文字樣式",
            children: [
                {
                    title: "字型設定",
                    imgSrc: "./images/learnPageCss1.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "文字樣式-1",
                    imgSrc: "./images/learnPageCss2.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "文字樣式-2",
                    imgSrc: "./images/learnPageCss3.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "文字樣式-3",
                    imgSrc: "./images/learnPageCss4.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "文字樣式-4",
                    imgSrc: "./images/learnPageCss5.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-1",
            title: "顏色與背景",
            children: [
                {
                    title: "顏色",
                    imgSrc: "./images/learnPageCss6.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "背景 - 1",
                    imgSrc: "./images/learnPageCss7.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "背景 - 2",
                    imgSrc: "./images/learnPageCss8.svg",
                    tags: ["#問題解決", "#決策能力"],
                    isFavorite: false,
                },
                {
                    title: "背景 - 3",
                    imgSrc: "./images/learnPageCss9.svg",
                    tags: ["#問題解決", "#創意思維"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-2",
            title: "盒模型",
            children: [
                {
                    title: "邊距",
                    imgSrc: "./images/learnPageCss10.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "內距",
                    imgSrc: "./images/learnPageCss11.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "邊框",
                    imgSrc: "./images/learnPageCss12.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "大小",
                    imgSrc: "./images/learnPageCss13.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },

            ],
        },
        {
            id: "section-3",
            title: "佈局",
            children: [
                {
                    title: "顯示與可見性",
                    imgSrc: "./images/learnPageCss14.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "定位 - 1",
                    imgSrc: "./images/learnPageCss15.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "定位 - 2",
                    imgSrc: "./images/learnPageCss16.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "浮動與清除",
                    imgSrc: "./images/learnPageCss17.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-4",
            title: "彈性盒模型 (Flexbox)",
            children: [
                {
                    title: "容器屬性 - 1",
                    imgSrc: "./images/learnPageCss29.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "容器屬性 - 2",
                    imgSrc: "./images/learnPageCss30.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "子項目屬性 - 1",
                    imgSrc: "./images/learnPageCss31.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "子項目屬性 - 2",
                    imgSrc: "./images/learnPageCss32.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },

            ],
        },
        {
            id: "section-5",
            title: "網格佈局 (Grid Layout)",
            children: [
                {
                    title: "容器屬性 - 1",
                    imgSrc: "./images/learnPageCss19.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "容器屬性 - 2",
                    imgSrc: "./images/learnPageCss20.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "子項目屬性",
                    imgSrc: "./images/learnPageCss21.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-6",
            title: "過渡與動畫",
            children: [
                {
                    title: "過渡 - 1",
                    imgSrc: "./images/learnPageCss22.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "過渡 - 2",
                    imgSrc: "./images/learnPageCss23.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "動畫 - 1",
                    imgSrc: "./images/learnPageCss24.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "動畫 - 2",
                    imgSrc: "./images/learnPageCss25.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },
        {
            id: "section-7",
            title: "其他屬性",
            children: [
                {
                    title: "剪裁與遮罩",
                    imgSrc: "./images/learnPageCss26.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "游標",
                    imgSrc: "./images/learnPageCss27.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "滾動",
                    imgSrc: "./images/learnPageCss28.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "內容屬性",
                    imgSrc: "./images/learnPageCss29.svg",
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
        ? CardTitleCss.flatMap((section) => section.children)
        : CardTitleCss[selectedSection]?.children || [];

    let currentScrollLeft = 0; // 初始化當前滾動位置
    $(function () {
        const step = 220; // 每次滾動的距離
        const container = $('.Learn-CardCss-all'); // 滾動容器
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
        <section id='LearnPageAllCss'>
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
                className='Learn-CardCss-all'
                ref={containerRef}

            >
                {chooseCard.map((child, index) => (
                    <div
                        className="Learn-CardCss-1"
                        key={index}
                    >
                        <div className="Learn-CardCss-bk-1">
                            <div className="Learn-CardCss-icon-1">
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
                                <div className='Learn-CardCss-2'>
                                    <div className="Learn-CardCss-img-1">
                                        <img src={child.imgSrc} alt={child.title} />
                                    </div>
                                    <div className="Learn-CardCss-Content-1">
                                        <p>{child.title}</p>
                                    </div>
                                    <div className="Learn-CardCss-Content-2">
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

export default LearnCardCss;
