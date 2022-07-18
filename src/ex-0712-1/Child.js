function Child(props) {
    // 先作物件解構指定值再使用
    const { text, abc, isBook, foo } = props;

    // 解構指定值時也可以給預設值
    // 或直接在傳入參數解構時給定預設值
    // 參考: https://stackoverflow.com/questions/47774695/react-functional-component-default-props-vs-default-parameters
    //const { text="沒給文字", abc=0, isBook, foo } = props

    console.log(props);

    return (
        <>
            <h1>{text}</h1>
            <p>{abc}</p>
            <button onClick={foo}>click me</button>
        </>
    );
}

Child.defaultProps = {
    text: "沒給文字",
    abc: 0,
};

export default Child;
