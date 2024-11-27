import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Comment from '@/app/models/Comment';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env');
}

export async function GET() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const comments = await Comment.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json(comments);
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, message, linkedIn, deviceId } = await req.json();
    
    if (!linkedIn || !linkedIn.includes('linkedin.com/')) {
      return NextResponse.json(
        { error: 'Please provide a valid LinkedIn URL' },
        { status: 400 }
      );
    }

    await mongoose.connect(process.env.MONGODB_URI!);

    // Check for existing comment from this device
    const existingComment = await Comment.findOne({ deviceId });
    if (existingComment) {
      return NextResponse.json(
        { error: 'You have already left a comment' },
        { status: 400 }
      );
    }

    const comment = await Comment.create({
      name,
      message,
      linkedIn,
      deviceId,
      createdAt: new Date()
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error('Database operation error:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}