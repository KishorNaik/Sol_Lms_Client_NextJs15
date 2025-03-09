"use client";

import {
  IKImage,
  IKVideo,
  ImageKitProvider,
  IKUpload,
  ImageKitContext,
} from "imagekitio-next";
import config from "@/lib/config";
import { useRef, useState } from "react";
import Image from "next/image";
import { If } from "@yookue/react-condition";
import { toast } from "sonner";

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}:${errorText}`,
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return {
      token,
      expire,
      signature,
    };
  } catch (ex) {
    const error = ex as Error;
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

interface IProps {
  onFileChanged: (filePath: string) => void;
}

const ImageUpload = (props: IProps) => {
  const { onFileChanged } = props;

  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{
    filePath: string;
    url: string;
    thumbnailUrl: string;
  } | null>(null);

  const onErrorHandler = (error: any) => {
    console.log(error);

    toast.error(`Image uploaded failed`, {
      description: `Your image could not be uploaded. Please Try again.`,
    });
  };
  const onSuccessHandler = (response: any) => {
    console.log(`On Success Response: ${JSON.stringify(response)}`);
    console.log(`URL: ${response.url}`);
    setFile(response);
    onFileChanged(response.filePath);

    toast.success(`Image uploaded successfully`, {
      description: `${response.filePath} has been uploaded successfully`,
    });
  };
  return (
    <>
      <ImageKitProvider
        publicKey={config.env.imageKit.publicKey}
        urlEndpoint={config.env.apiEndpoint}
        authenticator={authenticator}
      >
        <IKUpload
          className="hidden"
          ref={ikUploadRef}
          onError={onErrorHandler}
          onSuccess={onSuccessHandler}
          fileName="test-upload.png"
        />

        <button
          className="upload-btn"
          onClick={(e) => {
            e.preventDefault();
            if (ikUploadRef.current) {
              /* @ts-ignore */
              // @ts-ignore
              ikUploadRef.current?.click();
            }
          }}
        >
          <Image
            src="/icons/upload.svg"
            alt="upload-icon"
            width={24}
            height={24}
            className="object-contain"
          />
          <p className="text-base text-light-100">Upload a File</p>
          <If condition={file}>
            <If.Then>
              <p className="upload-filename">{file?.filePath}</p>
            </If.Then>
          </If>
        </button>
        <If condition={file}>
          <If.Then>
            <h1>Test</h1>
            <IKImage
              alt={file?.filePath!}
              path={file?.filePath!}
              width={500}
              height={500}
            />
          </If.Then>
        </If>
      </ImageKitProvider>
    </>
  );
};

export default ImageUpload;
