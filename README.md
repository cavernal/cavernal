     ▄████▄   ▄▄▄    ██▒   █▓▓█████  ██▀███   ███▄    █  ▄▄▄       ██▓    
    ▒██▀ ▀█  ▒████▄ ▓██░   █▒▓█   ▀ ▓██ ▒ ██▒ ██ ▀█   █ ▒████▄    ▓██▒    
    ▒▓█    ▄ ▒██  ▀█▄▓██  █▒░▒███   ▓██ ░▄█ ▒▓██  ▀█ ██▒▒██  ▀█▄  ▒██░    
    ▒▓▓▄ ▄██▒░██▄▄▄▄██▒██ █░░▒▓█  ▄ ▒██▀▀█▄  ▓██▒  ▐▌██▒░██▄▄▄▄██ ▒██░    
    ▒ ▓███▀ ░ ▓█   ▓██▒▒▀█░  ░▒████▒░██▓ ▒██▒▒██░   ▓██░ ▓█   ▓██▒░██████▒
    ░ ░▒ ▒  ░ ▒▒   ▓▒█░░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░░ ▒░   ▒ ▒  ▒▒   ▓▒█░░ ▒░▓  ░
      ░  ▒     ▒   ▒▒ ░░ ░░   ░ ░  ░  ░▒ ░ ▒░░ ░░   ░ ▒░  ▒   ▒▒ ░░ ░ ▒  ░
    ░          ░   ▒     ░░     ░     ░░   ░    ░   ░ ░   ░   ▒     ░ ░   
    ░ ░            ░  ░   ░     ░  ░   ░              ░       ░  ░    ░  ░
    ░                    ░                                                
             
                         Cavernal (www.cavernal.com)
       
          Copyright © 2021 Luis Quesada Torres (www.luisquesada.com)
          Contact via https://www.linkedin.com/in/luisquesadatorres/

# CAVERNAL

Cavernal is a proof-of-concept casual rogue-like videogame.

Cavernal really offers nothing new but is a mix of common (even cliché) features of
both hardcore rogue-like and softcore casual videogames.

Rogue-like:
   - If you die, you start again
   - Luck drives a game run (e.g. obtaining a specific object can make you win)
   - Artifacts show up randomly and are overpowered

Casual:
   - Gameplays are relatively short
   - The gameplay is very simple
   - Optimized for instant gratification (e.g. collecting items)
   
# LICENSE

Cavernal is free to play online, download, play offline, and share as is.

All the assets of the videogame are embedded in this HTML file, so saving the html
file in a computer, phone, or tablet will allow to play offline.

Cavernal can be modified and redistributed as long as it is done with visible
attribution, that is, "Cavernal" and "Luis Quesada Torres" are visible at all times,
and there is a link to "https://github.com/cavernal".

The source code can be found at https://github.com/cavernal.

The images I use are from REXARD, they do awesome stuff:
   - https://assetstore.unity.com/publishers/13229

Note that I own the license to use the images in the videogame, but I can only use
them in the final product, so I am not able to share the images together with the
source code. I share completely severed copies of the images as a reference instead
:)) Note that you aren't allowed to try and extract the images used in the videogame
from the final CSS file.

The font I use is Deja Vu Sans Mono:
   - https://dejavu-fonts.github.io/

The logo and favicon is from generated with Text to ASCII Art Generator:
   - https://patorjk.com/software/taag/

# DISCLAIMER

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

# HOW TO BUILD

./favicon.sh converts the favicon at favicon.ico into favicon.insert as base64, to be
embedded into the html. It has a dependency on the base64 standard GNU/Linux tool.

./font.sh converts the font into font.css as base64, to be embedded into the html. It
has a dependency on the base64 standard GNU/Linux tool.

./imgs.sh converts all images at imgs/ into imgs.css as base64, to be embedded into
the html. It does some extra magic such as parsing the directory or file names to take
parameters that define the size, rotation, and tint of the final image. It calls
./singleimg.sh which has a dependency on ImageMagick's convert tool, and the standard
GNU/Linux base64 and sed tools.

./generateplaceholderimgs.sh generates placeholder images from the actual images, so
as not to share the actual images. It has a dependency on ImageMagick's convert tool.

./make.sh runs typescript to generate a single game.js javascript file, and embeds all
files (index.template, style.css, imgs.css, font.css, and README.md) into the final
html file at docs/index.html. It has a dependency on on typescript tsc tool and the
standard GNU/Linux sed tool.

./makeall.sh runs all the aforementioned scripts in sequence.

./clean.sh removes the tmp and docs folders.

# ABOUT THE DESIGN

## It is a proof-of-concept

Cavernal is a proof-of-concept, not a commercial product. I completely implemented it
in about two months worth of spare time or vacations, so about 80 hours of work. I
used no framework nor engine and many things are terribly hacky.

