import { AddCircleOutlineOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import ReactImageUploading from 'react-images-uploading';
import "./businessprofileimage.css"

const BusinessProfileImg = () => {
    const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div className="profilepicpagesection">
      <ReactImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="uploadprofilepage">
            <div className="uploadbtnprofile">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                <AddCircleOutlineOutlined />
                Upload
              </button>
            </div>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="profileimageitem">
                <img src={image["data_url"]} alt=""/>
                <div className="profileimgbtn">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ReactImageUploading>
    </div>
  )
}

export default BusinessProfileImg