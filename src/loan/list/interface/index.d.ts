import { ITheme } from "@poc/theme"
import { Component } from "react"
import {LoanEntity} from '@poc/core';
import { ITemplate } from "@poc/interfaces";

export type ILoanListTemplate = ITemplate<LoanEntity> & {
  errorText?: string;
  navigateToCreate: () => void;
  IconAddButton: React.FC<React.SVGProps<SVGSVGElement>>;
}

export class LoanListTemplate extends Component<ILoanListTemplate> {}
