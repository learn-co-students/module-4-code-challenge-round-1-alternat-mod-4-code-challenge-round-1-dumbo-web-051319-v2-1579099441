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

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input type="text" 
                name="title" 
                placeholder="Title" 
                value={this.state.title}
                onChange={e => this.onChange(e)}/>
        <input type="text" 
                placeholder="Author"
                name="author" 
                value={this.state.author}
                onChange={e => this.onChange(e)}/>
        <input type="text" 
                placeholder="Image" 
                name="img" 
                value={this.state.img}
                onChange={e => this.onChange(e)}/>
        <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
