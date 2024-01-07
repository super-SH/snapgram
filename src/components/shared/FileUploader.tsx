import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
};

function FileUploader({ fieldChange }: FileUploaderProps) {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));

      console.log(acceptedFiles);
    },
    [fieldChange],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });
  return (
    <div
      {...getRootProps()}
      className="flex-center flex cursor-pointer flex-col rounded-xl bg-dark-3"
    >
      <input {...getInputProps()} className="cursor-pointer" />
      {fileUrl ? (
        <>
          <div className="flex w-full flex-1 justify-center p-5 lg:p-10">
            <img
              src={fileUrl}
              alt={file[0].name}
              className="file_uploader-img"
            />
          </div>
          <p className="file_uploader-label">Click or drag photo to replace</p>
        </>
      ) : (
        <div className="file_uploader-box ">
          <img
            src="/assets/icons/file-upload.svg"
            width={96}
            height={76}
            alt="file upload"
          />

          <h3 className="base-medium mb-2 mt-6 text-light-2">
            Drag photo here
          </h3>
          <p className="small-regular mb-6 text-light-4">SVG, PNG, JPG</p>

          <Button type="button" className="shad-button_dark_4">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
}

export default FileUploader;
