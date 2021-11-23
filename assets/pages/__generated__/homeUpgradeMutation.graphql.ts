/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type homeUpgradeMutationVariables = {
    price: string;
    plan: string;
};
export type homeUpgradeMutationResponse = {
    readonly changePlan: {
        readonly id: string;
        readonly active_plan: string | null;
    };
};
export type homeUpgradeMutation = {
    readonly response: homeUpgradeMutationResponse;
    readonly variables: homeUpgradeMutationVariables;
};



/*
mutation homeUpgradeMutation(
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
    "name": "homeUpgradeMutation",
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
    "name": "homeUpgradeMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "1ded3f7513885197b321dbb5ff6c2dac",
    "id": null,
    "metadata": {},
    "name": "homeUpgradeMutation",
    "operationKind": "mutation",
    "text": "mutation homeUpgradeMutation(\n  $price: String!\n  $plan: String!\n) {\n  changePlan(price: $price, plan: $plan) {\n    id\n    active_plan\n  }\n}\n"
  }
};
})();
(node as any).hash = '1c1b8db75ec4b19577cbeb177ef45455';
export default node;
