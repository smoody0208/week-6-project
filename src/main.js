import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { converter } from './currency-converter.js';

async function currencyConverter(amount, country, country2) {
  const jsonifiedResponse = await converter(amount, country, country2);
  if (jsonifiedResponse === false) {
    $("#output").text("I'm sorry, something went wrong wtih your request");
  } else if (!jsonifiedResponse.conversion_rates[country2]) {
    $(".showOutput").html(`<p>Change currency conversion</p>${jsonifiedResponse.error}`);
  } else {
    let convertTo = jsonifiedResponse.conversion_result;
    let exchange = (amount * convertTo);
    $("#output").html(exchange + country2);
  }
}
$(document).ready(function() {
  $("#calculate").click(function(event) {
    event.preventDefault()
    let amount = parseInt($("#amount").val());
    let country = $("#country").val();
    let country2 = $("#country2").val();
    $("#amount").val("");
    $("#country").val("");
    $()
    currencyConverter(amount, country, country2);
  })
})