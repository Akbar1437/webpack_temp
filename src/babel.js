async function start() {
  return await Promise.resolve("async is working");
}

start().then(console.log);

class Util {
  static id = Date.now();
}

console.log("Util id: ", Util.id);
