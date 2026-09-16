import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-700">
        404 Error
      </div>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-sm text-slate-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-6">
        <Link href="/">
          <Button className="rounded-xl bg-blue-700 text-white hover:bg-blue-800">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
