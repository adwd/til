import React from "react";
import "./App.css";
import { rootScreenQueryData } from "./mocked-response";

function App() {
  // 本来はGraphQL通信で取得するデータだけどモックで済ます
  const data = rootScreenQueryData;

  // ROOTスクリーンの、compact layout決め打ちで描画する
  const rootScreen = data.rootScreen?.screens?.find((s) => s?.id === "ROOT");
  if (rootScreen == null) {
    return null;
  }

  const rootCompactLayout = rootScreen.layout?.compact;
  if (rootCompactLayout == null) {
    return null;
  }

  return (
    <div>
      <pre>
        <code>{JSON.stringify(rootCompactLayout, null, 2)}</code>
      </pre>
    </div>
  );
}

export default App;
