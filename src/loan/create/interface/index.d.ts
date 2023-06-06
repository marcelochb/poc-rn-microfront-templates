import { LoanEntity } from "../../../../../core/src/modules/loan/domain/entities";
import { ITemplate } from "../../../../../interfaces/src/templates";
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
  error: boolean;
}


export class LoanCreateTemplate extends Component<ILoanCreateTemplate> {}
