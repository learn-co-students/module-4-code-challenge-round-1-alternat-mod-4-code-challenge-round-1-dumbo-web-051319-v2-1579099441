import React from "react";

class Form extends React.Component {
  state={
    title: '',
    author: '',
    img: ''
  }

  onChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //bonus persisting book form
   onSubmit=(e)=>{
    e.preventDefault()
    let {title, author, img} = this.state
    fetch('http://localhost:3005/books', {
      method: "POST",
      headers:{ 'Content-Type': 'application/json',
                'Accept': 'application/json'},
      body: JSON.stringify({
        title,author,img
      })
    })
    .then(resp => resp.json())
    .then(myBook => {
      this.props.addBook(myBook)
    })
    this.setState({
      title: '',
      author: '',
      img: ''
    })
  }

  //for non persiting, onsubmits a prop passed down from App (where Books live)
  //onSubmit= {e => this.props.onSubmit(e, this.state)}
  render() {
    let { title, author, img } = this.state;
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e, this.state)}>
        <input type="text" 
                name="title" 
                placeholder="Title" 
                value={title}
                onChange={e => this.onChange(e)}/>
        <input type="text" 
                placeholder="Author"
                name="author" 
                value={author}
                onChange={e => this.onChange(e)}/>
        <input type="text" 
                placeholder="Image" 
                name="img" 
                value={img}
                onChange={e => this.onChange(e)}/>
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
