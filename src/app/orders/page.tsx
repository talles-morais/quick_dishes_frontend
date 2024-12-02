import Clock from "@/components/Clock";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/MobileHeader";
import OrderList from "@/components/Orders/OrderList";
import SearchAndFilter from "@/components/SearchAndFilter";

export default function Orders() {
  return (
    <div className="text-white w-screen">
      <MobileHeader />
      <main className="py-6 px-4 min-h-screen">
        <h1 className="font-bold md:text-4xl">Pedidos</h1>
        <div className="flex gap-10">
          <SearchAndFilter />
          <Clock />
        </div>

        <OrderList />
      </main>
      <Footer />
    </div>
  )
}