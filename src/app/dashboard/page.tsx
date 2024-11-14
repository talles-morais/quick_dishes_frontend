import { cookies } from "next/headers";

import api from "@/services/api";
import { TRestaurant } from "@/utils/types/auth";
import DashboardClient from "./_dashboardClient";

export default async function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;

  let restaurant: TRestaurant | null = null;

  if (token) {
    try {
      const response = await api.get("/restaurant", {
        headers: {
          Cookie: `jwt=${token}`,
        },
        withCredentials: true,
      });
      restaurant = response.data.restaurant;
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    }
  }

  return <DashboardClient restaurant={restaurant} />;
}
