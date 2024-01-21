import React from 'react';
import { TopDownloadsCard } from '../../components/index';
import TopDownloads  from '../../Data/TopDownloads';
import { Link } from 'react-router-dom';
import './TopDownloadLibrary.css';
const TopDownloadLibrary = () => {
    const TopDownloadsItems=TopDownloads.map(top => {
        return <TopDownloadsCard key ={top.id} img={top.img} title={top.title} category={top.category} rate={top.rate} download={top.download}/>
      })
    return (
    <div className='x'>
      <div className='Topdownlibrary-container'style={{"backgroundColor" : "var(--nebety","marginLeft":"30px","padding":"12px","borderRadius":"15px"}}>
         
            
             <h4 >Top Downloads</h4>
            
            <div className='Top-downloads-items' > 
                 {TopDownloadsItems}
            </div>
            <button className='view-all-games'>
                    <Link to ="/profile"> View All Games</Link>
            </button>
          
      </div>
      </div>
    );
}

export default TopDownloadLibrary;
