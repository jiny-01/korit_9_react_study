//문제
//input 하나를 만들고 입력된 값과 일치하는 나이를 h2 태그 안에 출력하시오.

import { useState } from "react";

function SearchName() {
  // input 상태
  const [searchName, setSearchName] = useState("");

  const names = [
    {
      name: "김준일",
      age: 32,
    },
    {
      name: "김준이",
      age: 33,
    },
    {
      name: "김준삼",
      age: 34,
    },
  ];

  const [ result, setResult ] = useState("");

  //input 입력창
  const handleOnChange = (e) => {
    setSearchName(e.target.value);
  };

  //
  // input과 일치하는 이름
  const findName = names.find((p) => p.name === searchName);

//   const found = for (let i = 0; i < names.length; i++) {
//     if (names[i].name === searchName) {
//       foundAge = names[i].age;
//       break;
//     }
    
//   }

  return (
    <div>
      <input
        type="text"
        placeholder="이름 검색"
        value={searchName}
        onChange={handleOnChange}
      />
      <div>{findName ? <h2>나이: {findName.age}</h2> : "찾을 수 없음"}</div>
    </div>
  );
}

export default SearchName;
