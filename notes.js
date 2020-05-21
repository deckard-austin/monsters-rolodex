// Using Function vs Class:
//  By using a class component, we get access to 'state' - a JS object w properties we can access at any point
//  In our constructor method, we call super() which calls the constructor method on the Component class - gives us access to state and setState

// Children: What you pass in between the brackets of the component that gets called <> and </>
// State gets turned into props as it gets passed down through the component tree. App.js > CardList > Card
// We can use the key={} attribute to distinguish between different props/states
// Functional Components: We don't have access to state because we don't have access to constructor. Also no lifecycle methods.
// Sometimes, we just want to render some html and that's what a functional component basically does. Gets props, returns html

// Why don't we add state to SearchBox component?: Because uni-directional data flow. We need the state in multiple components below State
// Class Methods and Arrow Functions: 'this' is referencing the context in which it's being invoked. Have to define the context of 'this' in the constructor
// We don't have to do this.handleChange = this.handleChange.bind(this).. instead, we can just use an arrow function which automatically binds 'this' to the context of the method it's written in
// This is called 'lexical scoping'
// A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).

// Unidirectional Dataflow: From State -> Views -> Actions. Makes React more predictable and less prone to errors
// Async setState: setState doesn't happen immediately - happens 'sometime in the future'
// The way around this is a callback. A callback 'waits' for that async to go through *** Bad Practice ***

// LifeCycle Methods:
// Mounting (constructor): first looks at the component, sees the constructor and calls it. Inside the constructor, the super() is just a method on all classes saying:
// If I'm extending a component, pull in all methods. Allows class component to have all of the lifecycle methods.
// 1. Render Method: tells JS this is what I want you to display. Where prop values get evaluated.
// 2. React updates the DOM and refs. Knows what the state and props are, componenetDidMount method gets called. API calls get called.

// Updating (after base Mounted state is on the DOM): Any future updates to props, state, or forceUpdate cause the component do go through updating phase.
// It first renders, then calls componentDidUpdate each time
// forceUpdate() should be avoided because it is bad practice.
// shouldComponentUpdate: determines if this change should happen. Receives nextProps and nextState, decides on re-rendering the component (we don't have to)
// Whenever a component gets re-rendered, all of the children also get re-rendered. Allows us to selectively render by returning a boolean value to improve performance

// Unmounting: componentWillUnmount gets called. Anything we want to do before React strips the component off the DOM
// Cleans up the componenet if anything needs to be removed (helps with memory leaks)

// React Router:
// Route only gives access to its first child that is passed into Router: match, location and history
// component: the component we want to render (i.e. <HomePage></HomePage>)
// path: path equal to the string where we go (i.e., '/')
// exact: true or false, meaning the path must be either exact or non-exact. Without exact, as long as the path is present, will render the page
// Switch: Will only render ONE route at a time. Switch will match / first, then not render anything else after it
// Within something like /topic/13, we have access to 'props.match.params.topicId' which gives us access to that specific page's information.
// TopicDetail can then populate itself from a DB based on a specific detail - usually based off of a URL detail
// History: two ways to navigate. We will use the { Link } component using the 'to=' attribute
// could do button onClick={() => props.history.push('/topics')}
// Location: Tells us where we are currently. Pathname is most important. Let's us know what the full url looks like
// Why would we use something like Match?  if TopicsList renders a bunch of different links,

// withRouter() - a higher order component - takes a component as an argument, modifies it someway and returns it
