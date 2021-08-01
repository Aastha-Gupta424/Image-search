import React, { useEffect, useState } from 'react';
import '../App.css';
import { Container } from 'reactstrap';

const axios = require('axios');

export default function Photos() {
    const [Photos, setPhotos] = useState([]);
    const [isPhotosFetched, setPhotosFetched] = useState(false);
    useEffect(() => {
        if (!isPhotosFetched) {
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=29feae4e85ba959ffc0465f069c7b693&format=json&nojsoncallback=1&api_sig=f5a1af6733db915d236a37ea5a5b4a81`)
                .then(({ data }) => {
                    console.log(data)

                    const PhotosData = data.photos.photo;
                    setPhotos(PhotosData);
                    setPhotosFetched(true);
                    console.log(data)
                });
        }

    })

    return (
        <>
            {console.log(Photos)}
            {isPhotosFetched &&
                Photos.map((prop, index) => (

                    <div>
                        {index % 4 === 0 ? <Photo key={index} data={Photos.slice(index, index + 4)} /> : null}
                        {/* {console.log(index)} */}
                    </div>
                ))

            }
        </>
    )
}
const Photo = ({ data }) => {
    const imageClick = () => {
        console.log('Click');
      } 
    return (
        <>
            {console.log(data)}
            <Container className="center">
                <div className="img">
                    <img src={`https://live.staticflickr.com/${data[0].server}/${data[0].id}_${data[0].secret}_w.jpg`} alt='img' onClick={() => imageClick()}/>
                    {console.log(data[0])}

                </div>
                <div className="img">
                    <img src={`https://live.staticflickr.com/${data[1].server}/${data[1].id}_${data[1].secret}_w.jpg`} alt='img' onClick={() => imageClick()}/>
                    {console.log(data[1])}
                </div>
                <div className="img">
                    <img src={`https://live.staticflickr.com/${data[2].server}/${data[2].id}_${data[2].secret}_w.jpg`} alt='img' onClick={() => imageClick()}/>
                    {console.log(data[2])}
                </div>
            </Container>


        </>
    )
}


