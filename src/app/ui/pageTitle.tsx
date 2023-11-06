export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-2xl lg:text-3xl text-yellow-700 mb-6 font-medium">
      {children}
    </h1>
  )
}