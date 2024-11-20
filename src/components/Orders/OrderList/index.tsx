"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Key, useState } from "react";
import { Order } from "@/utils/types/order";
import OrderRow from "../OrderRow";
import api from "@/services/api";
import { OrderStatusProps } from "../Badge";

export default function OrderList() {
  const {
    data: orderList = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await api.get("/orders");

      return response.data;
    },
  });

  if (isError) {
    console.error("Error fetching orders: ", error);
  }

  return (
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
        {orderList.map((order: { order_id: string; status: string }) => {
          return (
            <OrderRow
              key={order.order_id}
              Status={order.status as OrderStatusProps["status"]}
              OrderID={order.order_id}
            />
          );
        })}
      </tbody>
    </table>
  );
}
