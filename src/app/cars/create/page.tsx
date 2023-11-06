import { fetchImageFilenames } from "@/app/lib/data";
import Form from "./form";
import PageTitle from "@/app/ui/pageTitle";
 
export default async function Page() { 
  const imageFilenames = await fetchImageFilenames()

  return (
    <main>
      <PageTitle>Add a car</PageTitle>
      <Form imageFilenames={imageFilenames} />
    </main>
  );
}