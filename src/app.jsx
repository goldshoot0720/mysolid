import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <a href="/">首頁</a>
          <a href="/sub1">訂閱</a>
          <a href="/sub2">銀行</a>
          <a href="/sub3">錄取</a>
          <a href="/sub4">學習</a>
          <a href="/sub5">門診處方箋</a>
          <a href="/sub6">消費</a>
          <a href="/sub7">日期時間</a>
          <a href="/sub8">金融市場</a>
          <a href="/sub9">動畫追劇</a>
          <a href="/sub10">部落格</a>
          <a href="/sub11">大位天定</a>
          <a href="/sub12">保留</a>
          <a href="/about">關於</a>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
