export async function converter(amount, country, country2) {
    try {
      const response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${country2}/${country}/${amount}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }

