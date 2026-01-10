import Link from "next/link";
import {
  IoKeyOutline,
  IoMailOpenOutline,
  IoPersonOutline,
} from "react-icons/io5";

export default function RegisterPage() {
  return (
    <div>
      <form className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              autoComplete="off"
              placeholder="Firstname"
              type="text"
              id="firstname"
              className="mt-1 pt-3 pb-2 pl-10 block text-sm w-full rounded-lg bg-[#f3f3f5] border border-[#afafaf] placeholder:text-[#afafaf] focus:outline-[#ffcf60]"
              required
            />
            <IoPersonOutline className="absolute left-3 top-6 -translate-y-1/2 text-[#afafaf] text-lg" />
          </div>
          <div className="relative">
            <input
              autoComplete="off"
              placeholder="Lastname"
              type="text"
              id="lastname"
              className="mt-1 pt-3 pb-2 pl-10 block text-sm w-full rounded-lg bg-[#f3f3f5] border border-[#afafaf] placeholder:text-[#afafaf] focus:outline-[#ffcf60]"
              required
            />
            <IoPersonOutline className="absolute left-3 top-6 -translate-y-1/2 text-[#afafaf] text-lg" />
          </div>
        </div>
        <div className="flex items-center gap-2 relative">
          <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Username"
            className="mt-1 pt-3 pb-2 pl-10 block text-sm w-full rounded-lg bg-[#f3f3f5] border border-[#afafaf] placeholder:text-[#afafaf] focus:outline-[#ffcf60]"
            required
          />
          <IoPersonOutline className="absolute left-3 top-6 -translate-y-1/2 text-[#afafaf] text-lg" />
        </div>
        <div className="flex items-center gap-2 relative">
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
            className="mt-1 pt-3 pb-2 pl-10 block text-sm w-full rounded-lg bg-[#f3f3f5] border border-[#afafaf] placeholder:text-[#afafaf] focus:outline-[#ffcf60]"
            required
          />
          <IoMailOpenOutline className="absolute left-3 top-6 -translate-y-1/2 text-[#afafaf] text-lg" />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="password"
              id="password"
              autoComplete="new-password"
              placeholder="Password"
              className="mt-1 pt-3 pb-2 pl-10 block text-sm w-full rounded-lg bg-[#f3f3f5] border border-[#afafaf] placeholder:text-[#afafaf] focus:outline-[#ffcf60]"
              required
            />
            <IoKeyOutline className="absolute left-3 top-6 -translate-y-1/2 text-[#afafaf] text-lg" />
          </div>
          <div className="relative">
            <input
              type="password"
              id="confirm-password"
              autoComplete="new-password"
              placeholder="Confirm Password"
              className="mt-1 pt-3 pb-2 pl-10 block text-sm w-full rounded-lg bg-[#f3f3f5] border border-[#afafaf] placeholder:text-[#afafaf] focus:outline-[#ffcf60]"
              required
            />
            <IoKeyOutline className="absolute left-3 top-6 -translate-y-1/2 text-[#afafaf] text-lg" />
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-[#ffcf60] my-2 px-4 py-2 font-semibold text-white hover:bg-yellow-500 hover:cursor-pointer transition"
        >
          Register
        </button>
        <div className="flex items-center justify-center mt-4">
          <p className="font-normal text-xs text-gray-500 text-center">
            {`Already have an account? `}
            <Link
              href="/login"
              className="text-[#ffcf60] hover:underline hover:cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
