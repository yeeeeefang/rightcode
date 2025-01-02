import React, { useState } from "react";
import '../../src/assets/css/SelectModel.css';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const SelectModel = ({ isOpen, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(null); // 每個問題的展開狀態


    const SelectData = [
        {

            title: 'HTML',
            items: [
                {
                    question: "基礎知識",
                    answer: ["定義文檔的標籤", "定義標題、描述與資源", "引用外部資源與連結"],
                },
                {
                    question: "文本內容",
                    answer: ["標題與段落", "文字樣式", "短語和語意", "引用", "分隔、刪除與插入", "超連結和導覽列"],
                },
                {
                    question: "多媒體內容",
                    answer: ["圖像與圖例", "音檔與影片", "嵌入內容"],
                },
                {
                    question: "表格與表單",
                    answer: ["列表標籤", "節內容"],
                },
                {
                    question: "內嵌、無語意標籤與模組化",
                    answer: ["內嵌標籤", "無語意標籤", "程式和模組化"],
                },
                {
                    question: "HTML5新增標籤",
                    answer: ["結構", "媒體", "表單擴展"],
                },
            ],
        },
        {
            title: 'CSS',
            items: [
                {
                    question: "字型與文字樣式",
                    answer: ["字型設定", "文字樣式"],
                },
                {
                    question: "顏色與背景",
                    answer: ["顏色", "背景"],
                },
                {
                    question: "盒模型",
                    answer: ["邊距", "內距", "邊框", "大小"],
                },
                {
                    question: "佈局",
                    answer: ["顯示與可見性", "定位", "浮動與清除"],
                },
                {
                    question: "彈性盒模型(Flexbox)",
                    answer: ["容器屬性", "子項目屬性"],
                },
                {
                    question: "網格佈局(Grid Layout)",
                    answer: ["容器屬性", "子項目屬性"],
                },
            ],
        },
    ];

    const toggleAnswer = (categoryIndex, itemIndex) => {
        const newIndex = `${categoryIndex}-${itemIndex}`;
        setActiveIndex((prev) => (prev === newIndex ? null : newIndex)); // 展開新問題時收起其他
    };

    if (!isOpen) return null;

    return (
        <div className='overlayselect' onClick={onClose}>
            <div className='modalselect' onClick={(e) => e.stopPropagation()}>
                <button className='close-button' onClick={onClose}>
                    X
                </button>
                <div className='selectColumns'>
                    {SelectData.map((category, categoryIndex) => (
                        <div key={categoryIndex} className='select-column'>
                            <h3>{category.title}</h3>
                            {category.items.map((faq, itemIndex) => (
                                <div key={itemIndex} className='select-item'>
                                    <div
                                        className='question'
                                        onClick={() => toggleAnswer(categoryIndex, itemIndex)}
                                    >
                                        {faq.question}
                                        {activeIndex === `${categoryIndex}-${itemIndex}` ? (
                                            <MdKeyboardArrowUp /> // 展開時顯示
                                        ) : (
                                            <MdKeyboardArrowDown/>// 收起時顯示
                                        )}
                                    </div>
                                    {activeIndex === `${categoryIndex}-${itemIndex}` && (
                                        <div className='answer'>
                                            {faq.answer.map((textline, i) => (
                                                <p key={i}>{textline}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectModel;
