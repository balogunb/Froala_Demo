import React from 'react';
import ReactDOM from 'react-dom';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'froala-editor/css/third_party/font_awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

// Include special components if required.
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';



// Import all Froala Editor plugins;
import 'froala-editor/js/plugins.pkgd.min.js';


function FroalaComponent() {
	var editor = new FroalaEditor('div#example')

	var config={
	  placeholderText: 'Edit Content Here!',
	  charCounterCount: true,
	  toolbarButtons: 	{
						  'moreText': {
						    'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
						  },
						  'moreParagraph': {
						    'buttons': ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
						  },
						  'moreRich': {
						    'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR']
						  },
						  'moreMisc': {
						    'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
						    'align': 'right',
						    'buttonsVisible': 2
						  }
						}
	}
  


  return (

    <div className='App'>
    	<FroalaEditor
		  tag='textarea'
		  config={config}
		>
		</FroalaEditor>

    </div>
  );
}



export default FroalaComponent;