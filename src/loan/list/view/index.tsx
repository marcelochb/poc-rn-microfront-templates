import { StyleSheet } from 'react-native'
import React from 'react'
import { ModelOfLoanListTemplate } from '../models'
import { List, ListItemLoan, PageWrapper, Texts } from '@poc/ui'

export const LoanListTemplate: React.FC<ModelOfLoanListTemplate> = ({
  theme,
  loans,
  loading,
  error,
  errorText,
  navigateToDetail
}) => {
  return (
    <PageWrapper
      theme={theme}
      loading={loading}
      error={error}
      errorText={errorText}
      isStatusBarLight
    >
      <List
        theme={theme}
        style={styles.list}
        data={loans}
        item={({ item }) => <ListItemLoan theme={theme}
          name={item.name}
          type={item.type}
          amount={item.amount}
          onPressed={() => navigateToDetail(item.id)}
          />
        }
      />
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  list: {flex: 1}
})
