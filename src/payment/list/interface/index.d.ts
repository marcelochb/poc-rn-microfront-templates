import { ITheme } from "@poc/theme"
import { Component } from "react"
import {PaymentEntity} from '@poc/core';
import { ITemplate } from "@poc/interfaces";

export type IPaymentListTemplate = ITemplate<PaymentEntity> & {
  errorText?: string;
}

export class PaymentListTemplate extends Component<IPaymentListTemplate> {}
