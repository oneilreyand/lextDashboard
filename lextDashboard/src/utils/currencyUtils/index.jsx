const currencyUtils = {
  convertToK: function(number) {
    if (number < 1000) {
      return number.toString();
    }
    const thousands = Math.floor(number / 1000);
    return thousands + 'K';
  },
  formatToRupiah: function(number) {
    // Format the number to IDR without fractional digits
    const formatted = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);

    // Extract the main number part from the formatted string
    const mainNumber = formatted.match(/\d+(\.\d+)?/)[0];
    
    // Convert the main number part to K format
    const mainNumberInK = this.convertToK(parseInt(mainNumber.replace(/\./g, '')));

    // Extract the currency symbol
    const currencySymbol = formatted.split(mainNumber)[0].trim();

    // Concatenate the currency symbol and K formatted number
    return `${currencySymbol} ${mainNumberInK}`;
  }
};

export default currencyUtils;