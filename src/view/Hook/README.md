# React Hook Note

###### tags: `React` `Hooks` `React hooks`

<br/>

各式 hooks 封裝指南 [Hooks.guide](https://hooks-guide.netlify.app/)

<br/>

# useState 狀態管理

```
const [state, setState] = useState(initState)
```

- `useState` 回傳一個 `Array`
- `state` 為要設置的 state (命名隨意)
- `setState` 為更新 state 的函式 (命名隨意)
- `initState` 為初始 state，也可以是一個 `return function`
- `useState Hook` 可以用不止一次

<br/>

## [ Init state 的 2 種方式 ]

- 傳入 data，每次 component render 都會跑一次
- 傳入 return function，只跑第一次 component render 時

```
  // 每次 render 都會跑一次
  const [clickCount, setClickCount] = useState(0);
  const [clickCount, setClickCount] = useState(init());

  // 只跑第一次 render 時
  const [clickCount, setClickCount] = useState(() => init());
```

<br/>

## [ Update state 的 2 種方式 ]

- 傳入 data
- 傳入 return function，可以獲得最新的 state

```
// 傳入 data
<button onClick={() => setClickCount(clickCount + 1)}>點擊</button>

// 傳入 return function
<button onClick={() => setClickCount((pre) => pre + 1)}>點擊</button>
<button onClick={() => setUserData((pre) => { ...pre, name: 'Yellow'})}>點擊</button>
```

<br/>

## [ 延伸> 解決 useState 不及時問題 ]

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

<br/>
<br/>

# useEffect 副作用管理

任何會產生 side effect (資料獲取、訂閱、手動修改 React Dom 等) 的行為都應該使用 useEffect 處理。

整合了 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`

```
useEffect(callback, array)
```

- `callback` 函式，用於處理 side effect 邏輯
- `array` 根據不同的設定來決定要執行 callback 的時機

<br/>

## [ 第一個參數 callback，副作用邏輯 ]

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

<br/>

## [ 第二個參數 array，用於控制執行 ]

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

<br/>

## [ Clean up 清理機制 ]

有兩種常見的副作用，一種是不需要清理的另一種是需要的。

- **不需要清理的** 資料請求，DOM 修改，log 紀錄等，useEffect 會自動處理
- **需要清理的** 訂閱和取消訂閱，事件監聽和取消監聽都是需要清理的

<br/>
<br/>

# useContext 方便使用 context

是 Context.Consumer 的語法糖

## [ Context 資源共享 api ]

解決層層傳遞 props 的問題 ( props drilling )，主要通過 3 個步驟：

1. 通過 `React.createContext` 創建 Context Object。
2. 使用 `Context.Provider` 包裹父元件，傳遞資源使底下 child 可以取用。
3. 使用 `Context.Consumer` 包裹子元件，取得 context 資源。

### 創建

```
const testContext = createContext();
const { Provider, Consumer } = testContext;

export { testContext }; // 這裡需要將 context 匯出讓 child 取用

```

### 包裹父元件，傳遞資源

```
<testContext.Provider value={store}>
    <MyComponents />
</testContext.Provider>
```

### 包裹子元件，取得資源

```
import { testContext } form '../ParentsComponent'; // 匯入 context

<testContext.Consumer>
   { valur=> {
       // value 是通過 provider 傳下來的資源，這裡是 store
   }}
</testContext.Consumer>
```

 <br/>
 
 ## [ useContext 取得資源 ]
 使用 `useContext ` 代替 Consumer 取得 context 資源
 
 ### 子元件取得資源
 ```
 import { testContext } form '../ParentsComponent'; // 匯入 context
 
 const ChildComponent = () => {
    const store = useContext(testContext)
 }
 ```
 
 ## 注意!!
每當 useContext 更新時，底下的 child 元件都會重新 re-render，所以不常變動的值較適合使用 context 保管，或是使用 useMemo 節省效能。
<br/>
#### 延伸閱讀：[The Problem with React's Context API](https://leewarrick.com/blog/the-problem-with-context/)

<br/>
<br/>

# useReducer 複雜的狀態管理

進階版 useState，兩者都是用來儲存、更新資料。跟 Redux 很像！核心都是 store, action, reducer

![](https://i.imgur.com/j4GfM8E.png)

## [ 基本 useReducer ]

![](https://i.imgur.com/XznH7Gf.jpg)

### 參數：

- `reducer` 是一個函式，用於處理 action 並更新 state。
- `initState` 初始化 State。
- `initAction` 初始化 Action，useReducer 初次執行時被處理。

### 回傳：

- `state` 狀態
- `dispatch` 更新 state 的方法，action 作為參數。

<br/>

### 如何使用：

```
const { useState, useReducer } = React;

const ACTIONS = {
  INCREMENT: 'increament',
  DECREMENT: 'decreament'
}

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1}
     case ACTIONS.DECREMENT:
      return { count: state.count - 1}
    default:
      return state
  }

}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {count: 256})

  const increase = () => {dispatch({type: ACTIONS.INCREMENT}) };
  const decrease = () => {dispatch({type: ACTIONS.DECREMENT }) };

  return (
    <div>
      <button onClick={decrease} />
      <span>{state.count}</span>
      <button onClick={increase} />
    </div>
  )
};
```

<br />
<br />

# useMemo 記憶值

用於效能優化。無關於父元件，主要用在當元件重新渲染時，通過`記憶值` 避免在元件中複雜的程式重複執行，可以減少渲染的耗時。
<br/>
適合用於 > 需要複雜計算的場景，例如 `複雜的列表渲染`，深拷貝等等。

> React 官方特別提醒
> You may rely on useMemo as a performance optimization, not as a semantic guarantee.
> 因此，不要什麼東西都丟到 useMemo 裡面，在需要優化效能時才引用，否則只是讓 React 處理更多事情，造成更大的負擔。

## [ 基本用法 ]

```
const memoizedValue = useMemo(callback, array);
```

### 參數：

- `callback` 計算邏輯函示。
- `array` 當裡面賦予的值改變時 useMemo 才會執行。

### 返回：

- 返回 callback 的返回值。

```
const obj1 = { id: '1', name: 'yellow' }
const obj2 = { id: '2', name: 'kimi', age: 18 }
const memoizedValue = useMemo(()=> Object.assign(obj1, obj2),[obj1, obj2])

