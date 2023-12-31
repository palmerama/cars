import Link from "next/link";

export default function Home() {
  return (
    <main className="grid w-full h-[32rem] justify-center items-center text-4xl p-7 text-center">
      <div>Today, I want to <Link href="/cars" className="inline-block text-yellow-600 underline underline-offset-7 hover:no-underline">manage my inventory</Link></div>
    </main>
  )
}
