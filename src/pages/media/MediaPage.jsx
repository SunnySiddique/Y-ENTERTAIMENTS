import MediaInstagramGallery from "../../component/media/sections/MediaInstagramGallery";
import MediaVideoGallery from "../../component/media/sections/MediaVideoGallery";

const MediaPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* MediaInstagramGallery */}
        <div className="mt-10">
          <MediaInstagramGallery />
        </div>
        <div className="mt-10">
          <MediaVideoGallery />
        </div>
      </div>
    </>
  );
};

export default MediaPage;
