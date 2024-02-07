import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <main className="container">
      <Button variant={"default"}>asdasd</Button>
      <Button className="bg-red-300" variant={"secondary"}>
        asdasd
      </Button>
      <Calendar></Calendar>
      <Progress></Progress>
    </main>
  );
}
