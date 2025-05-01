import { Title } from "@solidjs/meta";
import { createClient } from "@supabase/supabase-js";
import { onMount, createSignal, createEffect } from "solid-js";

let bankname = [
  "合作金庫",
  "台北富邦",
  "國泰世華",
  "兆豐銀行",
  "王道銀行",
  "新光銀行",
  "中華郵政",
  "玉山銀行",
  "台新銀行",
  "中國信託",
];
let banknamemore = [
  "(006)合作金庫(5880)",
  "(012)台北富邦(2881)",
  "(013)國泰世華(2882)",
  "(017)兆豐銀行(2886)",
  "(048)王道銀行(2897)",
  "(103)新光銀行(2888)",
  "(700)中華郵政(0000)",
  "(808)玉山銀行(2884)",
  "(812)台新銀行(2887)",
  "(822)中國信託(2891)",
];

const [id, setId] = createSignal(0);
const [bank1, setBank1] = createSignal(0);
const [bank2, setBank2] = createSignal(0);
const [bank3, setBank3] = createSignal(0);
const [bank4, setBank4] = createSignal(0);
const [bank5, setBank5] = createSignal(0);
const [bank6, setBank6] = createSignal(0);
const [bank7, setBank7] = createSignal(0);
const [bank8, setBank8] = createSignal(0);
const [bank9, setBank9] = createSignal(0);
const [bank10, setBank10] = createSignal(0);
const [banksum, setBanksum] = createSignal(0);

createEffect(() => {
	setBanksum(
		Number(bank1()) +
		Number(bank2()) +
		Number(bank3()) +
		Number(bank4()) +
		Number(bank5()) +
		Number(bank6()) +
		Number(bank7()) +
		Number(bank8()) +
		Number(bank9()) +
		Number(bank10())
	);
  });

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://lgztvgybalhvppkfpwdc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenR2Z3liYWxodnBwa2Zwd2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNDkwMTQsImV4cCI6MjA1OTkyNTAxNH0.JfB6J38LmdlvUwIgkdRmQcBDnv6OzFaA-D27S0ylVnA"
);

async function GetBankData() {
  const { data, error } = await supabase.from("myangularsub2").select();
  setId(data[0]["id"]);
  setBank1(data[0]["bank1"]);
  setBank2(data[0]["bank2"]);
  setBank3(data[0]["bank3"]);
  setBank4(data[0]["bank4"]);
  setBank5(data[0]["bank5"]);
  setBank6(data[0]["bank6"]);
  setBank7(data[0]["bank7"]);
  setBank8(data[0]["bank8"]);
  setBank9(data[0]["bank9"]);
  setBank10(data[0]["bank10"]);
  setBanksum(
    data[0]["bank1"] +
      data[0]["bank2"] +
      data[0]["bank3"] +
      data[0]["bank4"] +
      data[0]["bank5"] +
      data[0]["bank6"] +
      data[0]["bank7"] +
      data[0]["bank8"] +
      data[0]["bank9"] +
      data[0]["bank10"]
  );
}

async function UpdateBankData() {
  const { error } = await supabase
    .from("myangularsub2")
    .update({
      bank1: bank1(),
      bank2: bank2(),
      bank3: bank3(),
      bank4: bank4(),
      bank5: bank5(),
      bank6: bank6(),
      bank7: bank7(),
      bank8: bank8(),
      bank9: bank9(),
      bank10: bank10(),
    })
    .eq("id", id());
  console.log(error);
  if(!error){
	alert("寫入成功!");
  }
  else{
	alert("寫入失敗!");
  }
}

async function  UpdateBankHistory(){
	const { error } = await supabase  .from('bankhistory')  .insert({ 
		user: supabase.auth.getUser(),
		bank1: bank1(),
		bank2: bank2(),
		bank3: bank3(),
		bank4: bank4(),
		bank5: bank5(),
		bank6: bank6(),
		bank7: bank7(),
		bank8: bank8(),
		bank9: bank9(),
		bank10: bank10(),
		banksum:banksum(),
		bankdate:new Date()
	})
	console.log(error);
	if(!error){
	  alert("寫入成功!");
	}
	else{
	  alert("寫入失敗!");
	}
}

onMount(() => {
  GetBankData();
});

export default function Sub2() {
  return (
    <main>
      <Title>銀行資訊管理</Title>
      <label>{bankname[0]}:</label>
      <input
        type="number"
        value={bank1()}
        onInput={(e) => setBank1((Number(e.currentTarget.value)))}
      />
      <br />
      <label>{bankname[1]}:</label>
      <input
        type="number"
        value={bank2()}
        onInput={(e) => setBank2(e.currentTarget.value)}
      />
      <br />
      <label>{bankname[2]}:</label>
      <input
        type="number"
        value={bank3()}
        onInput={(e) => setBank3(e.currentTarget.value)}
      />
      <br />
      <label>{bankname[3]}:</label>
      <input
        type="number"
        value={bank4()}
        onInput={(e) => setBank4(e.currentTarget.value)}
      />
      <br />
      <label>{bankname[4]}:</label>
      <input
        type="number"
        value={bank5()}
        onInput={(e) => setBank5(e.currentTarget.value)}
      />
      <br />
      <label>{bankname[5]}:</label>
      <input
        type="number"
        value={bank6()}
        onInput={(e) => setBank6(e.currentTarget.value)}
      />
      <br />
      <label>{bankname[6]}:</label>
      <input
        type="number"
        value={bank7()}
        onInput={(e) => setBank7(e.currentTarget.value)}
      />
      <br />
      <label>{bankname[7]}:</label>
      <input
        type="number"
        value={bank8()}
        onInput={(e) => setBank8(e.currentTarget.value)}
      />
      <br />
      <label>{bankname[8]}:</label>
      <input
        type="number"
        value={bank9()}
        onInput={(e) => setBank9(e.currentTarget.value)}
      />
      <br />
      <label>{bankname[9]}:</label>
      <input
        type="number"
        value={bank10()}
        onInput={(e) => setBank10(e.currentTarget.value)}
      />
      <br />
      <label>累積存款:{}</label>
      <input
        type="number"
        value={banksum()}
        onInput={(e) => setBanksum(e.currentTarget.value)}
        disabled={true}
      />
      <br />
      <button on:click={UpdateBankData}>寫入 Supabase myangularsub2</button>
	  <br />
	  <button on:click={UpdateBankHistory}>寫入 Supabase bankhistory</button>
	  <br />
    </main>
  );
}
