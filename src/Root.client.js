"use client"

import {useState, Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {useServerResponse} from './Cache.client';
import {LocationContext} from './LocationContext.client';

export default function Root({initialCache}) {
  return (
    <Suspense fallback={"...loading..."}>
      <ErrorBoundary FallbackComponent={Error}>
        <Content />
      </ErrorBoundary>
    </Suspense>
  );
}

let initialQuery = {current: 1}
function Content() {
  const [query, setQuery] = useState(initialQuery);
  const response = useServerResponse(query);
  return (
    <LocationContext.Provider value={[query, setQuery]}>
      {response.readRoot()}
    </LocationContext.Provider>
  );
}

function Error({error}) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{whiteSpace: 'pre-wrap'}}>{error.stack}</pre>
    </div>
  );
}
