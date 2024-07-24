import React, { useState } from "react";

export function AlertComp({ message }) {
  const [open, setOpen] = useState(true);

  if (!open) {
    const setTimerFunc = setTimeout(() => {
      setOpen(true);
    }, 10000);
    return () => clearTimeout(setTimerFunc);
  }

  return (
    <div
      className={
        open
          ? `fixed top-0 z-1 w-full bg-theme-red text-white flex items-center justify-between py-2 px-4`
          : "hidden top-0 z-1 w-full bg-theme-red text-white  items-center justify-between py-2 px-4"
      }
    >
      <div>
        <p>{message}</p>
      </div>
      <button
        onClick={() => setOpen(false)}
        className="flex items-center gap-x-2 text-sm border border-white rounded px-2 py-1"
      >
        Close
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
