import { fetchCarById } from "@/app/lib/data";
import Form from "./form";
 
export default async function Page({ params }: { params: { id: string } }) { 
  const car = await fetchCarById(params.id)

  return (
    <main>
      {
        car && <Form car={car} />
      }
    </main>
  );
}