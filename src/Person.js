import React ,{ Component} from 'react';

class Person extends Component {
    constructor(){
        super();
        this.state ={
            timer: 0,
            intervall: null,
            user :{
                Fullname : 'Arfaoui Seif eddine ',
                bio : ' homme',
                profession : 'Develloppeur ',
                
           }
        }

        
            this.setState({
                intervall : setInterval(() => {
                    this.setState({timer:this.state.timer +1})
                }, 1000)
            })
        
    }

render (){
    return (
        <div>
            <h1>My name is : {this.state.user.Fullname}</h1>
            <h2>Bio : {this.state.user.bio}</h2>
            <h1>profession :{this.state.user.profession}</h1>
            <p>{this.state.timer}</p>
        </div>

    );
}

}
export default Person;