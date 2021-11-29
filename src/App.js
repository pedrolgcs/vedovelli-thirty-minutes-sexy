import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// routes
import { routes, location, Outlet, Router } from './routes';

// components
import { Header } from './common/components';

// inicialize
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
