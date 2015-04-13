var myRequest = new XMLHttpRequest();
myRequest.open("POST","http://api.twitter.com/oauth2/token?grant_type=client_credentials", true);
myRequest.setRequestHeader("Authentication", "TjE2ZXk4UHBEdHFYSHJQbEJTeloyWUpEbzp4TEdzN3J3Q0pYNFk5Yzg4WFkwTnNwZmVHazJ3MnlITDJhN2ZxcjdUUXk1NDNXblRQVg==");
myRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8" );
myRequest.send();
alert(myRequest.response);
