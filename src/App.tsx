import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/General/Layout";
import Budget from "./pages/Budget";

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Layout>
        <Budget />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
