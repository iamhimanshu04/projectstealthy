import React from "react";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Service from "./Service";
import About from "./About";
import Scroll from "./scroll";
import Social from "./Social";
import Contact from "./Contact";

class Home extends React.Component{
  constructor ()
  {
    super();
    this.state={loading:true}
    //console.log(this.state.loading)
  }
  
  componentDidMount()
  {
    this.setState({loading:false});
  }

  render = () => {
    //console.log(this.state.loading)
    return (
      <div>
      {
        this.state.loading==false ?

        <div>
          <Navbar />
          <div id="homes">
            <Carousel />
          </div>
          <div id="services">
            <Service />
          </div>
          <div id="abouts">
            <About />
          </div>
          <Scroll /> 
          {/*<Contact />*/}
        </div>
        :
        <div>Loading</div>
      }

      </div>
    );
  }
  
};

export default Home;
