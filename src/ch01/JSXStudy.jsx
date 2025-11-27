import { Fragment } from "react";
import Hello from "../Hello";

function JSXStudy() {
  const 닫아야함 = <input type="text" />;
  const 닫아야함2 = <div></div>;

  //요소2개 -> 무조건 감싸야함
  const 감싸야함 = (
    <div>
      <input type="text" />
      <input type="text" />
    </div>
  );
  //<Fragment> 로 감싸라 -> 빈 태그 <> 로 감싸라는 의미
  const 감싸야함2 = (
    <Fragment>
      <div>
        <input type="text" />
        <input type="text" />
      </div>
      <div>
        <input type="text" />
        <input type="text" />
      </div>
    </Fragment>
  );
  const a = (
    <div>
      <div>
        <Hello />
        <Hello />
      </div>
      <div>
        <Hello />
        <Hello />
      </div>
    </div>
  );

  //{} 안엔 값, 변수, 연산식만 넣을 수 있음
  const num = 10;
  const name = "김준일";
  const nums = [1, 2, 3, 4, 5];
  const names = ["준일", "준이", "준삼", "준사", "준오"];
  const tds = [<td>번호</td>, <td>이름</td>];

  const box = <div></div>;

  //JSX 안에 변수 또는 값, 연산자를 쓰고 싶으면 {}안에 입력
  const 표현식 = (
    <div>
      <h3>{num}</h3>
      <h3>{name}</h3>
      <div>{box}</div>
      <div>{nums}</div>
      <table>
        <thead>
          <tr>{tds}</tr>
        </thead>
        {/* nums 순회하면서 <tr> 생성 */}
        <tbody>
          {nums.map((num, index) => {
            return (
              <tr>
                <td>{num}</td>
                <td>{names[index]}</td>
              </tr>
            );
          })}
        </tbody>
        {/* 1-준일, 2-준이,,,, */}
      </table>
    </div>
  );
  // createRoot(root).render(a);
  return <>{표현식}</>;
}

export default JSXStudy;

/**
 * JSX는 반드시 닫아야 하는 태그가 있다
 * JSX는 형제 요소가 여러 개면 반드시 하나로 감싸야 한다
 * Fragment => 빈 태그 사용 <> </>
 * JSX에서 값 사용하려면 {} 안에 넣기
 * return 값은 태그 -> 반드시 하나만 가능
 */
