import Iframe from 'react-iframe';

export default function AmesGoogleMap() {
  return (
    <div className='w-screen'>
      <Iframe
        url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485822.632327321!2d-95.47569657178224!3d41.86134208027964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee77859abd681d%3A0x7be7422d82f57bf8!2sAmes%20Engineering%20Inc!5e0!3m2!1sen!2sus!4v1725477320964!5m2!1sen!2sus'
        className='shadow-lg h-[350px] w-[100%] md:h-[550px]'
      />
    </div>
  );
}
