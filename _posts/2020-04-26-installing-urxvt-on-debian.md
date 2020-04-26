---
layout: post
title: Installing URxvt on Debian
date: 2020-04-26 11:17 +0100
categories:
- guides
- tech
---
I've been a long time URxvt user, though I have slacked in my latest install of Debian and inadvertently have been using `gnome-terminal` for a lot longer than expected. There is absolutely nothing wrong with that terminal emulator but I value having lean and quick programs over more bulky alternatives. Gnome-terminal has recently been crashing for me when running with `nvidia-xrun` (a topic for another day) and so I decided to make the switch back to `rxvt-unicode` again!

I am using a `Lenovo y50-70` laptop with `Debian 10 (bullseye)` installed.

### Installing

Installing URxvt on Debian is as easy as it gets:  
```
apt update
apt install urxvt
```
Once that is done, you should be able to run `urxvt` from your current terminal emulator or dyanmic menu.

If you want to quickly change over to using URxvt as your default terminal emulator just run:  
```
update-alternatives --config x-terminal-emulator
```
This will prompt you with a choice of terminals, one of which should be URxvt...

### Configuration

This is where the bread and butter of URxvt comes to shine, customizability. In it's default setting URxvt looks... okay.

All of the below edits will be taking place in `~/.Xresources`.

The _minimal_ set up you really need for URxvt to become a bit more coherent with your current system is:  
```
URxvt.scrollstyle: plain
URxvt.thickness: 8
URxvt.externalBorder: 12
URxvt.cursorblink: true
```
These settings, in my opinion, make URxvt usable in _most_ cases. **But my font looks ugly!** The default font URxvt uses (7x14) can be either wonderful or an eyesore depending on the kind of person you are. The command `fc-match "font name"` can be used to check if the font you want to use will be found by `xft`. Once you have a font you like and the corresponding xft string you should simply prepend this to your config:
```
URxvt.font: xft:Noto Sans:size=12
```
Replacing `Noto Sans` and `size=12` to whatever you found suits you best!

### Tweaks

#### Copy and paste!  
A lot of people go out of their way to install extensions that faciliate the copying of the clipboard selection to URxvt, I will reccomend a different route. The X system uses multiple clipboards, one of them is the "Primary Selection" which is _usually_ automatically filled as soon as you select any text (yes!) and can be pasted using the `middle mouse button` or `shift+insert`...  

If this doesn't strike your fancy there are _countless_ guides on setting up `ctrl+c/ctrl+v` functionality.


#### Disabling the `ctrl+shift` symbol menu:
```
URxvt.iso14755: false
URxvt.iso14755_52: false
```

#### Adding URL handling:
```
URxvt.urlLauncher: firefox
URxvt.underlineURLs: true
URxvt.urlButton: 1
```