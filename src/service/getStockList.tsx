import axios from "axios";

export async function getStockList(market: "ALL" | "KOSPI" | "KOSDAQ"): Promise<any> {
  const result = await axios.get(`http://192.168.175.140:5000/stocks?market=${market}`).then((res) => {
    console.log(res);
  });
  return result;
}
