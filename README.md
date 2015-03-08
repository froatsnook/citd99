What?
=====
I wasn't the [only](http://steamcommunity.com/app/262960/discussions/0/618453594762973548/?insideModal=1) one on the internet who encountered the 99% bug at the end of the platformer video game [Castle in the Darkness](http://castleinthedarkness.mattkap.net/).  You do everything in the game, but for some reason the progress is stuck at 99%.

This meteor app, hosted at {https://citd99.meteor.com}, patches bugged files.

How?
====
In my tests, changing byte `594` from `99` to `100` fixes the problem, including unlocking the Steam achievement.

Bugs
====
This will probably break when the next version of Castle in the Darkness is released.

Installation
============
If you want to run it locally, just clone and run meteor.

```bash
git clone https://github.com/froatsnook/citd99.git
cd citd99
meteor
```

License
=======
MIT

