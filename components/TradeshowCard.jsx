import Image from 'next/image';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutubeSquare,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function TradeshowCard({
  date,
  img,
  alt,
  url,
  name,
  text1,
  facebookURL,
  twitterURL,
  instagramURL,
  linkedInURL,
  youtubeURL,
  hr,
}) {
  return (
    <div>
      <h2 className='mb-8 font-black text-xl underline'>{date}</h2>
      <div className='flex flex-col md:flex-row gap-10'>
        {/* Image Container */}
        <div className='max-w-[250px] md:max-w-[150px] mx-auto'>
          <Image src={img} width={1000} height={1000} alt={alt} />
        </div>
        {/* Description */}
        <div>
          <a href={url} target='_blank'>
            <h3 className='font-bold text-xl mb-3 inline-block'>{name}</h3>
          </a>
          <div className='flex flex-col gap-4'>{text1 && <p>{text1}</p>}</div>
          <div className='flex flex-row items-center justify-center md:justify-start gap-1 mt-4'>
            {facebookURL && (
              <a href={facebookURL} target='_blank'>
                {
                  <FaFacebook className='text-xl text-gray-800 hover:text-[#1877F2] transition duration-300' />
                }
              </a>
            )}
            {twitterURL && (
              <a href={twitterURL} target='_blank'>
                {
                  <FaXTwitter className='text-xl text-gray-800 hover:text-black transition duration-300' />
                }
              </a>
            )}
            {instagramURL && (
              <a href={instagramURL} target='_blank'>
                {
                  <FaInstagram className='text-xl text-gray-800 hover:text-[#5b51d8] transition duration-300' />
                }
              </a>
            )}
            {linkedInURL && (
              <a href={linkedInURL} target='_blank'>
                {
                  <FaLinkedin className='text-xl text-gray-800 hover:text-[#0a66c2] transition duration-300' />
                }
              </a>
            )}
            {youtubeURL && (
              <a href={youtubeURL} target='_blank'>
                {
                  <FaYoutubeSquare className='text-xl text-gray-800 hover:text-[#FF0000] transition duration-300' />
                }
              </a>
            )}
          </div>
        </div>
      </div>
      {hr && <hr className='h-px mt-12 bg-gray-200 border-0 ' />}
    </div>
  );
}
