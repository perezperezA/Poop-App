import document from 'document';
import { getLocationName } from '../commands';
import { getStateItem, setStateCallback, removeStateCallback, setStateItem, } from '../state';

let $button = null;
let $locationName = null;

function doSomething() {
  console.log('hallo detail');
}

function draw() {
  $locationName.text = getStateItem('location');
}

export function destroy() {
  console.log('destroy detail page');
  $locationName = null;
  $button = null;
  removeStateCallback('detail');
}

export function init() {
  console.log('init detail page');
  $locationName = document.getElementById('location');



var poopbutton = document.getElementById('poopButton');
  const amountOfPoops = getStateItem('amountOfPoops');
document.getElementById('poopstaken').text = getStateItem('amountOfPoops');
  poopbutton.onclick = () => {
    destroy();

setStateItem('amountOfPoops', amountOfPoops + 1);

    document.history.back();
  };


  console.log(amountOfPoops);

  doSomething();
  getLocationName();
  setStateCallback('detail', draw);
  // draw();
}
