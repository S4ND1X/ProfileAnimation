//Create the new instance of the type writer and where to display it
const instance = new Typewriter("#typewriter", {
  loop: true,
  delay: 30,
  deleteSpeed: 10
});
//All the configuration needed
instance
  .typeString("Hello everyone!")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I am Jorge Sanchez.")
  .pauseFor(1000)
  .deleteChars(14)
  .typeString("pursuing a Software Engineer carrer")
  .pauseFor(1000)
  .deleteChars(35)
  .typeString("currently working as a<br>Web<br>Developer")
  .pauseFor(1000)
  .deleteChars(34)
  .typeString("learning<br>Fullstack<br>Development")
  .pauseFor(1000)
  .deleteChars(31)
  .typeString(
    "have skills on: <span class='highlight'>JS,React,Backend<br>Unity,CP,C#,C++<span/>"
  )
  .pauseFor(1000)
  .deleteAll()
  .typeString("Check out my portafolio at<br>github.com/S4ND1X")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Imagine<br>Work<br>Code.")
  .pauseFor(5000)
  .deleteAll()
  .start();
