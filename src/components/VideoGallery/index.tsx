'use client';

import { VideoCards } from '../VideoCards';
import * as Styled from './styles';
import video_galleryJson from '../../utils/video_gallery.json';
import img from '../../images/thumbnail.png';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const video_gallerys = video_galleryJson;
const videoPerPage = 9;

export const VideoGallery = () => {
  const [videoPageOffset, setVideoPageOffset] = useState(0);
  const [actualPage, setActualPage] = useState(2);

  const endOffset = videoPageOffset + videoPerPage;
  const currentItems = video_gallerys.slice(videoPageOffset, endOffset);
  const pageCount = Math.ceil(video_gallerys.length / videoPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * videoPerPage) % video_gallerys.length;
    setVideoPageOffset(newOffset);
    setActualPage(event.selected + 2);
  };

  return (
    <>
      <Styled.VideoGallery>
        {currentItems.map((video_gallery, index) => (
          <VideoCards
            key={index}
            img={img}
            title={video_gallery.title}
            description={video_gallery.description}
            video={video_gallery.video}
          />
        ))}
      </Styled.VideoGallery>
      <Styled.Separator></Styled.Separator>
      <Styled.PaginationConteiner
        aria-label="conteiner paginate"
        $actualPage={actualPage}
      >
        <p>Página</p>
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
        />
      </Styled.PaginationConteiner>
    </>
  );
};
