import { RegisterForm } from "@/components/forms/RegisterForm"
import TheTitle from "@/components/TheTitle"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <TheTitle />
        <RegisterForm />
      </div>
    </div>
  )
}
