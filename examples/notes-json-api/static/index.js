import { html, render, useEffect, useState } from 'https://unpkg.com/htm@3.0.4/preact/standalone.module.js'

function Notes({notes}) {
  return html`
    <ul>
      ${notes.map((notes) => {
        return html`
          <li>
            Title: ${notes.title}
            <br />
            Content: ${notes.content}
          </li>
        `
      })}
    </ul>
  `
}

function NewNoteForm({onSuccess}) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  async function createNewNote(e) {
    e.preventDefault()

    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        body: JSON.stringify({title, content})
      })

      if (res.ok) {
        setTitle("")
        setContent("")
        onSuccess()
      } else {
        console.error("Failed creating new note")
      }
    } catch (e){
      console.error(e)
    }
  }

  return html`
    <form onSubmit=${createNewNote}>
      <input type="text" 
             placeholder="Title"
             onInput=${(e) => setTitle(e.target.value)} 
             value=${title} />
      <br />
      <textarea type="text" 
                placeholder="Content"
                onInput=${(e) => setContent(e.target.value)} 
                value=${content} />
      <br />
      <button>Submit</button>
    </form>
  `
}

function Page() {
  const [notes, setNotes] = useState([])

  async function fetchNotes() {
    try {
      const res = await fetch("/api/notes")

      if (res.ok) {
        const payload = await res.json()
        setNotes(payload)
      } else {
        console.error("Failed creating new note")
      }
    } catch (e){
      console.error(e)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return html`
    <${NewNoteForm} onSuccess=${fetchNotes} />
    <${Notes} notes=${notes} />
  `
}

render(html`<${Page} />`, document.getElementById("root") )

