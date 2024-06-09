import React from 'react';
import { createRoot } from 'react-dom/client';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import Mirador from 'mirador';

const container = document.getElementById('Mirador-Container');
if(container) {
  const root = createRoot(container);
  root.render(<HourglassEmptyIcon />);  
} else {
  console.log("no container")
}

let miradorInstance = false
let allManifests = []


chrome.storage.sync.get(['basket'], (result) => {

  // instantiate Mirador
  let counter = 0
  let catalog = []
  let windows = []
  if(result.basket!==undefined) {
    for(let key in result.basket) {
      allManifests.push(result.basket[key].url)
      catalog.push({manifestId:result.basket[key].url})
      if(counter<4) {
        windows.push({manifestId:result.basket[key].url})
      }
      counter++
    }
  }

  let config = {
    id: 'Mirador-Container',
    workspace: { isWorkspaceAddVisible: true },
    windows: windows,
    catalog: catalog,
    theme: {
      palette: {
        primary: {
          main: '#404040',
        },
      },
    }
  }

  miradorInstance = Mirador.viewer(config);

  // try out how it works
  // setTimeout(() => {
  //   alert("Test2");
  //   const manifestUri = 'https://iiif.manducus.net/manifests/0013/6d341fcb7104311515fe3c18a8888b7e975bfb4a/manifest.json';
  //   var action1 = Mirador.actions.addResource(manifestUri);
  //   miradorInstance.store.dispatch(action1);
  // }, 4000); // Adjust the delay as needed



})

function pushManifest(uri) {
  if(miradorInstance) {
    let action1 = Mirador.actions.addResource(uri);
    miradorInstance.store.dispatch(action1);
  }
}

// Listen for changes in chrome.storage.local // sync!!!
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'sync') {
    if(changes.basket!==undefined) {
      console.log("BASKET CHANGE")
      console.log(changes.basket)
      for(let key in changes.basket.newValue) {
        let url = changes.basket.newValue[key].url
        console.log(url)
        if( ! allManifests.includes(url)) {
          allManifests.push(url);
          pushManifest(url);
          console.log("adding "+url);
        }
      }
    }
  }
});
