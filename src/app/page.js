import CountdownTimer from "@/components/home/CountdownTImer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-10">
      {/* Hero Section  */}
      <section className="hero">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-gray-900 p-4 md:px-10 md:py-20 rounded-2xl">
            {/* Left Column - Countdown Timer */}
            <div>
              <CountdownTimer />
              <div className="mt-8 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">AddisFinancial</h1>
                <p className="text-lg">
                  AddisFinancial is an innovative and forward-thinking financial
                  services company inspired by the vibrant capital city of
                  Ethiopia, Addis Ababa, and Toronto, Canada...
                </p>
              </div>
            </div>
            {/* Right Column - Image */}
            <div>
              <div className="w-full h-full flex justify-center">
                <Image
                  src="/images/addisimg.png"
                  alt="Coming Soon"
                  className="w-full h-auto"
                  width={577}
                  height={433}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
