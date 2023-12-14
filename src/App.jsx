import { createRef, useState } from 'react'

import './App.css'
import EditableBlock from './components/EditableBlock';
import EditablePage from './components/EditablePage';
import Tiptap from './components/Tiptap';
import NextLine from './components/NextLine';
import TipTapMenuBar from './components/TiptapMenubar';
import TipTapEditor from './components/TiptapEditor';
import HomePage from './components/HomePage';

function App() {
  const [data, setData] = useState({
    html: '<h1>Hello editable</h1>',
    tag: 'p',
  })
  

  const onChangeHandler = (e)  => {
    setContent({ html: e.target.value });
  }


  return (
    <div>
      <HomePage/>
     
    </div>
  )
}

export default App
