"use client";
import React from "react";

enum userRoles {
  ADMIN = "Aadeesh Jain",
  Student = "Darshna",
}

const page = () => {
  return (
    <>
      <div>{userRoles.ADMIN}</div>
    </>
  );
};

export default page;
