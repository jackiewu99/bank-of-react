import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './basic.css';



class Debit extends Component {
  constructor () {
    super()
    var today = new Date()
    const tdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      pay: {
        amount: '',
        description: '',
        date:tdate
      },
      redirect: false
      
    }
  }




  handleChange = (e) => {
    const updatedUser = {...this.state.pay}
    const inputField = e.target.name
    const inputValue = e.target.value
    
    updatedUser[inputField] = inputValue
    this.setState({pay: updatedUser})

    
    
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addDebit(this.state.pay)
    this.props.debitInfo.push(this.state.pay)
    this.displayItems();
  }


 displayItems = () =>{
  var displayItem = ''
    for(var i = 0; i < this.props.debitInfo.length;i++)
    {
     displayItem = displayItem + <br/> + 'Date:  ' + this.props.debitInfo[i].date.substring(0,10) + 
                                    ' Item:   ' + this.props.debitInfo[i].description + 
                                    ' Cost:   ' + this.props.debitInfo[i].amount
    }
   return displayItem = displayItem.split(<br/>)
  }

  render () {
    


    return (
      
      <div>
        <h2>
        {this.displayItems()}
        </h2>
        <h2></h2>
         <h1>DEBIT</h1>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Reason">Reason</label>
            <input type="text" name="description" onChange={this.handleChange} value={this.state.pay.description}/>
          
            <label htmlFor="Amount">Amount</label>
            <input type="number" name="amount" onChange={this.handleChange} value={this.state.pay.amount} />
          </div>
          <button>Add Debit</button>
        </form>
        <p id = 'test' >
        <Link to="./" >Home </Link>
    
        <Link to="/userprofile">UserProfile </Link>
     
        <Link to="/credit">Credit</Link>
        </p>
      
      </div>
      
      
    )
  }
}


export default Debit;