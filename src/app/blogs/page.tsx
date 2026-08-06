import BlogSection from '@/components/BlogSection';

export const metadata = {
  title: 'Blogs & Articles - Cueserve',
  description: 'Fresh perspectives on design, strategy, and branding from Cueserve.',
};

export default function BlogsPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <BlogSection />
    </div>
  );
}
