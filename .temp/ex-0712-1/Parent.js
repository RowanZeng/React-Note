import Child from "./Child";

function Parent() {
    return (
        <>
            <Child
                text="React你好"
                abc={123}
                isBook={true}
                foo={() => {
                    alert("hello");
                }}
            />
            <Child />
        </>
    );
}

export default Parent;
