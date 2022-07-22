import React from 'react'
import { EarnText } from '../molecules/EarnText'
import { EarnPTRText } from '../molecules/EarnPTRText'
import { EarnButton } from '../molecules/EarnButton'

export const Earn = () => (
  <section className="earn">
    <EarnText amount={360} />
    <EarnPTRText />
    <EarnButton />
  </section>
)