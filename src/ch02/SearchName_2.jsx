//문제
//input 하나를 만들고 입력된 값과 일치하는 나이를 h2 태그 안에 출력하시오.

import { useState } from "react";

function SearchName() {
  // input 상태
  const [searchName, setSearchName] = useState("");

  const profiles = [
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

  const [result, setResult] = useState("찾은 결과 없음");
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    setResult("찾은 결과 없음");

    //for 반복
    for (let i = 0; i < names.length; i++) {
      const profile = names[i]; //i번쨰 객체
      if (profile.name === inputValue) {
        setResult(profile.age);
        break;
      }
    }

    const forEach = (arr, fx) => {
        for (let obj of arr) {
            fx(obj);
        }
    }

    const fx = (profile) => {
        if (profile.name === e.target.value) {
            setResult(profile.age);
            //break;    //함수 안에서는 break 안됨
            return;
        }
    }
  };

  //forEach - last find
  profiles.forEach((profile) => {
    if (profile === e.target.value) {
      setResult(profile.age);
      break;     //forEach 내부는 콜백 함수라서 break 불가능
    }
  });

  //filter - first find
  const foundProfiles = profiles.filter((profile) => {
    return profile.name === e.target.value;
  });
  if (!!foundProfile.length) {
    setResult(foundProfile[0].age);   //first find : 앞에서부터 찾음
  }

  //find - first find 
  const foundProfile = profiles.find((profile) => {
    return profile.name === e.target.value;
  });
  if (!!foundProfile.length) {   //length 숫자라서 논리자료형으로 바꾼 것
    setResult(foundProfile.age);
  }

  // input과 일치하는 이름
  const findName = names.find((p) => p.name === searchName);
  const found = names.filter((p) => p.name === searchName);

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
