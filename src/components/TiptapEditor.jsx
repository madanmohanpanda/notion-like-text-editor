import React, { useEffect, useRef } from "react";
import { EditorContent, useEditor ,FloatingMenu,BubbleMenu } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import TipTapMenuBar from "./TiptapMenubar";
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Typography from '@tiptap/extension-typography'
import Commands from "../suggestion/commands";
import getSuggestionItems from "../suggestion/items";
import renderItems from "../suggestion/renderItems";





const TipTapEditor = () => {
  const [editorState, setEditorState] = React.useState(
    `<h1>To test typography feature type these: ---, 4^5 etc.</h1>`
  );



  const editor = useEditor({
   
    autofocus: true,
    extensions: [StarterKit,
      Document,
      Paragraph,
      Text,
      Typography,
      Commands.configure({
        suggestion: {
          items: getSuggestionItems,
          render: renderItems
        }
      })
    ],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });
  
  

  return (
    <>
      <div className="flex">
        {editor && 
        <BubbleMenu style={{color: 'red'}} editor={editor} tippyOptions={{ duration: 100 }}>
            <TipTapMenuBar editor={editor} />
        </BubbleMenu>
         }
        
      </div> 

      <div className="prose prose-sm w-full mt-4">
        <EditorContent editor={editor} />
      </div>
      <div className="h-4"></div>
      
    </>
  );
};

export default TipTapEditor;