import Badge from "../Badge";

export default function OrderRow() {
  const orderStatus = "prepared"

  return (
    <tr className="flex items-center justify-around text-xs py-2.5 rounded-lg bg-second_dark">
      <td>5fe238</td>
      <td>Talles</td>
      <Badge status={orderStatus}/>
    </tr>
  )
}