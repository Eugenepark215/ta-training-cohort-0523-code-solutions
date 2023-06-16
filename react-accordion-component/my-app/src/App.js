import { Accordion } from './Accordion';
function App() {
  const topics = [
    {
      topic: 'Hypertext Markup Langauge',
      text: 'Hypertext Markup Language (HTML) is the standard markup langauge for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web',
    },
    {
      topic: 'Cascading Style Sheets',
      text: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in a markup langauge like HTML. CSS is a cornerstone technology of the World Wide Web alongside JavaScript.',
    },
    {
      topic: 'JavaScript',
      text: 'JavaScript, often abbreviated as JS, is a high-level, interpreted language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
    },
  ];
  return (
    <div>
      <Accordion array={topics} />
    </div>
  );
}

export default App;