I could have done many things better, but that would have meant I would have never 
finished the videogame. For a couple of specific examples:

   - The interface is not the best, it is not responsive design (i.e. it doesn't adapt
   to lower resolutions or a phone screen) and it is probably a pain to use from a
   phone. It is functional enough though and I've made sure that it works on a phone
   (probably landscape orientation works better) or a tablet.
   - The imgs.sh script is super hacky. It works, that's it.
   - I didn't do object-oriented programming because I am prone to early optimization
   and too much early refactoring.
   - I didn't write a lot of tests.

## Programmed in TypeScript

I programmed Cavernal in TypeScript. I never really used JavaScript/TypeScript before
but they will now be my language of choice for prototyping, especially if user
interfaces are involved because HTML/CSS are super straightforward to use.

## Bundled in a file with embedded fonts and images 

I like my software to be bundled in a single file. It "feels" better and often
prevents some common issues, such as:

   - Browser caches often need to be worked around to avoid issues with images,
   JavaScript, or CSS when there are changes.
   - No need to pre-load images, no artifacts due to preloading.

## Milestones

I first wrote Cavernal as a text-based videogame, all the features were there but
there were no images. You would play with the keyboard or by clicking buttons that
looked like [THIS]. This enabled me to implement all logic in a couple of weeks before
even having to deal with the interface, which would have put me at risk of abandoning
the project.

After that, I added some basic interface.

Then I added the first two depth levels worth of content.

Then I polished the interface, playability, and added a couple of missing features
such as exporting data.

Then I added the last three depth levels worth of content.

Finally, I extensively tested the videogame and polished it.

## Can be played with the keyboard

You can play Cavernal with the keyboard. All the possible actions can be executed by
tapping keys:
   - Opening doors ([1], [2], [3], ...)
   - Waiting, to heal and consume food and drink as needed ([W])
   - Navigating the inventory and using items ([UP], [DOWN], [LEFT], [RIGHT], [ENTER])
   - Buying attributes ([X], [C], [V], [B], [N], [M])
   - Navigating the menu / restarting the videogame ([ENTER])
   - Exporting or importing gamedata for visualiztaion purposes ([Q], [E])

You can also play just by using the mouse or a touch screen.

## Exporting and importing gamedata

You can export gamedata when you get to a final state (either the player died or
transcended). This gamedata looks like a base64 string of text and anyone can import
it from the menu to see the final state of your game (level, attributes, inventory,
etc.).

I added this feature so players feel like they get to keep a part of the videogame
after playing.

## Cheating and debugging

Yes, you can probably cheat. Up to you. The videogame will stop being fun. I sometimes
cheat to make a videogame boring if I got addicted to it and want to stop playing.

Navigate the code and navigate the JavaScript console :) The "d" data structure holds
all key data for a game run. If you modify something, try running update() afterwards.

You can even enable the debug mode with by overriding "isDebugOn" in the JavaScript 
console:

    isDebugOn = function() { return true; }

This will enable the following cheats:

   - [INSERT] - Gets all items and a lot of attribute points
   - [DELETE] - Removes data (refresh the browser tab to start the game from scratch)
   - [SHIFT+DELETE] - Simulate an inconsistent state error
   - [HOME] - Resurrect (if dead)
   - [SHIFT+HOME] - Regenerates doors for the current depth and step
   - [END] - Jumps to a specific depth and step (triggers a prompt)
   - [SHIFT+END] - Gets all achievements
   - [PAGE UP] - Cycles the player attributes between being low, standard, or high
   - [SHIFT+PAGE UP] - Runs the AI until reaching a specific depth and step (triggers a prompt)
   - [PAGE DOWN] - Generates doors with all mobs, enables to attack them
   - [SHIFT]+[PAGE DOWN] - Simulates several game runs (check the JavaScript console!). More on
   this in the next section
   - [CTRL]+[SHIFT]+[1]-[0] - Shifts to different scenarios

These cheats or fiddling with functions in the console could break the game and you may
have to restart it. Worst case scenario, run removeData() and refresh the browser.

## Balanced using a pseudo-artificial-intelligence

It is hard to balance a videogame so that it is challenging enough that it is fun, but
easy enough that players do not get frustrated. I could have spent months of
betatesting but I went for writing a very simple "artificial intelligence" based on
heuristics that can play a full game run in about one second. It is not perfect, but I
tweaked the game so that it can barely win one out of many runs.

Basically, it uses or equips items as it makes sense, it increases attributes (mostly
melee) and it tries to attack enemies that are unlikely to kill the player. Ok, it is
not really an artificial intelligence. It has some clear gaps: it won't use all
artifacts, and the ones it uses, may not use them at the right time. It may also waste
some healing potions or scrolls.

