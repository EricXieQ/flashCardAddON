import './App.css'
import Card from '../components/Card';
import { useState } from 'react';

function App() {

  const question_answer = {
    "Class": "What is a blueprint or template for creating objects that define the attributes and behavior of the objects called?",
    "Object" : "What is an instance of a class that has its own state and behavior called?",
    "Inheritance": "What is a mechanism that allows a new class to be based on an existing class and inherit its attributes and behavior called?",
    "Polymorphism":"What is the ability of objects to take on different forms or behaviors depending on the context in which they are used called?",
    "Encapsulation":"What is the practice of hiding the internal details of an object from the outside world, allowing only designated methods to access or modify the object's state called?",
    "Abstraction":"What is the process of representing complex real-world concepts in a simplified and abstract way that can be easily modeled in software called?",
    "State":"What is the set of attributes or properties that define the current condition of an object called?",
    "Behavior":"What are the actions or operations that an object can perform in response to a request or message from another object called?",
    "Abstract Class" :"What is a class that cannot be instantiated and is intended to be subclassed called?",
    "Static": "What keyword is used to define class-level properties or methods that can be accessed without instantiating an object?"
  }

  const answer_array = ["Class", "Object", "Inheritance", "Polymorphism", "Encapsulation", "Abstraction", "State", "Behavior", "Abstract Class", "Static"]

  const [id, IDs] = useState(1)
  const [question, setQuestion] = useState(question_answer["Class"]);
  const [answer, setAnswer] = useState("Class");

  const changeCard = () => {
    
    setQuestion(question_answer[answer_array[id]])
    setAnswer(answer_array[id])
    console.log(id)
  }

  const incrementID = () => {
    if(id < answer_array.length-1){IDs(id + 1)}
    else{IDs(0)}
    
  }
  const Next = () => {

    incrementID()
    changeCard()
  }

  const decrementID = () => {

    if(id >0) {IDs(id-1)}
    else(IDs(answer_array.length-1))
  }

  const Prev = () => {

    decrementID()
    changeCard()
  }


  
  return (
    <div className='App'>
      <h1>QuizDeck: Object-Oriented Programming</h1>
      <h2>Sharpen your OOP knowledge with this QuizDeck!</h2>
      <h4>Number of Cards: {answer_array.length}</h4>
      <Card question={question} answer={answer} />
      <div className="action-buttons">
        <button  onClick={Prev}>←</button>
        <button  onClick={Next}>➡</button>
      </div>
    </div>
  )
}

export default App