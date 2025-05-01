import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

export default function Home() {
  
  return (
    <main>
      <Title>草包鋒兄 Solid</Title>
      <h1>草包鋒兄 Solid</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
