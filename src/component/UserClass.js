 import React from "react"
 
 class UserClass extends React.Component{

    constructor(props)
    {
        console.log("Constructor called");
        super(props);
      this.state={
            userInfo:{
                name:"default name",
                location:"default location"
            }
            
        }
    }
    
     async componentDidMount(){
       const data= await fetch("https://api.github.com/users/Vrushabh29");
       const json = await data.json();
       console.log(json)
       this.setState({
        userInfo:json
       })
    }
    render()
    {
        const { name, location,avatar_url}= this.state.userInfo;
        console.log("Render called");
        // const {name,mob}=this.props
        const {count,count1}=this.state
        return(
        <div className='m-4 p-4  rounded-lg bg-gray-200 hover:bg-gray-400'>
            {/* <h1>count :{count}</h1>
            <button onClick={()=>{
                this.setState( {count: this.state.count+1})
            }}>Counter</button>
            <h1>count1 :{count1}</h1> */}
<div>
    <img  className='w-20'src={avatar_url} alt="" />
</div>
            <h1 className="font-bold">Name:{name}</h1>
            <h3>Location:{location}</h3>
            <h4>v@w.com</h4>
        </div>)
    }
 }

 export default UserClass;
