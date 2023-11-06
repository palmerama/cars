import { fetchCarById, fetchImageFilenames } from "@/app/lib/data";
import Form from "./form";
import PageTitle from "@/app/ui/pageTitle";
 
export default async function Page({ params }: { params: { id: string } }) { 
  const car = await fetchCarById(params.id)
  const imageFilenames = await fetchImageFilenames()

  return (
    <main>
      <PageTitle>Edit car</PageTitle>
      {
        car && <Form car={car} imageFilenames={imageFilenames} />
      }
    </main>
  );
}