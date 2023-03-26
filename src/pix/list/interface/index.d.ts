import { ITheme } from "@poc/theme"
import { Component } from "react"
import {PixEntity} from '@poc/core';
import { ITemplate } from "@poc/interfaces";

export type IPixListTemplate = ITemplate<PixEntity> & {
  errorText?: string;
  navigateToCreate: () => void;
  IconAddButton: React.FC<React.SVGProps<SVGSVGElement>>;
}

export class PixListTemplate extends Component<IPixListTemplate> {}
