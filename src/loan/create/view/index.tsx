import React from 'react'
import { ILoanCreateTemplate } from '../interface'
import { styles } from './styles'
import { PageWrapper } from '../../../../../ui/src/components/molecules/exhibitions/PageWrapper/View'
import { Input } from '../../../../../ui/src/components/atoms/inputControls/Input/View'
import { Buttons } from '../../../../../ui/src/components/molecules/interactives/Buttons/View'

export const LoanCreateTemplate: React.FC<ILoanCreateTemplate> = ({
  theme,
  nameLabel,
  nameValue,
  nameChangeText,
  typeLabel,
  typeValue,
  typeChangeText,
  amountLabel,
  amountValue,
  amountChangeText,
  submitButtonLabel,
  onSubmit,
  cancelButtonLabel,
  onCancel,
  loading,
  error
}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight error={error}>
      <Input
        theme={theme}
        label={nameLabel}
        value={nameValue}
        onChangeText={nameChangeText}
      />
      <Input
        theme={theme}
        label={typeLabel}
        value={typeValue}
        onChangeText={typeChangeText}
      />
      <Input
        theme={theme}
        label={amountLabel}
        value={amountValue}
        onChangeText={amountChangeText}
      />
      <Buttons.Base
        theme={theme}
        style={styles(theme).button}
        label={submitButtonLabel}
        onPress={onSubmit}
        isLoading={loading}
      />
      <Buttons.Link
        theme={theme}
        style={styles(theme).button}
        label={cancelButtonLabel}
        onPress={onCancel}
      />
    </PageWrapper>
  )
}
