import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { toFromConversition } from './currency-converter.js';

async function currencyConverter2(amount, country, country2) {
  const jsonifiedResponse = await toFromConversition();
  if (jsonifiedResponse === false) {
    $("#output").text("I'm sorry, something went wrong wtih your request");
  } else if (!jsonifiedResponse.conversion_rates) {
    $(".showOutput").html(`<p>Change currency conversion</p>${jsonifiedResponse.error}`);
  } else {
    let convertTo = jsonifiedResponse.conversion_rates[country] / jsonifiedResponse.conversion_rates[country2];
    let exchange = amount * convertTo;
    console.log(jsonifiedResponse.conversion_rates[country2]);
    $("#output").html(`${exchange}`);
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
    $("#country2").val("")
    currencyConverter2(amount, country, country2);
  })
})