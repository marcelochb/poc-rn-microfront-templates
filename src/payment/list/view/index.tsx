import React from 'react'
import { IPaymentListTemplate } from '../interface'
import { Buttons, List, ListItemLoan, PageWrapper } from '@poc/ui'
import { styles } from './styles'

export const PaymentListTemplate: React.FC<IPaymentListTemplate> = ({
  theme,
  listData,
  loading,
  error,
  errorText,
  callBack,
  navigateToCreate,
  IconAddButton
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
          IconSVG={IconAddButton}
        />
      }
    >
      <List
        theme={theme}
        style={styles.list}
        data={listData}
        item={({ item }) => <ListItemLoan theme={theme}
          name={item.recipient}
          type={item.payer}
          amount={item.amount}
          onPressed={() => callBack?.call(this,item)}
          />
        }
      />
    </PageWrapper>
  )
}


