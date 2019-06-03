import React from 'react';

const ImageList = (props) => {
    return props.images.map((image) => {
        return <img alt={image.description} key={image.id} src={image.urls.small} />;
    });
}

export default ImageList;