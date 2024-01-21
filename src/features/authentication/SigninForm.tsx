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
import { SigninValidation } from "@/lib/validation";
import { useToast } from "@/components/ui/use-toast";
import { useSignin } from "./useSignin";
import { Loader } from "@/components/shared";

function SigninForm() {
  const { toast } = useToast();
  const { signin, isPending: isSigningIn } = useSignin();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    await signin(values, {
      onSuccess: () => {
        toast({
          description: "Account successfully logged in",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          description: "Please provide a correct credentails!",
        });
      },
      onSettled: () => {
        form.reset();
      },
    });
  }

  return (
    <Form {...form}>
      <div className="flex-center max-w-sm flex-col sm:max-w-md">
        <img src="/assets/images/logo.svg" alt="logo" />

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Log in to your account
        </h2>
        <p className="small-medium md:base-regular mt-2 text-light-3">
          Welcome back! Please enter your details.
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 flex w-full flex-col gap-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
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
                <FormLabel className="shad-form_label">Password</FormLabel>
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
            disabled={isSigningIn}
          >
            {isSigningIn ? <Loader /> : "Sign In"}
          </Button>

          <p className="text-small-regular mt-2 text-center text-light-2">
            Don&apos;t have an account?
            <Link
              to="/sign-up"
              className="text-small-semibold ml-1 text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
}

export default SigninForm;
