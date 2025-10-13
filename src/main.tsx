import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthUserContext.jsx';
import { IndexPage } from './pages/Index.js';
import { DashboardPage } from './pages/Dashboard/Dashboard.js';
import { ContactPage } from './pages/Contact/Contact.js';
import { RoomPage } from './pages/Room/Rooms.js';
import { BookingPage } from './pages/Booking/Bookings.js';
import { UserPage } from './pages/Users/Users.js';
import ProtectedRoute from './context/ProtectedRoute.jsx';
import { Provider } from 'react-redux';
import { store } from "./app/store.js"
import { NewRoomPage } from './pages/Room/NewRoom.js';
import { NewBookin } from './components/BookingComponent/NewbookinComponent.js';
import { MainLayout } from './layouts/MainLayout.js';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.js';
import { NotFoundPage } from './pages/NotFound/NotFound.js';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("No se pudo encontrar el elemento con id 'root'");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <AuthProvider>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              {/* Ruta pública de login */}
              <Route path="/" element={<IndexPage />} />
              
              {/* Rutas protegidas con Layout */}
              <Route element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/rooms" element={<RoomPage />} />
              <Route path="/rooms/NewRoom" element={<NewRoomPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/booking/NewBookin" element={<NewBookin />} />
              <Route path="/users" element={<UserPage />} />
            </Route>

            {/* Ruta 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
