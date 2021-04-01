import React, { Component } from 'react'

export default class Profile extends Component {
    state = {
        person : {
          fullName : 'iheb mannai',
          bio : 'he is smart', 
          imgSrc : '/28471474_1933061906722798_6846834042043856043_n.jpg', 
          profession : 'Developper',
          phone : '99 98 92 43',
          email: 'ihebmn6@gmail.com'
        },
        show : true ,
        chrono : '' 
        
      }

      componentDidMount() {
          setInterval(()=> {
          let date = new Date ();
          this.setState({chrono: `${date.getHours().toString()} : ${date.getMinutes().toString()} : ${date.getSeconds().toString()}`})
          },100)
      }






    render() {
        return (
            <div>
            <div>
                 <div className="page-content page-container" id="page-content" >
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/> </div>
                                <h6 className="f-w-600">{this.state.person.fullName}</h6>
                                <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{this.state.person.email}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className="text-muted f-w-400">{this.state.person.phone}</h6>
                                    </div>
                                </div>
                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Recent</p>
                                        <h6 className="text-muted f-w-400">Sam Disuja</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Most Viewed</p>
                                        <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                    </div>
                                </div>
                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>   
            </div>

            <p style={{fontSize: '30px', fontWeight: 'bold' , textAlign: 'center'}}>{this.state.chrono}</p>
            </div>
        )
    }
}
