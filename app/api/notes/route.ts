import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Note from '../../models/Note';

export async function GET() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const notes = await Note.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json(notes);
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 });
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

    // Check for existing note from this device
    const existingNote = await Note.findOne({ deviceId });
    if (existingNote) {
      return NextResponse.json(
        { error: 'You have already left a note' },
        { status: 400 }
      );
    }

    const note = await Note.create({
      name,
      message,
      linkedIn,
      deviceId,
      createdAt: new Date()
    });

    return NextResponse.json(note);
  } catch (error) {
    console.error('Database operation error:', error);
    return NextResponse.json(
      { error: 'Failed to create note' },
      { status: 500 }
    );
  }
}