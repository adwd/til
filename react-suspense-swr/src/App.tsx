import React, { Suspense } from 'react';
import useSWR from '@zeit/swr';
import { request } from 'graphql-request';

const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Todos />
    </Suspense>
  );
};

const API = 'https://api.spacex.land/graphql/';

const Todos = () => {
  const { data, error } = useSWR(
    `{
      launchesPast(limit: 10) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        rocket {
          rocket_name
        }
      }
    }`,
    (query: any) => request(API, query),
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
  console.log(data);
  return (
    <div>
      {data.launchesPast.map((l: any) => (
        <div key={l.mission_name}>
          <h3>{l.mission_name}</h3>
          <span>{l.launch_date_local}</span>
          <p>{l.launch_site.site_name_long}</p>
          <p>Rocket: {l.rocket.rocket_name}</p>
        </div>
      ))}
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default App;
