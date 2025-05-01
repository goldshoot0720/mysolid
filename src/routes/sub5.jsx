import Sub from "~/components/Sub";
import { subdata } from "~/data/subdata";

export default function Sub5() {
  return (
    <main>
      <Sub subtitle={subdata[2]['subtitle']} 
      textareavaluetitle1={subdata[2]['textareavaluetitle1']} 
      textareavaluetitle2={subdata[2]['textareavaluetitle2']} 
      textareavaluetitle3={subdata[2]['textareavaluetitle3']}
      textareavaluetitle4={subdata[2]['textareavaluetitle4']}
      >
      </Sub>
    </main>
  );
}