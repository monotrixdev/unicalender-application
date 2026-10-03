import { signOut } from "@/lib/auth";
import { LogOut } from "lucide-react";
import React from "react";

const LogoutButton = async () => {
  async function logout() {
    "use server";

    await signOut({
      redirectTo: "/login",
    });
  }

  return (
    <form action={logout}>
      <button
        type="submit"
        className="w-fit flex items-center space-x-2"
      >
        <LogOut className="w-4 h-5" />
        <span>Log out</span>
      </button>
    </form>
  );
};

export default LogoutButton;