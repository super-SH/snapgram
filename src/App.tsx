import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AppLayout,
  AuthLayout,
  CreatePost,
  EditPost,
  Explore,
  Home,
  Post,
} from "./pages";
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
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/all-users",
        element: <p>all-users</p>,
      },
      {
        path: "/saved",
        element: <p>saved</p>,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/edit-post/:postId",
        element: <EditPost />,
      },
      {
        path: "/posts/:postId",
        element: <Post />,
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
