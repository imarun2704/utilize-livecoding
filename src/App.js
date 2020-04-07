import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {       
      input:"",
      magic:'',
      data:{
        'a': 'Alfa',
        'b':'Bravo',
        'c':'Charlie',
        'd':'Delta',
        'e':'Echo',
        'f':'Foxtrot',
        'g':'Golf',
        'h':'Hotel',
        'i':'India',
        'j':'Juliett',
        'k':'Kilo',
        'l':'Lima',
        'm':'Mike',
        'n':'November',
        'o':'Oscar',
        'p':'Papa',
        'q':'Quebec',
        'r':'Romeo',
        's':'Sierra',
        't':'Tango',
        'u':'Uniform',
        'v':'Victor',
        'w':'Whiskey',
        'x':'X-ray',
        'y':'Yankee',
        'z':'Zulu'
        
      }
    }
  }

  palindrome(){
    const str = this.state.input;
    if(str.length > 1 && str === str.split('').reverse().join(''))
    {
      this.setState({magic: "the magic word found"}) ;
    }else{
      this.setState({magic: ""}) ;

    }
  }

  render(){
    const input = this.state.input.split('');
    const filteredArray = input && input.map(el => this.state.data[el]);
    return (
      <div> 
        <div>
          <input type="text" name="text" onChange={(e) => this.setState({ input: e.target.value }, this.palindrome.bind(this))} />
        </div>
        <div>
          <span>  
            {filteredArray.map(el => 
          <ul>
            <li>{el}</li>
          </ul>
          )}
          </span>
          <span>
         {this.state.magic}
          </span>
        </div>
      </div>
     );
  }
}

export default App;
