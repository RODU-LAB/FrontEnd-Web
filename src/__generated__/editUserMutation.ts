/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { editUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: editUserMutation
// ====================================================

export interface editUserMutation_editUser {
  __typename: "editUserOutput";
  ok: boolean;
  error: string | null;
}

export interface editUserMutation {
  editUser: editUserMutation_editUser;
}

export interface editUserMutationVariables {
  editUserInput: editUserInput;
}
