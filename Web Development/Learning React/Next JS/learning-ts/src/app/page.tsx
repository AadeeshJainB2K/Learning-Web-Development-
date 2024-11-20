"use client";
import React from "react";

interface User {
  Name: string;
  Phone_Number: number;
  Email: string;
  Password: string;
  Gender?: string;
}

interface Admin extends User {
  Admin: boolean;
}

const a = (obj: User) => {
  return obj.Email;
};

const b = a({ Email: "aadeeshjain@gmail.com" });

const page = () => {
  return (
    <>
      <div>{b}</div>
    </>
  );
};

export default page;
