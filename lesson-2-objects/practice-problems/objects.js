const invoices = {
  unpaid: [],
  paid: [],
  add: function (invoice) {
    const { clientName, amountOwed } = invoice
    this.unpaid.push({ clientName, amountOwed })
  },
  totalDue: function () {
    return this.unpaid.reduce((total, invoice) => {
      return (total += invoice.amountOwed)
    }, 0)
  },
  totalPaid: function() {
    return this.paid.reduce((total, invoice) => {
      return (total += invoice.amountOwed)
    }, 0)
  },
  payInvoice: function(clientName) {
    const newUnpaid = []
    this.unpaid.forEach(invoice => {
      if (invoice.clientName === clientName) {
        this.paid.push(invoice)
      } else {
        newUnpaid.push(invoice)
      }
    })
    this.unpaid = newUnpaid
  }
}

invoices.add({ clientName: 'Due North Development', amountOwed: 250 })
invoices.add({ clientName: 'Moonbeam Interactive', amountOwed: 187.5 })
invoices.add({ clientName: 'Slough Digital', amountOwed: 300 })
invoices.payInvoice('Due North Development')
invoices.payInvoice('Slough Digital')
console.log(invoices.totalDue())
console.log(invoices.totalPaid())
