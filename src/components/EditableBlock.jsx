import React, {createRef, useState, useEffect} from 'react'
import ContentEditable from 'react-contenteditable'

const EditableBlock = ({data}) => {
    const [content, setContent] = useState({
        html: data.html,
        tag: data.tag,
      })


     

      const contentEditable = createRef();
    
      const onChangeHandler = (e)  => {
        setContent({ html: e.target.value });
      }
    
    
      return (
        <>
          
          <ContentEditable
                  innerRef={contentEditable}
                  html={content.html} // innerHTML of the editable div
                  disabled={false}       // use true to disable editing
                  onChange={onChangeHandler} // handle innerHTML change
                  tagName='article' // Use a custom HTML tag (uses a div by default)
                />
        </>
      )
}

export default EditableBlock