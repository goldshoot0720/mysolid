import Sub from "~/components/Sub";
import { subdata } from "~/data/subdata";

export default function Sub4() {
  return (
    <main>
      <Sub subtitle={subdata[1]['subtitle']} 
      textareavaluetitle1={subdata[1]['textareavaluetitle1']} 
      textareavaluetitle2={subdata[1]['textareavaluetitle2']} 
      textareavaluetitle3={subdata[1]['textareavaluetitle3']}
      textareavaluetitle4={subdata[1]['textareavaluetitle4']}
      >
      </Sub>
    </main>
  );
}