import React from 'react'
import { IPaymentListTemplate } from '../interface'
import { Buttons, List, ListItemLoan, ListItemPayment, PageWrapper } from '@poc/ui'
import { styles } from './styles'

export const PaymentListTemplate: React.FC<IPaymentListTemplate> = ({
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
        item={({ item }) => <ListItemPayment theme={theme}
          recipient={item.recipient}
          payer={item.payer}
          dueDate={item.dueDate}
          amount={item.amount}
          onPressed={() => callBack?.call(this,item)}
          />
        }
      />
    </PageWrapper>
  )
}


