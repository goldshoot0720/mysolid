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
          <a href="/">Index</a>
          <a href="/sub1">Sub1</a>
          <a href="/sub2">Sub2</a>
          <a href="/sub3">Sub3</a>
          <a href="/sub4">Sub4</a>
          <a href="/sub5">Sub51</a>
          <a href="/sub6">Sub6</a>
          <a href="/sub7">Sub7</a>
          <a href="/sub8">Sub8</a>
          <a href="/sub9">Sub9</a>
          <a href="/sub10">Sub10</a>
          <a href="/sub11">Sub11</a>
          <a href="/sub12">Sub12</a>
          <a href="/about">About</a>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
