import MobileHeader from "@/components/MobileHeader";
import OrderFilter from "@/components/Orders/OrderFilter";
import OrderList from "@/components/Orders/OrderList";
import SearchAndFilter from "@/components/SearchAndFilter";

export default function Orders() {
  return (
    <div className="text-white w-screen">
      <MobileHeader />
      <main className="py-6 px-4">
        <h1 className="font-bold">Pedidos</h1>
        <SearchAndFilter />
        <OrderFilter /> 
        <OrderList />
      </main>

    </div>
  )
}