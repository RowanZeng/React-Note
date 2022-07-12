import React from 'react'

function JSXDemo(props) {
  return (
    <>
      <h1>JSX中各種類型值呈現</h1>
      <h2>Number</h2>

      {123 - 1}
      {/* 數字運算結果為數值122 */}
      {NaN}
      {/* NaN為數字 */}

      <h2>String</h2>

      {'abc'}
      {`hello ${100 - 5}`}
      {/*  ${100 - 5}為樣板字串 */}

      <h2>Boolean(不呈現)</h2>
      {true}
      {false}
      {/* Boolean值不管是ture或false都不呈現在畫面上 */}

      <h2>null(不呈現)</h2>
      {null}

      <h2>undefined(不呈現)</h2>
      {undefined}

      <h2>Array</h2>
      {[1, 2, 3, 4]}
      {[1, 2, 3, 4].join('')}
      {/* array要搭配網頁檢查的element查看顯示狀態，如果用到join會是一個字串 */}

      <h2>Object</h2>
      {/* 會有中斷錯誤，會顯示錯誤內容為物件在react不是一個合法的元素 */}
      {/* 也就是說物件不能直接當作JSX語法的值，陣列可以*/}
      {/* 所以如果要render一個子女元素的建議用陣列array */}
      {/* {{ a: 1, b: 2 }} */}

      <h2>Function</h2>
      {() => {
        console.log(123)
      }}
      {/* 函式不呈現 */}
    </>
  )
}

export default JSXDemo
