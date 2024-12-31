import { useState } from 'react';
import '../assets/css/LearnTitleCss.css'

function LearnTitleCss({ onSelectTitle }) {
    
    const combinedDataCss = [
        {
            id: "section-0",
            title: "字型與文字樣式",
            children: [
                {
                    title: "｜字型設定",
                    imgSrc: "./images/learnPage1.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜文字樣式-1",
                    imgSrc: "./images/learnPage2.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜文字樣式-2",
                    imgSrc: "./images/learnPage3.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜文字樣式-3",
                    imgSrc: "./images/learnPage4.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
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
                    title: "｜顏色",
                    imgSrc: "./images/learnPage5.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜背景-1",
                    imgSrc: "./images/learnPage6.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜背景-2",
                    imgSrc: "./images/learnPage7.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#決策能力"],
                    isFavorite: false,
                },
                {
                    title: "｜背景-3",
                    imgSrc: "./images/learnPage8.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
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
                    title: "｜邊距",
                    imgSrc: "./images/learnPage9.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜內距",
                    imgSrc: "./images/learnPage10.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜邊框",
                    imgSrc: "./images/learnPage11.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜大小",
                    imgSrc: "./images/learnPage12.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
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
                    title: "｜顯示與可見性",
                    imgSrc: "./images/learnPage13.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜定位-1",
                    imgSrc: "./images/learnPage14.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜定位-2",
                    imgSrc: "./images/learnPage15.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜浮動與清除",
                    imgSrc: "./images/learnPage16.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
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
                    title: "｜容器屬性-1",
                    imgSrc: "./images/learnPage29.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜容器屬性-2",
                    imgSrc: "./images/learnPage30.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜子項目屬性-1",
                    imgSrc: "./images/learnPage31.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜子項目屬性-2",
                    imgSrc: "./images/learnPage32.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
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
                    title: "｜容器屬性-1",
                    imgSrc: "./images/learnPage18.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜容器屬性-2",
                    imgSrc: "./images/learnPage19.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜子項目屬性",
                    imgSrc: "./images/learnPage20.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
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
                    title: "｜過渡-1",
                    imgSrc: "./images/learnPage21.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜過渡-2",
                    imgSrc: "./images/learnPage22.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜動畫-1",
                    imgSrc: "./images/learnPage23.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜動畫-2",
                    imgSrc: "./images/learnPage24.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
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
                    title: "｜剪裁與遮罩",
                    imgSrc: "./images/learnPage25.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜游標",
                    imgSrc: "./images/learnPage26.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜滾動",
                    imgSrc: "./images/learnPage27.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
                {
                    title: "｜內容屬性",
                    imgSrc: "./images/learnPage28.svg",
                    iconSrc: "./images/learnPageLeftHeart.svg",
                    tags: ["#問題解決", "#邏輯思考"],
                    isFavorite: false,
                },
            ],
        },

    ];
    
   

    

    const [selectedIndex, setSelectedIndex] = useState('0'); // 用于追踪当前选中的 Html-H2

    const handleTitleClick = (index) => {
        setSelectedIndex(index); // 设置选中的标题索引
        onSelectTitle(index); // 通知父組件
    };

    return (
        <>
            <section id='CssClassTitle-all'>
                <h1 className='Css-H1'>Css</h1>
                <div className='Css-title-all'>
                    {combinedDataCss.map((section, index) => (
                        <div key={section.id} className='Css-Class'>
                            <div>
                                <h2 className={`Css-H2 ${selectedIndex === index ? 'selected' : ''}`}
                                    onClick={() => handleTitleClick(index)}>
                                    {section.title}
                                </h2>
                            </div>
                            {/* <div className='Css-Span'>
                                {section.children.map((child, childIndex) => (
                                    <span key={childIndex}>{child.title} <br /></span>
                                ))}
                            </div> */}
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}
export default LearnTitleCss