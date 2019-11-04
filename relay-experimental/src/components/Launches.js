// @flow
import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';

import type {
  LaunchesQuery,
  LaunchesQueryResponse,
} from './__generated__/LaunchesQuery.graphql';

const query = graphql`
  query LaunchesQuery {
    launchesPast(limit: 10) {
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;

function Launches() {
  const data: LaunchesQueryResponse = useLazyLoadQuery<LaunchesQuery>(
    query,
    {},
  );

  return (
    <div>
      <h1>Launches</h1>
      {data.launchesPast &&
        data.launchesPast.map(
          l =>
            l && (
              <div key={l.mission_name}>
                <h3>{l.mission_name}</h3>
                {l.rocket && <p>{l.rocket.rocket_name}</p>}
              </div>
            ),
        )}
    </div>
  );
}

export default Launches;
