const ImageList = ({images}) => {


    return (
        <div className="image-div">
            {
                images.map(value => (
                   <img 
                       src={value.urls.thumb} alt={value.alt_description}
                   />
                     
                ))
            }
        </div>
    )
}

export default ImageList
