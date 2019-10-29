import React, { Suspense } from 'react';
import useSWR from '@zeit/swr';

const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Todos />
    </Suspense>
  );
};

const Todos = () => {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/todos',
    (req: any) => fetch(req).then(res => res.json()),
  );

  if (error) {
    return (
      <div>
        <pre>
          <code>{JSON.stringify(error, null, 2)}</code>
        </pre>
      </div>
    );
  }

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default App;
