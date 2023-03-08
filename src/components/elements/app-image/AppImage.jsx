import {memo,useState,useLayoutEffect} from 'react'

  
export const AppImage = memo((props) => {
    const {
      className,
      src,
      alt = "image",
      fallback,
      errorFallback,
      ...otherProps
    } = props;
  
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
  
    useLayoutEffect(() => {
      const img = new Image();
      img.src = src ?? "";
      img.onload = () => {
        setIsLoading(false);
      };
      img.onerror = () => {
        setIsLoading(false);
        setHasError(true);
      };
    }, [src]);
  
    if (isLoading && fallback) {
      return fallback;
    }
  
    if (hasError && errorFallback) {
      return errorFallback;
    }
  
    return <img className={className} src={src} alt={alt} {...otherProps} />;
  });