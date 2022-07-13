import OrderList from "./components/OrderList";
import Summary from "./components/Summary";
import "./OrderPage.css";

import { useState } from "react";

import { products } from "./data/products";

//初始化狀態用的函式
const initState = (productArray) => {
    const state = [];

    for (let i = 0; i < productArray.length; i++) {
        state.push(1);
    }

    return state;
};

// 另一種短語句的技巧寫法
//const initState = (productArray) => Array(productArray.length).fill(1)

function OrderPage() {
    // 多樣產品用的共同狀態，ex 三樣產品為[1,1,1]，四樣為[1,1,1,1]
    const [counts, setCounts] = useState(initState(products));

    const calcTotalNumber = () => {
        let total = 0;

        for (let i = 0; i < products.length; i++) {
            total += counts[i];
        }

        return total;
    };

    // reduce寫法
    //const calcTotalNumber = () => counts.reduce((a, b) => a + b, 0)

    const calcTotalPrice = () => {
        let total = 0;

        for (let i = 0; i < products.length; i++) {
            total += counts[i] * products[i].price;
        }

        return total;
    };

    // reduce寫法
    // const calcTotalPrice = () =>
    //   counts.reduce(function (r, a, i) {
    //     return r + a * products[i].price
    //   }, 0)

    return (
        <div className="card">
            <div className="row">
                <OrderList counts={counts} setCounts={setCounts} />
                <Summary
                    totalNumber={calcTotalNumber()}
                    totalPrice={calcTotalPrice()}
                />
            </div>
        </div>
    );
}

export default OrderPage;
