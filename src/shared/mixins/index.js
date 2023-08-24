

export const globalFunctions = {
  methods: {

      updatedString(valor) {
        // remove special characters using regular expressions
        return valor.replace(/[^a-zA-Z0-9]/g, '');
      },
  },
}
