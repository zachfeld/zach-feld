import Blog from '@/components/Blog'
import Footer from '@/components/Footer';

export const runtime = 'edge'

export default function Home() {
  return (
    <div className="flex justify-center py-12">
      <div className="bg-slate-900 max-w-[98%] mx-auto py-2 px-5 shadow-2xl max-h-[83%] opacity-85 rounded-lg fixed overflow-scroll">
        <div className='mx-auto'>
          < br />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  );
}