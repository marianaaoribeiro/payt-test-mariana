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
    fillAddress: state => {
        let address = state.addressData
        if (address.cep && address.num) {
             return true
        }
        return false
     },
    addPaymentInfo: state => {
       let method = state.paymentMethod
       let payment = state.paymentData

       if (method == 1 && payment.num && payment.name && payment.cpfCnpj && payment.mounth && payment.year && payment.phone && payment.installments) {
            return true
        } else if(method == 2 && payment.cpfCnpj || method == 3 && payment.cpfCnpj ){
            return true
        }
        return false
    },
    addressData: (state) => state.addressData,
}
export default getters