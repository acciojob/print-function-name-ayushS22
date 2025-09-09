//your JS code here. If required.
function functionName() {
  alert(arguments.callee.name);
}

// Example calls
functionName();  // alerts "functionName"

function AccioJob() {
  alert(arguments.callee.name);
}

AccioJob();  // alerts "AccioJob"
