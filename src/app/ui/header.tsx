import Link from "next/link";

export default function Header() {
  return (
    <header className="grid grid-flow-col items-end justify-between px-10 pt-8 pb-4 border-b border-gray-300 bg-white">
      <h1 className="text-3xl lg:text-4xl font-semibold">
        <Link href="/">Some Cars</Link>
      </h1>
      <nav>
        <ul className="grid items-center space-x-8">
          <li>
            <Link href="/cars">Manage Inventory</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}