import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  warn?: boolean
}

export const Button = ({ children, warn = false, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx('inline-grid h-10 items-center rounded-md bg-yellow-700 text-white px-3 pr-5 text-sm font-medium transition duration-75 ease-in hover:bg-gray-300 hover:text-gray-700', warn && "bg-red-600 text-white")}
    >
      <div>
        {children}
      </div>
    </button>
  );
}

export const LinkButton = ({ href, children, empty = false, warn = false }: { href: string, children: React.ReactNode, empty?: boolean, warn?: boolean }) => {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-grid h-10 items-center rounded-md bg-yellow-700 text-white px-3 pr-5 text-sm font-medium transition duration-75 ease-in hover:bg-gray-300 hover:text-gray-700",
        empty && "bg-transparent text-gray-700", 
        warn && "bg-red-600 text-white"
      )}
    >
      <div>
        {children}
      </div>
    </Link>
  );
}