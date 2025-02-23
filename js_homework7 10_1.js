var arr = [
    { userName: "Test", lastName: "Test", email: "test.test@gmail.com" },
    { userName: "Dmitro", lastName: "Porohov", email: "dmitro.porohov@yahoo.com" },
    { userName: "Andrii", lastName: "", email: "andrii@mail.ru" },
];

var trustedEmails = arr
    .filter(item => /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.(com)$/.test(item.email) && (item.email.includes('gmail.com') || item.email.includes('yahoo.com')))
    .map(item => item.email);

    console.log(trustedEmails);