function add(x, y) {
  return x + y;
}

// 随机生成第一个函数
function getRandomFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.lg("Function 1 executed");
      resolve("Result from Function 1");
    }, Math.random() * 1000);
  });
}

// 随机生成第二个函数
function getRandomFunction2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 2 executed");
      resolve("Result from Function 2");
    }, Math.random() * 1000);
  });
}

// 随机生成第三个函数
function getRandomFunction3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 3 executed");
      resolve("Result from Function 3");
    }, Math.random() * 1000);
  });
}

// 串行调用这三个函数
async function callFunctionsSequentially() {
  try {
    const result1 = await getRandomFunction1();
    console.log(result1);

    const result2 = await getRandomFunction2();
    console.log(result2);

    const result3 = await getRandomFunction3();
    console.log(result3);

    console.log("All functions executed sequentially");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// 调用串行函数
callFunctionsSequentially();

console.log(add(1, 2));
