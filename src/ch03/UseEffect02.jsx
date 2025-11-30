function UseEffect02() {

    let v = undefined;    //num 과는 별개

    const useState = (initValue) => {
        v = initValue;
        const setter = (value) => {
            v = value;
        }

        return [ v, setter ];
    }

    const Component = () => {
        const [ num, setNum ] = useState(0);
        console.log(num);   //바로 위 const 의 상태변수인 num
        
        const onClick = () => {
            setNum(num + 1);  //num 은 const 의 num : 0  => 1
            console.log(num);  //setter 의 value 로 1이 전달되지만 num 은 아직 const 의 num => 0
        }

        return <div>{num}</div>   
    }

    Component();  //상태가 바뀌어서 재호출
    
}

export default UseEffect02;