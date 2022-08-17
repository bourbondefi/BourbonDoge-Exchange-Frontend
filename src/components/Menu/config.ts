import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://dogefarm.bourbondefi.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Exchange',
        href: 'https://doge.bourbondefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://doge.bourbondefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://dogefarm.bourbondefi.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://dogefarm.bourbondefi.com/pools',
  },
  {
    label: 'Docs',
    icon: 'InfoIcon',
    href: 'https://app.gitbook.com/@bourbondefi/s/bourbon-finance/',
  },
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    href: 'https://t.me/BourbonDAO',
  },
  {
    label: 'Doge Miner',
    icon: 'FarmIcon',
    href: 'https://dogeminer.bourbondefi.com/,
  },
]

export default config
