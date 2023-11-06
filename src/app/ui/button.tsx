import clsx from 'clsx';
import { MdEdit } from 'react-icons/md';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        'inline-grid h-10 items-center rounded-md bg-yellow-700 text-white px-3 pr-5 text-sm font-medium transition duration-75 ease-in hover:bg-gray-300 hover:text-gray-700',
        className,
      )}
    >
      {children}
    </button>
  );
}

export const LinkButton = ({ href, children, reverse=false, warn=false }: { href: string, children: React.ReactNode, reverse?: boolean, warn?: boolean }) => {
  return (
    <a
      href={href}
      className={clsx("inline-grid h-10 items-center rounded-md bg-yellow-700 text-white px-3 pr-5 text-sm font-medium transition duration-75 ease-in hover:bg-gray-300 hover:text-gray-700", reverse && "bg-transparent text-gray-700", warn && "bg-red-600 text-white")}
    >
      <div>
        {children}
      </div>
    </a>
  );
}