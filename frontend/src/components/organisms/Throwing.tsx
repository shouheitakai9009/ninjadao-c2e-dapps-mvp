import React from 'react'
import { ThrowingImage } from '../molecules/ThrowingImage'
import { ThrowingLevelText } from '../molecules/ThrowingLevelText'
import { EarnPercentProgressText } from '../molecules/EarnPercentProgressText'
import { LevelupButton } from '../molecules/LevelupButton'

export const Throwing = () => (
  <section className="throwing">
    <ThrowingImage />
    <ThrowingLevelText level={5} />
    <EarnPercentProgressText now={360} max={1000} />
    <LevelupButton />
  </section>
)