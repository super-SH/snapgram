import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout, AuthLayout, Home } from "./pages";
import SigninForm from "./features/authentication/SigninForm";
import SignupForm from "./features/authentication/SignupForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/toaster";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SigninForm />,
      },
      {
        path: "/sign-up",
        element: <SignupForm />,
      },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <main className="flex h-screen">
        <RouterProvider router={router} />
        <Toaster />
      </main>
    </QueryClientProvider>
  );
}

export default App;
