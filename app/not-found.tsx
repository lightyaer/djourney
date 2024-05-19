import Link from "next/link";
import { ROUTES } from "./_routes";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h3>not found 404</h3>

      <Link className="hover:underline" href={ROUTES.HOME}>
        return home
      </Link>
    </div>
  );
}