Enable debug mode as above and run it with [SHIFT]+[PAGE DOWN]. You will be prompted
for the number of runs to simulate and it will output a summary like this in the
JavaScript console:

    Transcended depth 3 step 0 level 23 tier -1 food 10035 drink 10021
    Died (lack of drink) depth 2 step 75 level 21 tier 90 food 22 drink 9
    Transcended depth 3 step 0 level 23 tier 0 food 14 drink 98
    Transcended depth 3 step 0 level 23 tier 0 food 19 drink 56
    Died (too hard - bad equipment/bad room) depth 2 step 99 level 23 tier 20 food 23 drink 75
    Transcended depth 3 step 0 level 23 tier 0 food 147 drink 88
    Died (too hard - bad equipment/bad room) depth 2 step 99 level 23 tier 0 food 20 drink 20
    Transcended depth 3 step 0 level 24 tier 0 food 139 drink 28
    Died (too hard - bad equipment/bad room) depth 2 step 99 level 23 tier 30 food 11 drink 71
    Transcended depth 3 step 0 level 23 tier 0 food 16 drink 85
    Played 10 times, won 6 and died 4

Note that this example output was from the videogame when it had two depth levels
implemented.

Also note that it reports the potential cause of death among:

   - lack of drink
   - lack of food
   - too hard - bad equipment/bad room
   - unlucky - high tier, still died

The game is designed so that you cannot often die from lack of drink or food in the
early depth levels, but may do in later depth levels. "too hard - bad equipment/bad
room" is OK but mostly for bosses, so if you weren't lucky getting items you're
doomed. I used "unlucky - high tier, still died" to measure how well the artificial
intelligence was tweaked.

## How combats work and how the game estimates how hard a mob is

I wrote proper combat logic that takes attack, armor, defense, and speed into account.

Every turn, player and mob roll dice up to their speed, whoever wins is the one who
attacks.

The attacker rolls dice up to their attack, the defender rolls dice up to their
defense. If attack is greater or equal than defense, the attack succeds, if not it is
dodged.

If an attack succeeds, the defender rolls dice up to their armor. The final damage is
attack-armor if positive.

When I started test-playing early versions of the game, I found out that it was quite
frustrating to just attack a mob and die. I wrote some heuristic or approximation that
would use different images for the frames of the doors leading to the mobs depending
on the difficulty.

The heuristic was so off that it was still frustrating to die to a mob that was marked
as easy. So I wrote a simulator that combats about 100 times per mob type in the doors
every time the player heals, increases an attribute, or equips a new item. The amount
of victories determines the approximate probability of winning against that mob. Now
that you know this, you may notice how reloading the videogame in a browser tab makes
the colors of the door frames change slightly.

## How is the world defined

The world consists of a series of rooms that may be chosen for a certain depth and
range of steps, with a specific probability per room.

Each room has a min-max number of doors, an unique key marker, and a set of doors
(e.g. items, mobs, next depth, or transcend) with a specific chance to show up,
an unique boolean marker, and a must-show marker that forces the door to appear in the
room.

Mobs are defined separately and contain attributes and loot.

Loot is defined by a set of rules that indicate the probability of the rule to
materialize and the items it would yield when materializing. Loot selectors allow
the definition of more complex rules such as "50% of probability of dropping an item
among this, that, and that one).

Items and mobs contain ids for images.

## How is the game tested

Apart from using the aforementioned pseudo-artificial-intelligence to play many runs
of the game, which was also helpful to identify bugs, the game just contains a couple
of tests:

   - All items defined must be used somewhere.
   - All mobs defined must be used somewhere.
   - There should be no references to undefined items.
   - There should be no references to undefined mobs.

I did manual inspection of all items and mobs, including the information in the info
pane, before publication of the game.

## Data storage

Game play data is stored in the browser local storage. At the end of a game play, data
(level, attributes, objects, depth, step) can be exported to be shared and visualized
later.

Apart from that, only achievements remain after a game play.

## Roadmap

To be clear, I do not expect to continue working on this videogame.

That said, a potential version 2.0 could contain:

   - Selector items: upon activation, selectors enable the player to choose what the
   selector drops (e.g. choose a potion from a set of attribute potions).
   - Recipe items, e.g. recipe books. Once used, consume a specific set of items or
   reagents to produce another item. Alternatively, a single recipe item may contain a
   selection of recipes.
   - Additional classes, e.g. wizard or knight, that have different mechanics, e.g.
   different starting attributes or starting items. Unique starting items (for example 
   recipe items) would enable classes to have vastly different game mechanics,
   - Additional worlds, maybe tied to the new classes.
   - A skill tree that is permanent across game runs, that you use the achievements to
   buy skills from. Some of the skills would be unblocking classes and/or worlds. Some
   other skills could provide starter items to choose from, or e.g. increased
   attributes for a class.

# FEEDBACK?

Feedback is welcome! Contact me via https://www.linkedin.com/in/luisquesadatorres/
