import React from 'react';
import {ITemplateMainHome } from '../models';
import {Buttons, PageWrapper, RadioButton, Texts} from '@poc/ui';
import {styles} from './styles';
import { View } from 'react-native';

export const TemplateMainHome: React.FC<ITemplateMainHome> = ({
  theme,
  title,
  labelButton,
  onPressed,
  isChecked,
  onClickMidway,
  onClickRiachuelo,
}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Body theme={theme} style={styles(theme).titleTheme}>Temas</Texts.Body>
      <View style={styles(theme).viewTheme}>
        <RadioButton
          isChecked={isChecked}
          theme={theme}
          label='Midway'
          onClick={onClickMidway}
          />
        <RadioButton
          isChecked={!isChecked}
          theme={theme}
          label='Riachuelo'
          onClick={onClickRiachuelo}
        />
      </View>
      <Texts.Title theme={theme} style={styles(theme).title}>
        {title}
      </Texts.Title>
      <Buttons.Base
        theme={theme}
        label={labelButton}
        onPress={onPressed}
        style={styles(theme).button}
      />
    </PageWrapper>
  );
};
