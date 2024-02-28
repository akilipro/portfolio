import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_QHRzrGrC_KRxSS5mVm1oM3VVYywwLmuYb');
//const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'akili.digit@gmail.com',
      subject: subject,
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
      react: (
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.' });
  }
}
