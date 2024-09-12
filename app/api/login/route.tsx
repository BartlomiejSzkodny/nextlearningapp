// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { signIn } from 'next-auth/react';

// Named export for the POST method
export async function POST(req: Request) {
  try {
    // Extract email and password from the request body
    const { email, password } = await req.json();

    // Call the signIn function with credentials, setting redirect to false to prevent errors
    const result = await signIn('credentials', {
      redirect: false, // Ensures no redirect happens on the server
      email,
      password,
    });
    console.log(result);

    // Check for errors in the result
    if (result?.error) {
      return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
    }

    // Respond with success if sign-in is successful
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Log and handle any unexpected errors
    console.error("Unhandled error:", error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
