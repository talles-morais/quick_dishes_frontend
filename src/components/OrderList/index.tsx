import OrderRow from "../OrderRow";

export default function OrderList() {
  return (
    <table className="flex flex-col w-full">
      <thead className="px-9">
        <tr className="flex justify-between text-xs pt-3">
          <th>Id</th>
          <th>Cliente</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <OrderRow />
      </tbody>
    </table>
  )
}