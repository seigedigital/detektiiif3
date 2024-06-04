![](src/themes/detektiiif3/images/logo_stickerstyle.png)

# detektIIIF3

detektIIIF is a browser extension for Chrome and Firefox that detects IIIF resources in websites. It is possible to collect IIIF manifests in a basket and send them to any compatible IIIF application. detektIIIF is extensively configurable and can be customized with individual themes. The browser extension also checks for the presence of various interoperability features (CORS, SSL, etc.) and displays warnings if necessary.

This code is considered to be in beta state. __Important steps: splitting code into components and reducing redundancy and incompleteness of quickly written code.__

This is the current version of detektIIIF3
older versions: 
* Version 1: https://github.com/leanderseige/detektiiif
* Version 2: https://github.com/seigedigital/detektiiif2

If you don't want to work with the source code you may install detektIIIF3 from the Chrome Web Store: https://chromewebstore.google.com/detail/detektiiif3/aaodcobgcadinjipaocibamdfcffpcpp 

## Source Code

used boilerplate: https://github.com/lxieyang/chrome-extension-boilerplate-react

### Install basics:
* clone this repo ```git clone https://github.com/seigedigital/detektIIIF3```
* ```cd detektIIIF3```
* ```npm install```

### Configure repository

* Configure theme:
* ```cd src/themes```
* ```./settheme.sh <themefolder> <manifestversion>```
* e.g. ```./settheme.sh detektIIIF3 v2```

### Run development server (version MUST match manifest version of the theme)

* ```npm run startv3``` (continuous development mode + hot reload, manifest version 3)

OR

* ```npm run startv2``` (continuous development mode + hot reload, manifest version 2)

__Load in Firefox (most likely v2):__
* open `about:debugging`
* click "This Firefox"
* click "Load temporary Add-on" and select your `build` folder (or the manifest.json file in it)

__Load in Chrome (likely v3):__
* open `chrome://extensions`
* turn the switch `Developer mode` on
* click Button `Load unpacked`
* select your `build` folder


### Build for production (version MUST match manifest version of the theme)

* ```npm run buildv3``` (one time build for production, manifest version 3)

OR

* ```npm run buildv2``` (one time build for production, manifest version 2)


## Create your own theme

Duplicate one of the folders in src/themes for your own theme
```
cp -r detektiiif3 myinstitution
```
Modify the files in the new folder as you wish and continue as described in section "Configure repository"

Don't forget to keep v2 and v3 manifest files both up to date, e.g. the version number.

## Version numbering

Beware! We distinguish the version number of detektIIIF3 from the version number of the theme:

Set the version of detektIIIF3 number in the ```package.json``` file

Set the version number of the theme in both ```manifest-v*.json``` files

## Packaging for the Chrome Web Store

* switch to manifest version 3 and execute the shellscript ```./pack4cws.sh```

## Packaging for the Mozilla Firefox AMO

* switch to manifest version 2 and execute the shellscript ```./pack4amo.sh```
