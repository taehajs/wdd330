export default class ExternalServices {
  constructor() {
    this.baseURL = "https://wdd330-backend.onrender.com";
  }

  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(`${this.baseURL}/checkout`, options);
    return response.json();
  }
}
