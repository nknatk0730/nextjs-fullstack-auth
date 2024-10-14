import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <Card className="max-w-sm">
        <CardHeader>
          <Image
            className="rounded-lg"
            src="/vector.svg"
            alt="vector phot"
            width={500}
            height={500}
            priority
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-2 text-2xl font-bold">
            Welcome, User!
          </CardTitle>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quisquam
            recusandae unde ea voluptates dolor autem voluptatem, debitis quas
            dignissimos sequi aliquam. Alias, adipisci reiciendis laborum
            dolorem eius cum suscipit!
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
