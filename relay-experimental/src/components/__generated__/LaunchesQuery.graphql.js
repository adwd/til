/**
 * @flow
 * @relayHash 4954ed451a161b6687f97ef4dde71164
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LaunchesQueryVariables = {||};
export type LaunchesQueryResponse = {|
  +launchesPast: ?$ReadOnlyArray<?{|
    +mission_name: ?string,
    +rocket: ?{|
      +rocket_name: ?string
    |},
  |}>
|};
export type LaunchesQuery = {|
  variables: LaunchesQueryVariables,
  response: LaunchesQueryResponse,
|};
*/


/*
query LaunchesQuery {
  launchesPast(limit: 10) {
    mission_name
    rocket {
      rocket_name
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 10
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mission_name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "rocket",
  "storageKey": null,
  "args": null,
  "concreteType": "LaunchRocket",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "rocket_name",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LaunchesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "launchesPast",
        "storageKey": "launchesPast(limit:10)",
        "args": (v0/*: any*/),
        "concreteType": "Launch",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LaunchesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "launchesPast",
        "storageKey": "launchesPast(limit:10)",
        "args": (v0/*: any*/),
        "concreteType": "Launch",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LaunchesQuery",
    "id": null,
    "text": "query LaunchesQuery {\n  launchesPast(limit: 10) {\n    mission_name\n    rocket {\n      rocket_name\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f1c7cbf3a8a457bf1a5605db3b689b3f';
module.exports = node;
