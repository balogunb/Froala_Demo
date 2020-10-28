import React from 'react';
import logo from './logo.svg';
import './App.css';


// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';



// Require Font Awesome.
import 'froala-editor/css/third_party/font_awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';




function App() {
  var editor = new FroalaEditor('div#example')

  var config={
  placeholderText: 'Edit Content Here!',
  charCounterCount: false
}





  return (

    <div className='App'>
    <h1>Buffer</h1>

      <FroalaEditor
        tag='textarea'
        config={config}

      />
    <h1>Buffer</h1>
    </div>
  );
}



export default App;
