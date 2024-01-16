import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validation";
import { useSignup } from "./useSignup";
import { useToast } from "@/components/ui/use-toast";

function SignupForm() {
  const { toast } = useToast();
  const { signup, isPending: isSigningUp } = useSignup();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await signup(values, {
      onSuccess: () => {
        toast({
          description: "Account successfully created",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          description: "An error has occured when signing up",
        });
      },
      onSettled: () => {
        form.reset();
      },
    });

    console.log(newUser);
  }

  return (
    <>
      <Form {...form}>
        <div className="flex-center flex max-w-sm flex-col gap-2 sm:max-w-md sm:gap-3">
          <img src="/assets/images/logo.svg" alt="logo of snapgram" />

          <h2 className="h3-bold md:h2-bold pt-2 capitalize">
            Create a new account
          </h2>

          <p className="small-medium md:base-regular text-light-3">
            To use Snapgram, please enter your details
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 flex w-full flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Peter Parker"
                      type="text"
                      className="shad-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="PeterParker_234"
                      type="text"
                      className="shad-input"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="peter@gmail.com"
                      type="email"
                      className="shad-input"
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="shad-button_primary"
              disabled={isSigningUp}
            >
              Sign Up
            </Button>

            <p className="small-regular mt-2 text-center text-light-2">
              Already have an account ?
              <Link
                to="/sign-in"
                className="small-semibold ml-1 text-primary-500"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </>
  );
}

export default SignupForm;
