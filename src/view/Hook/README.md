# React Hook Note

各式 hooks 封裝指南 [Hooks.guide](https://hooks-guide.netlify.app/)

## React Hooks 解決的問題

## useState 狀態管理

```
const [state, setState] = useState(initState)
```

- `useState` 回傳一個 `Array`
- `state` 為要設置的 state (命名隨意)
- `setState` 為更新 state 的函式 (命名隨意)
- `initState` 為初始 state，也可以是一個 `return function`
- `useState Hook` 可以用不止一次

### [Init state 的 2 種方式 ]

- 傳入 data，每次 component render 都會跑一次
- 傳入 return function，只跑第一次 component render 時

```
  // 每次 render 都會跑一次
  const [clickCount, setClickCount] = useState(0);
  const [clickCount, setClickCount] = useState(init());

  // 只跑第一次 render 時
  const [clickCount, setClickCount] = useState(() => init());
```

### [Update state 的 2 種方式]

- 傳入 data
- 傳入 return function，可以獲得最新的 state

```
// 傳入 data
<button onClick={() => setClickCount(clickCount + 1)}>點擊</button>

// 傳入 return function
<button onClick={() => setClickCount((pre) => pre + 1)}>點擊</button>
```
