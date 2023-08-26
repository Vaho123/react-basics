// import logo from './logo.svg';
import './App.css';
import humphrey from "./images/Humphrey.png";
import happyDog from "./images/happyDog.jpeg"
import kitten from "./images/kitten.jpeg"
import wolf from "./images/wolf.jpeg"

// To be able to display this on the page, we need to use 
//custom HTML elements, here the custom element is <Person/>
// <Person/> is a component (capital P) not a tag
// Styling comes later, before that, just use <div>
// Styling is in App.css
const Person = () => {
  return (
        // <div>
        <div className="personCard">
            <p>I'm a Person - a functional component - a custom component</p>
            <p>I can be self closing org not</p>
         </div>
         )
}

const ThreeTimes = () => {
  return <p>This is to be rendered 3 times - with a change after it has initially been renedered to demonstrate all 3 get updated.  Therefore only need to update one 'p' tag, not 3</p>
}

// In order to use props we need to pass it as a parameter
// The {} brackets mean stop Babel reading as JSX and start reading as JavaScript
const Person2 = (props) => {
   // Could have any code here - variables, loops etc.
   console.log ("The props object is: ", props)  // Output in right click inspect - console
   console.log ("The props name is: ", props.name)
   return(
      <div className = "personCard2">
        <p>Person2 I'm using the props (properties) object and JSX in the return of App.  My name is {props.name} and my age is {props.age}</p>
        <p>Props is one of the ways we can pass data down the hierarchy of components.  Can only pass down, not up e.g. can't pass data from Person to App</p>
      </div>
     )
}

const Job = (props) => {
    return(
      <div>
        <p>I'm the job a chef</p>
        <p>I'm the job a{props.title}</p>
      </div>
    )
}


// typeOfPetpet value must match what is in App i.e. what is being renedered
// pet = needs to match what is in Pet
// the two can be difernt as in per/typeOfPet, or they can be the same as in petname
// Could pass values calculated in Prson3 down to Pet
const Person3 = (props) => {

  return(
    <div className = "personCard3">
        <h4>  My name is {props.name}</h4>
        <Pet pet = {props.typeOfPetpet} petname = {props.petname}/>
        <img src={props.dogImage}/>
        <img src={props.kittenImage}/>
        <img src={props.wolfImage}/>
        <p>{props.petname}</p>
     </div>
    )
}

// Pet is being rendered through Person3
// This could be useful if there is a lot of functionality in Pet
// This is just an example to show how data can be passed down the component tree
//  in this case from Person3 to Pet
// CANNOT pass values calculated in Pet uo to Person3
const Pet = (props) => {
  return (
    <div>
       <p>My pet is a {props.pet}, called {props.petname}</p>
    </div>
  )
}

// Styling - can't use the keyword class, because class components exist in React (we're using functional components)
// And class is already part of JS, so can't be used in CSS/HTML
// Instead we use className - won't be bundled up in props
// React components can be style usind className, id or tag name
// MUST import the CSS at the top of the JS file e.g. App.css - which comes as part of the React setup using npx create-react-app
// Can't style entire components, but can style the <div> which is round them
// Styling is in App.css

// All assests shold be in the src folder, but can be in their own folder within src


// Images - browser/github deploy - it will generate a build folder - a static version of the app, in pure HTML, CSS and JS - what it needs to run in the browser
// i.e. it will convert all the React, JSX etc. into a static JS file
// This file can the be deployed
// The above means that if images are imported using src and the path to the image it won't work because the path will change later.
//    It will be treated as a string
// Can import images at the top instead, where the path won't change
// Therefore, need to create an images folder inside src to hold the images





// export function App() {
function App() {
  return (
    // <div>
    <div className = "body">
     {/* <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a 
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a> 
 
         <p>Additional text added by me, after the logo and before th logo is commented out</p>
     </header> */}
        <h1>Hello World</h1>
        <Person/>
        <Person></Person>
        {/* <person>This is a person tag - no capital P!</person> */}

        <ThreeTimes/>
        <ThreeTimes/>
        <ThreeTimes/>

        <Person2 name = "Chris" age = "34"/>
        <Person2 name = "Sam"  age = "29" />
        <Person2 name = "Santosh" age = "23" />

        <Job/>
        <Job title = " developer"/>
        <Job title = "n analyst"/>
        <Job title = " Digital Marketer"/>

        <Person3 name = "Chris" typeOfPetpet = "dog" petname = "Rusty" dogImage = {happyDog}/>
        <Person3 name = "Sam"  typeOfPetpet = "cat" petname = "Fiddles" kittenImage = {kitten}/>
        <Person3 name = "Santosh" typeOfPetpet = "wolf" petname = "Hunter" wolfImage = {wolf} />

        <img src={humphrey} alt="dog cartoon image"/>

    </div>
  )
}





// Exported so it can be used in index.js
// export default - because only one thing is being exported
//    (this means that the import in index.js is also only expecting one thing)
// Instead, could use export in front of the function names
export default App;
