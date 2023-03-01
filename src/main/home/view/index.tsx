import React from 'react';
import {ITemplateMainHome } from '../models';
import {Buttons, PageWrapper, Texts} from '@poc/ui';
import {styles} from './styles';

export const TemplateMainHome: React.FC<ITemplateMainHome> = ({
  theme,
  title,
  labelFirstButton,
  onPressFirstButton,
  labelSecondButton,
  onPressSecondButton,
  labelThirdButton,
  onPressThirdButton
}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme} style={styles(theme).title}>
        {title}
      </Texts.Title>
      <Buttons.Base
        theme={theme}
        label={labelFirstButton}
        onPress={onPressFirstButton}
        style={styles(theme).button}
      />
      <Buttons.Base
        theme={theme}
        label={labelSecondButton}
        onPress={onPressSecondButton}
        style={styles(theme).button}
      />
      <Buttons.Base theme={theme} label={labelThirdButton} onPress={onPressThirdButton} />
    </PageWrapper>
  );
};
