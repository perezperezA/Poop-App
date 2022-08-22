import document from 'document';
import { getLocationName } from '../commands';
import { getStateItem, setStateCallback, removeStateCallback, setStateItem, } from '../state';
import { HeartRateSensor } from "heart-rate";
import { me as appbit } from "appbit";

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
  if (HeartRateSensor && appbit.permissions.granted("access_heart_rate")) {
    const hrm = new HeartRateSensor({ frequency: 1 });
    hrm.addEventListener("reading", () => {
      console.log('Current heart rate: ${hrm.heartRate}');
    });
    hrm.start();
  }


var heartRate = document.getElementById('heartRate');
  heartRate.text = ('hello world');
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
