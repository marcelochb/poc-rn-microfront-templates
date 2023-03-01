import {ITheme} from '@poc/interfaces';
import {Component} from 'react';

export type ITemplateMainHome = {
  theme: ITheme;
  title: string;
  labelFirstButton: string;
  onPressFirstButton: () => void;
  labelSecondButton: string;
  onPressSecondButton: () => void;
  labelThirdButton: string;
  onPressThirdButton: () => void;
};

export class TemplateMainHome extends Component<ITemplateMainHome> {}
