import mongoose from 'mongoose';

const connectDB = async (app, port) => {
  try {
    mongoose.set('strictQuery', true); // Optional: helps with query filtering
    mongoose.set('bufferCommands', false); // Prevents buffering errors

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB Connected');

    // Start server only after DB is ready
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });

  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); // Exit process if DB fails to connect
  }
};

export default connectDB;
