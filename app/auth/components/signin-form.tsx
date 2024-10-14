'use client';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { signinSchema } from "@/lib/zod";
import { handleCredentialSignin } from "@/actions/authActions";
import { useState } from "react";
import ErrorMessage from "./error-message";

export default function SigninForm() {
  const [globalError, setGlobalError] = useState<string>('');
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData: z.infer<typeof signinSchema>) => {
    try {
      await handleCredentialSignin(formData);
    } catch (error) {
      console.log(error, 'Unexpected error occurred Please try again');
    }
  }

  return (
    <div>
      {globalError && <ErrorMessage error={globalError} />}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    type="email"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Password"
                    type="password"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={form.formState.isSubmitting} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
