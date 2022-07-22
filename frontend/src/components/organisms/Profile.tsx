import React from 'react'
import { ProfileImage } from '../molecules/ProfileImage'
import { ProfileNameText } from '../molecules/ProfileNameText'
import { ConnectWalletButton } from '../molecules/ConnectWalletButton'

export const Profile = () => (
  <section className="profile">
    <ProfileImage />
    <ProfileNameText />
    <ConnectWalletButton />
  </section>
)