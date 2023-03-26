import { ITheme } from "@poc/theme"
import { Component } from "react"
import {PaymentEntity} from '@poc/core';
import { ITemplate } from "@poc/interfaces";

export type IPaymentListTemplate = ITemplate<PaymentEntity> & {
  errorText?: string;
  navigateToCreate: () => void;
  IconAddButton: React.FC<React.SVGProps<SVGSVGElement>>;
}

export class PaymentListTemplate extends Component<IPaymentListTemplate> {}
