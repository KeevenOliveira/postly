"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-black cursor-pointer mb-6 text-sm hover:underline flex items-center gap-1"
    >
      ← Back
    </button>
  );
}
