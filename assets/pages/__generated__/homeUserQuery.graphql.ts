/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type homeUserQueryVariables = {};
export type homeUserQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly name: string | null;
        readonly email: string | null;
        readonly active_plan: string | null;
        readonly customer_id: string | null;
        readonly session_id: string | null;
        readonly created_at: string | null;
    };
};
export type homeUserQuery = {
    readonly response: homeUserQueryResponse;
    readonly variables: homeUserQueryVariables;
};



/*
query homeUserQuery {
  user {
    id
    name
    email
    active_plan
    customer_id
    session_id
    created_at
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "active_plan",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "customer_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "session_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_at",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "homeUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f39037bfacc11bd30f5796e77f17f491",
    "id": null,
    "metadata": {},
    "name": "homeUserQuery",
    "operationKind": "query",
    "text": "query homeUserQuery {\n  user {\n    id\n    name\n    email\n    active_plan\n    customer_id\n    session_id\n    created_at\n  }\n}\n"
  }
};
})();
(node as any).hash = '3adf68e51a59178971ada9faa44b173e';
export default node;
