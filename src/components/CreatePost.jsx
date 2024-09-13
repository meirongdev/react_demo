export function CreatePost() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <fieldset>
        <legend>Create a new post</legend>
      </fieldset>
      <div>
        <label htmlFor='create-title'>Title: </label>
        <input type='text' name='create-title' id='create-title' />
      </div>
      <div>
        <label htmlFor='create-author'>Author: </label>
        <input type='text' name='create-author' id='create-author' />
      </div>
      <div>
        <label htmlFor='create-content'>Content: </label>
        <textarea id='create-content' name='create-content' />
      </div>
      <input type='submit' value='Create' />
    </form>
  )
}
