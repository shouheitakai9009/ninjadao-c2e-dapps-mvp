import React, { useMemo } from 'react'
import { Text } from '../atoms/Text'

interface IProps {
  amount: number
}

export const EarnText = (props: IProps) => {

  const amountText = useMemo(() => props.amount.toLocaleString(), [props.amount])

  return (
    <Text className="text--earn">
      {amountText}
    </Text>
  )
}