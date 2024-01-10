This a Simple Shop site, build on Next.js 14 and TypeScript

## Getting Started

Firstly, you must install npm dependencies

```bash
npm install
```

After installing all dependencies you must creat a `.env.local` file in the project root.

After this you may follow next steps:
1. Enable 2-step verification in your Gmail account [Link](https://support.google.com/accounts/answer/185839?hl=en&sjid=6632639683164807671-AP)
2. Add an app password [Link](https://myaccount.google.com/apppasswords)
3. Save password from previous step
4. Add email and password to `.env.local` file, like this:

```dotenv
NEXT_PUBLIC_GMAIL_USERNAME=johndoe@email.com # The email address where you generated a new app password
NEXT_PUBLIC_GMAIL_PASSWORD=qwerqwerqwerqwer # The newly generated app password
```
When `.env.local` is ready start development server

```
npm run dev
```

Visit http://localhost:3000/ for check out my features.
