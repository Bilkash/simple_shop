export default async function sendEmailAboutOrder(
    name: string,
    number: string,
    email: string
) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    const dataForEmail = {
        subject: "New order",
        to: email,
        text: `Customer ${name} placed a new order, call back at ${number}.`,
    };

    const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(dataForEmail),
        redirect: "follow",
    };

    try {
        const response = await fetch("http://localhost:3000/api/send-email", requestOptions);

        if (!response.ok) {
            throw new Error(`Failed to send email: ${response.statusText}`);
        }

        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}
