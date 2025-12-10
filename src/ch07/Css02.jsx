/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";

const box1 = css`
  width: 100px;
  height: 100px;
  background-color: black;
`;

//box2 자체가 함수이고 return css 객체
const box2 = () => {
  return css`
    width: 100px;
    height: 100px;
    background-color: blue;
  `;
};

const box3 = (color) => css`
  width: 100px;
  height: 100px;
  background-color: ${color};
`;

const box4 = (isClicked) => css`
  width: 100px;
  height: 100px;
  background-color: green;
  transition: transform 0.5s ease;
  transform: translateX(${isClicked ? "200px" : "0px"});
`;

const box5 = (left) => css`
  width: 100px;
  height: 100px;
  background-color: greenyellow;
  position: relative;
  left: ${left}px;
  transition: left 1s ease-in-out;
`;

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  box-sizing: border-box;
  border: 1px solid #222;
  padding: 20px;
  width: 500px;
  height: 650px;
`;

const buttonController = css`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
`;

const controllerTop = css`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;
const controllerMiddle = css`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;
const controllerBottom = css`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;
const button = css`
  width: 50px;
  height: 50px;
`;
const boxContainer = css`
  position: relative;
  margin-top: 20px;
  box-sizing: border-box;
  border: 1px solid #222;
  width: 100%;
  flex-grow: 1;
`;
const movingBox = (position) => css`
  position: absolute;
  top: calc(${position.top}% - ${position.top}px);
  left: calc(${position.left}% - ${position.left}px);
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: all 1s ease-in-out;
`;

//이동 버튼을 하나 주면

function Css02() {
  //상태가 바뀌면 매번 box3 재호출
  // color 상태에 따라 다르게 매개변수로 color 를 받아옴
  const [color, setColor] = useState("#000000");
  //"이동" 버튼 클릭했을 때 상태에 따라 동작하도록
  const [isClicked, setIsClicked] = useState(false);

  //#2) left 로 이동상태 정의
  const [left, setLeft] = useState(0);

  const [ position, setPosition] = useState({
        top: 0,
        left: 0,
  })

    const handleMoveOnClick = () => {
        setLeft(left === 0 ? 700 : 0);
    }

    const handleMoveButtonOnClick = (e) => {
        const positionValue = {
            hight: 0,
            low: 100,
            left: 0,
            right: 100,
        }
        
        if (["hight", "low"].includes(e.target.id)) {
            setPosition({
                ...position,
                top: positionValue[e.target.id],
            });
        } else {
            setPosition({
                ...position,
                left: positionValue[e.target.id],
            });
        }
    }
    
  return (
    <>
      <button onClick={() => setColor("red")}>빨</button>
      <button onClick={() => setColor("orange")}>주</button>
      <button onClick={() => setColor("yellow")}>노</button>
      <div css={box1}></div>
      <div css={box2()}></div>
      {/* 함수로 정의해두고 호출해서 css 를 불러와도 됨 */}
      <div css={box3(color)}></div>
      {/* 클릭했을 때 상태를 바꿔줘야하니까 onClick 이벤트 안을 함수로 정의 */}
      <button onClick={() => setIsClicked((prev) => !prev)}>이동</button>
      {/* 이렇게 하면 함수 실행결과가 들어가서 무한루프 */}
      {/* <button onClick={setIsClicked((prev) => !prev)}>이동</button> */}
      <div css={box4(isClicked)}></div>

      <div css={container}>
        <div css={buttonController}>
          <div css={controllerTop}>
            <button id="hight" css={button} onClick={handleMoveButtonOnClick}>
              상
            </button>
          </div>
          <div css={controllerMiddle}>
            <button id="left" css={button} onClick={handleMoveButtonOnClick}>
              좌
            </button>
            <button id="right" css={button} onClick={handleMoveButtonOnClick}>
              우
            </button>
          </div>
          <div css={controllerBottom}>
            <button id="low" css={button} onClick={handleMoveButtonOnClick}>
              하
            </button>
          </div>
        </div>
        <div css={boxContainer}>
          <div css={movingBox(position)}></div>
        </div>
      </div>
    </>
  );
}

export default Css02;
