import React from "react";
import { useState } from "react";
import '../assets/css/LearnArea4.css';
import { Link } from "react-router-dom";

export default function LearnArea4() {
  const [draggableItems, setDraggableItems] = useState([
    { id: 1, iconName: "./images/learnAreaI.png", brandName: "./images/learnAreaQ1.png", isDropped: false },
    { id: 2, iconName: "./images/learnAreaS.png", brandName: "./images/learnAreaQ2.png", isDropped: false },
    { id: 3, iconName: "./images/learnAreaU.png", brandName: "./images/learnAreaQ3.png", isDropped: false }
  ]);

  const [droppedItems, setDroppedItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData("id"), 10);

    // 只在放置正確時更新狀態
    if (draggedId === targetId) {
      const draggedItem = draggableItems.find((item) => item.id === draggedId);
      setDroppedItems((prevDroppedItems) => [...prevDroppedItems, draggedItem]); // 更新已放置的項目
      setDraggableItems((prevDraggableItems) =>
        prevDraggableItems.map((item) =>
          item.id === draggedId ? { ...item, isDropped: true } : item
        )
      ); // 保持原順序，標記已放置

      const targetElement = e.target;
      targetElement.innerHTML = `<img src="${draggedItem.iconName}" alt="icon" />`;
      targetElement.classList.add("dropped");
    }
    // 如果放置錯誤，不執行任何更新
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const resetGame = () => {
    setDraggableItems([
      { id: 1, iconName: "./images/learnAreaI.png", brandName: "./images/learnAreaQ1.png", isDropped: false },
      { id: 2, iconName: "./images/learnAreaS.png", brandName: "./images/learnAreaQ2.png", isDropped: false },
      { id: 3, iconName: "./images/learnAreaU.png", brandName: "./images/learnAreaQ3.png", isDropped: false }
    ]);
    setDroppedItems([]);
    setIsModalVisible(false);
    document.querySelectorAll(".droppable").forEach((el) => {
      el.innerHTML = "";
      el.classList.remove("dropped");
    });
  };

  const handleEmotionClick = () => {
    // window.location.href = "/LearnPage"; // 跳轉到指定的頁面
  };

  return (
    <section id="LearnAreaall4">
      <div className="game-container ">
        <div className="draggable-items">
          {draggableItems.map(
            (item) =>
              !item.isDropped && (
                <img
                  key={item.id}
                  src={item.iconName}
                  alt="icon"
                  className="draggable"
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, item.id)}
                />
              )
          )}
        </div>

        <div className="matching-pairs">
          {draggableItems.map((item) => (
            <div key={item.id} className="matching-pair">
              <img className="label" src={item.brandName} alt="label" />
              <span
                className="droppable"
                data-id={item.id}
                onDrop={(e) => handleDrop(e, item.id)}
                onDragOver={allowDrop}
              ></span>
            </div>
          ))}
        </div>

        {/* 按鈕僅在答完所有題目後出現 */}
        {droppedItems.length === draggableItems.length && (
          <div className="game-over-buttons">
            <button className="play-again-btn" onClick={resetGame}>
              再試一次
            </button>
            <button className="feedback-btn" onClick={() => setIsModalVisible(true)}>
              結束課程
            </button>
          </div>
        )}

        {/* 離開模態視窗 */}
        {isModalVisible && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Congratulations!</h2>
              <p>已完成此課程！(•̀ᴗ•́)و</p>
              <p>我覺得 ...</p>
              <Link to="/LearnPage" onClick={handleEmotionClick}>
                <div className="emotions-container" >
                  {[
                    { id: 1, name: "Happy", image: "./images/icon_greenA.svg" },
                    { id: 2, name: "Angry", image: "./images/icon_red.svg" },
                    { id: 3, name: "Surprised", image: "./images/icon_pink.svg" },
                    { id: 4, name: "Confused", image: "./images/icon_blue.svg" }
                  ].map((emotion) => (
                    <button
                      key={emotion.id}
                      className="emotion-button"
                      onClick={handleEmotionClick}
                    >
                      <img src={emotion.image} alt={emotion.name} className="emoji-img" />
                    </button>
                  ))}
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="road">
        <img className="road1" src="./images/greenA.svg" alt="" />
        <img className="road2" src="./images/learnAreaPath.png" alt="" />
      </div>
    </section>
  );
}

