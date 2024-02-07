import {useState} from 'react'

import {AppContainer, Image, LockText, LockButton} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const onClickChangeStatus = () => {
    setLock(prevState => !prevState)
  }

  return (
    <AppContainer>
      <Image
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isLocked ? 'lock' : 'unlock'}
      />
      <LockText>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </LockText>
      <LockButton type="button" onClick={onClickChangeStatus}>
        {isLocked ? 'Unlock' : 'Lock'}
      </LockButton>
    </AppContainer>
  )
}

export default Unlock
