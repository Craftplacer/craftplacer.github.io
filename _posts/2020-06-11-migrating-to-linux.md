---
layout: article
title: Migrating to GNU/Linux
date: 2020-06-11
tags: linux
cover: /images/debian.jpg
---

Recently, I migrated to GNU/Linux, to be more exact, Debian.
Here's why and how it went.

Normally, I don't do this, I usually dual-boot. But since Windows 10 seemed to have "corrupted" my network controller (which carried on Linux too, maybe hardware fault or something). I decided to completely drop Windows.

I got myself a self-burned Debian CD and installed it on my SSD.

## Comparing to Ubuntu
Ubuntu is ok, but preinstalled packages make it weirder. If you plan to use GNOME, enjoy your preinstalled custom instance of GNOME, with changed everything.

Apparently, most of the GNOME shell extensions are broken on Ubuntu, so there's that.

Configuring package sources is something I had to come around a lot on Debian, to be honest, it's more worth it to configure it yourself.

## Using XFCE and other desktop environments
The full desktop Debian came bundled with XFCE. XFCE isn't eye candy (unless you go your way to create your very own custom theme).

You can't customize padding, styling or anything in that regard. Sure, you can change the items on each panel, their color, and their sizing. But the preinstalled items don't give you as much options as you'd hope. I've encountered some things I would've like changed but couldn't.

Since I was more used to GNOME, I installed the minimal install (no GNOME accessories, but some I installed myself later), and went on my way.

![Screenshot of my GNOME desktop](/assets/images/gnome-desktop.webp)

*here's how it looks, by the way.*

## Getting data across

Already for a year, I always stored all my data on another disk. I changed my user folder**s** locations to the new disk. On Linux it was... eh...

There are multiple approaches to this being:

- Change location of your user home
- Symlink your user home
- Symlink your folders individually

I first tried to change my user home location, I later simply symlinked my user home to my disk.

Also, a note to myself (and eventually you too), **GNOME will not start if you have a broken user home**.

## Playing games

Playing games on Linux is interesting. I mainly play osu!.
And I hear you say: There's osu!lazer! Yeah, but it's incomplete at the time of writing this, you can't interact (or compete) with the community you normally would with osu!stable.

Installing osu! manually was pain. [Lutris](https://lutris.net/), had a straight forward installer. Pressed install, and it works.

With osu! being a rhythm game, I noticed latency.

After fiddling around the internetz, I added following tweaks to PulseAudio's configs:

#### `/etc/pulse/default.pa`
Add `tsched=0` after the line `load-module module-udev-detect`.

#### `/etc/pulse/daemon.conf`
Uncomment/add
```ini
high-priority = yes

realtime-scheduling = yes
realtime-priority = 5
```

Restart PulseAudio using `pulseaudio -k`.

Most of Valve's (source engine) games are already ported to Linux, so I won't have to worry. I can see what Proton/Wine/Lutris has to offer when I want to play other games any time soon.

## Dependency hell

In short, you want to install software, but can't, because either other software is too new or too old. This never happened in Windows. You may just want to always include the newest package sources to avoid this.



I don't know yet what I'll do about my Windows related projects. Maybe put them idling around, or continue working on them under a VM. Who knows.

I might update the post with more things I encounter.

*[cover image source](http://www.jkhp.it/OS-tan/credits.htm)*
