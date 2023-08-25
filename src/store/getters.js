const getters = {
    initiateCheckout: state => {
        let addressVazio = Object.keys(state.addressData).length === 0;
        let paymentVazio = Object.keys(state.paymentData).length === 0;
        return addressVazio && paymentVazio
      },
    addToCart: state => {
       let address = state.addressData
       if (address.name && address.phone && !address.email || address.name && address.email && !address.phone) {
            return true
       }
       return false
    },
    addressData: (state) => state.addressData,
}
export default getters