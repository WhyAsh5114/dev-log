"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ImageViewerState {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  projectName: string;
}

interface ImageViewerContextType {
  state: ImageViewerState;
  openViewer: (src: string, alt: string, projectName: string) => void;
  closeViewer: () => void;
}

const ImageViewerContext = createContext<ImageViewerContextType | undefined>(undefined);

export const useImageViewer = () => {
  const context = useContext(ImageViewerContext);
  if (!context) {
    throw new Error("useImageViewer must be used within an ImageViewerProvider");
  }
  return context;
};

interface ImageViewerProviderProps {
  children: ReactNode;
}

export const ImageViewerProvider: React.FC<ImageViewerProviderProps> = ({ children }) => {
  const [state, setState] = useState<ImageViewerState>({
    isOpen: false,
    imageSrc: "",
    imageAlt: "",
    projectName: "",
  });

  const openViewer = (src: string, alt: string, projectName: string) => {
    setState({
      isOpen: true,
      imageSrc: src,
      imageAlt: alt,
      projectName: projectName,
    });
  };

  const closeViewer = () => {
    setState({
      isOpen: false,
      imageSrc: "",
      imageAlt: "",
      projectName: "",
    });
  };

  return (
    <ImageViewerContext.Provider value={{ state, openViewer, closeViewer }}>
      {children}
    </ImageViewerContext.Provider>
  );
};
