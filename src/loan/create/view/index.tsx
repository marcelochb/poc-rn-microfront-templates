import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILoanCreateTemplate } from '../interface'
import { Buttons, Input, PageWrapper } from '@poc/ui'

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
  loading
}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Input
        theme={theme}
        label={nameLabel}
        value={nameValue}
        onChangeText={nameChangeText}
        error={nameError}
      />
      <Input
        theme={theme}
        label={typeLabel}
        value={typeValue}
        onChangeText={typeChangeText}
        error={typeError}
      />
      <Input
        theme={theme}
        label={amountLabel}
        value={amountValue}
        onChangeText={amountChangeText}
        error={amountError}
      />
      <Buttons.Base
        theme={theme}
        label={submitButtonLabel}
        onPress={onSubmit}
        isLoading={loading}
      />
      <Buttons.Link
        theme={theme}
        label={cancelButtonLabel}
        onPress={onCancel}
      />
    </PageWrapper>
  )
}

const styles = StyleSheet.create({})
