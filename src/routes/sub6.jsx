import Sub from "~/components/Sub";
import { subdata } from "~/data/subdata";

export default function Sub1() {
  return (
    <main>
      <Sub subtitle={subdata[3]['subtitle']} 
      textareavaluetitle1={subdata[3]['textareavaluetitle1']} 
      textareavaluetitle2={subdata[3]['textareavaluetitle2']} 
      textareavaluetitle3={subdata[3]['textareavaluetitle3']}
      textareavaluetitle4={subdata[3]['textareavaluetitle4']}
      >
      </Sub>
    </main>
  );
}