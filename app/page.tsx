import Blog from '@/components/Blog'
import Footer from '@/components/Footer';

export const runtime = 'edge'

export default function Home() {
  
  return (
    <div className="flex justify-center py-12">
      {/* <Blog />  */}
      <Footer />
    </div>
  );
}