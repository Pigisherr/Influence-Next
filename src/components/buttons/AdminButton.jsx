import Link from "next/link";

export default function AdminButton() {
  return (
    <Link
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      href="/admin"
    >
      Admin
    </Link>
  );
}
