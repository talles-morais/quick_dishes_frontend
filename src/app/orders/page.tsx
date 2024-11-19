import MobileHeader from "@/components/MobileHeader";
import OrderList from "@/components/OrderList";

export default function Orders() {
  return (
    <div className="text-white w-screen">
      <MobileHeader />
      <main className="py-6 px-4">
        <h1 className="font-bold">Pedidos</h1>
        
        <OrderList />
      </main>

    </div>
  )
}