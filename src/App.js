import './App.css';
import Lifecyle1 from './components/Lifecyle1';
import Parent from './components/Liftingstateup/Parent';
import Propdrilling from './components/propdrilling/Propdrilling';
import Usememo from './components/Usememo';
import Useref from './components/Useref';

function App() {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>React Interview Preparation Day4</h3>
      <h4>1.What is UseRef Hook ?(Implementation)</h4>
      <p style={{textAlign:"center"}}>useRef</p>
      <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.</p>
      <p>useRef() only returns one item. It returns an Object called current.</p>
      <p>When we initialize useRef we set the initial value: useRef(0).</p>
      <Useref/>
      <hr />

      <h4>2.What is UseMemo Hook ?(Implementation)</h4>
      <p style={{textAlign:"center"}}>useMemo</p>
      <p>The useMemo is a hook used in the functional component of react that returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance.</p>
      <Usememo/>
      <hr />

      <h4>3.What is Context api</h4>
      <p>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app </p>
      <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. </p>
      <hr />

      <h4>4.What are React Life cycles Explain each one with Example</h4>
      <p>React Life cycle has 4 stages</p>
      <p><b>Initialization:</b> This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.</p>
      <p><b>Mounting:</b> Mounting is the stage of rendering the JSX returned by the render method itself.</p>
      <p><b>componentWillMount() Function:</b> As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.</p>
      <p><b>componentDidMount() Function:</b> Similarly as the previous one this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time</p>
      <p><b>Updating:</b> Updating is the stage when the state of a component is updated and the application is repainted.</p>
      <p><b>Unmounting:</b> As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.</p>
      <p style={{textAlign:"center"}}>Lifecycle</p>
      <Lifecyle1/>
      <hr />

      <h4>5.What is Props Drilling Concept ?What is State Uplifting ?</h4>
      <p style={{textAlign:"center"}}> <u>Propdrilling</u> </p>
      <p> Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.There are three child ChildA , ChildB, ChildC and one Parent Data needed to be sent from Parent to ChildC.</p>
      <Propdrilling/>


      <p style={{textAlign:"center"}}> <u>State Uplifting</u> </p>
      <p>every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.</p>
      <p>Where A is the parent of B and C. In this case, If there is some Data only in component B but, component C also wants that data. We know Component C cannot access the data because a component can talk only to its parent or child (Not cousins).</p>
      <Parent/>
      <hr />

      <h4>6.Difference between useEffect and useContext ?</h4>
      <p>useEffect</p>
      <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. useEffect(function, dependency)</p>
      <p>useContext</p>
      <p>The useContext hook is the new addition in React 16.8. Syntax: const authContext = useContext(initialValue); The useContext accepts the value provided by React. createContext and then re-render the component whenever its value changes but you can still optimize its performance by using memoization.</p>
      <hr />
      
      <h4>7.Difference between callback and useCallback Hook ?</h4>
      <p>callback</p>
      <p>This callback function is run at a later time, usually through some interaction with the child component. The purpose of this callback function is to change a piece of the state that is a part of the parent component. This closes the data loop.</p>

      <p>useCallback</p>
      <p>The React useCallback Hook returns a memoized callback function.This allows us to isolate resource intensive functions so that they will not automatically run on every render.The useCallback Hook only runs when one of its dependencies update.This can improve performance.</p>
    </div>
  );
}

export default App;
