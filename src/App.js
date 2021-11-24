import { Outlet, ReactLocation, Router } from 'react-location';

// routes
import { routes } from './routes';

// components
import { Header } from './common/components/Header';

// inicialize
const location = new ReactLocation();

export default function App() {
  return (
    <Router location={location} routes={routes}>
      <div className="min-h-full">
        <Header />

        <main>
          {/* content */}
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <Outlet />
            </div>
          </div>
          {/* endContent */}
        </main>
      </div>
    </Router>
  );
}
