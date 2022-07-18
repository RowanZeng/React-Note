import { Component } from "react";

// 這個例子是類別型元件(class)寫法，要用extends去繼承Component
// 類別型元件最重要的會用到constructor()為初始化狀態用的、super()為呼叫父母類別繼承該類別的建構式、render()
class CC extends Component {
    constructor() {
        super();
         // 下面那句是宣告一個狀態，這裡的狀態一定是一個物件
        this.state = { total: 0, isTen: false };
        console.log("CC - constructor");
    }

    componentDidMount() {
        console.log("CC - componentDidMount");
        // get date from server A
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(
            "CC - componentDidUpdate",
            "total =",
            this.state.total,
            "previous total = ",
            prevState.total
        );
    }

    componentWillUnmount() {
        console.log("CC - componentWillUnmount");
    }

    render() {
        console.log("CC - render");
        return (
            <>
                <h1>CC</h1>
                <h1
                    onClick={() => {
                        this.setState({ total: this.state.total + 1 });
                    }}
                >
                    {this.state.total}
                </h1>
            </>
        );
    }
}

export default CC;
