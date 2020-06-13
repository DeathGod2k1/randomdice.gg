/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { sanitize } from 'dompurify';
import Main from '../../Components/Main/main';
import Dice from '../../Components/Dice/dice';
import './guide.less';

export default function DeckGuide(): JSX.Element {
    const decks = [
        {
            name: 'Solar',
            diceList: [
                ['Solar', 'Light', 'Joker', 'Growth', 'Blizzard'],
                ['Solar', 'Critical', 'Joker', 'Growth', 'Blizzard'],
            ],
            guide: `<p>For the early game, you want to keep spawning dice until you get 4 solar activated. Merge all 1 pip support dice (crit/light). Blizzard will act as your early game dps.</p><p>Upgrade your blizzard to lvl 2 and upgrade your solar to lvl 2 before boss wave because you need to kill as much mobs as possible to prevent losing potential sp from mobs. If you can't keep up for the first two bosses, you will most likely lose. Max your solar by second boss and max your support die and blizzard die by third boss (You don't have to max blizzard by 3rd boss if you got a lot of high pip blizzard dice. Only max them when you have 1 pip blizzard on your board)</p><p>Always hoard sp. This is the most important tip for beginning solar players. They often spawn and mess up their solar activation which results them into panic merging because they  can't spawn any more dice. Always have enough sp to spawn at least 5 or more dice to prevent this from happening.</p><p>To build up your board effectively, mass spawn dice either 12 seconds before the boss wave, during every boss wave, or after you kill a boss. (This depends on which boss wave it is and what boss you are going to face. If you face a knight, always spawn 12 secs before it appears as your 1 pip growths will have time to grow into 2 pips if you ever spawn one. You spawn during a boss for the first two boss waves to build up your board better. You should spawn after you kill the third boss onwards because you might end up deactivating your solar and you won't be able to kill it in time)</p><p>Use crit dice if you are having trouble with the early game and if your light dice is class 11 or below. Use light dice once you can handle the early game and if it is class 12+</p><p>Note: You may use this deck if you have at least 800+ crit, c8 solar, and c8 blizzard and either c10+ light or crit. If you don't meet the requirements, you can still play it, but it takes a lot of skill.</p>`,
        },
        {
            name: 'Assphoon',
            diceList: [
                ['Growth', 'Joker', 'Assassin', 'Sacrificial', 'Typhoon'],
            ],
            guide: `<p>For the early game, your main objective is to weaken your opponent's board. Use your jokers on mainly sacrificial and assassins before the first boss wave. After beating the first boss, focus your jokers on mainly assassin because your sp cost is high after spawning a lot which makes sacrificial less useful overtime. For the late game, you want to use your jokers on growths because you want to make sure you outlast your opponent.</p><p>Don't spam merge assassins. There are situations where 2 or more assassins target the same die, but it reduces only 1 pip of the targeted die.</p>`,
        },
        {
            name: 'Thornphoon/ Iron Thorn',
            diceList: [
                ['Growth', 'Joker', 'Iron', 'Thorn', 'Blizzard'],
                ['Growth', 'Joker', 'Typhoon', 'Thorn', 'Blizzard'],
            ],
            guide: `<p>For the early game, you want to have as much typhoons/irons as possible to clear waves quicker. Thorns is not needed until 2nd to 3rd boss, so you want to merge all 1 pip thorns (Keep a few just in case)</p><p>Upgrade your dps dice (typhoon/iron) to lvl 3 before first boss, and max it by the second boss. For thorns, you upgrade it to lvl 3 by second boss, and max it by third boss. Do not upgrade blizzard until you max both your dps and thorns.</p><p>As you progress, you want to slowly change your dps dice to thorns (starting from the lowest pip to the highest). You want high pip thorns as much as possible. Take note that thorns produce more traps the higher pips it has, and its damage per trap is also multiplied by the number of its pips.</p><p>If you chose the Iron variation, you should know that iron is there to weaken the mobs for thorns to finish it off. It's the other way around for typhoons.</p>`,
        },
        {
            name: 'Hellphoon',
            diceList: [
                ['Growth', 'Joker', 'Typhoon', 'Hell', 'Blizzard'],
                ['Growth', 'Joker', 'Typhoon', 'Hell', 'Sand Swamp'],
            ],
            guide: `<p>For the early game, you mainly want typhoons on your board to clear waves quicker. Merge all 1 pip hells as they are not needed that early in the game. Always use jokers on growths.</p><p>Upgrade your typhoon to lvl 3-4 before first boss, and max it by the second boss. Start upgrading hell to lvl 3 by the second boss and max it by the 3rd boss. If you are using sand, upgrade it to lvl 2-3 before the second boss and max it by the third boss. If you are using blizzard, don't upgrade it until you max typhoon and hell because 1% increase in slow is not a big difference and you could use the sp for spawning.</p><p>For the Sand Variation: You're main priority is to have sand next to hells. Typhoon is also good beside hell, but sand is a random target dice which can target any mob on the field, so having it next to hell is good because it has a chance to instant kill any mob. Another reason is because mini bosses prevent typhoons from killing the small mobs as it is a frontal dps dice. Sand is there to clear the mobs while typhoon is focusing on the mini boss. Try to have at least 4-6 sands on your board.</p><p>For the Blizzard Variation: You want to have typhoons next to hells as they are there to instant kill all front mobs to immediately deal damage to the mini boss. Have at least 3-4 blizzards on your board.</p><p>Note: The sand variation is most likely better because it instant kills any mob on the field which helps bosses having less hp. (Hp of the boss is determined by the total amount of hp all of the mobs has on board)</p>`,
        },
        {
            name: 'Non Legendary Meta',
            diceList: [['Ice', 'Sacrificial', 'Infect', 'Iron', 'Mighty Wind']],
            guide: `<p>Before merging anything, fill the board completely. You want as much dice as possible on your board to get the maximum dps available. If you have some sacrificial on your board, immediately merge all sacrificial to spawn more dice quicker. Once you have a full board, merge all duplicate ice and infects because you only need 1 of them on your board.</p><p>Try to get at least 3+ pip ice and infect. You only need one of them because having too much wastes space on having a potential dps dice on your board.</p><p>After tip #1, merge the lowest pip possible on your board. It's better to merge 1 pips than 2 pips because two 1 pip dice is equal to one 2 pip dice, but two 2 pip dice isn't equal to three one pip dice.</p><p>Upgrade both iron and mwind to lvl 2 before the first boss. On the second boss, upgrade either mwind or iron to lvl 4 depending on which dps dice is more present on your board. Upgrade infect to lvl 2-3 and iron/mwind to 3 (Again, it depends on which dice is less present on your board)</p><p>Note: If you have problems with bosses, try out Iron and Ice. If you die more to waves, try out Poison and Iron. This deck can work up to class 8 or even higher, depending on your classes and your crit dmg.</p><p>Certain dice can be replaced with upgrade versions of them.</p><p>Mighty Wind ~> Typhoon</p><p>Ice ~> Blizzard</p><p>Sacrificial ~> Growth, Joker, Summoner, Supplement</p>`,
        },
        {
            name: 'Solar/Time',
            diceList: [
                ['Solar', 'Light', 'Supplement', 'Joker', 'Switch'],
                ['Time', 'Typhoon', 'Supplement', 'Joker', 'Sacrificial'],
            ],
            guide: `<p>For the Support player, you want to carry your DPS partner all the way up to wave 10. Upgrade your Typhoon/Mwind to lvl 3, and merge all sacrificial/metastasis. While carrying your partner, start on getting 2 pip Times. There are a few ways. Supplement your 1 pip Joker to copy a 2 pip Time. If you got a lot of 1 pip Time, Joker your Supplement and use them on the 1 pip Time. Try to get at least 8-9+ Time. While doing this, slowly upgrade it to lvl 5 around wave 11-20. You may AFK (Away From Keyboard) after this.</p><p>For the DPS player, spawn a lot of dice. Don't merge until you have a full board. Once you do, it's time to start and set up your board. Use Switch to move your Light and Solar to the left side of your board. It should look like a + pattern, so the Light can buff 4 of the Solar. If you're having trouble doing this, here are some few tips. Before using your Supplements, merge unnecessary dice like duplicate Switch. It should be good if it turns into a 2 pip Solar, Light, or a Joker. Use extra Jokers on either Supplement, or Solar depending on which you are lacking on. Have at least 5+ Supplements, and then use them on Light and Solar. You only want 2 pip Solar (3 pips is also possible, but a lot harder) and a 2-3 pip Light (Depends on your Light class). You should be able to set it up before wave 11-15. Once you do, start maxing your Light up to lvl 5 as you need it more. Upgrade your Solar to lvl 5 once you max your Light. You may AFK once you're done, or if you know how to manipulate your board well, aim for 9 2 pip Solar by wave 25-30.</p><p>Note: This deck can be used for AFKing. You can do something else while the game is running. These builds together go all up to wave 50-56 when you set up both boards perfectly.</p>`,
        },
        {
            name: 'Gear Fast 30s',
            diceList: [
                ['Gears', 'Joker', 'Growth', 'Summoner', 'Sacrificial'],
                ['Gears', 'Joker', '?', '?', '?'],
                [
                    'Mimic',
                    'Supplement',
                    'Sacrificial',
                    'Summoner',
                    'Metastasis',
                ],
            ],
            guide: `<p>For the early game, your playstyle depends on the filler dice you choose. If you have Joker paired with Growth or Summoner, use it on those 2 dice. If you have Metastasis/Sacrificial, immediately merge it with itself. Mimic /Supplement is used to prevent you from merging your high pip gears.</p><p>Always merge outwards and not inwards, so you can have space for your gears to connect.</p><p>When you have 3 pip Jokers, it's better to use it on 3 pip Gears than to wait for a 3 pip Growth. You don't want high pip dice because you might not be able to merge them and chances of getting a high pip Gear is 20%.</p><p>If you have 13+ Gears, and you can't merge anything other than Gears, stop merging and don't do anything. It's better to have it kept like that instead of merging your Gears and lose dps because it turned into another dice.</p><p>Note: This is the most time efficient deck for lower class players if you want to grind quickly.</p>`,
        },
        {
            name: 'Landmine',
            diceList: [
                ['Landmine', 'Joker', 'Growth', 'Mighty Wind', 'Critical'],
                ['Landmine', 'Joker', 'Growth', 'Typhoon', 'Hell'],
            ],
            guide: `<p>For the early game, keep spawning until you have a full board. Merge all 1 pip Crit/Hell and always use Jokers on Growths. Once you have a full board, merge the lower pips first, and then slowly build your board up.</p><p>For the 1st pair, try to have Landmines and Mwind beside Crit because both of them can crit. 3-4 Crit dice on your board is the optimal amount. You don't want too many because you're wasting space for potential Mwind or Landmines.</p><p>For the 2nd pair, you want to have your Typhoons beside Hell. Landmine is unaffected by Hell, so you don't need to have it next to them.  3-4 Hells is also sufficient enough.</p><p>Start slowly upgrading Mwind/Typhoons and Landmines during the first 10 waves. You should max them by wave 11-20. Take note that upgrading Landmine doesn't upgrade all Landmines placed on the field, so you want to upgrade it when you can. Don't upgrade Crit/Hell until you max both Landmine and Mwind.</p><p>The ratio for Mwind/Typhoon to Landmine should be 2:1 where Mwind/Typhoon is more present on your board than Landmine.</p><p>Note: The 2nd pair is more consistent in getting you to wave 40, but it ends there. It's unlikely to pass wave 40 with it. The 1st pair is slightly less consistent, but it can pass wave 40. This deck is less time efficient unlike the Fast 30s Gear Deck, so it's up to you.</p>`,
        },
        {
            name: 'Combo Mirror',
            diceList: [
                ['Combo', 'Joker', 'Mimic', 'Metastasis', 'Growth'],
                ['Combo', 'Joker', 'Mimic', 'Metastasis', 'Summoner'],
            ],
            guide: `<p>For the early game, you want to immediately merge Metastasis with itself. You want to keep doing this until wave 5 to spawn a lot more dice and get your counter up. You want at least a counter of 4 to beat wave 5. If you or your partner can't get 4+ counters by the end of wave 4, use metastasis with mimic when you don't have a pair (Upgrading Combos to lvl 2 by wave 5 helps too). Do not Joker your Combos immediately as they deal more damage than Combos at 2 counters. Joker them if you want to merge them to increase your counter.</p><p>Upgrade your Combos every 5 counters. If you haven't upgraded your Combo by wave 5, upgrade to lvl 2 when you hit 15 combo counters, then upgrade again when you hit 20. You should end up maxing your Combos with 30 counters.</p><p>To gain sp from Metastasis effectively, merge them when you beat a boss wave (11, 21, 31, 41, 51). You may merge metastasis during mobs waves after wave 50. Take note that merging Metastasis to itself gives the same value as merging Metastasis with Mimic.</p><p>To gain combo counters effectively, always use Jokers and Mimics on combos. Do not use your Joker on Growth/Summoner unless necessary. Have a pair of combos per pip. Example: you have two 2 pip combos and a 2 pip Mimic. When you merge the 2 pip Mimic and 2 pip Combo, you still have one 2 pip Combo remaining. This is good because you may use it on a 2 pip Joker if you ever get one. Always merge Combos with the lowest pip first. If you run out of combo pairs to merge(If your board is full of Mimics/Jokers), You may merge combos with itself.</p>`,
        },
        {
            name: 'Combo DPS',
            diceList: [
                ['Combo', 'Joker', 'Mimic', 'Critical', 'Growth'],
                ['Combo', 'Joker', 'Mimic', 'Critical', 'Summoner'],
            ],
            guide: `<p>Playing this deck is similar to the Combo Mirror Deck, but it's just replaced with Crit.</p><p>For the early game, you want to immediately merge Critical with itself. You want at least a counter of 4 to beat wave 5. If you can't get 4+ counters by the end of wave 4, use critical with mimic when you don't have a pair (Upgrading Combos to lvl 2 by wave 5 helps too). Do not Joker your Combos immediately as they deal more damage than Combos at 2 counters. Joker them if you want to merge them to increase your counter.</p><p>Upgrade your Combos every 5 counters. If you haven't upgraded your Combo by wave 5, upgrade to lvl 2 when you hit 15 combo counters, then upgrade again when you hit 20. You should end up maxing your Combos with 30 counters.</p><p>Try to keep 3-4 Crit dice on your board. Do not upgrade it until you max your Combo.</p><p>To gain combo counters effectively, always use Jokers and Mimics on combos. Do not use your Joker on Growth/Summoner unless necessary. Have a pair of combos per pip. Example: you have two 2 pip combos and a 2 pip Mimic. When you merge the 2 pip Mimic and 2 pip Combo, you still have one 2 pip Combo remaining. This is good because you may use it on a 2 pip Joker if you ever get one. Always merge Combos with the lowest pip first. If you run out of combo pairs to merge(If your board is full of Mimics/Jokers), You may merge combos with itself.</p>`,
        },
        {
            name: 'Combo Support',
            diceList: [
                ['Growth', 'Joker', 'Metastasis', 'Element', 'Ice'],
                ['Growth', 'Joker', 'Metastasis', 'Element', 'Shield'],
                ['Growth', 'Joker', 'Metastasis', 'Mimic', 'Ice'],
                ['Growth', 'Joker', 'Metastasis', 'Mimic', 'Crack'],
            ],
            guide: `<p>For the early game, you want to keep spawning until you have a full board. Use Jokers on Growth if it is in the outer edge of the board. If not, then use them on Metastasis.</p><p>When you're about to merge, always merge towards the path where the mobs move. You want to do this because if you merge inwards, it has a chance to be an Element that is useless because it's orbs can't hit anything.</p><p>You don't have to merge all Metastasis on waves 1-5 because you can carry your DPS partner when they can't get enough counters in time. Merge Metastasis every time you beat a boss wave ( 11, 21, 31, 41) to get the most SP out of it. You may merge as much as you like after wave 41 because the sp gained from Metastasis is capped. Merge Metastasis every non-boss wave after wave 50.</p><p>Upgrade Element whenever you like. Do not upgrade Ice until you max Element.</p><p>During the late game, you have 2 choices to use Jokers on. If you have a Joker on the edge of your board, use it on a Growth. If it's near the center, use it on Metastasis.</p>`,
        },
    ] as {
        name: string;
        diceList: string[][];
        guide: string;
    }[];

    const [activeDeck, setActiveDeck] = useState('');
    const activeDeckGuide = decks.find(deck => deck.name === activeDeck);

    return (
        <Main title='Meta Decks Guide' className='meta-deck-guide'>
            <p>
                In here you can find the guide to the meta decks. Click the deck
                below to show the detail guide for each decks.
            </p>
            <div className='divisor' />
            <table className='filter'>
                <tbody>
                    {decks.map(deck => (
                        <tr
                            key={deck.name}
                            // eslint-disable-next-line jsx-a11y/tabindex-no-positive
                            tabIndex={1}
                            onClick={(): void => {
                                setActiveDeck(deck.name);
                                const ele = document.querySelector(
                                    'table.filter'
                                ) as HTMLDivElement;
                                window.scrollBy({
                                    top:
                                        ele?.getBoundingClientRect().bottom -
                                        80,
                                    behavior: 'smooth',
                                });
                            }}
                        >
                            <td>{deck.name}</td>
                            <td>
                                {deck.diceList.map(dicelist => (
                                    <div
                                        className='dice-container'
                                        key={`filter-${dicelist.join()}`}
                                    >
                                        {dicelist.map((dice, i) => (
                                            <Dice
                                                key={`filter-${dicelist.join()}-${dice}${i}`}
                                                dice={dice}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {activeDeckGuide ? (
                <>
                    <div className='divisor' />
                    <div className='guide'>
                        <h3>{activeDeckGuide.name}</h3>
                        {activeDeckGuide.diceList.map(dicelist => (
                            <div
                                className='dice-container'
                                key={`guide-${dicelist.join()}`}
                            >
                                {dicelist.map((dice, i) => (
                                    <Dice
                                        key={`guide-${dicelist.join()}-${dice}${i}`}
                                        dice={dice}
                                    />
                                ))}
                            </div>
                        ))}
                        <div
                            dangerouslySetInnerHTML={{
                                __html: sanitize(activeDeckGuide.guide),
                            }}
                        />
                    </div>
                </>
            ) : null}
        </Main>
    );
}
