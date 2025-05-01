import { Title } from "@solidjs/meta";
import Sub from "~/components/Sub";
import { subdata } from "~/data/subdata";

export default function Sub1() {
  return (
    <main>
      <Sub subtitle={subdata[0]['subtitle']} 
      textareavaluetitle1={subdata[0]['textareavaluetitle1']} 
      textareavaluetitle2={subdata[0]['textareavaluetitle2']} 
      textareavaluetitle3={subdata[0]['textareavaluetitle3']}
      textareavaluetitle4={subdata[0]['textareavaluetitle4']}
      >
      </Sub>
    </main>
  );
}