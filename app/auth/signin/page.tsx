import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SigninForm from "../components/signin-form";

export default function Page() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SigninForm />
        </CardContent>
      </Card>
    </div>
  );
}
