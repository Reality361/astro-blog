---
layout: '@/templates/BasePost.astro'
title: 'How to install Google Chrome on Ubuntu 24.04?'
description: For Ubuntu 24.04
pubDate: 2024-07-12T00:10:00Z
imgSrc: '/assets/images/Chrome-Logo-700x394.png'
imgAlt: 'Image post'
---

# How to install Google Chrome on Ubuntu 24.04?

This is a guide for installing Google Chrome painlessly with nearly all about graphical interface.

**1. Download .deb file of Chrome**

Go to https://www.google.com/chrome/

Download the deb. package of Chrome.

**2. Use "GDebi Package Installer" to install it using graphical interface**

Full guide of installing .deb package at [this page](../ubuntuInstallDeb/).

**(1) Update your "App Center"**

This is the only line of command of this guide.

Press "Ctrl+Alt+T" to open your terminal.
Type down the command below and press "Enter" to excecute, line by line:
```console
killall snap-store
sudo snap refresh snap-store
```
"killall snap-store" is to kill any running Snap Store process.
"sudo snap refresh snap-store" is to Force a refresh (update) of the Snap Store.
I think many have to use command to update the store because you cannot update it using itself.

**(2) Find "GDebi Package Installer" in your App Center**

Click the app center on your dock to open/run it.

Click the search bar at the top, type "**GDebi Package Installer**" and press enter to search.

**Choose the Filter by "Debian packages"**.

And now you can see it clearly, click "install" to install it.

**3. Use it to install the .deb files**

After installed GDebi Package Installer, you can right-click the .deb file you downloaded before and choose "Open with" option and open it with GDebi Package Installer. Click "Install Package" to install the .deb file!

**Done, enjoy it!**
