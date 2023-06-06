import React from 'react'
import { ILoanListTemplate } from '../interface'
import { styles } from './styles'
import { PageWrapper } from '../../../../../ui/src/components/molecules/exhibitions/PageWrapper/View'
import { Buttons } from '../../../../../ui/src/components/molecules/interactives/Buttons/View'
import { List } from '../../../../../ui/src/components/molecules/exhibitions/List/View'
import { ListItemLoan } from '../../../../../ui/src/components/molecules/interactives/ListItemLoan/View'

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
        item={({ item }) => <ListItemLoan theme={theme} key={item.id}
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


