import React, { useState } from "react";
import '../assets/css/LearnGameChoose.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import PhonePage from "./PhonePage";

const questions = [
  {
    question: "如何更改元素的文字大小？",
    options: [
      { text: "text-size", correct: false, explanation: "CSS 中無此屬性。" },
      { text: "font-size", correct: true, explanation: "font-size 用於設置文字大小。" },
      { text: "size", correct: false, explanation: "CSS 中無此屬性。" },
      { text: "text-align", correct: false, explanation: "text-align 是用來設置文字對齊方式。" },
    ],
  },
  {
    question: "CSS 中，如何設置一個元素的背景顏色為紅色？",
    options: [
      { text: "color: red;", correct: false, explanation: "這是設置文字顏色。" },
      { text: "background-color: red;", correct: true, explanation: "background-color 用於設置背景顏色。" },
      { text: "border-color: red;", correct: false, explanation: "這是設置邊框顏色。" },
      { text: "red-background: true;", correct: false, explanation: "CSS 中無此屬性。" },
    ],
  },
  {
    question: "如何隱藏一個元素但保留其佔位？",
    options: [
      { text: "visibility: hidden;", correct: true, explanation: "隱藏元素但保留佔位。" },
      { text: "display: none;", correct: false, explanation: "這會隱藏元素並移除其佔位。" },
      { text: "opacity: 0;", correct: false, explanation: "元素仍會佔位但是完全透明。" },
      { text: "hidden: true;", correct: false, explanation: "CSS 中無此屬性。" },
    ],
  },
  {
    question: "CSS 中，如何使字體加粗？",
    options: [
      { text: "text-style: bold;", correct: false, explanation: "CSS 中無此屬性。" },
      { text: "font-weight: normal;", correct: false, explanation: "normal 是字體的預設權重。" },
      { text: "font-weight: bold;", correct: true, explanation: "font-weight 用於設置字體粗細。" },
      { text: "font-size: bold;", correct: false, explanation: "font-size 是設置字體大小的屬性。" },
    ],
  },
  {
    question: "CSS 中，如何設置元素的外部間距？",
    options: [
      { text: "margin", correct: true, explanation: "margin 用於設置外部間距。" },
      { text: "padding", correct: false, explanation: "padding 用於設置內部間距。" },
      { text: "border", correct: false, explanation: "border 是設置邊框。" },
      { text: "spacing", correct: false, explanation: "CSS 中無此屬性。" },
    ],
  },
  {
    question: "HTML 中如何創建段落？",
    options: [
      { text: "<p>", correct: true, explanation: "<p> 用於定義段落。" },
      { text: "<div>", correct: false, explanation: "<div> 是用於分隔塊內容的容器。" },
      { text: "<h1>", correct: false, explanation: "<h1> 是用於定義主標題。" },
      { text: "<span>", correct: false, explanation: "<span> 是用於行內元素的容器。" },
    ],
  },
  {
    question: "HTML 中，如何創建一個換行？",
    options: [
      { text: "<break>", correct: false, explanation: "HTML 中無此標籤。" },
      { text: "<newline>", correct: false, explanation: "HTML 中無此標籤。" },
      { text: "<br>", correct: true, explanation: "<br> 用於插入換行。" },
      { text: "<line>", correct: false, explanation: "HTML 中無此標籤。" },
    ],
  },
  {
    question: "HTML 中，用於定義加粗文字的標籤是什麼？",
    options: [
      { text: "<b>", correct: true, explanation: "<b> 用於加粗文字，無語義。" },
      { text: "<strong>", correct: false, explanation: "strong 具有語義上的強調意圖。" },
      { text: "<i>", correct: false, explanation: "<i> 是用於斜體。" },
      { text: "<u>", correct: false, explanation: "<u> 是用於文字底線。" },
    ],
  },
  {
    question: "HTML 中，用於創建文本輸入框的標籤是什麼？",
    options: [
      { text: "<form>", correct: false, explanation: "<form> 是用於包裹整個表單。" },
      { text: "<textarea>", correct: false, explanation: "這是多行文本輸入框。" },
      { text: "<input>", correct: true, explanation: "<input> 是通用輸入元素。" },
      { text: "<textbox>", correct: false, explanation: "HTML 中無此標籤。" },
    ],
  },
  {
    question: "HTML 文件的第一行是什麼？",
    options: [
      { text: "<html>", correct: false, explanation: "這是文件的根標籤。" },
      { text: "<head>", correct: false, explanation: "這是文檔的頭部標籤。" },
      { text: "<!DOCTYPE>", correct: false, explanation: "這是文檔類型宣告，但不完整。" },
      { text: "<!DOCTYPE html>", correct: true, explanation: "<!DOCTYPE html> 用於聲明文檔類型為 HTML5。" },
    ],
  },
];

