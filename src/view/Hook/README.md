# React Hook Note

各式 hooks 封裝指南 [Hooks.guide](https://hooks-guide.netlify.app/)

[> useState 狀態管理](https://github.com/XXuain/react-graphQL-todoList/tree/main/src/view/Hook#usestate-%E7%8B%80%E6%85%8B%E7%AE%A1%E7%90%86)

[> useEffect 副作用管理](https://github.com/XXuain/react-graphQL-todoList/tree/main/src/view/Hook#useeffect-%E5%89%AF%E4%BD%9C%E7%94%A8%E7%AE%A1%E7%90%86)



## useState 狀態管理

```
const [state, setState] = useState(initState)
```

- `useState` 回傳一個 `Array`
- `state` 為要設置的 state (命名隨意)
- `setState` 為更新 state 的函式 (命名隨意)
- `initState` 為初始 state，也可以是一個 `return function`
- `useState Hook` 可以用不止一次

### [ Init state 的 2 種方式 ]

- 傳入 data，每次 component render 都會跑一次
- 傳入 return function，只跑第一次 component render 時

```
  // 每次 render 都會跑一次
  const [clickCount, setClickCount] = useState(0);
  const [clickCount, setClickCount] = useState(init());

  // 只跑第一次 render 時
  const [clickCount, setClickCount] = useState(() => init());
```

### [ Update state 的 2 種方式 ]

- 傳入 data
- 傳入 return function，可以獲得最新的 state

```
// 傳入 data
<button onClick={() => setClickCount(clickCount + 1)}>點擊</button>

// 傳入 return function
<button onClick={() => setClickCount((pre) => pre + 1)}>點擊</button>
<button onClick={() => setUserData((pre) => { ...pre, name: 'Yellow'})}>點擊</button>
```

### [ 延伸> 解決 useState 不及時問題 ]

先來亢亢這個

```
const [updateCount, setUpdateCount] = useState(5);
  const updateCountHandle = async () => {
    await setUpdateCount(updateCount + 1);
    console.log('updateCount: ', updateCount); // 預期+1 後是 6，但結果一樣是5
  };
  const updateCountBtn = () => {
    return (
      <div>
        <h3>最新的點擊次數是 {updateCount} 次</h3>
        <button onClick={() => updateCountHandle()}>更新點擊</button>
      </div>
    );
  };
```

React 文檔是說

> 为什么我会在我的函数中看到陈旧的 props 和 state ？
> 组件内部的任何函数，包括事件处理函数和 effect，都是从它被创建的那次渲染中被「看到」的
> (說明 console 印出來的是這次 render 出來的值)

但如果中間在加入一個 return function 呢？

```
const [updateCount, setUpdateCount] = useState(5);
  const updateCountHandle = async () => {
    await setUpdateCount(updateCount + 1);
    await setUpdateCount((pre) => {
      console.log('preState: ', pre); // 印出 6
      return pre +1;
    });
    console.log('updateCount: ', updateCount); // 印出 5 XD
  };
  const updateCountBtn = () => {
    return (
      <div>
        <h3>最新的點擊次數是 {updateCount} 次</h3> // 印出 7 woooo
        <button onClick={() => updateCountHandle()}>更新點擊</button>
      </div>
    );
  };
```

建議是不要使用以上方式這樣做判斷

> 而是使用 `useEffect` 偵測 `updateCount` 的變化並且執行要的動作

```
const [updateCount, setUpdateCount] = useState(5);
  const updateCountHandle = async () => {
    await setUpdateCount(updateCount + 1);
    // await setUpdateCount((pre) => {
    //   console.log('preState: ', pre);
    //   return pre + 1;
    // });
    console.log('updateCount: ', updateCount); // 印出 5
  };

  useEffect(() => {
    // do something
    console.log('useEffect: ', updateCount); // 印出 6，恭喜~~
  }, [updateCount]);
```



## useEffect 副作用管理

任何會產生 side effect (資料獲取、訂閱、手動修改 React Dom 等) 的行為都應該使用 useEffect 處理。
整合了 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`

```
useEffect(callback, array)
```

- `callback` 函式，用於處理 side effect 邏輯
- ## `array` 根據不同的設定來決定要執行 callback 的時機

### [ 第一個參數 callback，副作用邏輯 ]

- **side effect logic** 副作用邏輯處理
- **clean up** 可以返回一個函式，用於清理工作，相當於 `componentWillUnmount`

```
useEffect(() => {
  // 處理 side effect
  return () => {
    // Cleanup whatever we did last time
  }
})
```

### [ 第二個參數 array，用於控制執行 ]

- **once** 如果是空 array `[]`，只在元件第一次 render 時執行，相當於 `componentDidMount`
- **have change** 如果 array 有 state, 或 props 的值，當有改變時就會執行，相當於 `componentDidUpdate`
- **after every render** 當沒有定義 array 時，他會在第一次及每次 render 都會執行

```
useEffect(() => {
 // 只在初次 render 時執行
  console.log('once')
}, [])
```

```
useEffect(() => {
 // 會在初次 render 時執行，並且當 array 內的 state 或 props 改變時也會執行
  console.log('have change')
}, [state, props])
```

```
useEffect(() => {
 // 他會在第一次及每次 render 都會執行
  console.log('after every render')
})
```

### [ Clean up 清理機制 ]

有兩種常見的副作用，一種是不需要清理的另一種是需要的。

- **不需要清理的** 資料請求，DOM 修改，log 紀錄等，useEffect 會自動處理
- **需要清理的** 訂閱和取消訂閱，事件監聽和取消監聽都是需要清理的
