type OrderStatusProps = {
  status: "pending" | "preparing" | "prepared" | "in_route" | "completed" | "canceled";
};

const statusStyles: Record<OrderStatusProps["status"], string> = {
  pending: "bg-bd_pending",
  preparing: "bg-bd_preparing",
  prepared: "bg-bd_prepared",
  in_route: "bg-bd_in_route",
  completed: "bg-bd_completed",
  canceled: "bg-bd_canceled",
};

const statusLabels: Record<OrderStatusProps["status"], string> = {
  pending: "Pendente",
  preparing: "Preparando",
  prepared: "Pronto",
  in_route: "Em rota",
  completed: "Finalizado",
  canceled: "Cancelado",
}

export default function Badge({ status }: OrderStatusProps) {
  return (
    <td className={`${statusStyles[status]} py-1 px-4 rounded-lg`}>
      {statusLabels[status]}
    </td>
  );
}