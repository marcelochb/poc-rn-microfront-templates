import { LoanEntity } from "@poc/core";
import { ITemplate } from "@poc/interfaces";
import { Component } from "react";

export type ILoanCreateTemplate = ITemplate<LoanEntity> & {
  nameLabel: string;
  nameValue: string;
  nameChangeText: ((text: string) => void) | undefined;
  typeLabel: string;
  typeValue: string;
  typeChangeText: ((text: string) => void) | undefined;
  amountLabel: string;
  amountValue: string;
  amountChangeText: ((text: string) => void) | undefined;
  submitButtonLabel: string;
  onSubmit: (e?: any | undefined) => void;
  cancelButtonLabel: string;
  onCancel: ((() => void) & (() => void)) | undefined;
  isLoading: boolean;
}


export class LoanCreateTemplate extends Component<ILoanCreateTemplate> {}
