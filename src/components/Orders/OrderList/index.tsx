"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Order } from "@/utils/types/order";
import OrderRow from "../OrderRow";
import api from "@/services/api";
import { OrderStatusProps } from "../Badge";
import { Client } from "@/utils/types/client";

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);

  const {
    data: orderList = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const userAuth = await api.get("/restaurant")
      const id = userAuth.data.restaurant.cnpj
      
      const response = await api.get(`/orders/${id}`);
      return response.data;
    },
  });

  useEffect(() => {
    if (orderList.length > 0) {
      setOrders(orderList);
    }
  }, [orderList]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Dados recebidos pelo WebSocket:", data);

      if (data.action === "delete") {
        // Remover o pedido da lista

        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.order_id !== data.order.order_id)
        );
      } else if (data.action === "create") {
        // Adicionar novo pedido
        setOrders((prevOrders) => [...prevOrders, data.order]);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => socket.close();
  }, []);

  if (isLoading) {
    return <div>Carregando pedidos...</div>;
  }

  if (isError) {
    console.error("Error fetching orders: ", error);
    return <div>Erro ao carregar pedidos. Tente novamente mais tarde.</div>;
  }

  return (
    <div className="bg-second_dark rounded-lg border-white border py-3 px-7 mt-6">
      <table className="flex flex-col w-full">
        <thead>
          <tr className="flex justify-around text-xs pt-3">
            <th>Id</th>
            <th>Cliente</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="flex flex-col gap-3">
          {isLoading && (
            <tr>
              <td colSpan={3}>Carregando...</td>
            </tr>
          )}
          {isError && (
            <tr>
              <td colSpan={3}>Erro ao carregar pedidos...</td>
            </tr>
          )}
          {orders.map(
            (order: { order_id: string; client: Client; status: string }) => {
              return (
                <OrderRow
                  key={order.order_id}
                  Status={order.status as OrderStatusProps["status"]}
                  Client={order.client}
                  OrderID={order.order_id}
                />
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
