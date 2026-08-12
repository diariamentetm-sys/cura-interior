"use client";

import { useAuth } from "@/components/AuthProvider";
import { PauseAfterDiscovery } from "@/components/PauseAfterDiscovery";
import { SaveDiscoveryInvite } from "@/components/SaveDiscoveryInvite";

export function DiscoveryAftercare() {
  const { user } = useAuth();

  return (
    <div className="space-y-10">
      <SaveDiscoveryInvite authenticated={Boolean(user)} />
      <PauseAfterDiscovery />
    </div>
  );
}
