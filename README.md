# React-SRP-TimerApp

Reactの`useReducer`とカスタムフックを使用して、シンプルなカウントアップタイマーを実装した練習用アプリです。

タイマーの状態管理と制御ロジック、UI表示を分離し、**SRP（単一責任の原則）**を意識した構成にしています。

## 概要

スタート、ストップ、リセット操作ができるカウントアップタイマーです。

タイマーの状態管理には`useReducer`、タイマー制御にはカスタムフックを使用しています。

## 使用技術

* React
* TypeScript
* useReducer
* useEffect
* Custom Hook
* Tailwind CSS

## 主な機能

* タイマーのスタート
* タイマーのストップ
* タイマーのリセット
* 1秒ごとのカウントアップ
* Tailwind CSSによるUIデザイン

## プロジェクト構成

```text
src/
├── components/
│   └── CountTimer.tsx
├── hooks/
│   └── useCountTimer.ts
├── reducers/
│   └── CountTimerReducer.ts
├── types/
│   └── CountTimerType.ts
└── App.tsx
```

## SRPを意識した責務分離

### CountTimer.tsx

タイマーのUI表示を担当します。

```tsx
const { count, start, stop, reset } = useCountTimer();
```

タイマーの内部ロジックを直接持たず、カスタムフックから必要な値や関数を受け取って表示します。

### useCountTimer.ts

タイマーの制御ロジックを担当します。

* `useReducer`による状態管理
* `setInterval`による1秒ごとの処理
* `START` / `STOP` / `RESET`のdispatch
* `setInterval`のクリーンアップ

### CountTimerReducer.ts

状態の変更ルールを担当します。

```text
START → タイマーを開始状態にする
STOP  → タイマーを停止状態にする
RESET → 初期状態に戻す
TICK  → countを1増加させる
```

### CountTimerType.ts

タイマーの状態とActionの型定義を担当します。

## タイマーの処理フロー

```text
Startボタン
    ↓
start()
    ↓
dispatch({ type: "START" })
    ↓
isRunning = true
    ↓
setInterval開始
    ↓
1秒ごとに
dispatch({ type: "TICK" })
    ↓
count + 1
    ↓
画面更新
```

Stopの場合：

```text
Stopボタン
    ↓
stop()
    ↓
dispatch({ type: "STOP" })
    ↓
isRunning = false
    ↓
clearInterval()
```

Resetの場合：

```text
Resetボタン
    ↓
reset()
    ↓
dispatch({ type: "RESET" })
    ↓
count = 0
isRunning = false
```

## 学習ポイント

* `useReducer`を使用した状態管理
* `dispatch`とActionの役割
* Reducerによる状態変更
* `useEffect`と`setInterval`を組み合わせたタイマー処理
* カスタムフックによるロジックの分離
* UIとロジックの責務分離
* SRP（単一責任の原則）の実践
* TypeScriptによるState・Actionの型定義

## SRPによる責務分離

```text
CountTimer.tsx
      ↓
   UI表示

useCountTimer.ts
      ↓
タイマー制御

CountTimerReducer.ts
      ↓
状態変更

CountTimerType.ts
      ↓
型定義
```

それぞれのファイルが異なる責務を持つことで、UIとロジックを分離し、変更や保守がしやすい構成にしています。

## まとめ

このアプリでは、`useReducer`による状態管理とカスタムフックによるタイマー制御を組み合わせ、**UI・ロジック・状態変更・型定義の責務を分離**しました。

単純なタイマーを題材に、Reactにおける**SRPと責務分離**を実践的に学習することを目的としています。
