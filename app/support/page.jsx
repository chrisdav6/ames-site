export const metadata = {
  title: 'Ames Engineering | Support',
  description:
    'For technical support and equipment maintenance, contact us at (515)-292-8194 or email us at techsupport@amesengineering.com.',
};

export default function Support() {
  return (
    <div>
      <div id='techsupport' className='min-h-[800px] mt-80'>
        <h2 className='pt-[300px]'>Technical Support</h2>
      </div>
      <div id='softwaresupport' className='min-h-[800px]'>
        <h2 className='pt-[300px]'>Software Support</h2>
      </div>
      <div id='training' className='min-h-[800px]'>
        <h2 className='pt-[300px]'>Training</h2>
      </div>
    </div>
  );
}
