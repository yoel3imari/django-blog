"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { registrationSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      username: "",
      firstname: "a",
      lastname: "b",
      email: "@mail.com",
      password: "123456789",
      confirmpassword: "123456789",
    },
  });

  const submit = (values: z.infer<typeof registrationSchema>) => {
    console.log(values);
  };

  return (
    <div className={cn("flex flex-col gap-6 font-sans", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome to blogo</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form>
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input
                                id="firstname"
                                type="text"
                                placeholder="First Name"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastname">Last Name</Label>
                      <Input
                        id="lastname"
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="unique identifier"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      placeholder="*****************"
                      type="password"
                      required
                    />
                    <Label htmlFor="confirm_password">Confirm Password</Label>
                    <Input
                      id="confirm_password"
                      placeholder="*****************"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/connect"
                    className="underline underline-offset-4"
                  >
                    Connect
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
}
