import { ConnectForm } from "@/components/forms/ConnectForm";
import TheTitle from "@/components/TheTitle";
import Link from "next/link";

export default function ConnectPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <TheTitle />
        <ConnectForm />
      </div>
    </div>
  );
}
