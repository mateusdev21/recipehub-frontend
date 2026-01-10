import Link from "next/link";
import { IoKeyOutline, IoMailOpenOutline } from "react-icons/io5";

export default function LoginPage() {
  return (
    <div>
      <form className="space-y-4">
        <div className="flex items-center gap-2 relative">
          <input
            autoComplete="off"
            placeholder="Email"
            type="email"
            id="email"
            className="mt-1 pt-3 pb-2 pl-10 block text-sm w-full rounded-lg bg-[#f3f3f5] border border-[#afafaf] placeholder:text-[#afafaf] focus:outline-[#ffcf60]"
            required
          />
          <IoMailOpenOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[#afafaf] text-lg" />
        </div>
        <div className="flex items-center gap-2 relative">
          <input
            type="password"
            id="password"
            autoComplete="new-password"
            placeholder="Password"
            className="mt-1 pt-3 pb-2 pl-10 block text-sm w-full rounded-lg bg-[#f3f3f5] border border-[#afafaf] placeholder:text-[#afafaf] focus:outline-[#ffcf60]"
            required
          />
          <IoKeyOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[#afafaf] text-lg" />
        </div>
        <div className="flex items-center justify-between">
          <p className="font-normal text-xs text-gray-500">
            {`Don't have any account? `}
            <Link
              href="/register"
              className="text-[#ffcf60] hover:underline hover:cursor-pointer"
            >
              Register
            </Link>
          </p>
          <Link href="/">
            <p className="font-normal text-xs text-gray-500 hover:text-[#ffcf60]">
              Forgot Password
            </p>
          </Link>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-[#ffcf60] my-2 px-4 py-2 font-semibold text-white hover:bg-yellow-500 hover:cursor-pointer transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
