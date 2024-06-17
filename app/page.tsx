import Blog from '@/components/Blog'
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div className="bg-slate-900 py-12 px-5 flex justify-center tracking-tighter text-white">

      <div className="bg-slate-900 mx-auto py-2 px-5 shadow-2xl max-h-[83%] opacity-85 rounded-lg fixed middle-0 overflow-scroll">
        <div className='max-w-[98%] mx-auto'>
          < br />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  );
}