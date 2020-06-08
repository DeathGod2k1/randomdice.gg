import { FunctionComponent, lazy } from 'react';
import Homepage from '../Screens/Homepage/homepage';

export type Menu = {
    name: string;
    path?: string;
    component?: FunctionComponent;
    external?: boolean;
    childNode?: Menu[];
};

export const menu: Menu[] = [
    {
        name: 'Home',
        path: '/',
        component: Homepage,
    },
    {
        name: 'Resources',
        childNode: [
            {
                name: 'PvP Deck List',
                path: '/decks/pvp',
                component: lazy(() => import('../Screens/Decks/pvpDeck')),
            },
            {
                name: 'PvE Deck List',
                path: '/decks/pve',
                component: lazy(() => import('../Screens/Decks/pveDeck')),
            },
            {
                name: 'Crit% Data Per Class',
                path: '/critData',
                component: lazy(() => import('../Screens/Crit Info/crit')),
            },
        ],
    },
    {
        name: 'Calculator',
        childNode: [
            {
                name: 'Blizzard Slow Effect Calculator',
                path: '/calculator/blizzard',
                component: lazy(() =>
                    import('../Screens/Cal/Blizzard/blizzard')
                ),
            },
            {
                name: 'Combo Damage Calculator',
                path: '/calculator/combo',
                component: lazy(() => import('../Screens/Cal/Combo/combo')),
            },
            {
                name: 'Solar Light vs Crit Comparison',
                path: '/calculator/solar',
                component: lazy(() => import('../Screens/Cal/Solar/solar')),
            },
            {
                name: 'Gears DPS Calculator',
                path: '/calculator/gears',
                component: lazy(() => import('../Screens/Cal/Gears/gears')),
            },
            {
                name: 'Gold Grind Calculator',
                path: '/calculator/gold',
                component: lazy(() => import('../Screens/Cal/Gold/gold')),
            },
            {
                name: 'Dice Stat Calculator',
                path: '/calculator/dice',
                component: lazy(() => import('../Screens/Cal/Dice Stat/dice')),
            },
        ],
    },
    {
        name: 'Wiki',
        path: `https://random-dice.fandom.com/wiki/Random_Dice_Wiki`,
        childNode: [
            {
                name: 'PvP',
                path: '/wiki/pvp',
                component: lazy(() => import('../Screens/Wiki/Game Intro/pvp')),
            },
            {
                name: 'PvE',
                path: '/wiki/pve',
                component: lazy(() => import('../Screens/Wiki/Game Intro/pve')),
            },
            {
                name: 'Dice Mechanics',
                path: '/wiki/dice_mechanics',
                component: lazy(() => import('../Screens/Wiki/Dice/dice')),
            },
            {
                name: 'Boss Mechanics',
                path: '/wiki/boss_mechanics',
                component: lazy(() => import('../Screens/Wiki/Boss/boss')),
            },
            {
                name: 'Guide',
                path: `https://random-dice.fandom.com/wiki/Dice_Merging_Guide`,
                external: true,
            },
            {
                name: 'Patch Notes',
                path: `https://random-dice.fandom.com/wiki/Patch_Notes`,
                external: true,
            },
            {
                name: 'The Store',
                path: `https://random-dice.fandom.com/wiki/Store`,
                external: true,
            },
            {
                name: 'The Arena',
                path: `https://random-dice.fandom.com/wiki/Arena`,
                external: true,
            },
            {
                name: 'Dice Menu/List',
                path: `https://random-dice.fandom.com/wiki/Dice_Menu`,
                external: true,
            },
            {
                name: 'Box Drop Rates',
                path: `https://random-dice.fandom.com/wiki/Box_Drop_Rates`,
                external: true,
            },
        ],
    },
    {
        name: 'About',
        childNode: [
            {
                name: 'About Us',
                path: '/about/us',
                component: lazy(() =>
                    import('../Screens/About/About Us/about')
                ),
            },
            {
                name: 'Credit',
                path: '/about/credit',
                component: lazy(() => import('../Screens/About/Credit/credit')),
            },
        ],
    },
];
