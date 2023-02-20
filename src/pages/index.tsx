import MainPicture from '@/components/MainPicture';
import MainDescription from '@/components/MainDescription';

export default function Home() {
  return (
    <> 
      <main>
        <div className="px-6 py-6 md:py-16">
          <MainPicture />
          <MainDescription />
        </div>
      </main>
    </>
  );
}
