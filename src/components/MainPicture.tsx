import Image from 'next/image';

export default function MainPicture() {
  return (
    <Image
      className="mx-auto mb-4 h-48 w-48 rounded-lg -rotate-4 md:float-left md:mr-8 md:mb-2"
      src="/assets/images/vicente-gutierrez.jpg"
      alt="Vicente Gutiérrez"
      width={200}
      height={200} />
  );
}
