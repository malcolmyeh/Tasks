import React, {Component} from 'react'

class AddTask extends Component {
   state = {
       content: ''
   }
   handleChange = (e) => {
       this.setState({
           content: e.target.value
       })
   }
   handleSubmit = (e) => {
       e.preventDefault();
       this.props.addTask(this.state);
       this.setState({
           content: ''
       })
   }
   render(){
       return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>What do you have to do?</label>
                   <input type="text" onChange={this.handleChange} value={this.state.content}/>
               </form>
           </div>
       )
   }
}

export default AddTask
