import mongoose from 'mongoose'

const emailSchema = new mongoose.Schema(
  {
    from: {
      type: String
    },
    to: {
      type: String
    },
    subject: {
      type: String
    },
    text: {
      type: String
    },
    service: {
      type: String
    },
    status: {
      type: String,
      enum: ['sent', 'fail']
    }
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
)

const Email = mongoose.model('Email', emailSchema)

export default Email
