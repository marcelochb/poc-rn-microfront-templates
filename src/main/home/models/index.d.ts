import {ITheme} from '@poc/theme';
import {Component} from 'react';

export type ModelOfTemplateMainHome = {
  theme: ITheme;
  title: string;
  labelFirstButton: string;
  onPressFirstButton: () => void;
  labelSecondButton: string;
  onPressSecondButton: () => void;
  labelThirdButton: string;
  onPressThirdButton: () => void;
};

export class TemplateMainHome extends Component<ModelOfTemplateMainHome> {}
