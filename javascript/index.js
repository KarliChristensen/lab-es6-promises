// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction("mashedPotatoes", 2, (step0) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step0}</li>`;
      getInstruction("mashedPotatoes", 3, (step0) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step0}</li>`;
        getInstruction("mashedPotatoes", 4, (step0) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step0}</li> <li>Mashed potatoes are ready!</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        });
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction(`steak`, 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction(`steak`, 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction(`steak`, 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction(`steak`, 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction(`steak`, 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction(`steak`, 6);
  })
  .then((step6) => {
    document.querySelector(
      "#steak"
    ).innerHTML += `<li>${step6}</li> <li>Your steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction(`steak`, 7);
  });
// Iteration 3 using async/await

async function makeBrusselSprouts() {
  try {
    for (let i = 0; i < broccoli.length; i++) {
      let step = await obtainInstruction(`broccoli`, i);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
  } catch {
    console.log(`err`);
  }finally{
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
}

makeBrusselSprouts();

// Bonus 2 - Promise all
// ...
