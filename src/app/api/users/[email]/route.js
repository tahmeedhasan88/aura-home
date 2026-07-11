import { collections, dbConnect } from '@/app/lib/dbConnect';
import { NextResponse } from 'next/server';

const normalizeEmail = (value) => {
  if (typeof value !== 'string') return '';
  return value.trim().toLowerCase();
};

const buildEmailQuery = (value) => {
  const normalizedEmail = normalizeEmail(value);
  return {
    email: {
      $regex: new RegExp(`^${normalizedEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i'),
    },
  };
};

export async function GET(request, { params }) {
  try {
    const { email: emailParam } = await params;
    const users = dbConnect(collections.USERS);
    const email = normalizeEmail(decodeURIComponent(emailParam ?? ''));

    const user = await users.findOne(buildEmailQuery(email));

    if (!user) {
      return NextResponse.json({ message: 'User not found', email }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    const { email: emailParam } = await params;
    const body = await request.json();
    const users = dbConnect(collections.USERS);

    const result = await users.updateOne(
      buildEmailQuery(normalizeEmail(decodeURIComponent(emailParam ?? ''))),
      {
        $set: {
          ...body,
          updatedAt: new Date(),
        },
      }
    );

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
