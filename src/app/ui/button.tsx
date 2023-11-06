import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'inline-grid h-10 items-center rounded-md bg-yellow-700 text-white px-5 text-sm font-medium transition duration-75 ease-in hover:bg-gray-300 hover:text-gray-700',
        className,
      )}
    >
      {children}
    </button>
  );
}