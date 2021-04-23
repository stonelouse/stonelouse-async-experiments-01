export async function asyncAwaitInAction() {
  console.log("asyncAwaitInAction", "entering");

  // ---------------------------------------------------------------------------------
  async function play01(path) {
    console.log("#01#", "entering", { path });
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const json = await response.json();
    return json.data;
  }

  try {
    let data = await play01(
      "https://dummy.restapiexample.com/api/v1/employee/1"
    );
    console.log("#01a", { data }); // called!!!

    data = await play01("https://dummy.restapiexample.com/api/v1/notfound/1");
    console.log("#01b", { data }); // not called
  } catch (error) {
    console.log("##01##", error); // called!!!
  }

  // ---------------------------------------------------------------------------------
  async function play02(willFail) {
    console.log("#02#", "entering", { willFail });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (willFail) {
          reject(">#02>");
          return;
        }
        resolve("#02#");
      }, 1000);
    });
  }
  try {
    let value = await play02(false);
    console.log("#02a", { value }); // called!!!

    value = await play02(true);
    console.log("#02b", { value }); // not called
  } catch (error) {
    console.log("##02##", error); // not called
  }

  // ---------------------------------------------------------------------------------
  /*
      When working with Promises: always reject or resolve them!!!
   */
  async function play00(willFail) {
    console.log("#00#", "entering", { willFail });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (willFail) {
          throw new Error(">00>"); // Falls thru!!! "asyncAwaitInAction leaving" is not logged!!!
        }
        resolve("#00#");
      }, 1000);
    });
  }
  try {
    let value = await play00(false);
    console.log("#00a", { value }); // called!!!

    value = await play00(true);
    console.log("#00b", { value }); // not called
  } catch (error) {
    console.log("##00##", error); // not called
  }

  console.log("asyncAwaitInAction", "leaving");
}
