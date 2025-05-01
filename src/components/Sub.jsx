import { Title } from "@solidjs/meta";

export default function Sub(props) {

  const { subtitle,textareavaluetitle1,textareavaluetitle2,textareavaluetitle3,textareavaluetitle4 } = props;
  return (
    <>
    <Title>{subtitle}資訊管理</Title>
    <h1>歡迎來到{subtitle}資訊管理</h1>
    <label>{textareavaluetitle1}:</label><br/>
    <label>{textareavaluetitle2}:</label><br/>
    <label>{textareavaluetitle3}:</label><br/>
    <label>{textareavaluetitle4}:</label><br/>
    </>
  );
}