import React, { useEffect, useState } from "react";
import axios from "axios";

function PhotoUploader({ url, imgURLs, setImgURLs }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImagePath, setUploadedImagePath] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      axios
        .post("http://localhost:3000/upload", formData)
        .then((response) => {
          setUploadedImagePath(response.data.imagePath);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }, [selectedFile]);

  if (uploadedImagePath) {
    setImgURLs((prevURLs) => new Set(prevURLs).add(uploadedImagePath));
    // setImgURLs((prevURLs) => [...prevURLs, uploadedImagePath]);
    setUploadedImagePath(""); // Clear uploadedImagePath after adding to the array
  }

  // if (uploadedImagePath) {
  //   setImgURLs((prevURLs) => [...prevURLs, uploadedImagePath]);
  //   // return (
  //   //   <div className=" mt-2 w-44 h-36 flex justify-center rounded-lg border border-dashed border-gray-900/25   items-center">
  //   //     <img
  //   //       src={`http://localhost:3000/uploads/${uploadedImagePath}`}
  //   //       alt="Uploaded"
  //   //       className="h-full w-full object-cover rounded-lg"
  //   //     />
  //   //   </div>
  //   // );
  // }

  // url link handler
  if (url) {
    return (
      <div className=" mt-2 w-44 h-36 flex justify-center rounded-lg border border-dashed border-gray-900/25   items-center">
        <img
          src={`http://localhost:3000/uploads/${url}`}
          alt="Uploaded"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    );
  }

  return (
    <label className=" mt-2 w-44 h-36 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 items-center">
      <div className="flex justify-center gap-3 items-center">
        <input
          type="file"
          id="cover-photo"
          name="cover-photo"
          className="hidden"
          onChange={handleFileChange}
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        </span>
        <span>Upload</span>
      </div>
    </label>
  );
}

export default PhotoUploader;

// import React from 'react'

// function PhotoUploader({ url }) {
//   return (
//     <label className=" mt-2 w-44 h-36 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 items-center">
//       <div className="flex justify-center gap-3 items-center">
//         <input
//           type="file"
//           id="cover-photo"
//           name="cover-photo"
//           className="hidden"
//         />
//         <span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
//             />
//           </svg>
//         </span>
//         <span>Uplaod</span>
//       </div>
//     </label>
//   );
// }

// export default PhotoUploader
