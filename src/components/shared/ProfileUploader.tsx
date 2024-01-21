import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

type ProfileUploaderProps = {
  fieldChange: (files: File[]) => void;
  profileUrl?: string;
};

function ProfileUploader({ fieldChange, profileUrl }: ProfileUploaderProps) {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState(profileUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
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
      className="flex cursor-pointer  items-center justify-start gap-4 rounded-xl"
    >
      <input {...getInputProps()} className="cursor-pointer" />
      <img
        src={fileUrl}
        alt={file[0]?.name}
        className=" h-20 w-20 rounded-full object-cover  object-center"
      />
      <p className="text-lg font-semibold text-[#0095F6] hover:underline">
        Change profile photo
      </p>
    </div>
  );
}

export default ProfileUploader;
