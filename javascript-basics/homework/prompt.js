function greeting() {
    const name = prompt("What's your name?");
    alert(`Hello ${name}`);
  }
  
  function question() {
    if (confirm("Do you realize?")) {
      alert("It's just a dream");
    } else {
      alert("Follow the white rabbit");
    }
  }
  
  greeting();
  
  question();
  