import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50
  },
  message: {
    type: String,
    required: true,
    maxLength: 500
  },
  linkedIn: {
    type: String,
    required: true,
    validate: {
      validator: function(v: string) {
        return v.includes('linkedin.com/');
      },
      message: 'Please provide a valid LinkedIn URL'
    }
  },
  deviceId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'notes'
});

export default mongoose.models.Note || mongoose.model('Note', NoteSchema);