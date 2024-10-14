import Link from "next/link"
import { Button } from "./ui/button"
import { auth } from "@/auth";
import { handleSignout } from "@/actions/authActions";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <nav className="flex justify-between items-center py-3 px-4 bg-card shadow-md">
      <Link href="/" className="text-xl font-bold">
        Auth.js
      </Link>
      {!session ? (
        <Button asChild>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
      ) : (
        <form action={handleSignout}>
          <Button type="submit">Sign Out</Button>
        </form>
      )}
    </nav>
  );
}

export default Navbar