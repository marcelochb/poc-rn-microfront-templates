import { ITheme } from "@poc/interfaces"
import { Component } from "react"
import {LoanEntity} from '@poc/core';
import { ITemplate } from "@poc/interfaces";

export type ILoanListTemplate = ITemplate<LoanEntity> & {
  errorText?: string;
  navigateToCreate: () => void;
}

export class LoanListTemplate extends Component<ILoanListTemplate> {}
