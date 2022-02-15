// why don't we like for loops in Javascript
// overly verbose
// error prone
// not functional

const smartPhones = [
    { brand: "Samsung", price: 4500 },
    { brand: "iPhone", price: 7200 },
    { brand: "Sony Experia", price: 3800 }
];

// task create a phone sale by subtracting 500 from each phone
const discountedPhones = smartPhones.map(smartPhone => {
    smartPhone.price -= 500;
    return smartPhone;
});

console.log(discountedPhones);
console.log(smartPhones);

// task I am a poor boy... remove all phones that cost more than 4000
const phonesICanAfford = smartPhones.filter(smartPhone => smartPhone.price <= 4000);

console.log(phonesICanAfford);