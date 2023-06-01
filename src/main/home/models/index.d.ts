import {ITheme} from '@poc/interfaces';
import {Component} from 'react';

export type ITemplateMainHome = {
  theme: ITheme;
  title: string;
  labelButton: string;
  onPressed: () => void;
  isChecked: boolean;
  onClickMidway: () => void;
  onClickRiachuelo: () => void;
};

export class TemplateMainHome extends Component<ITemplateMainHome> {}
