function a() {
  console.log("running a()");
}

function b() {
  console.log("running b()");
}

function c() {
  console.log("running c()");
  a();
  b();
}

c();
