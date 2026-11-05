"use client";

import { useAuth } from "@/components/AuthProvider";

export function AccountSyncNotice() {
  const { syncError } = useAuth();
  if (!syncError) return null;

  return (
    <p
      role="alert"
      className="border-b border-border bg-sand px-5 py-3 text-center text-sm text-ink"
    >
      {syncError}
    </p>
  );
}
