/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type redirectsUpdatePlanMutationVariables = {
    id: string;
};
export type redirectsUpdatePlanMutationResponse = {
    readonly updatePlan: {
        readonly id: string;
        readonly active_plan: string | null;
    };
};
export type redirectsUpdatePlanMutation = {
    readonly response: redirectsUpdatePlanMutationResponse;
    readonly variables: redirectsUpdatePlanMutationVariables;
};



/*
mutation redirectsUpdatePlanMutation(
  $id: String!
) {
  updatePlan(id: $id) {
    id
    active_plan
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "updatePlan",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "redirectsUpdatePlanMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "redirectsUpdatePlanMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "947563ee8f4bc1c7a063fc6106388a0e",
    "id": null,
    "metadata": {},
    "name": "redirectsUpdatePlanMutation",
    "operationKind": "mutation",
    "text": "mutation redirectsUpdatePlanMutation(\n  $id: String!\n) {\n  updatePlan(id: $id) {\n    id\n    active_plan\n  }\n}\n"
  }
};
})();
(node as any).hash = '8364df58556605476e54cd0d18f5ac22';
export default node;
