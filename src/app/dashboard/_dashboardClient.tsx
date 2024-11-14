"use client";

import api from "@/services/api";
import { TRestaurant } from "@/utils/types/auth";
import { useMutation } from "@tanstack/react-query";
import {useRouter} from "next/navigation";

interface DashboardClientProps {
  restaurant: TRestaurant | null;
}

export default function DashboardClient({ restaurant }: DashboardClientProps) {
  const router = useRouter();
  if (!restaurant) {
    return (
      <div>
        <p>Falha ao carregar os dados do restaurante.</p>
      </div>
    );
  }

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await api.post("/logout")
      return response.data
    },
    onSuccess: () => {
      console.log("user succesfully logout")
      // Redirecionar para a página de login após o logout
      router.push("/login");
    },
    onError: (error) => {
      console.error("error logging out user: ", error)
    }
  })

  function logout() {
    mutation.mutate()
  }

  return (
    <div className="text-white">
      <h1>Restaurant Dashboard</h1>
      <p><strong>Name:</strong> {restaurant.name}</p>
      <p><strong>CNPJ:</strong> {restaurant.cnpj}</p>
      <p><strong>Email:</strong> {restaurant.email}</p>
      <p><strong>Phone:</strong> {restaurant.phone}</p>

      <button onClick={logout} >Logout</button>
    </div>
  );
}
