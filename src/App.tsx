import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AppLayout,
  AuthLayout,
  CreatePost,
  EditPost,
  EditProfile,
  Explore,
  Home,
  People,
  Post,
  Profile,
  SavedPosts,
} from "./pages";
import SigninForm from "./features/authentication/SigninForm";
import SignupForm from "./features/authentication/SignupForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/toaster";
import CreatedPost from "./features/accounts/CreatedPost";
import LikedPost from "./features/accounts/LikedPost";

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
        path: "/all-accounts",
        element: <People />,
      },
      {
        path: "/saved",
        element: <SavedPosts />,
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
      {
        path: "/profile/:accountId",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <CreatedPost />,
          },
          {
            path: "liked-posts",
            element: <LikedPost />,
          },
        ],
      },
      {
        path: "/edit-profile/:accountId",
        element: <EditProfile />,
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
