import './app4.css';
import $ from 'jquery';

const $circle = $("#app4 .circle");

$circle.on('click', () => {
  $circle.addClass("active")
});
