// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));


*/ 

// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
 return getInstruction('mashedPotatoes', 1, (step2) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
 return getInstruction('mashedPotatoes', 2, (step3) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
 return getInstruction('mashedPotatoes', 3, (step4) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
 return getInstruction('mashedPotatoes', 4, (step5) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
  let Potato = document.querySelector("#mashedPotatoesImg"); 
  Potato.removeAttribute("hidden"); 
});
});
});
});
});

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return "Steak is ready!";
  })
  .then((message) => {
    document.querySelector("#steak").innerHTML += `<li>${message}</li>`;
    let Steak = document.querySelector("#steakImg"); 
    Steak.removeAttribute("hidden"); 
  });

/*obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1); 
  });
  obtainInstruction('steak', 1)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2); 
  });
  obtainInstruction('steak', 2)
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3); 
  });
  obtainInstruction('steak', 3)
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4); 
  });
  obtainInstruction('steak', 4)
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5); 
  });
  obtainInstruction('steak', 5)
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6); 
  });
  obtainInstruction('steak', 6)
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7); 
  });
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  });
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>$Steak is ready!</li>`;
  });
*/


// Iteration 3 using async/await
async function makeBroccoli() {
  const step0 = await obtainInstruction("broccoli", 0); 
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  const step1 = await obtainInstruction("broccoli", 1); 
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  const step2 = await obtainInstruction("broccoli", 2); 
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  const step3 = await obtainInstruction("broccoli", 3); 
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  const step4 = await obtainInstruction("broccoli", 4); 
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  const step5 = await obtainInstruction("broccoli", 5); 
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  const step6 = await obtainInstruction("broccoli", 6); 
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  document.querySelector("#broccoli").innerHTML += `<li>{broccoli is ready!}</li>`;
  let broc = document.querySelector("#broccoliImg"); 
  broc.removeAttribute("hidden"); 
}
makeBroccoli(); 

/*
async function makeBroccoli() {
  const step0 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  const step1 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  const step2 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  const step3 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  const step4 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  const step5 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  const step6 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  let broc = document.querySelector("#broccoliImg");
  broc.removeAttribute("hidden");
}
makeBroccoli();
*/ 

// Bonus 2 - Promise all
/*let allPromises = []; 
for (let i = 0; i < brusselsSprouts.length; i++) {
  allPromises.push(brusselsSprouts[i]); 
}
Promise.all(allPromises).then((promisesfulfilled) => {
  for (let i = 0; i < promisesfulfilled.length; i++) {
    document.querySelector("#brusselSprouts").innerHTML += `<li>${promisesfulfilled[i]}</li>`; 
  } 
  document.querySelector("#brusselSprouts").innerHTML += `<li> Brussels sprouts are ready! </li>`; 
}); 

let sprout = document.querySelector("#brusselsSproutsImg");
sprout.removeAttribute("hidden");
*/

let allPromises = [];

for (let i = 0; i < brusselsSprouts.length; i++) {
  allPromises.push(obtainInstruction(brusselsSprouts[i]));
}
Promise.all(allPromises).then((promisesfulfilled) => {
  for (let i = 0; i < promisesfulfilled.length; i++) {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${promisesfulfilled[i]}</li>`;
  }
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li> Brussels sprouts are ready!</li>`;
});

let sprout = document.querySelector("#brusselsSproutsImg");
sprout.removeAttribute("hidden");
