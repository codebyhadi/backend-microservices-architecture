class StripeProvider {
  async charge(amount) {
    return { status: "success", amount };
  }
}

module.exports = new StripeProvider();