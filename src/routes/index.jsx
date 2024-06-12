import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ProtectedRoute from "../features/authentication/components/ProtectedRoute";
import RedirectIfLogged from "../features/authentication/components/RedirectIfLogged";
import RedirectIfNotAdmin from "../features/authentication/components/RedirectIfNotAdmin";
import RedirectIfNotUser from "../features/authentication/components/RedirectIfNotUser";

const HomePage = lazy(() => import("../pages/HomePage"));
const ShowtimePage = lazy(() => import("../pages/ShowtimePage"));
const BookingHistortyPage = lazy(() => import("../pages/BookingHistortyPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const MovieBookingPage = lazy(() => import("../pages/MovieBookingPage"));
const SeatSelectionPage = lazy(() => import("../pages/SeatSelectionPage"));
const AdminPanelEditMovie = lazy(() => import("../pages/AdminPanelEditMovie"));
const AdminPanelEditTheater = lazy(() => import("../pages/AdminPanelEditTheater"));

const MainContainer = lazy(() => import("../layouts/MainContainer"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainContainer />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "showtime", element: <ShowtimePage /> },
      {
        path: "booking-history",
        element: (
          <RedirectIfNotUser>
            <BookingHistortyPage />
          </RedirectIfNotUser>
        ),
      },
      {
        path: "edit-movie",
        element: (
          <RedirectIfNotAdmin>
            <AdminPanelEditMovie />
          </RedirectIfNotAdmin>
        ),
      },
      {
        path: "edit-theater",
        element: (
          <RedirectIfNotAdmin>
            <AdminPanelEditTheater />
          </RedirectIfNotAdmin>
        ),
      },
      {
        path: "movie-booking/:movieId",
        element: <MovieBookingPage />,
      },
      {
        path: "seat-selection",
        element: <SeatSelectionPage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfLogged>
        <LoginPage />
      </RedirectIfLogged>
    ),
  },
  { path: "/admin-panel", element: <Navigate to="/admin-panel/edit-movie" /> },
  { path: "*", element: <Navigate to="/" /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
