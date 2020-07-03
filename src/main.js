import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Converter } from './currency-converter.js';

document.readyState(function() {
  $("#calculate").click(function(event) {
    event.preventDefault()
    let amount = $("#amount").val();
    let currencyType = $("#country").val();
    $("#amount").val("");
    $("#country").val("");
  })
})