import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { RouteWeb } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { BedroomProvider } from "./contexts/BedroomContext";
import { ReservationProvider } from "./contexts/ReservationContext";
import { setupInterceptors } from "./services/http/interceptors";

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setupInterceptors(() => {
      const publicRoutes = ["/", "/login", "/register"];
      if (!publicRoutes.includes(location.pathname)) {
        navigate("/login");
      }
    });
  }, []);

  return (
    <AuthProvider>
      <GlobalStyle />
      <BedroomProvider>
        <ReservationProvider>
          <RouteWeb />
        </ReservationProvider>
      </BedroomProvider>
    </AuthProvider>
  );
}
