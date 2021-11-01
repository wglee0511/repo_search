const testLogger = (msg) => {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  console.log(msg);
};

export default testLogger;
