import Badge from "../Badge";
import { Client } from "@/utils/types/client";

type OrderRowProps = {
  OrderID: string;
  Client: Client;
  Status: "pending" | "preparing" | "prepared" | "in_route" | "completed" | "canceled";
};

export default function OrderRow({ OrderID, Client, Status }: OrderRowProps) {
  console.log(Client);
  
  return (
    <tr className="flex items-center justify-around text-xs py-2.5 rounded-lg bg-second_dark">
      <td>{OrderID}</td>
      <td>{Client.name}</td>
      <Badge status={Status}/>
    </tr>
  )
}