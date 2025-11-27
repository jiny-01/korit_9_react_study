import React from "react";

/**
 * 컴포넌트 - 태그를 커스텀하기 위함
 * 컴포넌트 만드세요 -> src 폴더 안에 대문자로 시작하는 기능을 만들겠단 의미 
 * 무조건 함수 만들거고 -> 만들어진 함수를 export 할거임 => 사용할 곳에선 import
 * 컴포넌트는 무조건 첫 글자 대문자
 * 컴포넌트명 = 파일명 일치시켜야함
 * **컴포넌트의 리턴은 항상 태그로 리턴할 것 => 함수의 결과가 태그여야함
 * js 는 무조건 태그 닫아야함
 * ex) <input type="text" /> 또는 <h1></h1>
 * 어떤 형식으로든 컴포넌트는 감싸져야함
 * 
 * 
 */


function Hello() {
  return <input type="text" />;
}

export default Hello;
