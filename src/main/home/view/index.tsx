import React from 'react';
import {ModelOfTemplateMainHome } from '../models';
import {Buttons, PageWrapper, Texts} from '@poc/ui';
import {styles} from './styles';

export const TemplateMainHome: React.FC<ModelOfTemplateMainHome> = ({
  theme,
  title,
  labelFirstButton,
  labelSecondButton,
  labelThirdButton,
}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme} style={styles(theme).title}>
        {title}
      </Texts.Title>
      <Buttons.Base
        theme={theme}
        label={labelFirstButton}
        onPress={() => {}}
        style={styles(theme).button}
      />
      <Buttons.Base
        theme={theme}
        label={labelSecondButton}
        onPress={() => {}}
        style={styles(theme).button}
      />
      <Buttons.Base theme={theme} label={labelThirdButton} onPress={() => {}} />
    </PageWrapper>
  );
};
