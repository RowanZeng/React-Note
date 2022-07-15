import { Fragment, useState } from "react";

function MultipleInput() {
    const [userData, setUserData] = useState({
        fullName: "",
        phone: "",
        email: "",
        gender: "",
        car: "",
        likelist: [],
    });

    // 這裡性別的資料
    const genderOptions = ["男", "女", "不提供"];

    // 這裡是車子型號的資料
    const carOptions = ["Benz", "BMW", "Toyota"];

    // 這是設定水果的選項
    const fruitOptions = ["西瓜", "芒果", "蘋果"];

    // handleChange是在寫onChange的共用組件，因為格式差不多可以用此方式寫直接套用handleChange
    const handleChange = (e) => {
        console.log(e.target.type, e.target.name, e.target.value);
        //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
        setUserData({ ...userData, [e.target.name]: e.target.value });
        // 先複製一個原有的userData，再將[e.target.name]對應到useState裡的key有5個，e.target.value則對應到value，此為新的設定值，再丟給setUserData設定。
    };

    return (
        <>
            <label>姓名</label>
            <input
                name="fullName"
                type="text"
                value={userData.fullName}
                onChange={handleChange}
            />
            <br />
            <label>電話</label>
            <input
                name="phone"
                type="text"
                value={userData.phone}
                onChange={handleChange}
            />
            <br />
            <label>Email</label>
            <input
                name="email"
                type="text"
                value={userData.email}
                onChange={handleChange}
            />
            <br />
            <label>性別</label>
            {genderOptions.map((v, i) => {
                return (
                    <Fragment key={i}>
                        <input
                            name="gender"
                            type="radio"
                            checked={userData.gender === v}
                            value={v}
                            onChange={handleChange}
                        />
                        <label>{v}</label>
                    </Fragment>
                );
            })}
            <br />
            <label>喜好車子品牌</label>
            <select value={userData.car} name="car" onChange={handleChange}>
                <option value="">請選擇</option>
                {carOptions.map((v, i) => {
                    return (
                        <option key={i} value={v}>
                            {v}
                        </option>
                    );
                })}
            </select>
            <br />
            <label>喜好的水果</label>
            {fruitOptions.map((v, i) => {
                return (
                    <div key={i}>
                        <input
                            type="checkbox"
                            checked={userData.likeList.includes(v)}
                            value={v}
                            onChange={(e) => {
                                //先判斷是否有在likeList狀態陣列中
                                if (
                                    userData.likeList.includes(e.target.value)
                                ) {
                                    // if有 -> 移出陣列
                                    const newLikeList =
                                        userData.likeList.filter((v, i) => {
                                            return v !== e.target.value;
                                        });

                                    setUserData({
                                        ...userData,
                                        likeList: newLikeList,
                                    });
                                } else {
                                    // else -> 加入陣列
                                    const newLikeList = [
                                        ...userData.likeList,
                                        e.target.value,
                                    ];

                                    setUserData({
                                        ...userData,
                                        likeList: newLikeList,
                                    });
                                }
                            }}
                        />
                        <label>{v}</label>
                    </div>
                );
            })}
        </>
    );
}

export default MultipleInput;
