import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';



class Debit extends Component {
  constructor () {
    super()
    
    this.state = {
      pay: {
        cost: '',
        reason: '',
        date:''
      },
      redirect: false
      
    }
  }




  handleChange = (e) => {
    const updatedUser = {...this.state.pay}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue
    //document.write('date' + JSON.stringify(this.props.debitInfo[0].date))
    this.setState({pay: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addDebit(this.state.pay)
    
  }

 test = (e) =>
 {
  e.preventDefault()
  return this.props.debitInfo.map((this.props.debitInfo));
 }

 
  render () {
    var displayItem = ''
    for(var i = 0; i < this.props.debitInfo.length;i++)
    {
     displayItem = displayItem + 'Date:  ' + this.props.debitInfo[i].date.substring(0,10) + 
                                    ' Item:   ' + this.props.debitInfo[i].description + 
                                    ' Cost:   ' + this.props.debitInfo[i].amount + 
                                    '\r' ;
    <br/>
                                  
    }
    displayItem = displayItem.split('')
    return (
      
      <div>
        <h2>
        {displayItem}
        </h2>
        <h2></h2>
         <h1>DEBIT</h1>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Reason">Reason</label>
            <input type="text" name="reason" onChange={this.testMap}/>
          </div>
          <div>
            <label htmlFor="Amount">Amount</label>
            <input type="number" name="cost" onChange={this.handleChange} value={this.state.pay.cost} />
          </div>
          <button>Add Debit</button>
        </form>
        <Link to="./">Home</Link>
        <Link to="/userprofile">User Profile</Link>
        <Link to="/credit">Credit</Link>
      </div>
      
      
    )
  }
}


export default Debit;