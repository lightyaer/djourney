"use client";

import { signOut } from "aws-amplify/auth";

export const Navbar = async () => {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div>
      Navbar
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
};
