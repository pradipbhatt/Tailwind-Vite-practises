import  { Component } from 'react';
import { ServiceData } from "../constants";

interface ServiceItem {
  title: string;
  content: string;
  backgroundImage: string;
}

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="container-auto  bg-gray-900">
          <h1 className='container-auto text-center w-full text-3xl mb-5 rounded-md text-black'>Here's my Gallery</h1>
          <div className="columns sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3 m-5 p-10 ">
            {/* Corrected image paths */}
            {ServiceData.map((item: ServiceItem) => (
              <div className="column  mt-10 hover:scale-105  duration-500 bg-white rounded-2xl" key={item.title}>
                <div className="card mt-10 p-10 hover:bg-slate-300 duration-500 hover:rounded-3xl ">
                  <div className="card-image  hover:scale-90 duration-500 box-border">
                    <img src={item.backgroundImage} alt={item.title} />
                  </div>
                  <div className="card-content  text-justify">
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
