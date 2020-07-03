import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { converter } from './currency-converter.js';

function currencyConverter(amount, country) {
  const jsonifiedResponse = await callApi();
  if (jsonifiedResponse === false) {
    $("#output").text("I'm sorry, something went wrong wtih your request");
  } else {
    let convertTo = jsonifiedResponse.conversion_rates[amount];
    let exchange = (amount * convertTo);
    $("#output").html(exchange + converTo);
  }
}
document.readyState(function() {
  $("#calculate").click(function(event) {
    event.preventDefault()
    let amount = parseInt($("#amount").val());
    let country = $("#country").val();
    $("#amount").val("");
    $("#country").val("");
    currencyConverter(amount, country);
  })
})