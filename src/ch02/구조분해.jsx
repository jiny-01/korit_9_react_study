function 구조분해() {
  const nums = [1, 2, 3, 4, 5];
  const [num1, num2, num3, num4, num5] = nums;

  console.log(`숫자1: ${num1}`);
  console.log(`숫자2: ${num2}`);
  console.log(`숫자3: ${num3}`);
  console.log(`숫자4: ${num4}`);
  console.log(`숫자5: ${num5}`);

  const user = {
    username: "aaa",
    password: "1234",
    name: "김준일",
    email: "email",
    phone: "010-1111-2222",
    address: "동래구",
    roles: [
      {
        roleId: 1,
        roleName: "ROLE_USER",
      },
      {
        roleId: 2,
        roleName: "ROLE_ADMIN",
      },
    ],
  };

  const {
    name,
    username,
    roles: [
      { roleId: roleId1, roleName: roleName1 },
      { roleId: roleId2, roleName: roleName2 },
    ],
  } = user;

  console.log(`사용자이름: ${username}`);
  console.log(`권한명1: ${roleName1}`);
  console.log(`권한명2: ${roleName2}`);

  return null; // 화면에 표시 안함(실습용)
}

export default 구조분해;
