export default function MainLogo() {
  return (
    <>
      {/** <img> can be here */}
      <span className="sr-only">Vicente Gutiérrez</span>
      <h1 className='text-2xl font-extrabold'>
        Vicente&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500">
          Gutiérrez
        </span>
      </h1>
    </>
  );
}
