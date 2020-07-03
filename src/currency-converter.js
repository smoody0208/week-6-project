export class Converter{
  async callApi() {
    const response = await fetch (`https://v6.exchangerate-api.com/v6/%{process.env.API_KEY}/latest/USD`);
    let jsonifiedResponse;
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false
    }
  }
}

