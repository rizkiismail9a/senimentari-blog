import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  const config = useRuntimeConfig();

  if (mongoose.connection.readyState >= 1) {
    console.log("DB sudah terkoneksi");

    return;
  }

  try {
    await mongoose.connect(config.dbURI);
    console.log("DB terhubung");
  } catch (error) {
    console.error("gagal menghubungkan database", error);
  }
};
