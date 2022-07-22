import React from 'react'
import { Text } from '../atoms/Text'

interface IProps {
  now: number
  max: number
}

export const EarnPercentProgressText = (props: IProps) => (
  <Text className="text--earnPercentProgress">
    {props.now} / {props.max}
  </Text>
)