// 使用
<div>{memoizedValue.age}</div>
```

<br />
<br />

# useCallback 記憶值

當父元件傳遞的 props 是 Object 時，父元件的狀態被改變觸發重新渲染，Object 的記憶體位址也會被重新分配，React.memo 會用 shallowly compare 比較 props 中 Object 的記憶體位址，這個比較方式會讓子元件被重新渲染。<br/>
因此，React 提供了 React.useCallback 這個方法讓 React 在元件重新渲染時，如果 dependencies array 中的值在沒有被修改的情況下，它會幫我們記住 Object，防止 Object 被重新分配記憶體位址。

## [ 基本用法 ]

```
const memoizedCallback = useCallback(callback, array);
```

當 useCallback 能夠記住 Object 的記憶體位址，就可以避免父元件重新渲染後，Object 被重新分配記憶體位址，造成 React.memo 的 shallowly compare 發現傳遞的 Object 記憶體位址不同。

### 參數：

- `callback` 計算邏輯函示。
- `array` 當裡面賦予的值改變時 useMemo 才會執行。

### 返回：

- 返回 callback 本身。

`useCallback(fn, arr)` 等於 `useMemo(()=>fun, arr)`

```
const obj1 = { id: '1', name: 'yellow' }
const obj2 = { id: '2', name: 'kimi', age: 18 }
const memoizedValue = useCallback(()=> Object.assign(obj1, obj2),[obj1, obj2])

// 使用
<div>{memoizedValue().age}</div>
```
