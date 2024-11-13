import TeamCard from '@/components/TeamCard';
import Image from 'next/image';

export const metadata = {
  title: 'Ames Engineering | Our Team',
  description: 'Meet the team at Ames Engineering!',
};

export default function OurTeam() {
  return (
    <div className='w-full px-10 2xl:px-80 pt-14'>
      <div>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Our Team
        </h3>

        <div className='flex flex-col gap-8 mt-6 text-center lg:text-left text-lg'>
          <TeamCard
            img='/images/jonKlatt.jpg'
            alt='Jon Klatt'
            name='Jon Klatt – Sales Manager'
            text1='As our sales leader, Jon is responsible for daily interaction with new and existing customers, equipment delivery, and total customer satisfaction.'
            text2='A graduate of Des Moines Area Community College, Jon has been with Ames Engineering since its inception in 1996. With a deep knowledge of the industry, Jon actively listens to customers and trade groups to stay ahead of the technological curve and lead Ames Engineering into the future.'
          />
          <TeamCard
            img='/images/markLeichty.jpg'
            alt='Mark Leichty'
            name='Mark Leichty – Chief Engineer'
            text1='Mark plays a pivotal role in the development, design, and support of our equipment, software and services.'
            text2='Mark sees new possibilities in everything we do and leads innovation on a daily basis to deliver more effective and efficient outcomes for our customers in the field. Mark is a graduate of Iowa State University in Electrical Engineering and has been with Ames Engineering since its founding.'
          />
          <TeamCard
            img='/images/dustinReid.jpg'
            alt='Dustin Reid'
            name='Dustin Reid – General Manager'
            text1='As the Ames Engineering manager & production chief, Dustin is responsible for day to day operations, new equipment design, manufacturing, and quality control.'
            text2='With over a decade of experience building products and responding the customer needs, Dustin is always available to customers, ready to support their challenges in the field. Dustin studied electrical engineering at Iowa State University and has recently taken a more active role in sales operations for the firm.'
          />
          <TeamCard
            img='/images/ryanEmerson.jpg'
            alt='Ryan Emerson'
            name='Ryan Emerson – Software Architect'
            text1='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At a dolorem incidunt hic, explicabo aspernatur quae in totam animi ipsum?'
            text2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, cupiditate temporibus quis maiores doloribus iusto illum blanditiis, eveniet eligendi ducimus corporis perferendis! Eos dolores perferendis repudiandae voluptatem vitae optio sit ipsam maiores dolore reiciendis iure minus dolorem, ab quas a?'
          />
        </div>
      </div>
    </div>
  );
}
