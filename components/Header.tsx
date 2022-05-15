import React, { useState } from 'react'
import Button from './Button'
import { MdMenu } from 'react-icons/md'
import { ConnectButton } from 'web3uikit'

const styles = {
  header: 'flex items-center bg-white dark:bg-slate-800 h-20 w-full',
  headerWrapper:
    'flex max-w-screen-xl w-full px-5 mx-auto gap-2 justify-between items-center',
  nav: 'flex md:items-center md:gap-3 gap-5 flex-col md:flex-row dark:bg-slate-800 bg-white shadow-md border dark:border-black md:border-0 md:shadow-none p-5 fixed md:static top-20 right-0 z-10 md:w-auto md:h-auto md:p-0 md:bg-transparent',
  navItem: 'relative mr-1 cursor-pointer hover:opacity-60',
  navLink: '',
  badge: 'rounded-full bg-blue-600 h-1 w-1 absolute right-0 top-0 ring-4',
  button: '',
}

function Header(): JSX.Element {
  const [hidden, setHidden] = useState(true)

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className="font-semibold text-lg">CryptoCap</h1>
        <nav className={`${styles.nav} ${hidden ? 'hidden' : 'flex'} md:flex`}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              Cryptocurrencies
              <div className={styles.badge}></div>
            </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              Exchanges
              <div className={styles.badge}></div>
            </div>
          </div>{' '}
          <div className={styles.navItem}>
            <div className={styles.navLink}>
              NFT
              <div className={styles.badge}></div>
            </div>
          </div>
        <ConnectButton />
        </nav>
        <Button className="md:hidden" variant="outlined">
          <MdMenu onClick={() => setHidden(!hidden)} />
        </Button>
      </div>
    </header>
  )
}

export default Header
