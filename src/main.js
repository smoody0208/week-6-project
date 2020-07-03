import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { converter } from './currency-converter.js';

async function currencyConverter(amount, country) {
  const jsonifiedResponse = await converter();
  if (jsonifiedResponse === false) {
    $("#output").text("I'm sorry, something went wrong wtih your request");
  } else if (!jsonifiedResponse.conversion_rates[country]) {
    $(".showOutput").html(`<p>Change currency conversion</p>${jsonifiedResponse.error}`);
  } else {
    let convertTo = jsonifiedResponse.conversion_rates[country];
    let exchange = (amount * convertTo);
    $("#output").html(exchange + country);
  }
}
$(document).ready(function() {
  $("#calculate").click(function(event) {
    event.preventDefault()
    let amount = parseInt($("#amount").val());
    let country = $("#country").val();
    $("#amount").val("");
    $("#country").val("");
    $
    currencyConverter(amount, country);
  })
})