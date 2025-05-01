import Sub from "~/components/Sub";
import { subdata } from "~/data/subdata";

export default function Sub9() {
  return (
    <main>
      <Sub subtitle={subdata[5]['subtitle']} 
      textareavaluetitle1={subdata[5]['textareavaluetitle1']} 
      textareavaluetitle2={subdata[5]['textareavaluetitle2']} 
      textareavaluetitle3={subdata[5]['textareavaluetitle3']}
      textareavaluetitle4={subdata[5]['textareavaluetitle4']}
      >
      </Sub>
    </main>
  );
}