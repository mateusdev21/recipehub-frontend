"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { loginUser } from "@/services/authService";
import { loginSuccess } from "@/store/authSlice";

export default function LoginButton({ username, password }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await loginUser(
        { username, password },
        { withCredentials: true }
      );

      dispatch(loginSuccess({ user: res.data.user }));
      toast.success("Login berhasil");
      router.push("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login gagal");
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogin}
      className="w-full bg-blue-600 text-white py-2 rounded"
    >
      Login
    </button>
  );
}
