import React,{Component} from 'react'

class FatchData extends Component{
constructor(props){
  super(props);
  this.state = {
    x: 0,
    loding : true,
    person : 'Loading Data...',
    Data : ' '
  };
  this.handleClickPrv = this.handleClickPrv.bind(this);
  this.handleClickNex = this.handleClickNex.bind(this);
}
handleClickPrv(x){
  this.setState({x:x++});
  console.log('Ready to Pervious Element :', this.state.x);
}
handleClickNex(){
  console.log('Ready to Next Element: ');
}
  // fatching Data from server 
  async componentDidMount(){       
    const url = "https://jsonplaceholder.typicode.com/users";
  //   const response =await fetch(url);//async and await used for waiting till data fatches from server
  //   const data =await response.json();// wait to convert data into json format
    
  //   console.log(data[0].name);  //acess json data and show to the console
    
  //   this.setState({loding:false
  //     ,person:data
  // });// Make state false if data loaded sucessfull
    
    fetch(url)
    .then(Response => Response.json())
    .then(data =>{
      console.log(data)
      this.setState({loding: false,
      person:data});
    })
    .catch(err=>{
      this.setState({loding: true,
      person:err});

    });
    
  }

  render(){
    var x = this.state.x;
      if(this.state.loding){
        return <div> Loading Data...</div>
      }
      else{
        return (
        <div>{`Name : ${this.state.person[x].name}`}<br />
        {`Email : ${this.state.person[x].email}`}<br />
        {`Web Site : ${this.state.person[x].website}`}<br />
        {`User Name : ${this.state.person[x].username}`}<br />
        {`Contact Number : ${this.state.person[x].phone}`}<br />
        <button onClick={ () => this.handleClickPrv(x) }>{`<=Previous`}</button>
        <button onClick={ () => this.handleClickNex(x)}>{`Next=>`}</button>
        {console.log('VALUE OF X : ',x)}
        </div>
        )
      }
      // <div>
      // {this.state.loding?`Loading Data...`:`Name : ${this.state.person[0].name}`
      // }</div>
  }
}

export default FatchData