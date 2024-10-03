import {useState} from "react";
import './App.css'
import Test from './pages/TicTacToe/index.jsx';

const availablePages = ['TicTacToe', 'Page2'];

const buttonStyle = {
  padding: "10px",
  margin: "10px",
}

function App() {
  const [currentPage, setCurrentPage] = useState('TicTacToe')

  const renderPage = (() => {
    switch(currentPage) {
      case 'TicTacToe':
        return <Test />
      default:
        return <div>Page not found</div>
    }
  });

  const renderNav = ((page) => (
    <button style={buttonStyle} disabled={page === currentPage} onClick={() => setCurrentPage(page)}>{page}</button>
  ));
  return (
    <>
      <nav style={{position: "absolute", width: "100%", top:0, left: 0, paddingTop: "20px"}}>
        {availablePages.map(renderNav)}
      </nav>
      <br/>
      {renderPage()}
    </>
  )
}

export default App
