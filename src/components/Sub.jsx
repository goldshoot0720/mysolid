import { Title } from "@solidjs/meta";

export default function Sub(props) {
  const { textvaluetitle1 } = props;
  return (
    <>
    <Title>{textvaluetitle1}資訊管理</Title>
    <h1>歡迎來到{textvaluetitle1}資訊管理</h1>
    </>
  );
}