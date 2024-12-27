import { useState } from 'react';
import '../assets/css/LearnTitle.css'

function LearnTitle({ onSelectTitle }) {
    
    const combinedData = [
    {
        id: "section-0",
        title: "HTML基礎知識",
        children: [
            {
                title: "｜定義文檔的標籤",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜定義標題、描述與資源",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜引用外部資源與連結",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
        ],
    },
    {
        id: "section-1",
        title: "文本內容",
        children: [
            {
                title: "｜標題與段落",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜文字樣式-1",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜文字樣式-2",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#決策能力"],
            },
            {
                title: "｜短語和語義",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#創意思維"],
            },
            {
                title: "｜引用",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜分隔、刪除與插入",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜超連結和導覽列",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
        ],
    },
    {
        id: "section-2",
        title: "多媒體內容",
        children: [
            {
                title: "｜圖像與圖例",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜音檔與影片",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜嵌入內容",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
        ],
    },
    {
        id: "section-3",
        title: "表格與表單",
        children: [
            {
                title: "｜表格行列",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜結構與標題",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜表單元素-1",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜表單元素-2",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
        ],
    },
    {
        id: "section-4",
        title: "列表與頁面",
        children: [
            {
                title: "｜列表標籤",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜節內容",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
        ],
    },
    {
        id: "section-5",
        title: "內嵌、無語意標籤與模組化",
        children: [
            {
                title: "｜內嵌標籤",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜無語意標籤",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜程式和模組化",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
        ],
    },
    {
        id: "section-6",
        title: "HTML5 新增標籤",
        children: [
            {
                title: "｜結構",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜媒體",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
            },
            {
                title: "｜表單擴展",
                iconSrc: "../images/learnPageLeftHeart.svg",
                imgSrc: "../images/learnPage1.svg",
                tags: ["#問題解決", "#邏輯思考"],
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
            <section id='HtmlClassTitle-all'>
                <h1 className='Html-H1'>HTML</h1>
                <div className='Html-title-all'>
                    {combinedData.map((section, index) => (
                        <div key={section.id} className='Html-Class'>
                            <div>
                                <h2 className={`Html-H2 ${selectedIndex === index ? 'selected' : ''}`}
                                    onClick={() => handleTitleClick(index)}>
                                    {section.title}
                                </h2>
                            </div>
                            <div className='Html-Span'>
                                {section.children.map((child, childIndex) => (
                                    <span key={childIndex}>{child.title} <br /></span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}
export default LearnTitle