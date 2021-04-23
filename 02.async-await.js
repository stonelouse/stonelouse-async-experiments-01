export async function asyncAwaitInAction() {
  console.log("asyncAwaitInAction", "entering");

  // ---------------------------------------------------------------------------------
  async function play00(willFail) {
    console.log("#00#", "entering", { willFail });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (willFail) {
          throw new Error(">00>");
        }
        resolve("#00#");
      }, 1000);
    });
  }
  try {
    const value = await play00(false);
    console.log("#00a", { value });
    const value2 = await play00(true);
  } catch (error) {
    console.log("##00##", error); // not called
  }

  // ---------------------------------------------------------------------------------
  async function play00(willFail) {
    console.log("#00#", "entering", { willFail });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (willFail) {
          throw new Error(">00>");
        }
        resolve("#00#");
      }, 1000);
    });
  }
  try {
    const value = await play00(false);
    console.log("#00a", { value });
    const value2 = await play00(true);
  } catch (error) {
    console.log("##00##", error); // not called
  }

  console.log("asyncAwaitInAction", "leaving");
}
