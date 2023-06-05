import React from 'react'

const Photo = ({ photos }) => {
    return (
        <div className='card'>
            {photos && photos.map((item, index) => (
                <div className='card-content'
                    key={index}>
                    <img src={item.urls.regular} alt={item.alt_description} />
                </div>
            ))}
        </div>
    )
}

export default Photo