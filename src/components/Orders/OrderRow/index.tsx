import { Order } from "@/utils/types/order";
import Badge from "../Badge";

type OrderRowProps = {
  OrderID: string;
  Status: "pending" | "preparing" | "prepared" | "in_route" | "completed" | "canceled";
};

export default function OrderRow({ OrderID, Status }: OrderRowProps) {
  return (
    <tr className="flex items-center justify-around text-xs py-2.5 rounded-lg bg-second_dark">
      <td>{OrderID}</td>
      <td>Talles</td>
      <Badge status={Status}/>
    </tr>
  )
}