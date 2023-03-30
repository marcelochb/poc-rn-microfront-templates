import React from 'react'
import { ILoanListTemplate } from '../interface'
import { Buttons, List, ListItemLoan, PageWrapper } from '@poc/ui'
import { styles } from './styles'

export const LoanListTemplate: React.FC<ILoanListTemplate> = ({
  theme,
  listData,
  loading,
  error,
  errorText,
  callBack,
  navigateToCreate,
}) => {
  return (
    <PageWrapper
      theme={theme}
      loading={loading}
      error={error}
      errorText={errorText}
      isStatusBarLight
      ButtonFixed={
        <Buttons.Fixed
          theme={theme}
          onPress={navigateToCreate}
        />
      }
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


