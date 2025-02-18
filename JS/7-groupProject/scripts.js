const user = {
    id: "USER-123456",
    name: {
        first: "Alice",
        last: "Liddell"
    },
    email: "alice@example.com",
    address: {
        shipping: {
            street: "123 Rabbit Hole",
            city: "Wonderland",
            state: "Fantasy",
            postalCode: "12345",
            country: "WL"
        },
        billing: {
            street: "456 Mad Hatter Lane",
            city: "Tea Party",
            state: "Fantasy",
            postalCode: "67890",
            country: "WL"
        }
    },
    payment: {
        total: "100.00",
        currency: "USD",
        details: {
            subtotal: "75.00",
            tax: "15.00",
            shipping: "10.00"
        },
        transactions: [
            {
                id: "TXN-123", amount: "50.00", description: "Magic Potion"
            },
            { id: "TXN-456", amount: "50.00", description: "Enchanted Sword" }
        ]
    }
};

const { 
    name: {first, last},
    email,
    address:{shipping:{street: shippingStreet, city: shippingCity, state: ShippingState, postalCode: shippingPostalCode, country:shippingCountry}, 
    billing: {street: billingStreet, city: billingCity, state: billingState, postalCode: billingPostalCode, country: billingCountry}},
    payment: {total, currency, details: {subtotal, tax, shipping}},
    } = user 

// personal info
const personalInfo = document.getElementById('personal-info')
let names = document.createElement('h4')
let userEmail = document.createElement('p')
userEmail.textContent = `${email}`
names.textContent = `${first} ${last}`
personalInfo.appendChild(names)
personalInfo.appendChild(userEmail)

// shipping address
const shippingAddress = document.getElementById('shipping-address')
shippingAddress.innerHTML = `<h2>Shipping Address</h2>
                            <p><b>Street:</b> ${shippingStreet}</p>
                            <p><b>City:</b> ${shippingCity}</p>
                            <p><b>State:</b> ${ShippingState}</p>
                            <p><b>Postal Code:</b> ${shippingPostalCode}</p>
                            <p><b>Country:</b> ${shippingCountry}</p>
                            `

const billingAddress = document.getElementById('billing-address')
billingAddress.innerHTML = `
                            <div class="billing">
                                <h2>Billing Address</h2>
                                <p><b>Street:</b> ${billingStreet}</p>
                                <p><b>City:</b> ${billingCity}</p>
                                <p><b>State:</b> ${billingState}</p>
                                <p><b>Postal Code:</b> ${billingPostalCode}</p>
                                <p><b>Country:</b> ${billingCountry}</p>
                            </div>
                            `

const transactions = user.payment.transactions
let container = document.getElementById('transactions')
let h4 = document.createElement('h2')
h4.textContent = `Transactions`
container.appendChild(h4)
transactions.map(item => {
  let li =  document.createElement('li')
  li.textContent = `item Id: ${item.id}, Amount: ${item.amount}, description: ${item.description}`
  container.appendChild(li) 
})




console.log(first, last, state, email, city)