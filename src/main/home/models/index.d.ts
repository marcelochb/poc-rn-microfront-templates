import {ModelOfTheme} from '@poc/theme';
import {Component} from 'react';

export type ModelOfTemplateMainHome = {
  theme: ModelOfTheme;
  title: string;
  labelFirstButton: string;
  labelSecondButton: string;
  labelThirdButton: string;
};

export class TemplateMainHome extends Component<ModelOfTemplateMainHome> {}
