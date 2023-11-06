import Link from "next/link";
import { LinkButton } from "./button";
import { MdAdd } from 'react-icons/md'

export default function Header() {
  return (
    <header className="grid grid-flow-col items-end justify-between px-10 pt-8 pb-4 border-b border-gray-300 bg-white">
      <h1 className="text-3xl lg:text-4xl font-semibold">
        <Link href="/">I ❤️ Cars</Link>
      </h1>
      <nav>
        <ul className="grid items-center space-x-8">
          <li>
            <LinkButton href="/cars/create">
              <MdAdd className="inline-block text-lg align-text-bottopm mr-1" /> Add a car
            </LinkButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}