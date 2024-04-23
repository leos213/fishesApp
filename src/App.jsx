import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/Error";
import FishesWrapper, {
  fishLoader,
} from "./components/FishesWrapper/FishesWrapper";
import TestComp from "./components/TestComp/TestComp";
import CreateFishForm from "./components/CreateFishForm/CreateFishForm";
import PrivateRoute from "./components/NavBar/PrivateRoute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fishes",
        element: <FishesWrapper />,
        loader: fishLoader,
        errorElement: <Error />,
        children: [
          {
            path: "create",
            // loader: authGuardLoader,
            // element: <CreateCarForm />,
            element: (
              <PrivateRoute>
                <CreateFishForm />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/about",
        element: <TestComp />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
