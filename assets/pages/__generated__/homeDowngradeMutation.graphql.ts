/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type homeDowngradeMutationVariables = {
    price: string;
    plan: string;
};
export type homeDowngradeMutationResponse = {
    readonly changePlan: {
        readonly id: string;
        readonly active_plan: string | null;
    };
};
export type homeDowngradeMutation = {
    readonly response: homeDowngradeMutationResponse;
    readonly variables: homeDowngradeMutationVariables;
};



/*
mutation homeDowngradeMutation(
  $price: String!
  $plan: String!
) {
  changePlan(price: $price, plan: $plan) {
    id
    active_plan
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "plan"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "price"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "plan",
        "variableName": "plan"
      },
      {
        "kind": "Variable",
        "name": "price",
        "variableName": "price"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "changePlan",
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
        "name": "active_plan",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "homeDowngradeMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "homeDowngradeMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ffe5fa2d406aa7e8c06fd373c46639ad",
    "id": null,
    "metadata": {},
    "name": "homeDowngradeMutation",
    "operationKind": "mutation",
    "text": "mutation homeDowngradeMutation(\n  $price: String!\n  $plan: String!\n) {\n  changePlan(price: $price, plan: $plan) {\n    id\n    active_plan\n  }\n}\n"
  }
};
})();
(node as any).hash = '5be8cfff900121eaf60a03f7966c189c';
export default node;