const FlipCard = ({ option, onClick, flipped, index }) => {
  return (
    <div className={`card ${flipped ? "flipped" : ""} option-${index}`} onClick={onClick}>
      <div className="card-front">{option.text}</div>
      <div className="card-back">
        {flipped && (
          <div>
            <p className={option.correct ? "correct-text" : "incorrect-text"} >{option.correct ? "答案正確！" : "答案錯誤！"}</p>
            <p>{option.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const LearnGameChoose = () => {
  const [currentQuestion, setCurrentQuestion] = useState(
    Math.floor(Math.random() * questions.length)
  );
  const [flipped, setFlipped] = useState(Array(4).fill(false));
  const [correctAnswered, setCorrectAnswered] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];//複製翻轉狀態陣列
    newFlipped[index] = !newFlipped[index]; // 每次點擊切換翻轉狀態
    setFlipped(newFlipped);//更新狀態

    if (questions[currentQuestion].options[index].correct) {
      setCorrectAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    setFlipped(Array(4).fill(false)); // 先翻回所有卡片
    setTimeout(() => {
      const nextCount = questionCount + 1;
      setQuestionCount(nextCount);
      if (nextCount % 3 === 0) {
        setShowModal(true);
      } else {
        setCurrentQuestion(Math.floor(Math.random() * questions.length));
      }
      setCorrectAnswered(false);
    }, 600); // 等待翻轉動畫完成
  };
  const handleRestart = () => {
    setShowModal(false);
    setCurrentQuestion(Math.floor(Math.random() * questions.length));
  };

  const handleExit = () => {
    setShowModal(false);
    alert("感謝遊玩！");
  };

  return (<>
    <section id="LearnGameChooseall">
      <div className="gamenavbar">
        <Navbar />
      </div>

      <div className="LearnGameChoose">
        <p className="questiontitle">{questions[currentQuestion].question}</p>
        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <FlipCard
              key={index}//為每個FlipCard設置唯一的key
              option={option}//傳遞選項資料
              flipped={flipped[index]}//傳遞該卡片的翻轉狀態
              onClick={() => handleFlip(index)}//傳遞事件處理函數
              index={index} // 傳遞索引
            />
          ))}
        </div>
        {correctAnswered && <button onClick={handleNextQuestion}>下一題</button>}
      </div>
      <div className='LearnChoose-img-position'>
        <img className='LearnChoose-img-position-1' src="./images/GameDecoA.svg" alt="" />
        <img className='LearnChoose-img-position-2' src="./images/GameDecoB.svg" alt="" />
        <img className='LearnChoose-img-position-3' src="./images/GameDecoC.svg" alt="" />
        <img className='LearnChoose-img-position-4' src="./images/GameDecoD.svg" alt="" />
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>恭喜你</h4>
            <p>您已完成 {questionCount} 題！</p>
            <p>獲得答題小達人獎盃</p>
            <div className="gameaward-wrapper">
              <div className="awardlight"></div>
              <img className="gameaward" src="./images/award.svg" alt="" />
            </div>
            <p>是否要繼續遊玩？</p>
            <div className="buttonbox">
              <button className="choosebutton" onClick={handleRestart}>繼續遊玩</button>
              {/* <button onClick={handleExit}>離開</button> */}
              <Link to='/LearnHome' className="choosebutton"><p>離開</p></Link>
            </div>
          </div>
        </div>
      )}

    </section>
    <div className='phonePage'>
      <img src="images/phonePohto.png" alt="" />
    </div>
    <PhonePage></PhonePage>

  </>

  );
};





export default LearnGameChoose