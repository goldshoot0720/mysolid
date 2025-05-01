import Sub from "~/components/Sub";
import { subdata } from "~/data/subdata";

export default function Sub7() {
  return (
    <main>
      <Sub subtitle={subdata[4]['subtitle']} 
      textareavaluetitle1={subdata[4]['textareavaluetitle1']} 
      textareavaluetitle2={subdata[4]['textareavaluetitle2']} 
      textareavaluetitle3={subdata[4]['textareavaluetitle3']}
      textareavaluetitle4={subdata[4]['textareavaluetitle4']}
      >
      </Sub>
    </main>
  );
}