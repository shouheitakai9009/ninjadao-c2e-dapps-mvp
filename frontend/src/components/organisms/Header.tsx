import React from 'react'
import { LogoImage } from '../molecules/LogoImage'
import { TitleDescriptionText } from '../molecules/TitleDescriptionText'
import { WalletAmountText } from '../molecules/WalletAmountText'

export const Header = () => (
  <header className="header">
    <section className="header--leftArea">
      <LogoImage />
      <TitleDescriptionText />
    </section>
    <section className="header--rightArea">
      <WalletAmountText amount={12000} />
    </section>
  </header>
)