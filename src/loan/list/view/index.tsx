import { StyleSheet } from 'react-native'
import React from 'react'
import { ILoanListTemplate } from '../models'
import { List, ListItemLoan, PageWrapper, Texts } from '@poc/ui'

export const LoanListTemplate: React.FC<ILoanListTemplate> = ({
  theme,
  listData,
  loading,
  error,
  errorText,
  callBack,
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
        data={listData}
        item={({ item }) => <ListItemLoan theme={theme}
          name={item.name}
          type={item.type}
          amount={item.amount}
          onPressed={() => callBack?.call(this,item)}
          />
        }
      />
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  list: {flex: 1}
})
