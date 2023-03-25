import { AddCircleOutlineOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import ReactImageUploading from "react-images-uploading";
import "./businesscoverimage.css";

const BusinesscoverImage = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="coverpagesection">
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
          <div className="uploadcoverpage">
            <div className="uploadbtn">
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
              <div key={index} className="coverimageitem">
                <img src={image["data_url"]} alt=""/>
                <div className="coverimgbtn">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
};

export default BusinesscoverImage;
