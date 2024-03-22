type PhotoDetailProps = {
  productImage: string;
};

export const PhotoDetail = (props: PhotoDetailProps) => {
  const { productImage } = props;

  return (
    <div className="">
      <img src={productImage} className="w-[300px] h-[300px] p-2" />
    </div>
  );
};
